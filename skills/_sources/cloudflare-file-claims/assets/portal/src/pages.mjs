import { SITE, FILE_IDS, FILES } from "./catalog.mjs";

export const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const css = `
:root{color-scheme:light;--ink:#123641;--sub:#49646c;--sea:#095d65;--paper:#f8faf9;--line:#c5d6d4}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 "Source Sans 3","Microsoft YaHei",system-ui,sans-serif}
header{background:#103b46;color:white}header div,main,footer{max-width:900px;margin:auto;padding:0 28px}
header div{height:62px;display:flex;align-items:center;justify-content:space-between;gap:1em}header span{font-size:14px;color:#c8e0e0}
header a{font:600 22px Georgia,serif;color:white;text-decoration:none}
main{padding-top:54px;padding-bottom:38px;min-height:65vh}h1{font-size:clamp(28px,5vw,42px);line-height:1.2;margin:0 0 .45em;letter-spacing:-.025em}h2{font-size:20px;margin:22px 0 12px}p{margin:8px 0 18px}.sub,small{color:var(--sub)}a{color:var(--sea);text-underline-offset:3px}button,.action{border:0;border-radius:7px;background:var(--sea);color:white;font:inherit;font-weight:640;padding:10px 20px;min-height:44px;cursor:pointer;text-decoration:none;display:inline-block}button:disabled{background:#d6e0df;color:#496167;cursor:default}button:hover:not(:disabled),.action:hover{background:#08474e}
input{border:1px solid #95adaa;border-radius:6px;padding:10px 12px;font:inherit;color:var(--ink);background:white;width:100%;min-height:44px}label{font-weight:600;display:block;margin:12px 0 5px}input[type=number]{width:78px}a:focus-visible,input:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid #df971e;outline-offset:3px}
.box{padding:26px;background:white;border:1px solid var(--line);border-radius:14px;max-width:620px;margin:20px 0}.inline{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.inline input:not([type=number]){flex:1 1 240px}.file_ids{display:flex;gap:16px;flex-wrap:wrap;margin:8px 0 18px}.file_ids label{font-size:14px}.file_ids input{display:block;margin-top:4px}.code{font:600 clamp(16px,2.8vw,23px) ui-monospace,Consolas,monospace;overflow-wrap:anywhere;user-select:all}.deck{padding:18px 0;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:16px}.deck .body{flex:1}.deck b,.deck small{display:block}.deck a{font-weight:650}.result{border-left:4px solid #297d74;padding:12px 16px;background:#e6f4ee;margin:18px 0}.error{color:#8c2920}.quiet{background:transparent;color:var(--sea);border:1px solid var(--line)}button.quiet:hover{background:#e2efeb;color:var(--ink)}details{border-bottom:1px solid var(--line);padding:12px 0}summary{cursor:pointer;overflow-wrap:anywhere}footer{color:var(--sub);font-size:14px;padding-bottom:27px}.note{font-size:14px;margin:11px 0}.actions{margin-top:16px}form{margin:0}
.deck .body,.inline input{min-width:0}.deck button{flex-shrink:0}.code{margin:6px 0 12px}
summary{min-height:44px;align-content:center}button,summary{touch-action:manipulation}
@media(max-width:600px){
  header div,main,footer{padding-left:18px;padding-right:18px}
  main{padding-top:32px}.box{padding:17px}
  .box .inline{display:grid;grid-template-columns:minmax(0,1fr)}
  .box .inline button,.result button{width:100%}
  .deck{gap:10px}.deck button{padding:8px 12px}
  .file_ids{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
  .file_ids input{width:100%;font-size:16px}
}
`;
export function page(title, body, status = 200, headers = {}) {
  return new Response(
    `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · ${esc(SITE.title)}</title><style>${css}header a,.deck .body,.file_ids label{overflow-wrap:anywhere}header a{min-width:0;line-height:1.1}header span{flex-shrink:0}.file_ids label{min-width:0}header div{min-height:62px;height:auto}.deck b{overflow-wrap:anywhere}</style><body><header><div><a href="/">${esc(SITE.title)}</a><span>文件</span></div></header><main>${body}</main><footer>文件领取</footer></body></html>`,
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8", ...headers },
    },
  );
}
const hidden = (key, val) =>
  `<input type="hidden" name="${esc(key)}" value="${esc(val)}">`;
