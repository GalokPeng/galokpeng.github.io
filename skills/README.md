# Skills 下载库

[个人 Skill](https://galok.cn/skills/) 与[引用 Skill](https://galok.cn/skills/referenced/) 各有独立地址。它们共用 `catalog.json`，按清单顺序展示。修改清单和 ZIP 后随主站一起发布。

| 字段 | 用途 |
| --- | --- |
| `collection` | `personal` 或 `referenced`。历史条目省略时按个人 Skill 展示。 |
| `name`、`nameEn` | 中、英文名称。 |
| `description`、`descriptionEn` | 中、英文用途简介。 |
| `file` | 本目录下保留原件的 `.zip` 或 `.skill` 文件名。 |
| `guide` | 个人 Skill 可填写解压后的目录名。说明位于 `_sources/<guide>/SKILL.md`。 |
| `source` | 引用 Skill 的 GitHub 来源，填写 `repository`、`revision`（完整提交 SHA）、`path`（仓库内 Skill 目录）、`license` 和 `licenseFile`（相对该目录）。 |

引用卡片的源目录、说明、许可和下载应对应同一提交。当前的 Skill Creator 取自 [OpenAI 官方快照](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.system/skill-creator)，ZIP 内保留原有目录结构和 Apache-2.0 许可。
