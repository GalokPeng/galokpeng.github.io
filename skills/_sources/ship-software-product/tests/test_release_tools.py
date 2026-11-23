"""Offline fixtures only. No production service, credentials or install changes."""
import copy
import hashlib
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory
from threading import Thread
from time import monotonic, sleep
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from lifecycle_common import ConfigError, load_json, relative_file
from release_guard import audit
from verify_endpoints import _probe, probe, validate_checks


def source(char):
    return {"type":"git","value":char*40}


class GuardTests(unittest.TestCase):
    def setUp(self):
        self.directory = TemporaryDirectory(prefix="lifecycle-test-")
        self.root = Path(self.directory.name)
        (self.root/"dist").mkdir();(self.root/"evidence").mkdir()
        self.payload = b"synthetic package, never an executable"
        (self.root/"dist/sample.pkg").write_bytes(self.payload)
        (self.root/"evidence/test.txt").write_text("observed fixture results", encoding="utf-8")
        self.document = {
            "schema_version":1,"product_id":"sample-product","version":"2.1.0","channel":"stable",
            "components":{"app":{"revision":source("a")}},
            "requirements":[{"id":"tests","components":["app"],"artifact_ids":[],"allow_na":False},
                            {"id":"package","components":["app"],"artifact_ids":["main"],"allow_na":False}],
            "artifacts":[{"id":"main","component":"app","path":"sample.pkg","size_bytes":len(self.payload),
                          "sha256":hashlib.sha256(self.payload).hexdigest()}],
            "gates":[self.gate("tests"),self.gate("package",["main"])]}

    def tearDown(self):
        self.directory.cleanup()

    def gate(self, name, artifacts=None, components=("app",)):
        return {"id":name,"status":"pass","observed_at":"2026-11-12T12:00:00+08:00",
                "subjects":[{"component":c,"revision":source("a" if c=="app" else "b")} for c in components],
                "artifact_ids":artifacts or [],"evidence":[{"kind":"file","path":"test.txt"}]}

    def check(self):
        return audit(self.document,self.root/"dist",self.root/"evidence")

    def test_local_only_contract_does_not_require_publication(self):
        result=self.check()
        self.assertTrue(result["ok"])
        self.assertEqual(result["verified_artifacts"],["main"])
        self.assertNotIn("release",result["required_gates"])

    def test_modified_final_bytes_fail_even_if_all_gates_claim_pass(self):
        (self.root/"dist/sample.pkg").write_bytes(b"x"*len(self.payload))
        self.assertIn("artifact_sha256_mismatch",str(self.check()["issues"]))

    def test_incorrect_size_and_missing_file_fail(self):
        self.document["artifacts"][0]["size_bytes"]+=1
        self.assertIn("artifact_size_mismatch",str(self.check()["issues"]))
        (self.root/"dist/sample.pkg").unlink()
        self.assertIn("artifact_missing",str(self.check()["issues"]))

    def test_stale_green_result_cannot_validate_new_candidate(self):
        self.document["gates"][0]["subjects"][0]["revision"]=source("c")
        self.assertIn("gate_revision_mismatch",str(self.check()["issues"]))

    def test_distinct_site_commit_is_supported_but_both_required_subjects_must_appear(self):
        self.document["components"]["site"]={"revision":source("b")}
        self.document["requirements"].append({"id":"website","components":["app","site"],"artifact_ids":["main"],"allow_na":False})
        self.document["gates"].append(self.gate("website",["main"],("app","site")))
        self.assertTrue(self.check()["ok"])
        self.document["gates"][-1]["subjects"].pop()
        self.assertIn("required_source_subject_missing",str(self.check()["issues"]))

    def test_partial_delivery_or_missing_gate_cannot_be_all_green(self):
        self.document["requirements"].append({"id":"website","components":["app"],"artifact_ids":[],"allow_na":False})
        self.assertIn("required_gate_missing",str(self.check()["issues"]))
        self.document["gates"].append({"id":"website","status":"fail","reason":"deployment failed"})
        self.assertIn("required_gate_fail",str(self.check()["issues"]))

    def test_not_applicable_requires_policy_permission_and_specific_reason(self):
        self.document["gates"][1]={"id":"package","status":"not_applicable","reason":"skip"}
        self.assertFalse(self.check()["ok"])
        self.document["requirements"][1]["allow_na"]=True
        self.document["gates"][1]["reason"]="This scoped source-only delivery has no distribution package."
        self.assertTrue(self.check()["ok"])

    def test_artifact_subject_cannot_be_omitted(self):
        self.document["gates"][1]["artifact_ids"]=[]
        self.assertIn("required_artifact_subject_missing",str(self.check()["issues"]))

    def test_evidence_missing_or_modified_is_not_a_pass(self):
        self.document["gates"][0]["evidence"][0]["sha256"]="1"*64
        self.assertIn("evidence_file_sha256_mismatch",str(self.check()["issues"]))
        (self.root/"evidence/test.txt").unlink()
        self.assertIn("evidence_file_missing",str(self.check()["issues"]))

    def test_traversal_absolute_and_windows_ads_paths_are_rejected(self):
        for path in ("../outside", "/tmp/outside", "C:\\outside", "sample.pkg:stream", "a/../../b"):
            with self.subTest(path=path),self.assertRaises(ConfigError):relative_file(self.root,path)

    def test_duplicates_unknown_fields_and_zero_revision_are_rejected(self):
        for mutate in (
            lambda d:d["gates"].append(copy.deepcopy(d["gates"][0])),
            lambda d:d["artifacts"][0].update(sha265="1"*64),
            lambda d:d["components"]["app"].update(revision=source("0"))):
            original=copy.deepcopy(self.document);mutate(self.document)
            with self.assertRaises(ConfigError):self.check()
            self.document=original

    def test_evidence_time_must_include_timezone_and_urls_cannot_embed_credentials(self):
        self.document["gates"][0]["observed_at"]="2026-11-12T12:00:00"
        with self.assertRaises(ConfigError):self.check()
        self.document["gates"][0]["observed_at"]="2026-11-12T12:00:00Z"
        self.document["gates"][0]["evidence"]=[{"kind":"url","url":"https://user:secret@example.test/result"}]
        with self.assertRaises(ConfigError):self.check()

    def test_duplicate_json_keys_and_nonfinite_numbers_are_rejected(self):
        for contents in ('{"version":"a","version":"b"}','{"size":NaN}'):
            path=self.root/"input.json";path.write_text(contents)
            with self.assertRaises(ConfigError):load_json(path)

    def test_snapshot_source_and_web_only_scope_need_no_installer(self):
        self.document["components"]["app"]["revision"]={"type":"snapshot-sha256","value":"f"*64}
        self.document["requirements"]=self.document["requirements"][:1]
        self.document["gates"]=self.document["gates"][:1]
        self.document["gates"][0]["subjects"][0]["revision"]={"type":"snapshot-sha256","value":"f"*64}
        self.document["artifacts"]=[]
        self.assertTrue(self.check()["ok"])

    def test_duplicate_hard_link_is_not_a_second_platform_artifact(self):
        os.link(self.root/"dist/sample.pkg",self.root/"dist/alias.pkg")
        other=copy.deepcopy(self.document["artifacts"][0]);other.update(id="other",path="alias.pkg")
        self.document["artifacts"].append(other)
        with self.assertRaises(ConfigError):self.check()

    def test_cli_exit_codes_and_json_output(self):
        path=self.root/"manifest.json"
        command=[sys.executable,str(ROOT/"scripts/release_guard.py"),"--manifest",str(path),
                 "--artifact-root",str(self.root/"dist"),"--evidence-root",str(self.root/"evidence")]
        for expected,mutate in ((0,lambda:None),(1,lambda:self.document["gates"].pop()),
                                (2,lambda:self.document.update(unknown=True))):
            mutate();path.write_text(json.dumps(self.document),encoding="utf-8")
            result=subprocess.run(command,capture_output=True,text=True,encoding="utf-8",timeout=5)
            self.assertEqual(result.returncode,expected,result.stderr)
            self.assertEqual(json.loads(result.stdout)["ok"],expected==0)


