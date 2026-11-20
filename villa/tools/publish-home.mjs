import { readFile, writeFile } from 'node:fs/promises';

// Vite owns world/. Publish its entry at the domain root and keep old bookmarks working.
const previousEntry = new URL('../../world/index.html', import.meta.url);
const home = new URL('../../index.html', import.meta.url);
// The original bundles, models and textures keep their URLs and browser cache entries.
const html = (await readFile(previousEntry, 'utf8')).replace(/\r+\n/g, '\n');
if (!html.includes('<head>')) throw new Error('Missing head in the built homepage');
await writeFile(home, html.replace('<head>', '<head>\n    <base href="/world/">'));
await writeFile(previousEntry, `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Galok的世界</title>
  <link rel="canonical" href="https://galok.cn/">
  <script>location.replace('/' + location.search + location.hash)</script>
  <noscript><meta http-equiv="refresh" content="0; url=/"></noscript>
</head>
<body><a href="/">进入 Galok的世界</a></body>
</html>
`);
