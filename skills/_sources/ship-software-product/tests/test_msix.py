import hashlib
import json
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory
import unittest
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from inspect_msix import FOUNDATION, RESTRICTED, compare, store_version
from lifecycle_common import ConfigError


class StoreIdentityTests(unittest.TestCase):
    def setUp(self):
        temporary = TemporaryDirectory()
        self.addCleanup(temporary.cleanup)
        self.package = Path(temporary.name) / "Sample.msix"
        self.expected = json.loads((ROOT / "assets/templates/msix-expected.json").read_text("utf-8"))
        self.root = ET.fromstring(f"""<Package xmlns="{FOUNDATION}" xmlns:r="{RESTRICTED}">
            <Identity Name="ExampleStudio.SampleApp" Publisher="CN=Example Publisher"
                      ProcessorArchitecture="x64" Version="3.2.0.0"/>
            <Properties><DisplayName>Example App</DisplayName><PublisherDisplayName>Example Studio</PublisherDisplayName></Properties>
            <Dependencies><TargetDeviceFamily Name="Windows.Desktop" MinVersion="10.0.19041.0" MaxVersionTested="10.0.22621.0"/></Dependencies>
            <Applications><Application Id="App" Executable="Sample.exe"/></Applications><Capabilities/>
            </Package>""")

    def pack(self):
        # Minimal metadata fixture for this inspector, not an installable or signed MSIX.
        with zipfile.ZipFile(self.package, "w") as archive:
            archive.writestr("AppxManifest.xml", ET.tostring(self.root))
            archive.writestr("[Content_Types].xml", b"<Types/>")
            archive.writestr("AppxBlockMap.xml", b"<BlockMap/>")

    def test_intended_update_matches_file_digest_and_reports_device_family(self):
        self.pack()
        digest = hashlib.sha256(self.package.read_bytes()).hexdigest()
        result = compare(self.package, self.expected, digest)
        self.assertTrue(result["ok"])
        self.assertEqual(result["device_families"][0]["MinVersion"], "10.0.19041.0")
        self.assertEqual(result["size_bytes"], self.package.stat().st_size)

    def test_same_filename_does_not_cover_identity_or_display_name_drift(self):
        self.pack()
        for field in ("name", "publisher", "display_name", "publisher_display_name", "architecture"):
            with self.subTest(field=field):
                report = compare(self.package, dict(self.expected, **{field: "Other"}))
                self.assertIn({"field": field, "reason": "mismatch"}, report["issues"])

    def test_first_release_and_numeric_upgrade_order(self):
        self.pack()
        first = self.expected.copy()
        first.pop("previous_version")
        self.assertTrue(compare(self.package, first)["ok"])
        for old in ("3.2.0.0", "3.10.0.0"):
            result = compare(self.package, dict(self.expected, previous_version=old))
            self.assertIn({"field": "version", "reason": "update_not_newer"}, result["issues"])
        for invalid in ("1.0", "0.1.0.0", "1.65536.0.0", "3.2.0.1"):
            with self.subTest(version=invalid), self.assertRaises(ConfigError):
                store_version(invalid)

    def test_localized_names_require_external_resource_resolution(self):
        self.root.find("{*}Properties/{*}DisplayName").text = "ms-resource:AppTitle"
        self.pack()
        result = compare(self.package, self.expected)
        self.assertIn({"field": "display_name", "reason": "resource_resolution_required"}, result["issues"])
        self.assertFalse(result["ok"])

    def test_store_may_change_revision_of_an_installed_baseline(self):
        self.pack()
        self.assertTrue(compare(self.package, dict(self.expected, previous_version="3.1.0.17"))["ok"])
        report = compare(self.package, dict(self.expected, previous_version="3.2.0.17"))
        self.assertIn({"field": "version", "reason": "update_not_newer"}, report["issues"])

    def test_identical_manifest_with_replaced_payload_is_not_the_candidate(self):
        self.pack()
        approved_hash = hashlib.sha256(self.package.read_bytes()).hexdigest()
        with zipfile.ZipFile(self.package, "a") as archive:
            archive.writestr("Sample.exe", b"Different build with the same identity")
        report = compare(self.package, self.expected, approved_hash)
        self.assertEqual(report["issues"], [{"field": "sha256", "reason": "mismatch"}])

    def test_unexpected_restricted_capabilities_and_versioned_namespace(self):
        caps = self.root.find("{*}Capabilities")
        ET.SubElement(caps, f"{{{FOUNDATION}}}Capability", Name="internetClient")
        ET.SubElement(caps, f"{{{RESTRICTED}}}Capability", Name="runFullTrust")
        ET.SubElement(caps, f"{{{RESTRICTED}/4}}Capability", Name="exampleRestricted")
        self.pack()
        self.assertFalse(compare(self.package, self.expected)["ok"])
        result = compare(self.package, dict(self.expected, restricted_capabilities=["runFullTrust", "exampleRestricted"]))
        self.assertTrue(result["ok"])

    def test_ci_artifact_hash_is_not_the_inner_msix_hash(self):
        self.pack()
        wrapper = self.package.with_suffix(".zip")
        with zipfile.ZipFile(wrapper, "w") as archive:
            archive.write(self.package, self.package.name)
        outer_hash = hashlib.sha256(wrapper.read_bytes()).hexdigest()
        self.assertFalse(compare(self.package, self.expected, outer_hash)["ok"])
        with self.assertRaises(ConfigError):
            compare(wrapper, self.expected)

    def test_cli_exits_and_malformed_input(self):
        self.pack()
        config = self.package.with_suffix(".json")
        config.write_text(json.dumps(self.expected), encoding="utf-8")
        cmd = [sys.executable, str(ROOT / "scripts/inspect_msix.py"), "--package", str(self.package), "--expected", str(config)]
        def run(*extra):
            proc = subprocess.run([*cmd, *extra], capture_output=True, text=True, check=False)
            self.assertEqual(json.loads(proc.stdout)["ok"], proc.returncode == 0)
            return proc.returncode
        self.assertEqual(run(), 0)
        self.assertEqual(run("--sha256", "f" * 64), 1)
        self.package.write_bytes(b"incomplete package")
        self.assertEqual(run(), 2)


if __name__ == "__main__":
    unittest.main()
