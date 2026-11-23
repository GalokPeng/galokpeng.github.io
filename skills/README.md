# 个人 Skills

把可公开下载的 `.zip` 或 `.skill` 文件放在本目录，在 `catalog.json` 数组中添加对应条目。按数组顺序展示，`file` 填写包含扩展名的文件名。例如，上传 `my-skill.zip` 后可使用下面的条目。

```json
[
  {
    "name": "我的 Skill",
    "description": "这个 Skill 的用途。",
    "file": "my-skill.zip"
  }
]
```

提交到 `main` 后，访客可以在[主页的 Skills 区](https://galok.cn/#skills)下载原文件。

中文名称和简介使用 `name`、`description`，英文使用 `nameEn`、`descriptionEn`。如需提供可在线阅读的原版说明，将解压目录放在 `_sources/` 下，并在对应条目中将 `guide` 填为该目录名。目录内的 `SKILL.md` 和相对链接可直接在 GitHub 上阅读。