export function landing() {
  return page(
    "领取文件",
    `<h1>领取文件</h1><p class="sub">输入管理员发给你的卡密，领取本次发放的文件。</p><section class="box"><form method="post" action="/claim"><label for="key">一次性卡密</label><div class="inline"><input id="key" name="code" required maxlength="80" placeholder="粘贴卡密" autocomplete="off" autocapitalize="characters" spellcheck="false"><button>领取文件</button></div></form></section>`,
  );
}
export function receipt(req, rows, links) {
  if (req.headers.get("Accept") === "application/json") {
    return Response.json(
      rows.map(({ file_id, used, cap }) => ({ file_id, used, cap })),
    );
  }
  const entries = rows
    .map(({ file_id, cap, used }) => {
      const link = esc(links[file_id]);
      return `<div class="deck" data-file_id="${file_id}"><div class="body"><b>${esc(FILES[file_id].name)}</b><small>剩余 ${cap - used} / ${cap} 次</small></div><button type="button" data-copy-url="${link}" aria-label="复制 ${esc(FILES[file_id].name)} 链接"><span aria-live="polite">复制链接</span></button></div><input hidden readonly aria-label="${file_id} 下载地址" value="${link}"><noscript><input readonly aria-label="${file_id} 下载地址" value="${link}"></noscript>`;
    })
    .join("");
  return page(
    "已领取",
    `<h1>你的文件</h1><p class="sub">复制链接，粘贴到浏览器或下载工具中下载。每个文件独立计数。</p>${entries}<p class="actions"><a href="/?new=1">领取另一张卡密</a></p><script src="/copy.js" defer></script>`,
  );
}
export function login() {
  return page(
    "管理员登录",
    `<h1>管理员登录</h1><form method="post" action="${esc(SITE.adminPath)}/login" class="box"><label for="pw">管理员口令</label><div class="inline"><input type="password" id="pw" name="password" required autocomplete="current-password"><button>登录后台</button></div></form>`,
  );
}
function caps(values = {}) {
  return `<div class="file_ids">${FILE_IDS.map((l) => `<label>${esc(FILES[l].name)} 次数<input required type="number" inputmode="numeric" name="${l}" min="${Math.max(1, values[l]?.used || 0)}" max="999" value="${values[l]?.cap ?? SITE.defaultLimit}"></label>`).join("")}</div>`;
}
function issuedCard(code, origin) {
  const instructions = [
    SITE.title,
    "",
    "一次性卡密",
    code,
    "",
    "领取步骤",
    "1. 打开 " + new URL("/?new=1", origin).href,
    "2. 在「一次性卡密」栏输入上面的卡密，点击「领取文件」。",
    "3. 找到需要的文件，点击「复制链接」，把链接粘贴到浏览器或下载工具中下载。",
  ].join("\n");
  return `<section class="result"><b>新卡密</b><div class="code">${esc(code)}</div><button type="button" data-copy-from="issue-message"><span aria-live="polite">复制卡密和领取说明</span></button><textarea id="issue-message" readonly hidden rows="9" style="width:100%" aria-label="卡密和领取说明">${esc(instructions)}</textarea><p class="note">复制后可直接发给收件人。离开本页后，后台只显示发放记录。</p></section><script src="/copy.js" defer></script>`;
}
export function admin(
  rows,
  nonce,
  offset,
  more,
  origin,
  created = "",
  notice = "",
) {
  const records = rows
    .map((r) => {
      const stats = Object.fromEntries(r.grants.map((g) => [g.file_id, g]));
      return `<details><summary><b>${esc(r.note || "未命名卡密")}</b> · ${r.claimed ? "已领取" : "待领取"} · <small>${esc(r.id.slice(0, 8))}</small></summary><p class="note">已用次数　${r.grants.map((g) => `${esc(FILES[g.file_id].name)}　${g.used} / ${g.cap}`).join("　")}</p><form method="post" action="${esc(SITE.adminPath)}/caps">${hidden("id", r.id)}${caps(stats)}<button class="quiet">保存次数上限</button></form></details>`;
    })
    .join("");
  return page(
    "卡密管理",
    `<div class="inline" style="justify-content:space-between"><h1>卡密管理</h1><form method="post" action="${esc(SITE.adminPath)}/logout"><button class="quiet">退出</button></form></div>${created ? issuedCard(created, origin) : ""}${notice ? `<p role="status" class="result">${esc(notice)}</p>` : ""}<section class="box"><h2>生成一次性卡密</h2><form method="post" action="${esc(SITE.adminPath)}/create">${hidden("nonce", nonce)}<label for="note">收件人备注（选填）</label><input id="note" name="note" maxlength="80" placeholder="便于日后查找"><div class="note">每个文件允许开始下载的次数</div>${caps()}<button>生成卡密</button></form></section><h2>发放记录</h2>${records || '<p class="sub">生成第一张卡密后，可以在这里查看领取状态和下载余量。</p>'}<p>${offset ? `<a href="${esc(SITE.adminPath)}?offset=${Math.max(0, offset - 20)}">上一页</a>　` : ""}${more ? `<a href="${esc(SITE.adminPath)}?offset=${offset + 20}">下一页</a>` : ""}</p>`,
  );
}
