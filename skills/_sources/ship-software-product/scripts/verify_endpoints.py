"""Bounded, credential-free GET/HEAD probes. Does not execute or install files."""
import argparse
import hashlib
import ipaddress
import json
from pathlib import Path
import re
import subprocess
import sys
from time import monotonic
import urllib.error
import urllib.request
from urllib.parse import urljoin, urlsplit

from lifecycle_common import ConfigError, bounded_int, digest, identifier, keys, load_json, redact_url, string_list, text


def network_url(value, allow_local=False):
    value = text(value, 8192)
    try:
        parsed = urlsplit(value)
        if not value.isascii() or parsed.username is not None or parsed.password is not None or not parsed.hostname:
            raise ValueError
        parsed.port
        loopback = parsed.hostname.lower() == "localhost"
        try:
            loopback = loopback or ipaddress.ip_address(parsed.hostname).is_loopback
        except ValueError:
            pass
        if parsed.scheme != "https" and not (allow_local and loopback and parsed.scheme == "http"):
            raise ValueError
    except ValueError as exc:
        raise ConfigError("URL must be encoded HTTPS without credentials; HTTP is limited to opted-in loopback fixtures") from exc
    return value


def authority(url):
    parsed = urlsplit(url)
    host = parsed.hostname.lower()
    if ":" in host:
        host = "["+host+"]"
    return host + (":"+str(parsed.port) if parsed.port is not None else "")


def allowed_host(value):
    value = text(value, 255).lower()
    if not re.fullmatch(r"[a-z0-9.\-:\[\]]+", value):
        raise ConfigError("allowed_hosts must contain explicit ASCII host[:port] entries")
    return value


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


def validate_checks(document, allow_local=False):
    keys(document, ("checks",))
    if not isinstance(document["checks"], list) or not 1 <= len(document["checks"]) <= 64:
        raise ConfigError("checks must contain between 1 and 64 entries")
    seen, results = set(), []
    optional = ("method", "expect_status", "follow_redirects", "allowed_hosts", "expect_location_prefix",
                "location_contains", "contains", "sha256", "size_bytes", "max_bytes", "timeout_seconds")
    for raw in document["checks"]:
        keys(raw, ("id", "url"), optional)
        item = dict(raw)
        name = identifier(item["id"])
        if name in seen:
            raise ConfigError("duplicate check ID")
        seen.add(name)
        network_url(item["url"], allow_local)
        item.setdefault("method", "GET")
        if item["method"] not in ("GET", "HEAD"):
            raise ConfigError("only GET and HEAD are supported")
        item.setdefault("expect_status", 200)
        bounded_int(item["expect_status"], 100, 599)
        item.setdefault("follow_redirects", False)
        if type(item["follow_redirects"]) is not bool:
            raise ConfigError("follow_redirects must be boolean")
        item["allowed_hosts"] = string_list(item.get("allowed_hosts", []), allowed_host)
        if item["follow_redirects"] and authority(item["url"]) not in item["allowed_hosts"]:
            raise ConfigError("redirect allowlist must explicitly include the initial host")
        item["max_bytes"] = bounded_int(item.get("max_bytes", 1024*1024), 1, 512*1024*1024)
        item["timeout_seconds"] = bounded_int(item.get("timeout_seconds", 20), 1, 120)
        item["contains"] = string_list(item.get("contains", []), lambda x:text(x, 4096))
        item["location_contains"] = string_list(item.get("location_contains", []), lambda x:text(x, 4096))
        if "expect_location_prefix" in item:
            network_url(item["expect_location_prefix"], allow_local)
        if "sha256" in item:
            item["sha256"] = digest(item["sha256"])
        if "size_bytes" in item:
            bounded_int(item["size_bytes"], 0, item["max_bytes"])
        if item["method"] == "HEAD" and any(field in item for field in ("sha256", "size_bytes")):
            raise ConfigError("HEAD cannot prove complete response bytes or digest")
        if item["method"] == "HEAD" and item["contains"]:
            raise ConfigError("HEAD cannot prove response body contents")
        results.append(item)
    return results


