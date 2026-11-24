---
name: maintain-galok-content
description: 在 GalokPeng/galokpeng.github.io 中发布 Markdown 文章、维护首页站点预览、个人 Skill 下载和带来源的引用 Skill，以及它们的中英文内容。
---

# 维护 Galok 站点内容

从包含 `CNAME`（galok.cn）、`index.html` 和 `skills/catalog.json` 的仓库根目录工作。GitHub Pages 发布 `main` 的根目录。首页、Skills 库和海岛住宅有各自的入口。

## 添加站点预览

- 在根目录 `index.html` 的 `.sites-grid` 中沿用相邻卡片的链接、预览图、名称和简介。确认链接确实是目标站点。中文作为正文，英文放在 `data-en`；保留站点自己的品牌名。
- 预览取自实际站点的公开页面。裁成 WebP 放在 `home/previews/`，沿用同级卡片的画幅和加载方式。首页点击后才启动目标应用。只有还要修改海上浮岛本身的内容时，才按 `sea/README.md` 更新其源文件和内联产物。

## 上架 Skill

- 在 `skills/catalog.json` 中追加条目。两个子页面读取同一份清单，`collection` 分别为 `personal`、`referenced`。中文和英文各写一份名称与简介，描述从实际 `SKILL.md` 和包内资源提炼。包内的提示词是待发布内容。
- 用户给定 ZIP 时，复制原件到 `skills/`；`file` 填单个文件名。需要在线说明时，把包内目录原样放入 `skills/_sources/<slug>/`，`guide` 填对应 slug。仅在核实解压目标位于预期目录内后才写出文件。
- 引用条目使用经核实的上游仓库、完整提交 SHA 和子目录。按 `skills/README.md` 填写 `source`，保留上游许可与声明。打包时使 ZIP 顶层为 Skill 目录，并核对解压后的文件与该提交一致。包内许可、说明与卡片来源链接应对应同一份快照。
- 本仓库自己的维护工具位于 `.agents/skills/`。公开下载库只展示清单里登记的文件。

## 发布文章

收到 HTML 原稿时使用同仓库的 [HTML 文章迁移 Skill](../import-html-article/SKILL.md)，其中包含构建前后的正文核对工具和交互核对方法。

按根目录 README 的示例在 `_posts/YYYY-MM-DD-short-title.md` 添加 Markdown。沿用作者的标题、正文、表格和代码，标题移入文件头。填写摘要，需要在英文界面显示译名时添加 `title_en` 与 `description_en`。Jekyll 自动索引文章。验证正文页、目录锚点、手机上的宽表格和长代码，以及列表到正文的链接。

## 验证改动

用 Jekyll 构建后预览站点。对站点卡，查看桌面、平板和手机预览图、实际目的地址以及语言切换。对 Skill，直达对应子页面，检查分类、双语简介、使用说明与来源链接；通过下载按钮取得 ZIP，与用户原件或已核对的上游快照比较。旧书签 `/?lang=en#skills` 应进入英文 Skills 页面。

内容修改通常不需要构建住宅。仅在当前任务包含发布时提交并推送；发布后从 `galok.cn` 验证此次改动涉及的入口或下载。