BODY=b"version 2.1.0\n"+b"x"*70000+b"complete"


class Server(BaseHTTPRequestHandler):
    def log_message(self,*args):
        pass

    def do_HEAD(self):
        self.send_response(200);self.send_header("Content-Length",str(len(BODY)));self.end_headers()

    def do_GET(self):
        try:
            if self.path=="/slow-headers":
                for value in b"HTTP/1.1 200 OK\r\n":
                    self.connection.sendall(bytes([value]));sleep(.25)
                return
            if self.path in ("/redirect","/loop","/foreign"):
                self.send_response(302)
                self.send_header("Location", "/bytes" if self.path=="/redirect" else "/loop" if self.path=="/loop" else "http://localhost:1/blocked")
                self.end_headers();return
            payload=BODY if self.path=="/bytes" else b"<html>not an installer</html>"
            self.send_response(200);self.send_header("Content-Length",str(len(payload)));self.end_headers()
            self.wfile.write(payload)
        except (BrokenPipeError,ConnectionResetError,OSError):
            pass


class EndpointTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server=ThreadingHTTPServer(("127.0.0.1",0),Server)
        cls.server.daemon_threads=True
        cls.thread=Thread(target=cls.server.serve_forever,daemon=True);cls.thread.start()
        cls.base=f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown();cls.server.server_close();cls.thread.join(timeout=2)

    def check(self,path,**options):
        item={"id":"fixture","url":self.base+path,"timeout_seconds":5,**options}
        config=validate_checks({"checks":[item]},True)[0]
        return probe(config,True)

    def test_default_rejects_http_and_credentials_and_typo_constraints(self):
        for item in ({"url":self.base}, {"url":"https://user:secret@example.test/"},
                     {"url":"https://example.test/","sha265":"a"*64}):
            with self.assertRaises(ConfigError):validate_checks({"checks":[{"id":"fixture",**item}]})

    def test_final_response_hash_length_and_content_are_verified(self):
        result=self.check("/bytes",sha256=hashlib.sha256(BODY).hexdigest(),size_bytes=len(BODY),contains=["2.1.0","complete"])
        self.assertTrue(result["ok"],result)
        self.assertEqual(result["bytes_read"],len(BODY))

    def test_same_http_200_wrong_body_is_not_a_valid_download(self):
        self.assertEqual(self.check("/html",sha256=hashlib.sha256(BODY).hexdigest())["reason"],"sha256_mismatch")
        self.assertEqual(self.check("/html",contains=["2.1.0"])["reason"],"body_content_mismatch")

    def test_body_limit_rejects_oversized_response(self):
        self.assertEqual(self.check("/bytes",max_bytes=100)["reason"],"response_too_large")

    def test_get_redirect_and_head_metadata_are_distinct(self):
        self.assertTrue(self.check("/redirect",expect_status=302,expect_location_prefix=self.base+"/bytes")["ok"])
        result=self.check("/redirect",method="HEAD")
        self.assertTrue(result["ok"]);self.assertEqual(result["bytes_read"],0)
        with self.assertRaises(ConfigError):validate_checks({"checks":[{"id":"head","url":"https://example.test/","method":"HEAD","sha256":"a"*64}]})

    def test_redirect_allowlist_and_loop_limit(self):
        host=self.base.split("//",1)[1]
        self.assertTrue(self.check("/redirect",follow_redirects=True,allowed_hosts=[host],contains=["complete"])["ok"])
        self.assertEqual(self.check("/foreign",follow_redirects=True,allowed_hosts=[host])["reason"],"redirect_host_not_allowed")
        self.assertEqual(self.check("/loop",follow_redirects=True,allowed_hosts=[host])["reason"],"redirect_limit_or_missing_location")

    def test_total_deadline_covers_slow_trickling_headers(self):
        start=monotonic();result=self.check("/slow-headers",timeout_seconds=1)
        self.assertFalse(result["ok"])
        self.assertLess(monotonic()-start,3.)

    def test_https_downgrade_is_rejected_even_with_loopback_opt_in(self):
        class Response:
            headers={"Location":self.base+"/bytes"}
            def getcode(self):return 302
            def __enter__(self):return self
            def __exit__(self,*args):pass
        config=validate_checks({"checks":[{"id":"tls","url":"https://example.test/","follow_redirects":True,
            "allowed_hosts":["example.test",self.base.split("//",1)[1]]}]},True)[0]
        with patch('verify_endpoints.urllib.request.build_opener') as opener:
            opener.return_value.open.return_value=Response()
            self.assertEqual(_probe(config,True)["reason"],"https_downgrade_rejected")

    def test_query_parameters_and_response_bodies_are_not_logged(self):
        result=self.check("/html?token=do-not-log",contains=["expected"])
        rendered=json.dumps(result)
        self.assertNotIn("do-not-log",rendered)
        self.assertNotIn("not an installer",rendered)

    def test_endpoint_cli_reports_all_three_exit_categories(self):
        with TemporaryDirectory() as directory:
            path=Path(directory)/"endpoints.json"
            command=[sys.executable,str(ROOT/"scripts/verify_endpoints.py"),"--config",str(path),"--allow-local"]
            for status,item in ((0,{"id":"ok","url":self.base+"/bytes","contains":["complete"]}),
                                (1,{"id":"bad","url":self.base+"/html","contains":["complete"]}),
                                (2,{"id":"typo","url":self.base+"/bytes","sha265":"a"*64})):
                path.write_text(json.dumps({"checks":[item]}))
                result=subprocess.run(command,capture_output=True,text=True,encoding="utf-8",timeout=8)
                self.assertEqual(result.returncode,status,result.stderr)
                self.assertEqual(json.loads(result.stdout)["ok"],status==0)


if __name__=="__main__":
    unittest.main()
