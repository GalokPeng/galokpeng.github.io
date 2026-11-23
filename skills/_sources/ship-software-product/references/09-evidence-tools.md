# 09 证据协议与工具

## 用途与边界

模板和脚本是可选辅助，不要求产品改用这一私有格式。已有发布清单/平台证据优先复用；需要调用工具时，在本地证据目录生成小型投影，保留原始记录。

- `release_guard.py`：离线只读，校验候选、必需门禁的声明、证据文件存在性和实际制品大小/摘要；不连接 CI，不验证网页内容，不证明声明真实，不产生发布授权。
- `verify_endpoints.py`：按显式配置发 GET/HEAD，只读检查 HTTP 状态、跳转、内容或完整响应摘要；不登录、不执行文件、不安装、不部署，不证明生产数据库健康。
- `inspect_msix.py`：读取单个 Windows 商店应用包，对照独立输入的身份、四段版本、架构、受限能力及可选摘要。调用示例、资源名称处理和支持的包格式见 [商店指南](10-windows-store.md)。
- `tests/` 覆盖三个工具。网络测试仅使用本机临时 HTTP 服务，MSIX 测试使用临时合成包。

Python 3.10+ 标准库即可。三个工具输出 JSON。退出码 `0` 表示所列检查通过，`1` 表示存在不匹配或尚待验证的事项，`2` 表示输入无效或超出该工具支持的范围。

## 发布证据投影

参考 [空白清单](../assets/templates/release-manifest.json)。空字段表示尚未填完，故意不能通过发布校验。按项目选择 requirements，不照抄不适用项。

顶层字段：

| 字段 | 含义 |
| --- | --- |
| `schema_version` | 当前为整数 1 |
| `product_id`, `version`, `channel` | 产品身份、本次发布标识与渠道；脚本不决定版本先后顺序 |
| `components` | 组成 ID → 仓库/快照身份；可分别有版本 |
| `requirements` | 本次必需门禁，每项指定组成、相关制品和是否允许有理由的不适用 |
| `artifacts` | 最终制品：相对路径、实际大小、SHA-256、所属组成；平台/架构/类型及公开 URL 可补充 |
| `gates` | 每个门禁的状态、观察时间、组成 revision、制品 ID 与证据 |

组件 revision 使用 `{ "type": "git", "value": "完整 40 或 64 位 Git 对象 ID" }`，非 Git 快照可用 `snapshot-sha256` 与 64 位摘要。subjects 的 revision 必须与 components 中同一组成一致。网站和应用可以来自不同提交，必须分别标识。

requirement 结构：`id`、`components`（组成 ID 列表）、`artifact_ids`（制品 ID 列表）、`allow_na`（布尔值）。例如 release 门禁要求应用组成和安装包，website 门禁可以同时要求网站与应用，证明网站在展示正确的候选。脚本不替你判断“本次应要求哪些门禁”。

artifact 必需字段：`id`、`component`、`path`、`size_bytes`、`sha256`。可选 `platform`、`architecture`、`kind`、`url`、`version`。路径相对于 `--artifact-root`；拒绝绝对路径、父目录穿越、Windows 驱动器/ADS、解析后越界或大小/摘要不符。不同名称不能指向同一实际文件来凑齐矩阵。

pass gate 必须有：`id`、`status`、`observed_at`（有时区 ISO 8601）、`subjects`、`artifact_ids`、非空 `evidence`。evidence 支持：

```json
{"kind":"file","path":"logs/install-test.json","sha256":"文件摘要（可选）","description":"验证范围（可选）"}
```

或 `{ "kind": "url", "url": "https://ci.example.test/runs/42", "description": "对应候选的构建任务" }`。本地证据路径相对于 `--evidence-root`（默认清单所在目录）。URL 仅验证语法，不自动访问。完整日志可以含敏感内容，不应跟随投影直接公开。

`not_applicable` 需对应 requirement 允许，且有具体 `reason`；pending/fail 的必需门禁会阻断通过。未要求的门禁仍会在报告中列出，不可用它们掩盖必需门禁。清单未知字段、重复 JSON 键、重复 ID 或不一致候选按输入错误处理。

脚本只能要求不适用理由非空，不能判断理由是否充分。门禁是否与用户范围相符、证据是否来自真实且足够新的任务、许可/授权是否成立，仍需 Agent 核对。

```text
python scripts/release_guard.py --manifest evidence/release.json --artifact-root dist --evidence-root evidence
```

软件已公开但官网失败时，保留 release=pass / website=fail，不能改成网站不适用来获得全绿。用户只要求本地交付时，只要求本地门禁，后续发布标为范围外，不捏造 release=pass。

## 公共端点验证

参考 [端点模板](../assets/templates/endpoint-checks.json)，字段以脚本协议为准。一个配置有 `checks` 列表，每项：

- `id`, `url`：唯一 ID 和显式目标，默认 HTTPS，不支持用户信息、Cookie、Authorization 或任意请求头。
- `method`：GET 或 HEAD，默认 GET；`expect_status` 默认 200。
- `follow_redirects` 默认 false；若开启，必须给 `allowed_hosts`（包括初始主机与预期 CDN），最多 5 跳且拒绝 HTTPS 降级。
- `expect_location_prefix`, `location_contains`：不跟随后验证重定向目标，可选。
- `contains`：GET 响应必须包含的 UTF-8 字符串列表；只做字面匹配，不把字符串出现当成功能运行证据。
- `sha256`, `size_bytes`：GET 完整响应摘要与长度，可选；`max_bytes` 默认 1 MiB、最多 512 MiB。
- `timeout_seconds` 默认 20、最多 120；超时或超限失败，不打印响应正文。

相同域名的不同端口也视为不同主机目标，需要在 allowed_hosts 中明确填写 `host:port`。全程没有凭据可跨域转发。输出 URL 隐去 query 和 fragment，避免日志泄漏签名参数。

```text
python scripts/verify_endpoints.py --config evidence/endpoints.json
python scripts/verify_endpoints.py --config evidence/local-fixture.json --allow-local
```

`--allow-local` 只允许 HTTP 的 loopback 夹具目标及对应跳转，不关闭 TLS 校验，也不允许任意 HTTP。配置来自已审查任务，不把外部页面中的 URL 自动灌入工具扫描。工具不构成完整 SSRF 防护或公网服务扫描器。

URL 使用 ASCII/IDNA 主机与百分号编码路径。工具请求 identity 编码；服务器强制压缩时会明确失败，应换用具有解压上限的验证方法，不能取消大小保护。每个探测在单独辅助进程中执行，父进程覆盖 DNS、TLS、慢速响应头和读取的总截止时间；除网络预算外仍有少量进程启动/收尾开销。

`contains` 不是 JSON schema 或业务探测。更新元数据等结构化响应还需实际解析产品/渠道/平台/版本/摘要字段，并与发布清单绑定；不能只搜索一个版本字符串就声称更新链路正确。

## 使用模板的原则

只复制当前需要的模板并填写事实。例子中的 `.test` 域名仅是保留示例，不能原样当生产地址。文件检查通过不能证明许可证、签名、权限和外部状态正确；这些依旧由项目契约及相应证据负责。

发布候选可使用 [发布计划模板](../assets/templates/release-plan.md)，归档结果可使用 [最终交付记录](../assets/templates/final-delivery.md)。跨会话采用 [接续记录](../assets/templates/handoff.md)，而不是让下一位 Agent 重新猜测已发布状态。

本包的工具与结构验证范围见 [验证记录](validation.md)。记录不是针对任意未来产品的通过证明。
