"""Optional Chromium test of the actual clipboard, mobile taps and desktop clicks."""
import argparse
import hashlib
import secrets
from playwright.sync_api import expect, sync_playwright
from portal import ROOT, PRIVATE, STATE, read
from verify import cleanup


def exercise(browser, base, site, files, password, live, mobile):
    viewport = {"width":320 if mobile else 1440,"height":850}
    options = dict(viewport=viewport,is_mobile=mobile,has_touch=mobile)
    admin, user = browser.new_context(**options), browser.new_context(**options)
    for ctx in (admin,user):
        ctx.grant_permissions(["clipboard-read","clipboard-write"],origin=base)
    def press(button):
        button.tap() if mobile else button.click()
    def fits(page):
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")
    note="qa-"+secrets.token_hex(16)
    digest=None
    try:
        a=admin.new_page()
        a.goto(base+site["adminPath"])
        a.get_by_label("管理员口令").fill(password)
        press(a.get_by_role("button",name="登录后台"))
        form=a.locator('form[action$="/create"]')
        for key in files:
            assert int(form.locator(f'[name="{key}"]').input_value())==site["defaultLimit"]
        form.get_by_label("收件人备注（选填）").fill(note)
        fits(a)
        press(form.get_by_role("button",name="生成卡密"))
        code=a.locator(".code").inner_text()
        digest=hashlib.sha256(code.replace("-","").encode()).hexdigest()
        fits(a)
        press(a.get_by_role("button",name="复制卡密和领取说明"))
        a.get_by_text("复制成功",exact=True).wait_for()
        message=a.evaluate("navigator.clipboard.readText()")
        assert code in message.splitlines() and base+"/?new=1" in message and password not in message
        u=user.new_page()
        u.goto(base+"/?new=1")
        u.get_by_label("一次性卡密").fill(code)
        press(u.get_by_role("button",name="领取文件"))
        u.wait_for_url("**/r/**")
        receipt=u.url
        requests=[]
        u.on("request",lambda r:requests.append("file") if r.url.startswith(base+"/d/") else None)
        u.on("download",lambda _:requests.append("download"))
        fits(u)
        for key in files:
            btn=u.locator(f'[data-file_id="{key}"] button')
            press(btn)
            expect(btn).to_have_text("复制成功")
            assert u.evaluate("navigator.clipboard.readText()")==btn.get_attribute("data-copy-url")
        assert u.url==receipt and not requests
        print("Touch" if mobile else "Desktop","clipboard, layout and copy-only receipt passed.",flush=True)
    finally:
        admin.close()
        user.close()
        if digest:
            cleanup(note,digest,live)


if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("--port",type=int,default=8787)
    p.add_argument("--live",action="store_true")
    p.add_argument("--executable")
    args=p.parse_args()
    data=read(ROOT/"src/manifest.json")
    base="https://"+read(STATE)["host"] if args.live else f"http://127.0.0.1:{args.port}"
    pw=read(PRIVATE/("production.json" if args.live else "local.json"))["ADMIN_PASSWORD"]
    with sync_playwright() as p:
        browser=p.chromium.launch(executable_path=args.executable)
        for mobile in (True,False):
            exercise(browser,base,data["site"],data["files"],pw,args.live,mobile)
        browser.close()
