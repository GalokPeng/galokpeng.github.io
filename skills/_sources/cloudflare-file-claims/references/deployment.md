# 上线与维护

## 上线前

确认用户要公开的完整子域名和对应的 Cloudflare zone。使用独立子域名可以保留根站。源文件只进入私有 KV；D1 保存卡密哈希、领取记录、各文件配额及传输状态。Worker 通过 HTTPS 返回附件，关闭 workers.dev 和预览网址。模板每 20 MiB 分块，多个文件内容相同时共享存储。盘点整个账户已有用量，再结合预计领取次数估算 KV 读取、D1 行读写及 Worker 请求。服务使用免费的产品能力，费用仍取决于账户套餐和实际使用量。检验额度时参考 [Workers 价格](https://developers.cloudflare.com/workers/platform/pricing/)、[KV 限制](https://developers.cloudflare.com/kv/platform/limits/) 和 [D1 价格](https://developers.cloudflare.com/d1/platform/pricing/)。

从生成项目运行 `npx wrangler whoami`。沿用已授权的账户。若需登录，使用 `npx wrangler login`，浏览器回调失败时用 `npx wrangler login --device --browser=false`，请用户在 Cloudflare 的设备授权页完成授权。也可以用环境变量 `CLOUDFLARE_API_TOKEN` 提供限定到目标账户和 zone 的令牌。当前模板读取 zone、DNS 记录、Worker 列表和域名绑定，管理 Workers Scripts、Workers Routes、D1 和 Workers KV。DNS 预检需要目标 zone 的 DNS Read。出现 403 时按出错的读取或写入操作补齐权限。令牌只在本机配置，不写进说明、命令示例或验收报告。

## 执行上线

以下使用保留示例域名，执行时替换为用户授权的真实目标。

```sh
python portal.py provision --zone example.com --host files.example.com
python portal.py publish
python verify.py --live
```

1. `provision` 验证活跃 zone、子域名已有的 DNS/Worker 绑定和随机 Worker 名称，创建或找回本项目专属的 D1 与 KV。资源 ID 保存在 `.private/target.json`，生产配置保存在 `wrangler.remote.json`。遇到其他服务占用时保留现状，选用用户授权的空闲主机或单独规划迁移。
2. 首次生成的生产口令与签名密钥在 `.private/production.json`。要使用指定管理员口令，可在发布前只编辑 `ADMIN_PASSWORD`（模板支持至少 10 个字符）。保留 `SIGNING_KEY`，它签名既有领取结果页与下载链接。生产与开发分别使用独立凭据。[Cloudflare Worker Secrets](https://developers.cloudflare.com/workers/configuration/secrets/)
3. `publish` 核对目标配置和源文件哈希，运行可重复执行的建表语句，按内容哈希上传尚未完成的分块，再发布 Worker 及密钥。Cloudflare 为 Custom Domain 设置 DNS 并签发证书。[Custom Domains 文档](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
4. `verify.py --live` 只向已记录的 HTTPS 目标发送该项目的管理员凭据，生成专用卡密并验证实际传输。代理、DNS 或证书尚未就绪时，先核对 Cloudflare 绑定和证书状态，待公网可访问再复验。本地通过与 Worker 已发布是两个不同的验收结果。

## 后续变更

- 调整默认次数、标题或后台路径时，编辑项目的 `src/manifest.json` 中的 `site`，在原项目执行本地验收，再发布。既有卡密的额度来自 D1，每个文件可在管理后台单独修改；最小值是 1 或已经使用的次数，最大值是 999。
- 保留生成项目、源文件、生产配置以及 `.private/` 的私密备份。口令变更会使旧管理会话失效。向其他人分发 Skill 时，分发原始 Skill 压缩包。
- 默认每个项目对应一组固定文件和一个独立存储目标。以相同文件名换版本或添加文件，最简单的方法是用新集合和另一个空闲子域名生成独立站点。若用户要求原域名同时保留历史版本，先把每份授权绑定到不可变文件版本并迁移，再改变目录；脚本会阻止直接用不同文件目录覆写已发布目标。
- 中途失败时，用同一个项目、状态文件和目标恢复。已成功上传的块会跳过。若有人在 Cloudflare 后台删除过分块，先核实缺失键及本地哈希，再移除状态中的对应上传标记并重新发布。错误持续时按故障点排查，无需循环创建新资源。若远端数据库或 KV 已被替换，先核对并恢复其记录；发布脚本不负责恢复被删除的云数据。
