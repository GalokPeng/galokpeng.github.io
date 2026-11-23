# Galok’s Index

[个人主页](https://galok.cn/) 收录站点预览。[Skills 下载库](https://galok.cn/skills/) 分为个人和引用两个标签页。[Galok’s World](https://galok.cn/world/) 是第一人称海岛住宅，[Galok’s Sea](https://galok.cn/sea/) 是海上浮岛。

GitHub Pages 从 `main` 的仓库根目录发布。主页是根目录的 `index.html`，样式、脚本和预览图在 `home/`。添加下载文件见 [Skills 目录](skills/README.md)。

在本仓库中可用 `$maintain-galok-content` 添加站点卡片和 Skill 下载。[站点内容维护 Skill](.agents/skills/maintain-galok-content/SKILL.md)

住宅源码在 `villa/`。修改住宅后，在该目录执行 `npm ci` 和 `npm run build:pages`，提交源码和生成的 `world/`。在仓库根目录运行 `python -m http.server 8000`，打开 `http://localhost:8000/` 可预览完整站点。

[住宅开发说明](villa/README.md) · [海上浮岛开发说明](sea/README.md)
