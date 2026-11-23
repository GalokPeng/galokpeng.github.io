"""Compare a single Windows Store application MSIX to the intended release identity (offline)."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
import zlib

from lifecycle_common import ConfigError, digest, keys, load_json, string_list, text


FOUNDATION = "http://schemas.microsoft.com/appx/manifest/foundation/windows10"
RESTRICTED = FOUNDATION + "/restrictedcapabilities"
IDENTITY = {"name": "Name", "publisher": "Publisher", "architecture": "ProcessorArchitecture", "version": "Version"}
PROPERTIES = {"display_name": "DisplayName", "publisher_display_name": "PublisherDisplayName"}
METADATA = ("AppxManifest.xml", "[Content_Types].xml", "AppxBlockMap.xml")


def store_version(value, *, installed=False):
    if not isinstance(value, str) or not re.fullmatch(r"[0-9]{1,5}(?:\.[0-9]{1,5}){3}", value):
        raise ConfigError("expected a four-part Windows Store package version")
    parts = tuple(int(part) for part in value.split("."))
    if not parts[0] or max(parts) > 65535:
        raise ConfigError("Windows Store package version components are out of range")
    if not installed and parts[-1] != 0:
        raise ConfigError("expected a Windows 10/11 Store submission version with a zero revision")
    return parts


def compare(path, expected, expected_hash=None):
    keys(expected, (*IDENTITY, *PROPERTIES, "restricted_capabilities"), ("previous_version",))
    for field in (*IDENTITY, *PROPERTIES):
        text(expected[field], 1024)
    store_version(expected["version"])
    previous = store_version(expected["previous_version"], installed=True) if "previous_version" in expected else None
    capabilities = sorted(string_list(expected["restricted_capabilities"]))
    expected_hash = digest(expected_hash) if expected_hash is not None else None
    if path.suffix.lower() != ".msix":
        raise ConfigError("supply a single application .msix; inspect bundles or upload containers with the SDK")
    with path.open("rb") as stream:
        hasher = hashlib.sha256()
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            hasher.update(chunk)
        byte_count = stream.tell()
        actual_hash = hasher.hexdigest()
        stream.seek(0)
        with zipfile.ZipFile(stream) as archive:
            names = archive.namelist()
            if any(names.count(name) != 1 for name in METADATA):
                raise ConfigError("missing or ambiguous MSIX metadata")
            manifest = archive.getinfo("AppxManifest.xml")
            if manifest.file_size > 4 * 1024 * 1024:
                raise ConfigError("manifest exceeds this inspector's 4 MiB limit")
            raw = archive.read(manifest)
    if b"<!doctype" in raw.replace(b"\x00", b"").lower():
        raise ConfigError("unexpected document type declaration in manifest")
    root = ET.fromstring(raw)
    ns = {"p": FOUNDATION}
    identity = root.find("p:Identity", ns)
    props = root.find("p:Properties", ns)
    if (root.tag != f"{{{FOUNDATION}}}Package" or identity is None or props is None
            or root.find("p:Applications/p:Application", ns) is None):
        raise ConfigError("expected a Windows 10/11 main application package")
    fields = {key: identity.get(attr) for key, attr in IDENTITY.items()}
    for key, tag in PROPERTIES.items():
        fields[key] = props.findtext("p:" + tag, default="", namespaces=ns)
    restricted = set()
    for cap in root.findall("p:Capabilities/*", ns):
        namespace, _, tag = cap.tag.rpartition("}")
        uri = namespace.removeprefix("{")
        if tag == "Capability" and (uri == RESTRICTED or uri.startswith(RESTRICTED + "/")):
            restricted.add(text(cap.get("Name")))
    actual_caps = sorted(restricted)
    issues = []
    for key, actual in fields.items():
        if key in PROPERTIES and actual.lower().startswith("ms-resource:"):
            issues.append({"field": key, "reason": "resource_resolution_required"})
        elif expected[key] != actual:
            issues.append({"field": key, "reason": "mismatch"})
    if previous is not None and not any(i["field"] == "version" for i in issues):
        if store_version(fields["version"]) <= previous:
            issues.append({"field": "version", "reason": "update_not_newer"})
    if capabilities != actual_caps:
        issues.append({"field": "restricted_capabilities", "reason": "mismatch"})
    if expected_hash is not None and actual_hash != expected_hash:
        issues.append({"field": "sha256", "reason": "mismatch"})
    families = [{key: elem.get(key) for key in ("Name", "MinVersion", "MaxVersionTested")}
                for elem in root.findall("p:Dependencies/p:TargetDeviceFamily", ns)]
    return {"ok": not issues, "scope": "local package identity and bytes only", "size_bytes": byte_count,
            "sha256": actual_hash, "manifest": fields, "restricted_capabilities": actual_caps,
            "device_families": families, "issues": issues}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--package", type=Path, required=True)
    parser.add_argument("--expected", type=Path, required=True)
    parser.add_argument("--sha256", help="expected digest of the inner MSIX from a trusted release record")
    args = parser.parse_args()
    try:
        report = compare(args.package, load_json(args.expected), args.sha256)
    except (ConfigError, OSError, EOFError, ET.ParseError, zipfile.BadZipFile, RuntimeError, zlib.error) as exc:
        print(json.dumps({"ok": False, "error": str(exc)}, ensure_ascii=True))
        return 2
    print(json.dumps(report, ensure_ascii=True, indent=2))
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
