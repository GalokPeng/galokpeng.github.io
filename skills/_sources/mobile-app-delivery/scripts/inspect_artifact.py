"""Read-only APK/IPA inventory. Optional Android SDK checks use the supplied Build Tools."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import struct
import subprocess
import sys
from xml.parsers.expat import ExpatError
import zipfile


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def command(args):
    result = subprocess.run(args, capture_output=True, encoding="utf-8", errors="replace")
    if result.returncode:
        reason = (result.stderr.strip() or result.stdout.strip())[-1200:]
        raise ValueError(f"{Path(args[0]).name} returned {result.returncode}: {reason}")
    return result.stdout


def android(archive, path, build_tools, report):
    with archive.open("AndroidManifest.xml") as stream:
        header = stream.read(8)
    if len(header) != 8 or struct.unpack("<HHI", header) != (3, 8, archive.getinfo("AndroidManifest.xml").file_size):
        raise ValueError("Expected compiled Android binary XML in the root manifest")
    report["signature"] = "not_checked"
    if not build_tools:
        return
    on_windows = os.name == "nt"
    dump = command([build_tools / ("aapt2.exe" if on_windows else "aapt2"), "dump", "badging", path])
    package = next((line for line in dump.splitlines() if line.startswith("package:")), "")
    attrs = dict(re.findall(r"(\w+)='([^']*)'", package))
    if not attrs.get("name"):
        raise ValueError("aapt2 did not return an application ID")
    report.update(app_id=attrs["name"], version=attrs.get("versionName"), build=attrs.get("versionCode"))
    if attrs.get("split"):
        report["split_name"] = attrs["split"]
    for field, label in (("(?:minSdkVersion|sdkVersion)", "min_sdk"), ("targetSdkVersion", "target_sdk")):
        match = re.search(r"^" + field + r":'([^']+)'", dump, re.M)
        if match:
            report[label] = match[1]
    if on_windows:
        java_home = os.environ.get("JAVA_HOME")
        java = Path(java_home) / "bin/java.exe" if java_home else shutil.which("java")
        if not java:
            raise ValueError("Set JAVA_HOME or put Java on PATH for apksigner")
        signer = [java, "-jar", build_tools / "lib/apksigner.jar"]
    else:
        signer = [build_tools / "apksigner"]
    try:
        output = command([*signer, "verify", "--verbose", "--print-certs", path])
    except ValueError:
        report["signature"] = "apksigner_verification_failed"
        raise
    report["signature"] = "verified_by_apksigner"
    report["signer_sha256"] = re.findall(r"^Signer #\d+ certificate SHA-256 digest:\s*([a-fA-F0-9]+)", output, re.M)
    report["verified_schemes"] = re.findall(r"^Verified using (v[\d.]+) scheme.*:\s*true\s*$", output, re.M)


THIN = {bytes.fromhex(k): v for k, v in
        [("cefaedfe", ("<", 28)), ("cffaedfe", ("<", 32)), ("feedface", (">", 28)), ("feedfacf", (">", 32))]}
FAT = {bytes.fromhex(k): v for k, v in
       [("cafebabe", (">", "IIIII")), ("bebafeca", ("<", "IIIII")),
        ("cafebabf", (">", "IIQQII")), ("bfbafeca", ("<", "IIQQII"))]}


def binary_slices(data):
    magic = bytes(data[:4])
    if magic in THIN:
        return [data]
    if magic not in FAT:
        raise ValueError("Main executable is not a Mach-O image")
    endian, fmt = FAT[magic]
    count, = struct.unpack_from(endian + "I", data, 4)
    entry_size = struct.calcsize(endian + fmt)
    end = 8 + count * entry_size
    if not count or end > len(data):
        raise ValueError("Invalid universal Mach-O table")
    slices = []
    for entry in struct.iter_unpack(endian + fmt, data[8:end]):
        offset, size = entry[2:4]
        if offset < end or size < 28 or offset + size > len(data):
            raise ValueError("Invalid universal Mach-O slice")
        slices.append(data[offset:offset+size])
    return slices


def load_commands(data):
    magic = bytes(data[:4])
    if magic not in THIN:
        raise ValueError("Invalid Mach-O slice")
    endian, head_size = THIN[magic]
    cpu, _, kind, ncmds, total = struct.unpack_from(endian + "IIIII", data, 4)
    end = head_size + total
    if kind != 2 or end > len(data) or not ncmds or ncmds > total // 8:
        raise ValueError("Invalid main executable header or command count")
    offset = head_size
    result = {"cpu_type": hex(cpu), "platform": "unspecified", "signature_blob_referenced": False}
    for _ in range(ncmds):
        if offset + 8 > end:
            raise ValueError("Truncated load command")
        cmd, size = struct.unpack_from(endian + "II", data, offset)
        if size < 8 or offset + size > end:
            raise ValueError("Invalid load command size")
        if cmd == 0x32:
            if size < 24:
                raise ValueError("Invalid LC_BUILD_VERSION")
            platform, = struct.unpack_from(endian + "I", data, offset + 8)
            result["platform"] = {2: "iOS", 7: "iOSSimulator"}.get(platform, str(platform))
        elif cmd == 0x25 and result["platform"] == "unspecified":
            result["platform"] = "legacy_iPhoneOS_version_command"
        elif cmd == 0x1d:
            if size < 16:
                raise ValueError("Invalid LC_CODE_SIGNATURE")
            start, length = struct.unpack_from(endian + "II", data, offset + 8)
            if not length or start < end or start + length > len(data):
                raise ValueError("Invalid signature blob bounds")
            result["signature_blob_referenced"] = True
        offset += size
    if offset != end:
        raise ValueError("Malformed load command table")
    return result


def ios(archive, report):
    paths = [name for name in archive.namelist() if re.fullmatch(r"Payload/[^/]+\.app/Info\.plist", name)]
    if len(paths) != 1:
        raise ValueError("Expected one top-level app in Payload")
    prefix = paths[0].rsplit("/", 1)[0] + "/"
    info = plistlib.loads(archive.read(paths[0]))
    if not isinstance(info, dict) or info.get("CFBundlePackageType") != "APPL":
        raise ValueError("Expected a main APPL bundle")
    for key in ("CFBundleIdentifier", "CFBundleExecutable", "CFBundleVersion"):
        if not isinstance(info.get(key), str) or not info[key].strip():
            raise ValueError(f"Invalid or missing {key}")
    executable = info["CFBundleExecutable"]
    if executable in (".", "..") or "/" in executable or "\\" in executable:
        raise ValueError("Invalid main executable name")
    slices = [load_commands(s) for s in binary_slices(memoryview(archive.read(prefix + executable)))]
    report.update(app_id=info["CFBundleIdentifier"], version=info.get("CFBundleShortVersionString"),
                  build=info["CFBundleVersion"], minimum_os=info.get("MinimumOSVersion"),
                  platforms_declared=info.get("CFBundleSupportedPlatforms", []), executable_slices=slices,
                  embedded_profile=prefix+"embedded.mobileprovision" in archive.namelist(),
                  resource_seal=prefix+"_CodeSignature/CodeResources" in archive.namelist())
    if not any(s["signature_blob_referenced"] for s in slices):
        report["signature"] = "no_embedded_executable_signature"
    else:
        report["signature"] = "embedded_signature_not_verified"
    platforms = report["platforms_declared"]
    if (platforms and platforms != ["iPhoneOS"]) or any(
        s["platform"] not in ("iOS", "legacy_iPhoneOS_version_command", "unspecified")
        or s["cpu_type"] in ("0x7", "0x1000007") for s in slices
    ):
        raise ValueError("Payload declares a non-device iOS platform or incompatible architecture")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("artifacts", type=Path, nargs="+")
    parser.add_argument("--build-tools", type=Path, help="Android SDK Build Tools directory containing aapt2 and apksigner")
    args = parser.parse_args()
    reports = []
    for source in args.artifacts:
        path = source.absolute()
        kind = path.suffix.lower()
        report = {"file": str(path), "type": kind.lstrip("."), "installation": "not_tested"}
        try:
            if kind not in (".apk", ".ipa"):
                raise ValueError("Expected .apk or .ipa")
            report.update(bytes=path.stat().st_size, sha256=sha256(path))
            with zipfile.ZipFile(path) as archive:
                names = archive.namelist()
                if len(names) != len(set(names)):
                    raise ValueError("Archive contains duplicate entry names")
                bad = archive.testzip()
                if bad:
                    raise ValueError(f"Failed ZIP integrity check: {bad}")
                if kind == ".apk":
                    android(archive, path, args.build_tools, report)
                else:
                    ios(archive, report)
            report["inspection"] = "complete"
        except (OSError, ValueError, KeyError, RuntimeError, EOFError, ExpatError, struct.error, zipfile.BadZipFile, plistlib.InvalidFileException) as error:
            report.update(inspection="error", error=str(error))
        reports.append(report)
    print(json.dumps(reports, ensure_ascii=True, indent=2))
    return int(any(r["inspection"] == "error" for r in reports))


if __name__ == "__main__":
    sys.exit(main())
