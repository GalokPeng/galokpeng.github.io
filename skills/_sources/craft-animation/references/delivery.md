# 渲染与交付

以下示例从 Skill 根目录运行。把需要修改的样例复制到自己的项目，使用实际场景、输出路径和时长。生成工具逐帧写入 FFmpeg，成片成功后再替换目标 MP4。

## 二维和着色器场景

Python 路线需要 Pillow。写一个 `frame(t, width, height)`，返回指定尺寸的 Pillow RGB 图像。时间单位为秒，坐标原点在左上，输出宽高取偶数。启动绘制时可以在模块级加载字体和素材，用 `Path(__file__).parent` 定位随场景分发的文件。需要透明通道时从场景直接导出 RGBA PNG 序列，保留透明母版。

[绘图机源码](../assets/drawing_machine.py)里，笔迹用同一条解析轨迹从起点画到当前笔尖，齿轮中心和笔尖使用各自的角速度。换成机械装置、文字描边、曲线生长或数据运动时，可沿用这种“主体和痕迹共享位置函数”的写法。

GLSL 路线需要 Python 的 `moderngl` 包及能创建 OpenGL 3.3 上下文的驱动。Linux 无显示器时入口会再尝试 EGL。提供一个 GLSL 330 片元着色器，声明输出颜色，并按需声明 `uniform vec2 resolution`、`uniform float time`、`uniform int frame_index`。以 `gl_FragCoord`（左下原点）取样；脚本在编码时翻转到影片坐标。可运行的[日食镜头](../assets/eclipse.frag)用同一个遮挡盘控制剪影和受光侧。

```sh
python scripts/render_scene.py assets/eclipse.frag out/eclipse.mp4 --seconds 4 --size 960x540 --fps 30
```

内置入口渲染单通道、可按时间直接取样的镜头。多通道反馈或 3D 项目可用自己的渲染器生成图像序列；固定初始状态与随机种子，把迭代次数和时间步长一起存进工程。网页交互则可将同一姿态函数写成 `draw(progress)`，让按钮、滚动或拖拽驱动进度。录制样片时按帧输入确定进度，实际操作时从当前姿态平滑接管。

## 声音与逐帧复查

场景配置文件、镜头脚本或一张简单的事件表都可作为时间源。把各音效放到相应事件时刻，生成一条已对齐的音轨后随画面复用。渲染器的 `--audio` 接受 FFmpeg 可读的音频，从第零帧开始混入；短音轨补静音，长音轨裁到画面时长。

```sh
python scripts/render_scene.py assets/drawing_machine.py out/final.mp4 --seconds 6 --size 1920x1080 --fps 60 --audio mix.wav
python scripts/review_frames.py out/final.mp4 out/contact.png --frames 0 107 108 109 140 359
ffprobe -v error -show_entries stream=codec_type,width,height,avg_frame_rate,nb_frames,duration -of json out/final.mp4
```

帧号从 0 开始。恒定帧率下，总帧数为时长乘帧率取最近整数，最后一帧的编号为总数减一。审片工具按显示顺序解码并标出帧号；对可变帧率来片用显示时间戳定位剪辑点。只改局部的项目，抽查修改区间两侧；需要像素级保留时可比较解码帧摘要。复制压缩片段时检查切点能否独立解码、首尾时间戳是否连续。

## 把短片放进网页

先确认循环的接缝。周期运动可以令相位恰好走完一周，导出半开区间 `[0,T)`；首尾都保留相同端点会多停一帧。一次性叙事可在已认可的终帧稍作停留，用单独的网页副本过渡回开头。声音有信息价值时保留有声母版，用户需要声音、字幕或进度控制时为页面选择有控件的媒体方案。

对装饰性、静音的短循环，可以用 HTML 的 `picture`。下面是一组尺寸示例，根据页面的实际显示宽度、像素密度和细节选档。命令在已存在的 `out` 目录写文件；FFmpeg 需要对应的 AVIF 封装、libaom-av1 和 libwebp 编码支持。两种动画图片均设置为无限循环。

```sh
ffmpeg -i out/final.mp4 -an -vf "fps=30,scale=640:-2:flags=lanczos" -c:v libaom-av1 -cpu-used 6 -crf 38 -b:v 0 -pix_fmt yuv420p -loop 0 out/motion-small.avif
ffmpeg -i out/final.mp4 -an -vf "fps=60,scale=960:-2:flags=lanczos" -c:v libaom-av1 -cpu-used 6 -crf 36 -b:v 0 -pix_fmt yuv420p -loop 0 out/motion-large.avif
ffmpeg -i out/final.mp4 -an -vf "fps=24,scale=640:-2:flags=lanczos" -c:v libwebp_anim -q:v 72 -loop 0 out/motion.webp
ffmpeg -ss 5.5 -i out/final.mp4 -frames:v 1 -vf "scale=800:-2" -c:v libwebp -q:v 78 out/poster.webp
```

示例的海报时刻对应六秒绘图机场景。换片时选一张能独立传达内容的定帧。源片为 30 fps 时，桌面版也可输出 30 fps。比较编码后的运动细节、实际字节数和设备上播放流畅度。

```html
<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="poster.webp">
  <source media="(max-width: 700px)" type="image/avif" srcset="motion-small.avif">
  <source type="image/avif" srcset="motion-large.avif">
  <img src="motion.webp" width="960" height="540" alt="" style="display:block;width:100%;height:auto">
</picture>
```

按作品宽高预留位置。首屏若要立即显像，再提供一张体积很小的起始帧作容器背景。长时间自动运动时提供静态切换；若动画承载内容，为它写可读的说明。打开实际页面确认只请求所选档位，减少动态效果时只请求定帧，再至少播放到第二轮。
