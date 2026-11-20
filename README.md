# Galok的世界

[Galok的世界](https://galok.cn/) 是主站的第一人称海岛住宅。[海上浮岛](https://galok.cn/sea/) 是原来的海面和站点入口。

GitHub Pages 从 `main` 的仓库根目录发布。住宅源码在 `villa/`。修改住宅后，在该目录执行 `npm ci` 和 `npm run build:pages`，将源码、根目录的 `index.html` 和 `world/` 一起提交。海上浮岛的页面和资源在 `sea/`。

在仓库根目录运行 `python -m http.server 8000` 可以预览完整站点。打开 `http://localhost:8000/` 进入住宅，打开 `http://localhost:8000/sea/` 进入海上浮岛。

[住宅开发说明](villa/README.md) · [海上浮岛开发说明](sea/README.md)
