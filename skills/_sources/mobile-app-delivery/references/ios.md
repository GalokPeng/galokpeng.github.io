# iOS 设备包交付

## 先按安装人和渠道选择路径

| 用途 | 成功所需证据 |
| --- | --- |
| 开发或 Ad Hoc，安装到指定 iPhone | 设备构建、与渠道匹配的签名身份及私钥或获授权的托管签名、有效描述文件、目标设备在许可范围内。安装测试覆盖目标 iOS 版本，开发签名按设备提示处理开发者模式与信任。 |
| TestFlight | 在用户已授权的分发流程中成功上传并处理，对应测试者获得访问权限。外部测试按需完成 Beta 审核。只导出 IPA 时，交付状态止于本地导出。 |
| App Store | 使用 App Store Connect 对应的签名与导出路径，分开记录上传、审核和发布。商店渠道导出的 IPA 不提供任意 iPhone 本地直装能力。 |
| 企业内部 | 仅在组织已具备相应资格、身份及合法内部用途时使用其渠道，核对内部安装条件。 |

App Store 交付给用户的最终安装包由 Apple 处理，可能没有嵌入的描述文件。不能仅凭有没有 `embedded.mobileprovision` 对所有渠道判断签名成败。[Apple 注册设备分发](https://developer.apple.com/documentation/xcode/distributing-apps-to-your-development-devices) · [Apple 描述文件说明](https://developer.apple.com/documentation/technotes/tn3125-inside-code-signing-provisioning-profiles) · [TestFlight](https://developer.apple.com/testflight/)

## 设备归档与导出

优先用项目已有的 Xcode 构建主机或授权的 macOS CI。Windows 或 Linux 上可以准备工程、验证共享代码、检查和交付已授权构建的归档。只有项目已具备可验证的非 macOS 设备构建或签名链路时，沿用该链路并报告实测覆盖。模拟器也可能使用 arm64，单独的 CPU 标识不足以证明面向 iPhone。只有模拟器程序、网页资源或源代码时，交付这些实际产物及真实阻塞。

在可用的 Xcode 环境用 `xcodebuild -list` 发现 workspace／project 和 scheme。使用项目确认的配置及 ExportOptions.plist，导出方式取值以安装版本的 `xcodebuild -help` 为准。导出目的选本地 export；按用户授权另行执行 upload。以下示例使用 workspace。

```sh
xcodebuild -workspace "$WORKSPACE" -scheme "$SCHEME" -configuration Release -destination 'generic/platform=iOS' -archivePath "$ARCHIVE" archive
xcodebuild -exportArchive -archivePath "$ARCHIVE" -exportPath "$EXPORT_DIR" -exportOptionsPlist "$EXPORT_OPTIONS"
```

只有 project 时改用 `-project`。核对 archive 实际包含预期的主应用、扩展、资源和框架。签名应覆盖每个需要签名的嵌套目标，entitlements 要与对应 App ID 和 profile 授权一致。升级前比对 bundle ID、Team／应用标识、构建版本及需要延续的 Keychain access groups、App Groups 等。仅在已经授权开发者账户变更时才使用会创建或更新签名资源的选项。不要将个人账号密码或可导出的私钥写入工程。[Apple 测试与发布分发](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)

## 检查导出的同一份 IPA

使用新建的临时目录展开可信构建输出，令 APP 指向解包后 `Payload` 中的主应用，EXE 指向其 Info.plist 声明的可执行文件。检查应用标识、短版本、构建号和最低系统。使用 Xcode 工具检查 Mach-O 的设备平台（多架构时逐 slice 检查）。在 macOS 上使用原生签名工具进行校验：

```sh
xcrun vtool -show-build "$EXE"
codesign --verify --deep --strict --verbose=2 "$APP"
codesign -d --verbose=4 "$APP"
codesign -d --entitlements :- "$APP"
```

对于带描述文件的设备测试包，可用 `security cms -D -i "$APP/embedded.mobileprovision"` 解读内容，在本机核对有效期、Team、证书、App ID、权限、适用设备及扩展的独立配置。摘要只保留必要结论。签名完整性、配置内容和设备授权是不同检查；目标设备的安装、冷启动和核心操作才构成该设备实测。可用 Xcode、Apple Configurator 或受支持的设备管理命令在已授权设备上执行。签名失败时保留可复用的 archive，修复实际缺项并重新导出。若产物缺签名，文件名标记 `-unsigned.ipa`；若有签名但过期、渠道不符或尚未核验，说明实际状态。
