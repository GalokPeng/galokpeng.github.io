import { admin, login, landing, receipt, page, esc } from "./pages.mjs";
import { SITE, FILE_IDS, encodedName } from "./catalog.mjs";
import { serveDirect } from "./file.mjs";
import { copyClient } from "./client.mjs";

const encoder = new TextEncoder();
const hex = (b) =>
  Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, "0")).join(
    "",
  );
const gen = () => crypto.randomUUID().replaceAll("-", "");
const uuid = /^[0-9a-f]{32}$/;
const sha = async (v) =>
  hex(await crypto.subtle.digest("SHA-256", encoder.encode(v)));
async function mac(secret, value) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return hex(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}
function same(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
const epoch = () => Math.floor(Date.now() / 1000);
const redirect = (to) =>
  new Response(null, { status: 303, headers: { Location: to } });
const fail = (message, status, back = "/") =>
  page(
    "操作提示",
    `<h1>操作提示</h1><p class="error">${esc(message)}</p><a href="${esc(back)}">返回</a>`,
    status,
  );
const cookie = (name, value, age, url) =>
  `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${age}${url.protocol === "https:" ? "; Secure" : ""}`;
const primary = async (db, query, ...values) =>
  db
    .prepare(query)
    .bind(...values)
    .first();
const all = async (db, query, ...values) =>
  (
    await db
      .prepare(query)
      .bind(...values)
      .all()
  ).results;
const setting = (s) => String(s ?? "");
function limits(f) {
  const caps = FILE_IDS.map((l) => String(f.get(l) ?? ""));
  return caps.every((x) => /^[1-9]\d{0,2}$/.test(x)) ? caps.map(Number) : null;
}
async function links(key, id, origin) {
  return Object.fromEntries(
    await Promise.all(
      FILE_IDS.map(async (l) => [
        l,
        `${origin}/d/${id}/${l}/${await mac(key, `file:${id}:${l}`)}/${encodedName(l)}`,
      ]),
    ),
  );
}
async function renderAdmin(db, url, created = "", notice = "") {
  const raw = Number(url.searchParams.get("offset")),
    offset =
      Number.isSafeInteger(raw) && raw >= 0 ? Math.min(raw, 10000000) : 0;
  const rows = await all(
    db,
    "SELECT id,note,claimed FROM codes ORDER BY created DESC,id DESC LIMIT 21 OFFSET ?",
    offset,
  );
  const visible = rows.slice(0, 20);
  if (visible.length) {
    const grants = await all(
      db,
      `SELECT * FROM grants WHERE code_id IN (${visible.map(() => "?").join(",")}) ORDER BY file_id`,
      ...visible.map((r) => r.id),
    );
    for (const r of visible)
      r.grants = grants.filter((g) => g.code_id === r.id);
  }
  return admin(
    visible,
    gen(),
    offset,
    rows.length > 20,
    url.origin,
    created,
    notice,
  );
}
async function dispatch(req, env, ctx, url, session, cookies) {
  const path = url.pathname,
    method = req.method,
    db = env.DB,
    key = env.SIGNING_KEY;
  if (
    !key ||
    key.length < 32 ||
    !env.ADMIN_PASSWORD ||
    env.ADMIN_PASSWORD.length < 10
  )
    return fail("服务尚未配置管理员口令和签名密钥。", 503);
  if (!["POST", "GET", "HEAD"].includes(method))
    return fail("请求方法不支持。", 405);
  const post = method === "POST";
  if (post && req.headers.get("Origin") !== url.origin)
    return fail("请求来源无效，请重新打开本站页面。", 403);
  if (
    post &&
    (!req.headers
      .get("content-type")
      ?.startsWith("application/x-www-form-urlencoded") ||
      Number(req.headers.get("content-length") || 0) > 8192)
  )
    return fail("表单格式或长度无效。", 400);
  async function form() {
    const reader = req.body?.getReader(),
      parts = [];
    let total = 0;
    if (reader) {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > 8192) {
          await reader.cancel();
          throw new Error("oversize form");
        }
        parts.push(value);
      }
    }
    return new URLSearchParams(await new Blob(parts).text());
  }
  if (path === "/copy.js" && !post)
    return new Response(copyClient, {
      headers: { "Content-Type": "application/javascript; charset=utf-8" },
    });
  const owner = await sha("viewer:" + session);
  if (path === "/" && !post) {
    const r = await primary(
      db,
      "SELECT id FROM codes WHERE owner=? ORDER BY claimed DESC,id DESC LIMIT 1",
      owner,
    );
    if (r && !url.searchParams.has("new")) {
      const g = await all(
        db,
        "SELECT * FROM grants WHERE code_id=? ORDER BY file_id",
        r.id,
      );
      return receipt(req, g, await links(key, r.id, url.origin));
    }
    return landing();
  }
  if (path === "/claim" && post) {
    const f = await form(),
      code = setting(f.get("code")).replace(/[\s-]/g, "").toUpperCase();
    if (!/^[A-F0-9]{32}$/.test(code))
      return fail("卡密格式无效，请完整粘贴管理员给你的卡密。", 400, "/?new=1");
    const hash = await sha(code);
    const row = await primary(
      db,
      `UPDATE codes SET claimed=?,owner=? WHERE code_hash=? AND claimed IS NULL RETURNING id`,
      epoch(),
      owner,
      hash,
    );
    const id =
      row?.id ||
      (
        await primary(
          db,
          "SELECT id FROM codes WHERE code_hash=? AND owner=?",
          hash,
          owner,
        )
      )?.id;
    if (!id) return fail("卡密无效或已由其他浏览器领取。", 409, "/?new=1");
    return redirect(`/r/${id}/${await mac(key, "receipt:" + id)}`);
  }
  const r = /^\/r\/([0-9a-f]{32})\/([0-9a-f]{64})$/.exec(path);
  if (r && !post && same(r[2], await mac(key, "receipt:" + r[1]))) {
    const rows = await all(
      db,
      "SELECT g.* FROM grants g JOIN codes c ON c.id=g.code_id WHERE c.claimed IS NOT NULL AND c.id=? ORDER BY file_id",
      r[1],
    );
    if (rows.length > 0)
      return receipt(req, rows, await links(key, r[1], url.origin));
  }
  const d =
    /^\/d\/([0-9a-f]{32})\/(f[1-9][0-9]*)\/([0-9a-f]{64})(?:\/([^/]+))?$/.exec(
      path,
    );
  if (
    d &&
    FILE_IDS.includes(d[2]) && d[4] === encodedName(d[2]) &&
    same(d[3], await mac(key, `file:${d[1]}:${d[2]}`))
  ) {
    if (post)
      return new Response("请复制链接后在浏览器或下载工具中打开。", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    const grant = await primary(
      db,
      "SELECT g.* FROM grants g JOIN codes c ON c.id=g.code_id WHERE c.claimed IS NOT NULL AND c.id=? AND g.file_id=?",
      d[1],
      d[2],
    );
    if (!grant) return fail("下载链接无效。", 404);
    return serveDirect(req, env, ctx, grant, cookies.get("claim_transfer"));
  }
  if (path === SITE.adminPath + "/" && !post) return redirect(SITE.adminPath + url.search);
  if (path === SITE.adminPath || path.startsWith(SITE.adminPath + "/")) {
    const adminCookie = cookies.get("admin") || "",
      [expires, sig] = adminCookie.split(".");
    const auth =
      Number(expires) > epoch() &&
      same(
        sig || "",
        await mac(
          key,
          "admin:" + expires + ":" + (await sha(env.ADMIN_PASSWORD)),
        ),
      );
    if (path === SITE.adminPath + "/login" && post) {
      const f = await form();
      if (
        !same(
          await sha(setting(f.get("password"))),
          await sha(env.ADMIN_PASSWORD),
        )
      )
        return fail("管理员口令无效。", 403, SITE.adminPath);
      const end = epoch() + 8 * 3600;
      const res = redirect(SITE.adminPath);
      res.headers.append(
        "Set-Cookie",
        cookie(
          "admin",
          end +
            "." +
            (await mac(
              key,
              "admin:" + end + ":" + (await sha(env.ADMIN_PASSWORD)),
            )),
          8 * 3600,
          url,
        ),
      );
      return res;
    }
    if (!auth)
      return path === SITE.adminPath && !post
        ? login()
        : fail("请先登录管理员后台。", 403, SITE.adminPath);
    if (path === SITE.adminPath && !post) return renderAdmin(db, url);
    if (path === SITE.adminPath + "/logout" && post) {
      const res = redirect(SITE.adminPath);
      res.headers.append("Set-Cookie", cookie("admin", "", 0, url));
      return res;
    }
    if (path === SITE.adminPath + "/create" && post) {
      const f = await form(),
        caps = limits(f),
        nonce = setting(f.get("nonce")),
        note = setting(f.get("note")).trim();
      if (!caps || !uuid.test(nonce) || note.length > 80)
        return fail(
          "请检查备注以及各文件的次数（1 至 999）。",
          400,
          SITE.adminPath,
        );
      const code = (await mac(key, "issue:" + nonce))
          .slice(0, 32)
          .toUpperCase(),
        id = (await mac(key, "id:" + nonce)).slice(0, 32);
      await db.batch([
        db
          .prepare(
            "INSERT OR IGNORE INTO codes(id,code_hash,note,created) VALUES(?,?,?,?)",
          )
          .bind(id, await sha(code), note, epoch()),
        ...FILE_IDS.map((l, i) =>
          db
            .prepare(
              "INSERT OR IGNORE INTO grants(code_id,file_id,cap) VALUES(?,?,?)",
            )
            .bind(id, l, caps[i]),
        ),
      ]);
      return renderAdmin(db, url, code.match(/.{4}/g).join("-"));
    }
    if (path === SITE.adminPath + "/caps" && post) {
      const f = await form(),
        caps = limits(f),
        id = setting(f.get("id"));
      if (!caps || !uuid.test(id))
        return fail("下载上限必须为 1 至 999。", 400, SITE.adminPath);
      if (!(await primary(db, "SELECT id FROM codes WHERE id=?", id)))
        return fail("没有找到卡密记录。", 404, SITE.adminPath);
      try {
        await db.batch(
          FILE_IDS.map((l, i) =>
            db
              .prepare("UPDATE grants SET cap=? WHERE code_id=? AND file_id=?")
              .bind(caps[i], id, l),
          ),
        );
      } catch (e) {
        if (!String(e.message).includes("CHECK constraint")) throw e;
        return fail("新上限不能低于已用次数，请刷新后重试。", 409, SITE.adminPath);
      }
      return renderAdmin(db, url, "", "已保存各文件的下载上限。");
    }
  }
  return fail("页面或链接不存在。", 404);
}
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url),
      cookies = new Map(
        (req.headers.get("Cookie") || "")
          .split(";")
          .map((x) => x.trim().split("=")),
      );
    const existing = cookies.get("viewer"),
      fresh = !uuid.test(existing || ""),
      session = fresh ? gen() : existing;
    let res;
    try {
      res = await dispatch(req, env, ctx, url, session, cookies);
    } catch (e) {
      if (e.message === "oversize form") res = fail("表单太长。", 413);
      else {
        console.error(
          "portal error",
          e.name,
          String(e.message)
            .replace(/[0-9a-f]{32,}/g, "[id]")
            .slice(0, 220),
        );
        res = fail("服务暂不可用，请稍后重试。", 503);
      }
    }
    const headers = new Headers(res.headers);
    headers.set("Cache-Control", "private, no-store");
    headers.set("Referrer-Policy", "same-origin");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Robots-Tag", "noindex, nofollow");
    headers.set(
      "Content-Security-Policy",
      "default-src 'none'; style-src 'unsafe-inline'; script-src 'self'; connect-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    );
    if (fresh)
      headers.append(
        "Set-Cookie",
        cookie("viewer", session, 60 * 60 * 24 * 180, url),
      );
    return new Response(req.method === "HEAD" ? null : res.body, {
      status: res.status,
      headers,
    });
  },
};
