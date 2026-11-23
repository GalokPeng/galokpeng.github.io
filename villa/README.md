# Galok的世界

打开页面后，访客会直接站在客厅，视线高度为 1.65 米。房屋约 22 × 12 米，临海一侧有露台和通往岛岸的石阶。[进入 Galok的世界](https://galok.cn/world/)

## 启动

在本目录运行以下命令。开发地址为 <http://127.0.0.1:4176/>。浏览器需要支持 WebGL 2。

```sh
npm ci
npm run dev
```

运行 `npm run build:pages` 会将页面和资源输出到仓库的 `world/` 目录。发布时一并提交源码和这些构建产物。

## 体验

- WASD 或方向键行走，按住 Shift 快走，拖动鼠标环顾。单击空处可锁定鼠标，Esc 释放。触屏使用左下方向盘。
- 露台门右墙的「调光」开关同步控制门扇玻璃、固定半圆窗的雾化和透明状态。门把手独立开关门。
- 客厅和卧室各有一扇向外开启的海景窗，瞄准中间竖框上的黄铜摇把操作。床头右侧「天窗」开关让白色遮板滑入天花板，透过固定的屋顶玻璃可以看星空。
- 靠近幕布、音箱、电脑或床，瞄准后点击或按 E。躺下后仍可环顾，按 E 或点击「起身」可回到床边。
- 打开客厅投影后，可在幕布上输入和点击。卧室电脑使用轻块官网的交互桌面。点击「返回漫游」会保留屏幕当前状态，点击「关机」会关闭网页。两台设备开机时需要联网。[投影网站](https://pgxcg.qzz.io/) · [轻块交互桌面](https://lightblock.galok.cn/desktop/?lang=zh)
- 天空沿用原主页 `water.js` 的上海观测点、日月轨迹、月相、恒星时、银河和按日期生成的天气过程。默认是真实时钟，右上角可预览日出、日落、星夜、月升、月落，也可以选择原来的三档时间加速。海面沿用原版 14 组 Phillips 波谱，并反射三维海岸。
- 餐厅后面通向书房。点击书架正面的书可阅读和翻页，阅读器左上角能切换书目。在 `src/books.js` 中添加书名、书封颜色和正文段落即可上架新文章。
- 客厅、卧室、厨房、书房都有墙上开关。靠近窗帘两端的黄铜拉绳可以开合。餐椅、书桌椅、露台长椅和秋千可坐下，点「起身」或按 E 回到原处。
- 客厅与卧室之间的隔墙边有猫咪饮水机和喂食器。每天上海时间 07:00、12:00、18:00 自动出粮，按喂食器按钮可以加餐。关闭页面期间的餐次按真实时钟恢复，预览天空时钟与喂食时钟独立。厨房的饮水机和咖啡机可以接一杯饮品。
- 卧室床边通向带洗手台、马桶和淋浴的卫生间。门框旁的黄铜按钮控制移门，底部为猫留了通道。猫砂盆放在卫生间后墙边，猫离开感应区五秒后，耙齿会把结团送入集便仓。猫靠近时，清理会暂停。

## 本地投影视听

Windows 可双击 `preview.cmd` 打开带投影扩展的独立预览浏览器。它使用本项目专用的浏览器配置目录。首次在另一台机器运行时，先执行 `npm ci` 和 `npx playwright-core install --no-shell chromium`。标准预览仍可通过 `npm run dev` 打开。

投影开机会打开 ShareAll，在「在线影视」开始播放后，播放器全屏按钮会将画面铺满实体幕布。左右声道分别接到房间内两只音箱，随观众距离和头部方向进行 HRTF 定位，并混入短混响。点击「返回漫游」可在房间中继续观看和聆听。

站内这两项功能使用 `projector-link` 中的播放器适配代码。扩展匹配 `pgxcg.qzz.io`，在收到 `https://galok.cn` 或本地预览页面的握手后启用。该站使用同源媒体或通过 HLS/MSE 生成的媒体时可以进入音频处理。站点维护者也可以在播放器页面中依次引入 `room-audio.js` 和 `shareall.js` 以支持相同协议。

普通浏览器的原生全屏受 iframe 权限策略限制。幕布工具栏的「本机影片」支持直接选择浏览器能播放的视频，同样在幕内观看并经过双音箱。文件在当前浏览器内播放。[Fullscreen 权限策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen) · [Web Audio](https://www.w3.org/TR/webaudio-1.1/)

## 渲染与素材

调研了 Three.js 和 Babylon.js 的物理材质渲染。本项目选择 Three.js，将米制建筑、扫描家具、天空环境光、太阳投影与反射海面放在同一场景，再用 CSS3DRenderer 把真实网页对齐到屏幕。靠近设备后，交互页面保持正对镜头，浏览器负责处理输入和滚动。[Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html) · [Three.js CSS3DRenderer](https://threejs.org/docs/pages/CSS3DRenderer.html) · [Babylon.js PBR](https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR/)

房屋、床品、厨房、玩偶、岛屿和天气在代码中构建。家具模型、实拍天空和材质贴图来自 Poly Haven。预览随附已减面的模型和压缩贴图。重新生成素材时，先运行 `npm ci` 并为 Python 安装 Pillow，再用 PowerShell 7 执行 `tools/assets.ps1`。脚本会校验原始文件，然后生成浏览器使用的版本。[Poly Haven 资源许可](https://polyhaven.com/license)

客厅和卧室的装框画作使用大都会艺术博物馆开放馆藏中的公共领域图像。[《Classical Landscape with Figures》](https://www.metmuseum.org/art/collection/search/437039) · [《Wheat Field with Cypresses》](https://www.metmuseum.org/art/collection/search/436535)

索马里猫模型由 DreamNoms 制作，按 CC BY 4.0 授权。住宅版保留作者的骨骼和五段动画，移除了展示地台，调整了毛色、纹理和眼睛材质，并加入进食、饮水的头颈动作。[模型原页](https://sketchfab.com/3d-models/somali-cat-animated-ver-12-e185c3fd92b64c32b4515a32b29252fc) · [许可](https://creativecommons.org/licenses/by/4.0/)

## 验证

`npm run build` 生成静态文件。保持开发服务器运行，在另一个终端执行 `node tools/check.mjs` 可用已安装的 Chrome 检查房间交互和实际网站嵌入。执行 `node tools/check.mjs --cinema` 可在带扩展的浏览器中额外验证幕内全屏和两个声道的实际信号。截图保存在 `.qa/`。
