"""Prepare local storage, provision an authorized Cloudflare host, or publish this project."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import secrets
import subprocess
import tempfile
from urllib.error import HTTPError
from urllib.parse import quote, urlencode
from urllib.request import build_opener, HTTPRedirectHandler, Request

ROOT = Path(__file__).resolve().parent
PRIVATE = ROOT / ".private"
STATE = PRIVATE / "target.json"
REMOTE = ROOT / "wrangler.remote.json"
CHUNK = 20 * 1024 * 1024


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def store(path, obj):
    path.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(mode="w", encoding="utf8", dir=path.parent, delete=False) as f:
        json.dump(obj, f, indent=2)
    os.replace(f.name, path)


def wr(*args, capture=False):
    cmd = ["node", str(ROOT/"node_modules/wrangler/bin/wrangler.js"), *map(str, args)]
    result = subprocess.run(cmd, cwd=ROOT, capture_output=capture, text=True, encoding="utf8",
                            errors="replace", env=dict(os.environ, WRANGLER_SEND_METRICS="false"))
    if result.returncode:
        raise SystemExit(f"Wrangler {args[0]} failed. Check authentication, configuration and permissions.")
    return result.stdout


def credentials(target):
    path = PRIVATE / (target + ".json")
    if not path.exists():
        if target == "production" and STATE.exists() and read(STATE).get("deployAttempted"):
            raise SystemExit("Restore this target's original production secrets before updating it.")
        store(path, {"ADMIN_PASSWORD": secrets.token_urlsafe(24), "SIGNING_KEY": secrets.token_hex(32)})
    return path


def catalog():
    entries = read(ROOT/"src/manifest.json")["files"]
    for file in entries.values():
        path = ROOT/"files"/file["name"]
        with path.open("rb") as stream:
            if path.stat().st_size != file["size"] or hashlib.file_digest(stream, "sha256").hexdigest() != file["sha"]:
                raise SystemExit("Source bytes changed: " + path.name)
    return entries


def chunks(entries):
    seen = set()
    for file in entries.values():
        if file["sha"] in seen:
            continue
        seen.add(file["sha"])
        with (ROOT/"files"/file["name"]).open("rb") as stream:
            for idx, data in enumerate(iter(lambda: stream.read(CHUNK), b"")):
                yield f"sha256/{file['sha']}/{idx}", data


def local():
    files = catalog()
    keys = read(credentials("local"))
    dev = ROOT/".dev.vars"
    with dev.open("w", encoding="utf8") as out:
        for key, value in keys.items():
            print(f"{key}={json.dumps(value)}", file=out)
    if os.name != "nt":
        dev.chmod(0o600)
    wr("d1", "execute", "DB", "--file", "schema.sql", "--local", "--config", "wrangler.json")
    with tempfile.TemporaryDirectory() as temp:
        part = Path(temp)/"part"
        for key, data in chunks(files):
            part.write_bytes(data)
            wr("kv", "key", "put", key, "--binding", "FILES", "--path", part, "--local", "--config", "wrangler.json")
    print("Local data ready. Credentials in .private/local.json")


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


class Cloudflare:
    def __init__(self):
        self.token = os.environ.get("CLOUDFLARE_API_TOKEN") or json.loads(wr("auth","token","--json",capture=True))["token"]
        self.opener = build_opener(NoRedirect())

    def api(self, method, path, obj=None, binary=None):
        data = binary if binary is not None else json.dumps(obj).encode() if obj is not None else None
        headers = {"Authorization": "Bearer "+self.token, "Content-Type":
                   "application/octet-stream" if binary is not None else "application/json"}
        req = Request("https://api.cloudflare.com/client/v4"+path, data=data, method=method, headers=headers)
        try:
            with self.opener.open(req,timeout=90) as response:
                reply = json.load(response)
        except HTTPError as e:
            raise SystemExit(f"Cloudflare {method} {path.split('?')[0]} returned HTTP {e.code}. Check the target and token permissions.") from None
        if not reply.get("success"):
            raise SystemExit("Cloudflare API failed: " + path.split("?")[0])
        return reply["result"]

    def pages(self, endpoint, **params):
        for page in range(1, 1001):
            rows = self.api("GET", endpoint+"?"+urlencode(dict(params,per_page=100,page=page)))
            yield from rows
            if len(rows)<100:
                return
        raise SystemExit("Unexpected Cloudflare pagination length")


def inspect_target(api, zone, host, worker, state):
    if not re.fullmatch(r"(?:[a-z0-9](?:[-a-z0-9]{0,61}[a-z0-9])?\.)+[a-z0-9-]+",host) or not host.endswith("."+zone):
        raise SystemExit("Supply a full ASCII subdomain inside the specified zone.")
    zones = api.api("GET","/zones?"+urlencode({"name":zone,"status":"active"}))
    if len(zones)!=1 or zones[0]["name"] != zone:
        raise SystemExit("The active Cloudflare zone must be uniquely identified.")
    z = zones[0]
    target = {"host":host,"zone":zone,"zoneId":z["id"],"account":z["account"]["id"],"worker":worker}
    if state and any(state.get(k)!=v for k,v in target.items()):
        raise SystemExit("The recorded target differs. Use its original project or create a new one.")
    prefix = "/accounts/"+target["account"]
    domains = api.api("GET",prefix+"/workers/domains?"+urlencode({"hostname":host}))
    bound = [d for d in domains if d["hostname"]==host]
    if any(d["service"]!=worker for d in bound):
        raise SystemExit("That hostname is attached to another Worker.")
    if not bound:
        records = api.api("GET","/zones/"+z["id"]+"/dns_records?"+urlencode({"name":host}))
        if records:
            raise SystemExit("Existing DNS record on target hostname. Choose an unused subdomain or arrange migration.")
    if not state.get("deployAttempted"):
        scripts = api.api("GET",prefix+"/workers/scripts")
        if any(s["id"]==worker for s in scripts):
            raise SystemExit("Worker name already in use. Preserve that service and pick a fresh project.")
    return target, prefix


def provision(zone, host):
    site = read(ROOT/"wrangler.json")
    api = Cloudflare()
    state = read(STATE) if STATE.exists() else {}
    target, prefix = inspect_target(api,zone,host,site["name"],state)
    state.update(target)
    store(STATE,state)
    db_name, kv_name = site["name"]+"-db", site["name"]+"-files"
    if "db" not in state:
        found = [d for d in api.pages(prefix+"/d1/database",name=db_name) if d["name"]==db_name]
        obj = found[0] if found else api.api("POST",prefix+"/d1/database",{"name":db_name})
        state["db"] = obj["uuid"]
        store(STATE,state)
    if "kv" not in state:
        found = [k for k in api.pages(prefix+"/storage/kv/namespaces") if k["title"]==kv_name]
        obj = found[0] if found else api.api("POST",prefix+"/storage/kv/namespaces",{"title":kv_name})
        state["kv"] = obj["id"]
        store(STATE,state)
    site.update(account_id=state["account"],routes=[{"pattern":host,"custom_domain":True}])
    site["d1_databases"]=[{"binding":"DB","database_name":db_name,"database_id":state["db"]}]
    site["kv_namespaces"]=[{"binding":"FILES","id":state["kv"]}]
    store(REMOTE,site)
    credentials("production")
    print("Resources ready for",host,"in account",state["account"],"with Worker",site["name"])


def publish():
    state = read(STATE)
    files = catalog()
    api = Cloudflare()
    _, prefix = inspect_target(api,state["zone"],state["host"],state["worker"],state)
    manifest_hash = hashlib.sha256(json.dumps(files,sort_keys=True).encode()).hexdigest()
    if state.get("catalogHash",manifest_hash) != manifest_hash:
        raise SystemExit("This target already serves a different file set. Preserve issued links and use a new project or migrate grants explicitly.")
    conf = read(REMOTE)
    if (conf["name"],conf["account_id"],conf["d1_databases"][0]["database_id"],conf["kv_namespaces"][0]["id"],conf.get("routes")) != (
            state["worker"],state["account"],state["db"],state["kv"],[{"pattern":state["host"],"custom_domain":True}]):
        raise SystemExit("Remote config and the recorded target differ.")
    keys = credentials("production")
    wr("d1","execute","DB","--remote","--config",REMOTE,"--file",ROOT/"schema.sql")
    uploaded = set(state.get("uploaded",[]))
    for key, data in chunks(files):
        if key not in uploaded:
            api.api("PUT",prefix+"/storage/kv/namespaces/"+state["kv"]+"/values/"+quote(key,safe=""),binary=data)
            uploaded.add(key)
            state["uploaded"]=sorted(uploaded)
            store(STATE,state)
    state.update(catalogHash=manifest_hash,deployAttempted=True)
    store(STATE,state)
    wr("deploy","--config",REMOTE,"--secrets-file",keys)
    print("Published https://"+state["host"]+" · Verify it with verify.py --live")


if __name__ == "__main__":
    cli = argparse.ArgumentParser(description=__doc__)
    subs=cli.add_subparsers(dest="cmd",required=True)
    subs.add_parser("local")
    prov=subs.add_parser("provision")
    prov.add_argument("--zone",required=True)
    prov.add_argument("--host",required=True)
    subs.add_parser("publish")
    arg=cli.parse_args()
    if arg.cmd=="local":
        local()
    elif arg.cmd=="provision":
        provision(arg.zone.lower(),arg.host.lower())
    else:
        publish()
