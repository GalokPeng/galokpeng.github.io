# Galok’s Index

[个人主页](https://galok.cn/) 收录站点预览与最新文章。[文章](https://galok.cn/articles/) 按日期倒序排列。[Skills 下载库](https://galok.cn/skills/) 分为个人和引用两个标签页。[Galok’s World](https://galok.cn/world/) 是第一人称海岛住宅，[Galok’s Sea](https://galok.cn/sea/) 是海上浮岛。

GitHub Pages 从 `main` 的仓库根目录构建 Jekyll 静态站点。首页在 `index.html`，共用导航在 `_layouts/index-shell.html`，站点预览在 `home/previews/`。添加下载文件见 [Skills 目录](skills/README.md)。

## 发布 Markdown 文章

在 `_posts/` 添加 `YYYY-MM-DD-short-title.md`，文件名末段使用稳定的文章短名。以下示例会发布到 `/articles/short-title/`。

```markdown
---
title: "文章标题"
description: "一两句介绍文章内容。"
---

正文从这里开始。

## 第一节

这里可以使用列表、表格、链接和围栏代码块。
```

标题写在文件头。可选的 `title_en` 和 `description_en` 用于英文导航界面，正文保留原文语言（默认为中文，英文稿可加 `language: en`）。需要列表封面时，将图片放在 `articles/` 并设置 `cover: /articles/文件名.webp`。推送该 Markdown 后，Pages 自动生成独立阅读页、文章列表、首页最近三篇和站点地图。两节及以上的文章会从二级标题生成目录。

## 本地预览

安装 Ruby 和 Bundler 后在仓库根目录运行 `bundle install`，再运行 `bundle exec jekyll serve`，打开 `http://localhost:4000/`。预览包含与发布页相同的 Markdown 和模板处理。

在本仓库中可用 `$maintain-galok-content` 添加站点卡片和 Skill 下载。[站点内容维护 Skill](.agents/skills/maintain-galok-content/SKILL.md)

住宅源码在 `villa/`。修改住宅后，在该目录执行 `npm ci` 和 `npm run build:pages`，提交源码和生成的 `world/`。

[住宅开发说明](villa/README.md) · [海上浮岛开发说明](sea/README.md)
