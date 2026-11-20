/* Galok Service Worker
 * 在线一律回源（network-first），Cache Storage 只作离线兜底。
 * 旧版用 cache-first：GitHub Pages 的文件名固定不变，push 后回访用户会一直
 * 命中缓存里的旧 index.html / water.min.js，即「push 了但页面还是旧版」。
 * CACHE 版本号只用于清理历史缓存，日常改内容不再需要手动 +1。
 */
const CACHE = 'galok-sea-v1';
const OFFLINE_ASSETS = ['./', './index.html', './water.min.js?v=20261118-2', './lightblock-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(OFFLINE_ASSETS.map(async (url) => {
      // cache:'reload' 绕开浏览器 HTTP 缓存（GitHub Pages 默认 max-age=600），
      // 否则安装新 SW 时可能又把旧的 index.html 写进新缓存。
      let res;
      try {
        res = await fetch(url, { cache: 'reload' });
      } catch (_) {
        try { res = await fetch(url); } catch (_) { return; }
      }
      try { if (res.ok) await cache.put(url, res); } catch (_) { /* 单个资源失败不影响安装 */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('galok-sea-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!url.href.startsWith(self.registration.scope)) return;

  event.respondWith((async () => {
    let cache;
    try { cache = await caches.open(CACHE); } catch (_) { /* 缓存不可用时直接走网络 */ }
    try {
      const res = await fetch(req);
      if (cache && res && res.ok && res.type === 'basic') {
        try { await cache.put(req, res.clone()); } catch (_) { /* 写入失败不影响本次响应 */ }
      }
      return res;
    } catch (err) {
      if (cache) {
        const cached = await cache.match(req);
        if (cached) return cached;
        if (req.mode === 'navigate') {
          const shell = (await cache.match('./index.html')) || (await cache.match('./'));
          if (shell) return shell;
        }
      }
      return Response.error();
    }
  })());
});
