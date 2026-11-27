import { FILES, CHUNK, chunkKey, encodedName } from "./catalog.mjs";

const now = () => Math.floor(Date.now() / 1000);
const lockSeconds = 300;
function rangeOf(value, size) {
  if (!value) return [0, size - 1];
  const m = /^bytes=(\d+)-(\d*)$/.exec(value);
  if (!m) return null;
  const from = Number(m[1]),
    to = m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;
  return Number.isSafeInteger(from) && Number.isSafeInteger(to) && from <= to
    ? [from, to]
    : null;
}
function invalidRange(size) {
  return new Response("请从文件开头下载，或使用原下载任务继续。", {
    status: 416,
    headers: { "Content-Range": "bytes */" + size },
  });
}
function fileHeaders(file_id, span, ranged) {
  const size = FILES[file_id].size;
  const [from, to] = span;
  const headers = {
    "Content-Disposition": `attachment; filename="${file_id}.bin"; filename*=UTF-8''${encodedName(file_id)}`,
    "Content-Type": "application/octet-stream",
    "Accept-Ranges": "bytes",
    "Content-Length": String(to - from + 1),
  };
  if (ranged) headers["Content-Range"] = `bytes ${from}-${to}/${size}`;
  return headers;
}

export async function serveDirect(req, env, ctx, grant, resumeCookie) {
  const { file_id, code_id: codeId } = grant;
  const size = FILES[file_id].size,
    range = req.headers.get("Range");
  const span = rangeOf(range, size);
  if (!span) return invalidRange(size);
  const headers = fileHeaders(file_id, span, Boolean(range));
  if (req.method === "HEAD")
    return new Response(null, { status: range ? 206 : 200, headers });

  const purpose = [
    req.headers.get("Sec-Purpose"),
    req.headers.get("Purpose"),
  ].join(" ");
  if (/\b(?:prefetch|preview|prerender)\b/i.test(purpose))
    return new Response(null, { status: 204 });
  const db = env.DB;
  let row;
  if (span[0] > 0) {
    const validator = req.headers.get("If-Range");
    const token = validator
      ? /^"transfer-([a-f0-9]{32})"$/.exec(validator)?.[1]
      : resumeCookie;
    if (!/^[0-9a-f]{32}$/.test(token || "")) return invalidRange(size);
    row = await db
      .prepare(
        "SELECT * FROM attempts WHERE id=? AND code_id=? AND file_id=? AND owner='direct' AND expires>=?",
      )
      .bind(token, codeId, file_id, now())
      .first();
    if (!row)
      return new Response("续传已失效，请重新使用复制的链接。", {
        status: 410,
      });
  } else {
    if (grant.used >= grant.cap)
      return new Response("本文件的下载次数已用完。", { status: 409 });
    // The database trigger charges the first transfer atomically, after storage is available.
    const id = crypto.randomUUID().replaceAll("-", "");
    const [, inserted] = await db.batch([
      db.prepare("DELETE FROM attempts WHERE expires<?").bind(now()),
      db
        .prepare(
          "INSERT INTO attempts(id,code_id,file_id,owner,expires) VALUES(?,?,?,'direct',?) RETURNING *",
        )
        .bind(id, codeId, file_id, now() + 3600),
    ]);
    row = inserted.results[0];
  }
  const url = new URL(req.url);
  headers.ETag = `"transfer-${row.id}"`;
  headers["Set-Cookie"] =
    `claim_transfer=${row.id}; Path=${url.pathname}; HttpOnly; SameSite=Lax; Max-Age=${Math.max(0, row.expires - now())}${url.protocol === "https:" ? "; Secure" : ""}`;
  return transfer(req, env, ctx, row, span, headers);
}

