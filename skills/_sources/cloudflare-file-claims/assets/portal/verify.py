"""Exercise the actual HTTP portal and delete only the redemption created by this run."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import html
from http.cookiejar import CookieJar
import json
from pathlib import Path
import re
import secrets
import tempfile
from urllib.error import HTTPError
from urllib.parse import urlencode, unquote, urlsplit
from urllib.request import build_opener, HTTPCookieProcessor, Request
import zipfile
from portal import NoRedirect, ROOT, PRIVATE, REMOTE, STATE, read, wr


def client():
    return build_opener(NoRedirect(), HTTPCookieProcessor(CookieJar()))


def call(browser, url, form=None, method=None, headers=None):
    data = urlencode(form).encode() if form is not None else None
    headers = dict(headers or {})
    if data is not None:
        loc=urlsplit(url)
        headers["Origin"]=loc.scheme+"://"+loc.netloc
    try:
        return browser.open(Request(url,method=method,data=data,headers=headers),timeout=90)
    except HTTPError as error:
        return error


def body(response, status):
    with response as r:
        assert r.status==status, f"Expected HTTP {status}, got {r.status}"
        return r.read().decode()


def cleanup(note, code_hash, live):
    assert re.fullmatch(r"qa-[a-f0-9]{32}",note) and re.fullmatch(r"[a-f0-9]{64}",code_hash)
    match=f"SELECT id FROM codes WHERE note='{note}' AND code_hash='{code_hash}'"
    sql="; ".join(f"DELETE FROM {table} WHERE {field} IN ({match})"
                  for table,field in [("attempts","code_id"),("grants","code_id"),("codes","id")])
    wr("d1","execute","DB","--remote" if live else "--local","--config",REMOTE if live else ROOT/"wrangler.json","--command",sql)


def check(args):
    manifest = read(ROOT/"src/manifest.json")
    site,files = manifest["site"],manifest["files"]
    base = "https://"+read(STATE)["host"] if args.live else f"http://127.0.0.1:{args.port}"
    admin_url = base+site["adminPath"]
    password = read(PRIVATE/("production.json" if args.live else "local.json"))["ADMIN_PASSWORD"]
    admin,user,other=client(),client(),client()
    for c in (user,other):
        body(call(c,base+"/?new=1"),200)
    body(call(other,admin_url+"/create",{}),403)
    body(call(admin,admin_url+"/login",{"password":password}),303)
    dash=body(call(admin,admin_url),200)
    form=dash.split('action="'+site["adminPath"]+'/create"')[1].split("</form>")[0]
    nonce=re.search(r'name="nonce" value="([0-9a-f]{32})"',form)[1]
    caps={key:re.search(r'name="'+key+r'"[^>]*value="(\d+)"',form)[1] for key in files}
    assert all(int(v)==site["defaultLimit"] for v in caps.values())
    note="qa-"+secrets.token_hex(16)
    created=body(call(admin,admin_url+"/create",dict(caps,nonce=nonce,note=note)),200)
    code=re.search(r'class="code">([A-F0-9-]+)<',created)[1]
    digest=hashlib.sha256(code.replace("-","").encode()).hexdigest()
    try:
        message=html.unescape(created.split('id="issue-message"',1)[1].split(">",1)[1].split("</textarea>",1)[0])
        assert code in message and base+"/?new=1" in message and password not in message
        with call(user,base+"/claim",{"code":code}) as result:
            assert result.status==303
            receipt=result.headers["Location"]
        grant_id=re.fullmatch(r"/r/([a-f0-9]{32})/[a-f0-9]{64}",receipt)[1]
        body(call(other,base+"/claim",{"code":code}),409)
        receipt=base+receipt
        data=body(call(user,receipt),200)
        hrefs=[html.unescape(x) for x in re.findall(r'data-copy-url="([^"]+)"',data)]
        links={urlsplit(x).path.split("/")[3]:x for x in hrefs}
        assert len(hrefs)==len(files) and set(links)==set(files)
        def balances():
            return {x["file_id"]:(x["used"],x["cap"]) for x in json.loads(body(call(user,receipt,headers={"Accept":"application/json"}),200))}
        assert balances()=={key:(0,site["defaultLimit"]) for key in files}
        limits={key:1 for key in files}
        body(call(admin,admin_url+"/caps",dict(limits,id=grant_id)),200)
        for key, link in links.items():
            info=files[key]
            assert link.startswith(base+"/d/") and unquote(urlsplit(link).path.split("/")[-1])==info["name"]
            with call(other,link,method="HEAD") as r:
                assert r.status==200 and int(r.headers["Content-Length"])==info["size"]
            body(call(other,link,headers={"Purpose":"prefetch"}),204)
            def download():
                with call(client(),link) as r:
                    if r.status!=200:
                        return r.status
                    assert r.headers.get_content_type()=="application/octet-stream"
                    assert unquote(r.headers["Content-Disposition"].split("UTF-8''",1)[1])==info["name"]
                    with tempfile.TemporaryFile() as tmp:
                        h=hashlib.sha256()
                        for chunk in iter(lambda:r.read(1024*1024),b""):
                            h.update(chunk)
                            tmp.write(chunk)
                        assert tmp.tell()==info["size"] and h.hexdigest()==info["sha"]
                        if Path(info["name"]).suffix.lower() in {".zip",".apkg",".docx",".xlsx",".pptx"}:
                            with zipfile.ZipFile(tmp) as z:
                                assert z.testzip() is None
                    return r.status
            with ThreadPoolExecutor(2) as pool:
                assert sorted(pool.map(lambda _:download(),range(2)))==[200,409]
            assert balances()[key]==(1,1)
            print("OK",info["name"],info["size"],info["sha"],flush=True)
        key=next((k for k in files if files[k]["size"]>=2),None)
        if key:
            limits[key]=2
            body(call(admin,admin_url+"/caps",dict(limits,id=grant_id)),200)
            with call(client(),links[key],headers={"Range":"bytes=0-0"}) as r:
                assert r.status==206
                h=hashlib.sha256(r.read())
                tag=r.headers["ETag"]
            with call(client(),links[key],headers={"Range":"bytes=1-","If-Range":tag}) as r:
                assert r.status==206
                for chunk in iter(lambda:r.read(1024*1024),b""):
                    h.update(chunk)
            assert h.hexdigest()==files[key]["sha"] and balances()[key]==(2,2)
        print("Verified redemption, admin cap changes, integrity and concurrent quota enforcement.")
    finally:
        cleanup(note,digest,args.live)


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--live",action="store_true")
    p.add_argument("--port",type=int,default=8787)
    check(p.parse_args())
