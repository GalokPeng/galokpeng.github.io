<a href="https://galok.cn/"><img src="home/brand/galok.svg" width="72" height="72" alt="Galok Logo"></a>

# Galok's Index

> 放弃对技术的执着，改向对知识的着迷

Galok's Index 是 Galok 的个人主页。这里收录我做的网站、写下的文章、日常使用的 Skills 和开源项目。首页用真实页面截图做预览，点进卡片就能访问对应项目。你可以在海景房里漫游，读一篇训练实验笔记，也可以带走一套做离线报告的工具。

[访问首页](https://galok.cn/) · [阅读文章](https://galok.cn/articles/) · [浏览个人 Skills](https://galok.cn/skills/) · [查看引用 Skills](https://galok.cn/skills/referenced/) · [浏览开源项目](https://galok.cn/open-source/)

[![Galok 首页的亚麻布染印 Logo，以及 World 和 Sea 的站点预览](docs/images/index.webp)](https://galok.cn/)

首页两侧散开的是带色签的索引卡。鼠标靠近或手指轻点时，纸页会稍稍展开。浅色主题使用灰白纸色，深色主题使用蓝灰纸色，启用「减少动态效果」时纸页保持静止。

首页的两滴蓝色染料在水面上交锋，最后印在亚麻布上，洇成 Galok 的标志。网页用 HTML `picture` 静音循环播放第十二版，加载时先显示轻量水面图。所有 AVIF 档位均从 60 fps 原片导出。视口 ≤ 600 px 时使用 512 px 版，更宽的触屏设备及 ≤ 900 px 的窗口使用 640 px 版，桌面按像素密度选择 960 或 1280 px 版。不支持 AVIF 时使用动画 WebP，移动档同样按 60 fps 导出。启用「减少动态效果」时直接显示布面定帧，也可以用图上的「静态图」切换。

[网页动画素材](home/ink/) · [第十二版有声原片（1080p / 60 fps，13 秒）](_masters/galok-ink-v12.mp4)

## 从哪里开始

| 入口 | 可以做什么 |
| --- | --- |
| [Galok's World](https://galok.cn/world/) | 以第一人称走进海景房，推窗看海，也可以出门驾船环岛。 |
| [Galok's Sea](https://galok.cn/sea/) | 在海上浮岛之间探索，看海水、昼夜、雷雨与星河变化。 |
| [文章](https://galok.cn/articles/) | 按日期阅读技术笔记。长文带章节目录，交互指南可在正文里查看图表、调整参数和下载案例数据。 |
| [Skills](https://galok.cn/skills/) | 在个人库下载可复用的 Skill 及配套文件，点「使用说明」查看用法。引用库另列收录工具及其来源。 |
| [开源](https://galok.cn/open-source/) | 从实景预览认识断层回声、LoveShare 和轻块桌面，进入源码仓库、部署指南、试玩或下载。 |

首页、文章、Skills 和开源项目共用中英文导航与深浅主题，支持手机、平板和桌面阅读。文章正文保留原稿语言。

| [Ladder 实验指南](https://galok.cn/articles/ladder-experiments/) | [HTML 报告仪表盘](https://galok.cn/skills/html-report-dashboard.zip) |
| --- | --- |
| [![文章中的目录和五档模型分差图](docs/images/reader.webp)](https://galok.cn/articles/ladder-experiments/) | [![个人 Skill 卡片上的报告示例、ZIP 下载和使用说明](docs/images/report-skill.webp)](https://galok.cn/skills/) |

## Skill 列表

### 个人 Skill

点击名称可阅读使用说明，ZIP 包含完整的 Skill 和配套文件。

| Skill | 用途 | 下载 |
| --- | --- | --- |
| [Cloudflare 卡密文件领取](skills/_sources/cloudflare-file-claims/SKILL.md) | 在自有域名发放小文件。一次性卡密兑换后可复制直链，每个文件独立设置下载次数。 | [ZIP](https://galok.cn/skills/cloudflare-file-claims.zip) |
| [移动应用交付](skills/_sources/mobile-app-delivery/SKILL.md) | 构建 Android APK 或 iOS IPA，核对签名、升级兼容性和设备安装结果。 | [ZIP](https://galok.cn/skills/mobile-app-delivery.zip) |
| [网页数据采集](skills/_sources/web-data-collection/SKILL.md) | 从网页、API 和存档采集带来源的数据，按月去重抽样并检查缺口。 | [ZIP](https://galok.cn/skills/web-data-collection.zip) |
| [动画创作工坊](skills/_sources/craft-animation/SKILL.md) | 从分镜、动作和声音同步到逐帧调整，导出可在网页循环播放的动画。 | [ZIP](https://galok.cn/skills/craft-animation.zip) |
| [网页交互桌面](skills/_sources/build-browser-desktop/SKILL.md) | 把桌面软件做成可在浏览器试用的交互演示，附色卡画板示例。 | [ZIP](https://galok.cn/skills/build-browser-desktop.zip) |
| [软件产品全链路交付](skills/_sources/ship-software-product/SKILL.md) | 规划开发、测试、打包和上线，核对发布附件、安装包与商店送审材料。 | [ZIP](https://galok.cn/skills/ship-software-product.zip) |
| [HTML 报告仪表盘](skills/_sources/html-report-dashboard/SKILL.md) | 制作可离线阅读的交互报告，从汇总图表下钻到原始记录。 | [ZIP](https://galok.cn/skills/html-report-dashboard.zip) |

### 引用 Skill

以下条目均来自 OpenAI。名称链接到上游源码或官方说明，收录了下载包的条目另附 ZIP。

| Skill | 用途 | 下载 |
| --- | --- | --- |
| [Skill Creator](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.system/skill-creator) | 创建 Skill 目录、生成界面信息并校验格式。 | [ZIP](https://galok.cn/skills/skill-creator.zip) |
| [文档编辑](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work) | 起草、修订 Word 文档并逐页检查排版。 | — |
| [PDF 工具](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.curated/pdf) | 提取文本和表格、填表、渲染页面。 | [ZIP](https://galok.cn/skills/pdf.zip) |
| [演示文稿](https://help.openai.com/en/articles/20001605-creating-and-collaborating-on-slides-in-chatgpt) | 制作可编辑幻灯片，检查图表、备注和导出版式。 | [ZIP](https://galok.cn/skills/presentations.zip) |
| [电子表格](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work) | 创建工作簿、公式和图表，交付到 Excel 或 Google 表格。 | [ZIP](https://galok.cn/skills/spreadsheets.zip) |
| [Excel 实时编辑](https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets) | 通过加载项编辑已打开的工作簿。 | [ZIP](https://galok.cn/skills/excel-live-control.zip) |
| [图像生成](https://github.com/openai/codex/tree/a1604a8c0554c09c1be45e5a121bb1889b4d9a50/codex-rs/skills/src/assets/samples/imagegen) | 根据描述或参考图生成、编辑位图。 | [ZIP](https://galok.cn/skills/imagegen.zip) |
| [交互可视化](https://learn.chatgpt.com/docs/visualizations) | 通过交互图表、地图和模拟比较数据。 | — |
| [模板创建](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work) | 从文档、工作簿或幻灯片中提取可复用模板。 | — |
| [Windows 桌面操作](https://help.openai.com/en/articles/20001510-manage-browser-and-computer-use-in-your-enterprise-workspace) | 读取 Windows 窗口，操作获准使用的应用。 | — |

## 给站点添加内容

仓库中的维护 Skills 放在 `.agents/skills/`。在这个仓库里使用 Agent 时，可以直接提供网址、文档或压缩包，并点名对应的 Skill。

增删或改名时，同步更新 [Skills 页面清单](skills/catalog.json) 和上面的 [Skill 列表](#skill-列表)。

| 要做的事 | 调用示例 | 维护位置 |
| --- | --- | --- |
| 首页添加站点 | 「用 `$add-index-site` 把这个网址加到首页，并制作预览。」 | `index.html` 中的站点卡和 `home/previews/`。[站点上架流程](.agents/skills/add-index-site/SKILL.md) |
| 个人库添加或更新 Skill | 「用 `$add-personal-skill` 上架这个 ZIP，附中英文简介和使用说明。」 | `skills/catalog.json`、下载包、封面和 `skills/_sources/`。[个人 Skill 上架流程](.agents/skills/add-personal-skill/SKILL.md) |
| 发布完整 HTML 文章 | 「用 `$import-html-article` 完整迁入这份报告，核对全文、图表和交互。」 | `_posts/` 和文章专属资源。[HTML 文章迁移流程](.agents/skills/import-html-article/SKILL.md) |
| 维护引用 Skill | 「用 `$maintain-galok-content` 收录这个上游 Skill，并标注来源。」 | [站点维护说明](.agents/skills/maintain-galok-content/SKILL.md)与[下载清单字段](skills/README.md) |
| 收录开源项目 | 「用 `$maintain-galok-content` 把这个仓库添加到开源页。」 | [项目清单](_data/open_source.yml)和[新增示例](#添加开源项目) |

### 添加开源项目

在 [`_data/open_source.yml`](_data/open_source.yml) 末尾追加一项。页面按清单顺序显示，最小条目只需项目名、双语简介和仓库地址。中英文项目名相同时可以省略 `name_en`。

```yaml
- name: 示例工具
  name_en: Example Tool
  description: 把一份书签导出为可搜索的网页。
  description_en: Export bookmarks as a searchable web page.
  repository: https://github.com/OWNER/REPO
```

需要预览时，将项目实景截图放进 [`open-source/previews/`](open-source/previews/)，在同一条目下加上以下可选字段。两行分类、技术栈、图片和操作入口都可以独立省略。用了其他项目的图片时，在[预览素材说明](open-source/previews/NOTICE.txt)记录来源和授权。

```yaml
  category: 书签工具
  category_en: Bookmark tool
  preview: example-tool.webp
  stack: [TypeScript, SQLite]
  action:
    url: https://github.com/OWNER/REPO/releases
    label: 下载应用
    label_en: Download app
```

将想重点展示的项目移到清单首位并设为 `featured: true`，它会在宽屏占据整行。提交前在本地打开 `/open-source/`，切到英文，点一次源码和操作入口。

### 发布 Markdown 文章

在 `_posts/` 新建 `YYYY-MM-DD-short-title.md`。文件名末段会成为稳定地址 `/articles/short-title/`。

```markdown
---
title: "文章标题"
description: "一两句介绍文章内容。"
---

正文从这里开始。

## 第一节

这里可以使用列表、表格、链接和围栏代码块。
```

英文界面的标题和摘要用 `title_en`、`description_en`。英文正文可加 `language: en`。需要列表封面时，把图片放在 `articles/`，在文件头填写 `cover: /articles/文件名.webp`。发布后 Jekyll 会更新正文页、文章列表、首页最近三篇和站点地图，两节及以上的普通文章会从二级标题生成目录。

## 本地预览与部署

项目使用 Jekyll、原生 HTML/CSS/JavaScript 和 GitHub Pages。安装 Ruby 和 Bundler 后，在仓库根目录运行：

```sh
bundle install
bundle exec jekyll serve
```

打开 [本地预览](http://localhost:4000/)。共用导航在 `_layouts/index-shell.html`，文章模板在 `_layouts/reading.html`。推送到 `main` 后，GitHub Pages 从仓库根目录构建并发布到 [galok.cn](https://galok.cn/)。

海景房源码在 `villa/`，生成的静态文件在 `world/`。修改住宅后，在 `villa/` 运行 `npm ci`、`npm run build:pages`，并提交源码与构建产物。[住宅开发说明](villa/README.md) · [海上浮岛开发说明](sea/README.md)
