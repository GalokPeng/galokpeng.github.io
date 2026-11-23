# Windows MSIX 与 Microsoft Store

先确认用户要拿到什么。只要可手动上传的 MSIX，完成构建、校验和文件交接即可。要求公开下载时验证指定 Release。要求更新商店时进入已有产品并提交认证；要求等到上线时继续跟踪发布和目标设备的可获取状态。GitHub 与商店可以分别处于不同版本。

## 1. 确认渠道和包身份

- 确认 Partner Center 的产品和当前分发类型。本流程适用于 MSIX 产品。已有 MSI/EXE 商店产品按其自己的提交要求处理；先查原产品记录再选流程。[微软分发方式](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/choose-distribution-path)
- 从此产品的“产品标识”取得 `Identity/Name`、`Identity/Publisher`、`Properties/PublisherDisplayName`。从“管理应用名称”对照已保留的显示名与语言，包括空格、标点和大小写。Store ID 定位商店商品；PFN 用于辨认包系列；二者都不能填进 `Identity/Name` 代替包名。更新沿用同一产品身份。名称被拒绝时先对照包**内部**清单；改上传文件名不会改变显示名。本地化名称还要解析 PRI 中的实际值。[应用标识](https://learn.microsoft.com/en-us/windows/apps/publish/view-app-identity-details) · [包要求](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/app-package-requirements)
- 为每个受支持的架构、最低系统和设备系列核对现有用户的升级路径。Windows 10/11 商店提交版本使用四段整数，第一段大于零，末段留零；根据项目版本策略生成并与相应设备当前可获得的包作数字比较。市场版本、提交序号和包版本分别记录。只改商店说明可复用原包。[版本与适用性](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/app-package-requirements)
- 包身份、显示名和声明的能力可从分发文件读取。公开发布 MSIX 会公开这些字段。手动上传只需构建身份配置；开发者账户密码、服务凭据和签名私钥留在各自受控环境，构建任务无需取得商店提交权限。

## 2. 在 CI 构建并核验交付字节

1. 从固定提交构建 Release 负载。在已有 MSBuild 打包项目、Windows SDK MakeAppx 或项目既有工具中选择合适入口，包含真正运行所需的二进制、架构匹配的依赖、图标和清单。用清单准备独立 staging 目录，核对安装目录与用户可写数据位置。用干净设备或隔离账号验证首次启动及同渠道旧版升级。[MakeAppx](https://learn.microsoft.com/en-us/windows/msix/package/create-app-package-with-makeappx-tool)
2. 检查工作流实际输出协议。单架构可产出 `.msix`，多架构可能交付 `.msixbundle`，某些工具链生成 `.msixupload`。Partner Center 支持这些提交格式。Actions 下载的外层 ZIP 要先解开；原本就是 `.msixupload` 的交付文件可按原格式上传。用于商店的 MSIX 由微软在分发环节签名；对外侧载则另行验证目标机器信任的签名，区分这两份文件及其摘要。[程序包上传](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/upload-app-packages) · [微软签名说明](https://learn.microsoft.com/en-us/windows/msix/package/sign-msix-package-guide)
3. 在持有打包输入的任务比较包内文件与 staging 清单，检查原生入口、资源、实际依赖和意外带入的数据。然后从正式输出目录记录每个最终文件的字节数、SHA-256 和候选提交。若承诺在 Release 提供 MSIX，将它列为必交附件，再执行 [公开发布校验](05-build-release.md)。手动交接时给使用者直达文件的链接及对应摘要，指出是否适合直接安装。

### 单个 MSIX 的离线预检

同名文件或界面显示同一产品名时，应同时核对包身份和独立发布记录中的 SHA-256。即使清单各字段都相同，重新构建也可能产生不同字节。缺失可信来源或摘要时把文件保留为待核验，从已知候选取得原交付件后再交接。

先复制并填写 [预期包身份](../assets/templates/msix-expected.json)。值来自已登记的产品、发布计划和审阅过的 manifest。若预期值也从待测包生成，就无法发现投错产品。架构以该包为准，示例中的 `x64` 可替换。首次发布可省略 `previous_version`；版本对比选填，适用于替换同一目标人群的旧包。

```text
python scripts/inspect_msix.py --package dist/Product.msix --expected store-expected.json
```

核对下载渠道的实际文件时传入 `--sha256 <受信发行清单中的摘要>`。本次提交的第四段必须为 0；`previous_version` 若来自已安装的 Store 包，可保留微软分配的非零第四段。工具只读单个主应用 MSIX，列出声明的设备系列和受限能力，对照身份、包版本和架构。出现 `resource_resolution_required` 时用 Windows SDK MakePri 或现有打包项目核对每个目标语言的资源及保留名称，再记录证据。对 bundle/upload 用相应 SDK 检查容器及其内部应用包，并另行记录最终上传容器的摘要。依赖解析、签名信任、完整块映射和商店认证仍需对应工具或平台验收。

## 3. Partner Center 的首发、更新与恢复

| 当前状态 | 操作与判定 |
| --- | --- |
| 首发或已有公开版本 | 首发使用已保留产品；更新在现有产品概述中选“开始更新”。先检查是否有正在编辑或认证的提交。属于本次工作时复用；遇到他人或不同候选的草稿时保留现场并确认归属。记录产品 ID、提交编号和原公开包版本。[更新已上架应用](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/publish-update-to-your-app-on-store) |
| 上传或验证中 | 在该提交的“程序包”上传已核验文件，等到显示目标版本、架构和验证结果。检查哪些旧包会被自动替换，尤其是多架构和最低 OS 版本有变化时。确保预定人群继续获得兼容包，再保存并返回概述核对包状态。超时或重复点击前先重查现有文件、版本及状态。[上传与设备系列](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/upload-app-packages) |
| 出现受限能力提醒 | 对照新旧清单，确认每项能力是否必要。Win32 桌面应用若声明 `runFullTrust`，在提交选项说明具体入口、用户触发动作、实际访问范围和审核员可复现的步骤，按事实说明是否提权。旧说明沿用时更新失效的版本和步骤。移除误加的能力后重新构建、验证。能力获批与包通过上传校验是两项检查。[受限能力](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/app-capability-declarations) |
| 可送审 | 核对必填项、商店说明和认证备注，再看发布方式为通过后自动、定时还是手动。沿用维护者选定的方式。执行已授权的“提交进行认证”，观察编号对应的状态从草稿进入预处理或认证中。操作超时先刷新核对状态，再决定是否重试。[提交选项](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/manage-submission-options) |
| 审核中、被拒或发布中 | 报告已观察到的阶段、待办和回查入口。被拒时读取该提交的认证报告，区分清单、应用行为、材料或发布控制问题。仅上传文件、仅通过验证、仅通过认证都不足以声称用户已经拿到更新。手动暂缓发布时，核对授权后再启动发布。[认证流程](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/app-certification-process) |
| 要求确认上线 | 查看新提交是否已发布，再检查目标市场/架构的公开入口。若旧版早已上架，仅凭商品页存在无法判定新版本。条件允许时在独立测试账号或设备从 Store 更新，读取实际安装的包版本；如有分批或缓存延迟，分别记录后台状态和已观察的用户可用范围。 |

常见交付回执可以很短，例如“Release 附件和摘要已验证；商店包 X.Y.Z.0，第 N 次提交处于预处理，配置为通过后自动发布；商店公开版仍是上一版”。按实际观察填写，未知项写明未知。若用桌面自动化完成提交，离开前结束本次采集会话并检查其已退出，见 [桌面验收收尾](03-verification.md)。
