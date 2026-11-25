---
name: maintain-galok-content
description: 在 GalokPeng/galokpeng.github.io 中发布 Markdown 文章、维护开源项目目录、首页站点预览、个人 Skill 下载和带来源的引用 Skill，以及它们的中英文内容。
---

# 维护 Galok 站点内容

从包含 `CNAME`（galok.cn）、`index.html` 和 `skills/catalog.json` 的仓库根目录工作。GitHub Pages 发布 `main` 的根目录。首页、Skills 库和海岛住宅有各自的入口。

## 首页站点和个人 Skill

- 新增或更新首页站点卡片时，使用 [add-index-site](../add-index-site/SKILL.md) 准备双语简介、真实预览和链接，并核对卡片与图片尺寸。
- 个人库新增或换包时，使用 [add-personal-skill](../add-personal-skill/SKILL.md) 处理下载文件、配套说明、清单与逐文件比对。

## 引用 Skill

- 引用条目使用经核实的上游仓库、完整提交 SHA 和子目录。按 `skills/README.md` 填写 `source`，保留上游许可与声明。打包时使 ZIP 顶层为 Skill 目录，并核对解压后的文件与该提交一致。包内许可、说明与卡片来源链接应对应同一份快照。
- 本仓库自己的维护工具位于 `.agents/skills/`。公开下载库只展示清单里登记的文件。

## 开源项目

阅读用户给出的仓库 README，核对项目名称、功能和体验或下载入口。在 `_data/open_source.yml` 按[新增示例](../../../README.md#添加开源项目)追加或更新对应仓库。使用可公开展示的项目截图时，将 WebP 放入 `open-source/previews/`，记录来源。构建后从首页导航进入 `/open-source/`，验证中英文卡片、预览和外链。

## 发布文章

收到 HTML 原稿时使用同仓库的 [HTML 文章迁移 Skill](../import-html-article/SKILL.md)，其中包含构建前后的正文核对工具和交互核对方法。

按根目录 README 的示例在 `_posts/YYYY-MM-DD-short-title.md` 添加 Markdown。沿用作者的标题、正文、表格和代码，标题移入文件头。填写摘要，需要在英文界面显示译名时添加 `title_en` 与 `description_en`。Jekyll 自动索引文章。验证正文页、目录锚点、手机上的宽表格和长代码，以及列表到正文的链接。

## 验证改动

用 Jekyll 构建后预览站点。对站点卡，查看桌面、平板和手机预览图、实际目的地址以及语言切换。对 Skill，直达对应子页面，检查分类、双语简介、使用说明与来源链接；通过下载按钮取得 ZIP，与用户原件或已核对的上游快照比较。旧书签 `/?lang=en#skills` 应进入英文 Skills 页面。

内容修改通常不需要构建住宅。仅在当前任务包含发布时提交并推送；发布后从 `galok.cn` 验证此次改动涉及的入口或下载。