def _probe(item, allow_local=False):
    started = monotonic()
    deadline = started+item["timeout_seconds"]
    handlers = [NoRedirect()]
    if allow_local and urlsplit(item["url"]).hostname in ("localhost", "127.0.0.1", "::1"):
        handlers.append(urllib.request.ProxyHandler({}))
    opener = urllib.request.build_opener(*handlers)
    url = item["url"]
    result = {"id": item["id"], "ok": False, "method": item["method"], "url": redact_url(url)}
    try:
        for hop in range(6):
            remaining = deadline-monotonic()
            if remaining <= 0:
                raise TimeoutError
            request = urllib.request.Request(url, method=item["method"], headers={
                "User-Agent": "software-lifecycle-verifier/1", "Accept-Encoding": "identity"})
            try:
                response = opener.open(request, timeout=min(5., remaining))
            except urllib.error.HTTPError as exc:
                response = exc  # A non-followed 302 or expected 404 is observable data.
            with response:
                status = response.getcode()
                result.update(http_status=status, final_url=redact_url(url), redirects=hop)
                location = response.headers.get("Location")
                target = urljoin(url, location) if location else None
                if status in (301,302,303,307,308) and item["follow_redirects"]:
                    if not target or hop == 5:
                        result["reason"] = "redirect_limit_or_missing_location"
                        return result
                    network_url(target, allow_local)
                    if urlsplit(url).scheme == "https" and urlsplit(target).scheme != "https":
                        result["reason"] = "https_downgrade_rejected"
                        return result
                    if authority(target) not in item["allowed_hosts"]:
                        result["reason"] = "redirect_host_not_allowed"
                        return result
                    url = target
                    continue
                if status != item["expect_status"]:
                    result["reason"] = "unexpected_http_status"
                    return result
                if item.get("expect_location_prefix") or item["location_contains"]:
                    if not target:
                        result["reason"] = "location_missing"
                        return result
                    network_url(target, allow_local)
                    result["location"] = redact_url(target)
                    if item.get("expect_location_prefix") and (authority(target) != authority(item["expect_location_prefix"])
                            or not target.startswith(item["expect_location_prefix"])):
                        result["reason"] = "location_prefix_mismatch"
                        return result
                    if any(part not in target for part in item["location_contains"]):
                        result["reason"] = "location_content_mismatch"
                        return result
                if item["method"] == "HEAD":
                    result.update(ok=True, bytes_read=0)
                    return result
                encoding = response.headers.get("Content-Encoding", "identity").lower()
                if encoding not in ("", "identity"):
                    result["reason"] = "unexpected_content_encoding"
                    return result
                declared = response.headers.get("Content-Length")
                if declared is not None:
                    try:
                        declared = int(declared)
                    except ValueError:
                        result["reason"] = "invalid_content_length"
                        return result
                    if declared < 0 or declared > item["max_bytes"]:
                        result["reason"] = "response_too_large"
                        return result
                needles = [part.encode("utf-8") for part in item["contains"]]
                found = [False]*len(needles)
                tail = b""
                tail_length = max([len(n) for n in needles]+[1])-1
                hasher, count = hashlib.sha256(), 0
                while True:
                    if monotonic() >= deadline:
                        raise TimeoutError
                    read = getattr(response, "read1", response.read)
                    chunk = read(min(65536, item["max_bytes"]-count+1))
                    if monotonic() >= deadline:
                        raise TimeoutError
                    if not chunk:
                        break
                    count += len(chunk)
                    if count > item["max_bytes"]:
                        result["reason"] = "response_too_large"
                        return result
                    hasher.update(chunk)
                    combined = tail+chunk
                    for n,needle in enumerate(needles):
                        found[n] = found[n] or needle in combined
                    tail = combined[-tail_length:] if tail_length else b""
                result.update(bytes_read=count, sha256=hasher.hexdigest())
                if declared is not None and count != declared:
                    result["reason"] = "incomplete_response"
                elif "size_bytes" in item and count != item["size_bytes"]:
                    result["reason"] = "size_mismatch"
                elif "sha256" in item and result["sha256"] != item["sha256"]:
                    result["reason"] = "sha256_mismatch"
                elif not all(found):
                    result["reason"] = "body_content_mismatch"
                else:
                    result["ok"] = True
                return result
    except ConfigError:
        result["reason"] = "unsafe_response_url"
    except (TimeoutError, urllib.error.URLError, OSError, ValueError):
        # Never echo response bodies, signed URLs or raw authentication errors.
        result["reason"] = "network_timeout_or_protocol_error"
    return result


def probe(item, allow_local=False):
    # A socket timeout alone cannot bound a slow trickle of headers or chunk
    # framing. The parent enforces a total deadline over DNS, TLS and reads.
    command = [sys.executable, str(Path(__file__).resolve()), "--_worker"]
    if allow_local:
        command.append("--allow-local")
    try:
        process = subprocess.run(command, input=json.dumps(item), text=True, encoding="utf-8",
            capture_output=True, timeout=item["timeout_seconds"]+.5,
            creationflags=subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0)
        if process.returncode == 0:
            return json.loads(process.stdout)
        reason = "probe_worker_failed"
    except subprocess.TimeoutExpired:
        reason = "total_deadline_exceeded"
    except (OSError, ValueError):
        reason = "probe_worker_failed"
    return {"id":item["id"],"ok":False,"url":redact_url(item["url"]),"reason":reason}


def main(argv=None):
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", type=Path)
    parser.add_argument("--_worker", action="store_true", help=argparse.SUPPRESS)
    parser.add_argument("--allow-local", action="store_true", help="Permit HTTP only for loopback test fixtures.")
    args = parser.parse_args(argv)
    try:
        if args._worker:
            raw = sys.stdin.buffer.read(4*1024*1024+1)
            if len(raw)>4*1024*1024:
                raise ConfigError("worker input too large")
            item = validate_checks({"checks":[json.loads(raw)]},args.allow_local)[0]
            print(json.dumps(_probe(item,args.allow_local),ensure_ascii=False))
            return 0
        if args.config is None:
            raise ConfigError("--config is required")
        checks = validate_checks(load_json(args.config), args.allow_local)
        results = [probe(item, args.allow_local) for item in checks]
        ok = all(item["ok"] for item in results)
        report, code = {"ok": ok, "scope": "bounded unauthenticated HTTP observations only", "checks": results}, 0 if ok else 1
    except (ConfigError, OSError) as exc:
        report, code = {"ok": False, "kind": "input_error", "error": str(exc)}, 2
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return code


if __name__ == "__main__":
    sys.exit(main())
