# Galok · 海上浮岛

一个漂浮在真实海水之上的个人站点中转站，纯静态（HTML / CSS / JS，无构建步骤），开箱即用于 GitHub Pages。

## 特性

- 🌊 **真实海水**：Canvas 多层正弦波浪 + 水面高光闪烁 + 日月倒影光带 + 碎光点
- 🖱️ **划水涟漪**：鼠标移动留下细小涟漪，点击产生扩散波纹（参考 wemd.app 的水波交互）
- 🌗 **真实天空**：按地点与日期计算太阳、月亮、月相和银河转动，自然经历日出、黄昏、夜晚与日出
- 🌗 **手动切换**：右上一键切换（自动 → 日间 → 夜间 → 自动），自动模式按钮带蓝色徽标
- 🏝️ **浮岛卡片**：blog / books 等不同视觉样式，随海浪轻轻浮动，悬停投下涟漪
- 📱 **单页适配**：手机与电脑均一屏显示，无需滚动
- ⚡ **零依赖**：不依赖任何框架或 CDN（仅引入 Google 字体，可移除）

## 目录结构

```
galok-page/
├── index.html      # 页面结构
├── style.css       # 样式（卡片、布局、昼夜文字适配）
├── water.js        # 海水引擎（波浪/涟漪/昼夜色彩/日月星辰）
├── app.js          # 站点配置 + 卡片渲染 + 主题切换
└── README.md
```

## 快速自定义（只改 app.js 顶部）

打开 `app.js`，修改最上方的两处配置即可：

```js
const SITES = [
  {
    type: "blog",                 // 卡片视觉：blog | books | link
    name: "Blog",                 // 卡片标题
    desc: "BLOG · 思绪与札记",      // 卡片副标题
    url: "https://blog.example.com",   // ← 改成你的真实地址
    target: "_self",              // _self 当前页跳转 | _blank 新标签页
    accent: "#4a9fd6",            // 卡片主题色
  },
  {
    type: "books",
    name: "Books",
    desc: "BOOKS · 书海漫游",
    url: "https://books.example.com",
    target: "_self",
    accent: "#8a7bb8",
  },
];

const SITE_NAME = "Galok";        // 左上角品牌名
```

- 想加更多站点？在 `SITES` 数组里复制一项即可，卡片会自动排列。
- `type` 决定卡片插画：`blog`（文章卡）、`books`（书堆）、`link`（通用箭头）。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（例如 `galok-page`）。
2. 把这 4 个文件（`index.html` / `style.css` / `water.js` / `app.js`）推到 `main` 分支根目录。
3. 进入仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main` / `(root)`，保存。
4. 等约 1 分钟，访问 `https://<你的用户名>.github.io/galok-page/` 即可。

> 想用自定义域名（如 `galok.dev`）？在 Pages 设置里填 Custom domain，并把域名 DNS 指向 GitHub Pages。中转链接可改成该域名下的子域名。

## 本地预览

无需构建，直接双击 `index.html` 用浏览器打开即可。
（若想模拟 GitHub Pages 的服务器环境：在该目录运行 `npx serve .` 或 `python -m http.server`，再访问提示的地址。）

## 海水技术（参考 WebGL-Ocean-FFT 项目）

`water.js` 用单个 WebGL 片段着色器渲染真实海面（无需浮点纹理等扩展，稳健兼容）：
- **方向性 Phillips 波谱**生成 14 组确定性波形：对数波长分布覆盖长涌浪与短风浪，页面刷新后不会随机换一片海
- **Gerstner 轨道位移 + Stokes 二次谐波**：水平位移与波幅保持正确量纲，浪峰略尖、波谷圆滑
- **水体菲涅尔**（折射率 n=1.33）+ 宽窄两层日月高光 + HDR 色调映射
- **天文天空模型**：低精度日月轨道、月相终结线、稳定恒星场、真实亮星与银河带
- **多尺度云层**：程序化形态随风移动，云会遮挡星月并接受晨昏暖光、月光
- **频散涟漪波包**：局部扰动具有传播波前、群速度、几何扩散和 9 秒渐进释放，并会随主风向漂移、被基础浪弯曲
- 水面色乘天光 + 浪尖白沫 + 次表面散射
- 鼠标划水：涟漪 + 光标处持续搅拌 + 浪尖高光
- 按上海地点（可在 `water.js` 的 `SKY_LOCATION` 修改）进行天文时间计算；手动切换仍可快速预览白天、黄昏、有月的夜晚

## 想自己改海水？

- 改观测地点：`water.js` 中的 `SKY_LOCATION` （纬度、经度、UTC 偏移）。
- 改云量：`water.js` 的 `CLOUD_COVER` （`0` 为晴空，`1` 为阴天）。
- 改波浪统计/风向：`water.js` 的 `buildWaves()`（风速 `windSpeed`、风向 `windAngle`、波数 `NUM_WAVES`）。波谱使用固定种子，要换一片海可修改 `mulberry32()` 的入参。
- 改浪尖尖锐度：`frame()` 里的 `gl.uniform1f(U.uChoppy, 0.7)`（越大越尖，过大会有锯齿）。
- 改涟漪大小/密度：`maybeSpawnNatural()` 的 strength/生成间隔，以及 `waveField()` 中波包的 `k`、`width` 和 `release`。
- 改渲染精度：`MAX_PIXELS`（越大越锐利越耗 GPU）。
- 改卡片浮动节奏：`style.css` 的 `@keyframes bob` 与 `--bob-dur`。

---

享受你的海上浮岛 🌊
