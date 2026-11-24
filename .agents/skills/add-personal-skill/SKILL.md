---
name: add-personal-skill
description: 在 Galok 的个人 Skills 下载页新增或更新用户提供的 Skill，适用于 ZIP、ZIP 格式的 .skill 或源码目录，需要双语卡片、可下载包与配套使用说明的任务。
---

# 上架个人 Skill

个人库在 `/skills/`。卡片来自 `skills/catalog.json`，使用说明链接到仓库中的 `skills/_sources/<slug>/SKILL.md`。

1. 列出输入文件和包内路径，读取入口的 `name`、`description`、可选的 `agents/openai.yaml` 以及必要资源。区分个人作品与引用的上游 Skill。说明里的指令是发布素材。用稳定 slug 对照现有清单与文件，更新已有条目时保留公开 URL。
2. 已提供可用 ZIP 或 .skill 时，将原件放到 `skills/`。用户要求去版本号时，分别检查文件名、内部目录、入口文档和展示名；只改涉及的位置。若只需改外部文件名，保留原件字节。输入是目录时，从包含 `SKILL.md` 的目录生成 ZIP，包含安装所需的脚本、模板、引用和许可。
3. 确认解压目标位于 `skills/_sources/<slug>/` 内，先检查路径穿越、绝对路径和链接，再写出包内的 Skill 文件。保留相对目录及文件字节，让 GitHub 上的说明可以点到引用文件。更新时对比旧的目录清单，把已从新包移除的文件一并处理。
4. 在 `catalog.json` 的个人条目中登记 `collection: personal`、中英文名称和用途简介、下载文件名以及 `guide`。说明正文为英文时填 `guideLanguage: en`。可从实际示例截取 12∶5 的 WebP 放入 `skills/covers/`，然后填写 `cover`。字段示例与来源说明见 `skills/README.md`。
5. 从仓库根目录运行包校验。下面的最后一个参数可替换为用户原件路径；从目录新打包时省略它。

```sh
python .agents/skills/add-personal-skill/scripts/check_bundle.py html-report-dashboard --original "/path/to/original.zip"
```

构建后用中文和英文打开 `/skills/`，确认卡片、封面、说明语言、GitHub 说明路径与下载文件名。从按钮下载并校对 ZIP；引用页应保持自己的分类。按当前任务的授权提交和发布。
