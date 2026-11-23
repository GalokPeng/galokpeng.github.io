# Skills 下载库

[个人 Skill](https://galok.cn/skills/) 与[引用 Skill](https://galok.cn/skills/referenced/) 各有独立地址。它们共用 `catalog.json`，按清单顺序展示。修改清单和 ZIP 后随主站一起发布。

| 字段 | 用途 |
| --- | --- |
| `collection` | `personal` 或 `referenced`。历史条目省略时按个人 Skill 展示。 |
| `name`、`nameEn` | 中、英文名称。 |
| `description`、`descriptionEn` | 中、英文用途简介。 |
| `file` | 本目录下保留原件的 `.zip` 或 `.skill` 文件名。 |
| `cover` | 可选封面，填写 `covers/` 内的 WebP 文件名（小写字母、数字、短横线）。推荐画幅 12∶5，省略时展示文字卡片。 |
| `guide` | 本站收录的说明目录。入口位于 `_sources/<guide>/SKILL.md`。 |
| `source` | 引用 Skill 的 GitHub 来源，填写 `repository`、`revision`（完整提交 SHA）、`path`（仓库内 Skill 目录）、`license` 和 `licenseFile`（相对该目录）。 |
| `reference` | 随插件提供的 Skill 可填写发布方 `publisher`、插件版本 `version` 和官方说明 `url`。可用 `label`、`labelEn` 区分公开版参考链接，可用 `license` 标注包的许可。仅收录官方说明时省略 `file`。 |

引用卡片的源目录、说明、许可和下载应对应同一提交。当前的 Skill Creator 取自 [OpenAI 官方快照](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.system/skill-creator)，ZIP 内保留原有目录结构和 Apache-2.0 许可。

PDF、Presentations、Spreadsheets 和 Excel Live Control 的下载来自 OpenAI 插件版本 `26.1119.11507`。这四项的插件清单标明 MIT，独立 ZIP 附许可文本。PDF 卡片另附 OpenAI 在 GitHub 发布的不同版本供参考。ImageGen 的下载取自卡片所链接的 Codex 提交。
