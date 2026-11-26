# Android 安装包交付

## 决定交付物

| 实际用途 | 交付和验证方式 |
| --- | --- |
| 用户在手机上打开一个文件安装 | 优先构建目标设备兼容的独立 APK，有多种设备时可选项目支持的通用 APK。确认 ABI、最低系统、签名和功能模块覆盖。 |
| 项目原有生产流程生成 AAB | 保留上传产物。需要直接安装时，优先用同一配置生成 APK，或通过 bundletool 生成并签署适用的 APK set。通用包只纳入支持 fusing 的动态功能模块。 |
| 上一版由 Google Play 分发 | 核对商店实际的 app signing certificate。Play 上传证书与用户设备上最终 APK 的签名身份可能不同；不能用上传密钥推断本地 APK 可以覆盖商店安装。 |

## 构建与签名

对 Gradle 工程，先用仓库 wrapper 的 `projects`、`tasks --all` 确认模块和 variant。以标准 app 模块的 release 为例，Windows 执行 `.\gradlew.bat :app:assembleRelease`，macOS／Linux 执行 `./gradlew :app:assembleRelease`。有 flavor 时替换成实际发布任务。以任务输出或该 variant 的 output metadata 定位产物，避免从旧目录拿到同名 APK。框架包装命令可作为入口，例如已有 Flutter 工程可运行 `flutter build apk --release`。

优先使用已有 release signing 配置，检查实际签名者。已有发行版应沿用可兼容的签名身份或平台支持的合法轮换链。首次正式发布且由项目管理签名材料时，确保密钥归有持久访问权的所有者控制，并可安全恢复。按渠道明确标记调试签名和内部测试包。手工签名使用 Android SDK Build Tools，先 zipalign，再 apksigner sign，签名后修改 APK 需重新签署。[Android 应用签名](https://developer.android.com/studio/publish/app-signing) · [apksigner 命令](https://developer.android.com/tools/apksigner)

## 验收命令

以下占位符指本次输出及授权测试目标。若 SDK 工具未加入 PATH，使用同一套已安装 Build Tools 的绝对路径。

```text
aapt2 dump badging RELEASE.apk
apksigner verify --verbose --print-certs RELEASE.apk
zipalign -c -v 4 RELEASE.apk
adb -s SERIAL install -r RELEASE.apk
adb -s SERIAL shell am start -W -n PACKAGE/LAUNCH_ACTIVITY
```

先确认包名、versionName、versionCode、SDK 范围和签名者 SHA-256，与本次目标、旧版或批准的发布证书比对。首次安装也可用 `adb install`。平台的更新校验同时涉及应用标识、签名兼容和版本号；发布新版本按渠道规则递增 versionCode。启动组件用该包实际的启动 Activity。含原生库且目标设备有特定内存页要求时，再按 Android 官方工具检查 ELF 与 APK 对齐。[命令行构建](https://developer.android.com/build/building-cmdline) · [ZIP 对齐](https://developer.android.com/tools/zipalign) · [原生库页大小](https://developer.android.com/guide/practices/page-sizes)

看到 `INSTALL_FAILED_UPDATE_INCOMPATIBLE` 时，先比对已装包和新包签名。遇到降级、ABI 不符、SDK 太低或缺少 split，修正产物或测试目标。拆分交付要安装同一构建的完整适用集合，使用 `bundletool install-apks` 或 `adb install-multiple`。记录实际走通的路径。卸载以绕过签名冲突会丢失数据，也无法验证升级。[bundletool 与设备 APK 集合](https://developer.android.com/tools/bundletool)