async function transfer(req, env, ctx, row, span, headers) {
  const db = env.DB,
    id = row.id,
    file = FILES[row.file_id],
    size = file.size;
  const [from, to] = span,
    length = to - from + 1,
    range = req.headers.get("Range");
  if (row.state === "done")
    return new Response("这次下载已完成。", { status: 410 });
  if (row.state === "sending" && row.lease_until > now())
    return new Response("这次下载正在传输。", {
      status: 409,
      headers: { "Retry-After": "5" },
    });
  if (row.state === "ready" && from !== 0) return invalidRange(size);
  if (row.state !== "ready") {
    if (!range)
      return new Response("续传需要带上文件位置，请使用浏览器的继续下载。", {
        status: 409,
      });
    // Complete, explicitly requested ranges advance exactly once. After an interrupted
    // stream, the receiver can be up to one outstanding chunk ahead of the checkpoint.
    const interrupted = row.state === "interrupted" || row.state === "sending";
    const low = interrupted ? Math.max(0, row.cursor - CHUNK) : row.cursor;
    const high = interrupted
      ? Math.min(size - 1, row.cursor + CHUNK)
      : row.cursor;
    if (from < low || from > high || to < row.cursor) return invalidRange(size);
  }
  const firstIndex = Math.floor(from / CHUNK);
  const first = await env.FILES.get(chunkKey(file, firstIndex), "stream");
  if (!first)
    return new Response("文件暂不可用，请稍后重试。", { status: 503 });
  const lease = crypto.randomUUID();
  try {
    const won = await db
      .prepare(
        `UPDATE attempts SET state='sending',lease=?,lease_until=?
      WHERE id=? AND state=? AND cursor=? AND lease_until=? AND expires>=? RETURNING id`,
      )
      .bind(
        lease,
        now() + lockSeconds,
        id,
        row.state,
        row.cursor,
        row.lease_until,
        now(),
      )
      .first();
    if (!won) {
      await first.cancel();
      return new Response("该次传输正在被另一个下载请求使用。", {
        status: 409,
      });
    }
  } catch (e) {
    await first.cancel();
    if (String(e.message).includes("quota_exhausted"))
      return new Response("本文件的下载次数已用完。", { status: 409 });
    throw e;
  }
  const pipe = new FixedLengthStream(length);
  async function record(cursor, state) {
    const sending = state === "sending";
    const result = await db
      .prepare(
        `UPDATE attempts SET cursor=max(cursor,?),state=?,lease=?,lease_until=?
      WHERE id=? AND lease=?`,
      )
      .bind(
        cursor,
        state,
        sending ? lease : null,
        sending ? now() + lockSeconds : 0,
        id,
        lease,
      )
      .run();
    if (!result.meta.changes) throw new Error("transfer lease ended");
  }
  async function pump() {
    let reached = from;
    try {
      for (let i = firstIndex; i <= Math.floor(to / CHUNK); i++) {
        const stream =
          i === firstIndex
            ? first
            : await env.FILES.get(chunkKey(file, i), "stream");
        if (!stream) throw new Error("missing media chunk");
        const chunkStart = i * CHUNK;
        const chunkEnd = Math.min(chunkStart + CHUNK, size);
        if (from <= chunkStart && to + 1 >= chunkEnd) {
          // Keep full chunks in native streams to minimize CPU on Workers Free.
          await stream.pipeTo(pipe.writable, {
            preventClose: true,
            preventAbort: true,
          });
          reached = chunkEnd;
        } else {
          const reader = stream.getReader();
          const output = pipe.writable.getWriter();
          let pos = chunkStart;
          try {
            while (pos <= to) {
              const { done, value } = await reader.read();
              if (done) break;
              const start = Math.max(0, from - pos),
                end = Math.min(value.byteLength, to - pos + 1);
              if (end > start) {
                await output.write(value.subarray(start, end));
                reached = pos + end;
              }
              pos += value.byteLength;
            }
          } finally {
            output.releaseLock();
            await reader.cancel().catch(() => {});
          }
        }
        if (reached !== Math.min((i + 1) * CHUNK, to + 1))
          throw new Error("incomplete media chunk");
        await record(
          reached,
          reached === to + 1
            ? reached === size
              ? "done"
              : "partial"
            : "sending",
        );
      }
      await pipe.writable.close();
    } catch (e) {
      await pipe.writable.abort(e).catch(() => {});
      await record(reached, "interrupted").catch(() => {});
    }
  }
  ctx.waitUntil(pump());
  return new Response(pipe.readable, { status: range ? 206 : 200, headers });
}
