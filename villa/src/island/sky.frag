// Sky, stellar catalogue, Milky Way, lunar terminator and lightning from the original water.js.
uniform vec2  uResolution;
uniform float uTime;
uniform vec3  uSunDir;
uniform vec3  uMoonDir;
uniform vec3  uCelestialColor;
uniform float uSunVisibility;
uniform float uMoonVisibility;
uniform float uMoonPhase;
uniform float uNight;
uniform float uLatitude;
uniform float uSidereal;
uniform float uCloudCover;
uniform float uCameraYaw;    // 相机偏航（弧度，绕 y；0=朝南 +z）
uniform float uCameraPitch;  // 相机俯仰（弧度，绕 x；0=水平）
uniform vec3  uSkyZenith;
uniform vec3  uSkyHorizon;
uniform vec3  uWaterDeep;
// 天气系统：雨/闪电/乌云（由 JS 状态机驱动，全随机）
uniform float uRainIntensity;  // 0-1 当前雨强
uniform float uFlash;          // 0-1 闪电闪光强度
uniform float uCloudDarken;   // 0-1 乌云暗化（暴风雨时云变灰沉）
uniform float uLightningSeed; // 闪电纹随机种子
// 风力系统：影响云飘速、水面浪高、雨滴偏向
uniform float uWindLevel;     // 0-1 风力等级（即时生效）
uniform vec2  uWindDir;       // 风向（xz 平面单位向量，平滑旋转）
uniform vec2  uWindOffset;    // 累积云漂移位移（积分 dir*level*dt，风变时云不跳批）
// 星空与极光
uniform float uStarSeed;      // 星空随机种子（按日期变化，每天星空布局不同）
uniform float uAurora;        // 极光强度 0-1（高纬度+夜晚+随机概率才>0）
// 云层时间：独立周期 mod，避免与 uTime 的 3600s mod 冲突导致云图案旋转跳变
// 周期 = 2π / 0.004 ≈ 1570.7963s，恰为云旋转一圈，mod 边界无缝衔接
uniform float uCloudTime;

float hash13(vec3 p){
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float hash21(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p){
  float n = hash21(p);
  return vec2(n, hash21(p + vec2(19.19, 7.23)));
}

float valueNoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// 周期化 valueNoise：格点在 period 边界环绕，保证 mod(p, period) 无缝衔接。
// 用于云噪声：windOff 长期累加会溢出 highp float 精度，JS 端 mod 256 后
// 配合此函数可实现无缝循环（mod(p+256, 256) = mod(p, 256)，格点 hash 完全一致）。
// period=256 远大于视野内坐标范围（约 ±110），看不到重复图案。
float valueNoisePeriodic(vec2 p, float period){
  p = mod(p, period);
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  // 格点环绕：i+1 超过 period 时回到 0，保证边界两侧 hash 连续
  float a = hash21(i);
  float b = hash21(mod(i + vec2(1.0, 0.0), period));
  float c = hash21(mod(i + vec2(0.0, 1.0), period));
  float d = hash21(mod(i + vec2(1.0, 1.0), period));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float cloudNoise(vec2 p){
  // 云噪声用周期版（period=256）：配合 JS 端 windOff mod 256 防溢出，且无缝循环
  float n = valueNoisePeriodic(p, 256.0) * 0.53;
  p = mat2(0.80, -0.60, 0.60, 0.80) * p * 2.03 + 8.7;
  n += valueNoisePeriodic(p, 256.0) * 0.29;
  p = mat2(0.76, -0.65, 0.65, 0.76) * p * 2.11 + 3.1;
  n += valueNoisePeriodic(p, 256.0) * 0.18;
  return n;
}

float cloudField(vec3 dir, float t){
  if(dir.y<=.015)return 0.0;
  float projection = 1.0 / (0.24 + max(dir.y, 0.0));
  // 云漂移 = 累积风位移（JS端积分 dir*level*dt）：风变时云保持形状只改漂速，不跳批
  vec2 windOff = uWindOffset;
  // 缓慢旋转采样坐标，让云朵形状本身随时间演化（卷云拉伸感）。恒定速率，与风力无关
  // 用 uCloudTime（周期 2π/0.004 无缝）而非 t（mod 3600 会在边界跳变 14.4rad≈2.29圈）
  float ang = uCloudTime * 0.004;
  mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  vec2 base = rot * (dir.xz * projection * 1.75) + windOff;
  vec2 p = base;
  // fbm 4 层叠加：粗轮廓 + 中细节 + 细节 + 微纹，增加云的蓬松体积感和不规则边缘
  float n = cloudNoise(p * 0.72) * 0.50;
  n += cloudNoise(p * 1.85 + vec2(4.2, -1.7)) * 0.27;
  n += cloudNoise(p * 3.7 + vec2(8.1, 3.3)) * 0.15;
  n += cloudNoise(p * 7.4 + vec2(2.5, 6.7)) * 0.08;
  float threshold = mix(0.76, 0.43, uCloudCover);
  float cloud = smoothstep(threshold, threshold + 0.10, n);
  return cloud * smoothstep(0.015, 0.13, dir.y);
}

// 高空卷云层：薄纱状，与低层积云共享旋转和漂移方向（同步飘动，只是一层云的高低层次）
// 高空风稍快（1.15×），但方向与积云一致，视觉上是同一片云系的纵深，而非两层独立云
float cirrusField(vec3 dir, float t){
  if (dir.y < 0.12) return 0.0;
  // 与 cloudField 共享旋转矩阵，保证两层旋转同步（同样使用 uCloudTime）
  float ang = uCloudTime * 0.004;
  mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  float projection = 1.0 / (0.12 + dir.y);
  // 漂移方向与积云相同（uWindOffset），仅速率稍快（1.15×，高空风强）
  vec2 windOff = uWindOffset * 1.15;
  vec2 base = rot * (dir.xz * projection * 2.8) + windOff;
  vec2 p = base;
  float n = cloudNoise(p * 0.9) * 0.60;
  n += cloudNoise(p * 2.3 + vec2(7.3, 2.1)) * 0.40;
  float threshold = mix(0.74, 0.55, uCloudCover * 0.6);
  float cloud = smoothstep(threshold, threshold + 0.06, n);
  return cloud * smoothstep(0.12, 0.30, dir.y) * 0.55;
}

// 视线 (ro, rd) 到 3D 线段 (a,b) 的最短距离。
// 用于把 3D 空间里的折线（雨滴 / 闪电）投影到屏幕，呈现真正的立体感。
float raySegDist(vec3 ro, vec3 rd, vec3 a, vec3 b){
  vec3 u = b - a;
  vec3 w0 = a - ro;
  float A = dot(u, u);
  float B = dot(u, rd);
  float C = dot(rd, rd);
  float D = dot(u, w0);
  float E = dot(rd, w0);
  float denom = A * C - B * B;
  float s, t;
  if (abs(denom) < 1e-5){
    s = 0.0;
    t = max(-E / max(C, 1e-5), 0.0);
  } else {
    s = clamp((B * E - C * D) / denom, 0.0, 1.0);
    t = max((A * E - B * D) / denom, 0.0);
  }
  return length((a + u * s) - (ro + rd * t));
}

// 3D 雨：沿视线 ray-march，雨滴在世界空间中从云底(y=4)向水面(y=0)下落。
// 雨滴存在性由其 xz 位置上的乌云密度(cloudNoise)调制 —— 乌云在哪里，雨就下在哪里。
// 雨滴是竖直短线段（拉长的下落感），位置随时间下移，方向恒为向下。
vec3 lightning3D(vec3 ro, vec3 rd, float seed, float flash){
  if (flash < 0.25) return vec3(0.0);
  // 闪电类型：0=云内短闪(35%)，1=云到水面(40%)，2=云底短劈(25%)
  float typeRoll = hash13(vec3(seed, 100.0, 50.0));
  // 位置全方位分布（极坐标 0-2π）：旋转视角到任何方向都能看到闪电
  // Keep the main strike and the exterior shadow light on the same bearing.
  float boltAngle = seed * 2.399963;
  float boltDist = 7.75 + 4.75 * sin(seed);
  float sx = sin(boltAngle) * boltDist;
  float sz = cos(boltAngle) * boltDist;
  float startY = 5.0 + hash13(vec3(seed, 11.1, 12.2)) * 1.8;   // 5.0-6.8 云层内
  vec3 p0 = vec3(sx, startY, sz);
  // 终点 y 由类型决定
  float endY;
  if (typeRoll < 0.35) endY = 3.8 + hash13(vec3(seed, 20.0, 21.0)) * 0.7;  // 云内短闪: 3.8-4.5
  else if (typeRoll < 0.75) endY = 0.35;                                     // 云到水面
  else endY = 2.5 + hash13(vec3(seed, 20.0, 21.0)) * 1.0;                   // 云底短劈: 2.5-3.5
  // 5 段折线，y 等距下降，xz 随机偏移（远处偏移大，锯齿更粗）
  float segDy = (p0.y - endY) / 5.0;
  float off = 0.8 + boltDist * 0.12;
  vec3 p1 = p0 + vec3((hash13(vec3(seed,5.1,1.0))-0.5)*1.2*off, -segDy, (hash13(vec3(seed,6.1,1.0))-0.5)*0.9*off);
  vec3 p2 = p1 + vec3((hash13(vec3(seed,5.1,2.0))-0.5)*1.4*off, -segDy, (hash13(vec3(seed,6.1,2.0))-0.5)*1.0*off);
  vec3 p3 = p2 + vec3((hash13(vec3(seed,5.1,3.0))-0.5)*1.4*off, -segDy, (hash13(vec3(seed,6.1,3.0))-0.5)*1.0*off);
  vec3 p4 = p3 + vec3((hash13(vec3(seed,5.1,4.0))-0.5)*1.3*off, -segDy, (hash13(vec3(seed,6.1,4.0))-0.5)*0.9*off);
  vec3 p5 = vec3(p4.x + (hash13(vec3(seed,7.1,1.0))-0.5)*0.7*off, endY, p4.z + (hash13(vec3(seed,7.1,2.0))-0.5)*0.5*off);
  // 段距离
  float d01 = raySegDist(ro, rd, p0, p1);
  float d12 = raySegDist(ro, rd, p1, p2);
  float d23 = raySegDist(ro, rd, p2, p3);
  float d34 = raySegDist(ro, rd, p3, p4);
  float d45 = raySegDist(ro, rd, p4, p5);
  // 每段中点 y 判断云内(y>4)/云外(y<4)：云内模糊散射，云外清晰折线
  float cT = 4.0;
  float ic01 = smoothstep(cT, cT + 0.6, (p0.y + p1.y) * 0.5);
  float ic12 = smoothstep(cT, cT + 0.6, (p1.y + p2.y) * 0.5);
  float ic23 = smoothstep(cT, cT + 0.6, (p2.y + p3.y) * 0.5);
  float ic34 = smoothstep(cT, cT + 0.6, (p3.y + p4.y) * 0.5);
  float ic45 = smoothstep(cT, cT + 0.6, (p4.y + p5.y) * 0.5);
  // 云内散射光团：保留 smoothstep 体积散射特性（云作为体积散射体，非点光源）
  // 1/r² 会让云内闪变成点光源，丢失"云体扩散"的柔和感
  float inCloudGlow = (smoothstep(0.14, 0.0, d01) * ic01
                     + smoothstep(0.14, 0.0, d12) * ic12
                     + smoothstep(0.14, 0.0, d23) * ic23
                     + smoothstep(0.14, 0.0, d34) * ic34
                     + smoothstep(0.14, 0.0, d45) * ic45) * 0.35;
  // 云外最近段（nearestOut 为 999 时自然归零）
  float nearestOut = 999.0;
  nearestOut = min(nearestOut, mix(d01, 999.0, step(0.5, ic01)));
  nearestOut = min(nearestOut, mix(d12, 999.0, step(0.5, ic12)));
  nearestOut = min(nearestOut, mix(d23, 999.0, step(0.5, ic23)));
  nearestOut = min(nearestOut, mix(d34, 999.0, step(0.5, ic34)));
  nearestOut = min(nearestOut, mix(d45, 999.0, step(0.5, ic45)));
  // 物理光衰减：核心 1/r² 极细刺眼白心（HDR 过曝），外晕 1/r 宽广电光蓝
  // 比 smoothstep 更锐利，模拟 30000K 等离子弧的刺眼感
  float trunkCore = 0.0003 / (nearestOut * nearestOut + 0.0001);
  float trunkGlow = 0.002 / (nearestOut + 0.01);
  // 分叉：仅非云内短闪类型才有（云内短闪纯散射，无分叉），同样用 1/r² + 1/r
  float branchMask = step(0.35, typeRoll);
  vec3 b1s = p1;
  vec3 b1e = b1s + vec3((hash13(vec3(seed,8.1,1.0))-0.5)*2.0*off, -1.3, (hash13(vec3(seed,9.1,1.0))-0.5)*1.7*off);
  float db1 = raySegDist(ro, rd, b1s, b1e);
  vec3 b2s = p3;
  vec3 b2e = b2s + vec3((hash13(vec3(seed,8.1,2.0))-0.5)*1.8*off, -1.1, (hash13(vec3(seed,9.1,2.0))-0.5)*1.6*off);
  float db2 = raySegDist(ro, rd, b2s, b2e);
  float branchCore = (0.00015 / (db1 * db1 + 0.0001) + 0.00015 / (db2 * db2 + 0.0001)) * branchMask;
  float branchGlow = (0.001 / (db1 + 0.01) + 0.001 / (db2 + 0.01)) * branchMask;
  // 分层返回：x=白热核心(主干+分叉)，y=电光蓝外晕(主干+分叉)，z=云内散射(暖白光团)
  vec3 result;
  result.x = (trunkCore + branchCore) * flash;
  result.y = (trunkGlow + branchGlow) * flash;
  result.z = inCloudGlow * flash;
  return result;
}

// 多道闪电：每次闪光生成 1-3 道闪电，各自独立种子 → 不同方位与形态。
// 主闪电必现，副闪电按概率出现且更暗，确保旋转到任何方向都能看到闪电。
// 种子是 uniform，分支判断对全画面一致，GPU 无分支发散开销。
vec3 lightningBolts(vec3 ro, vec3 rd, float seed, float flash){
  vec3 result = lightning3D(ro, rd, seed, flash);
  float r2 = hash13(vec3(seed, 99.0, 88.0));
  if (r2 > 0.45) result += lightning3D(ro, rd, seed + 7.3, flash) * 0.72;
  float r3 = hash13(vec3(seed, 55.0, 44.0));
  if (r3 > 0.7) result += lightning3D(ro, rd, seed + 13.7, flash) * 0.55;
  return result;
}

vec2 octahedralMap(vec3 n){
  n /= abs(n.x) + abs(n.y) + abs(n.z);
  vec2 p = n.xy;
  if (n.z < 0.0) p = (1.0 - abs(p.yx)) * sign(p.xy);
  return p;
}

// 世界方向 → 相机空间方向。屏幕投影（太阳圆盘）假设相机朝 +z，
// 故先把世界方向转到相机空间再做透视投影。
vec3 horizontalToEquatorial(vec3 dir){
  // 世界坐标：x=东、y=天顶、z=南；恒星坐标随当地恒星时旋转。
  float sinLat = sin(uLatitude), cosLat = cos(uLatitude);
  float xH = cosLat * dir.y + sinLat * dir.z;
  float yH = -dir.x;
  float zH = sinLat * dir.y - cosLat * dir.z;
  float c = cos(uSidereal), s = sin(uSidereal);
  return normalize(vec3(c * xH + s * yH, s * xH - c * yH, zH));
}

vec3 proceduralStars(vec3 eq, float scale, float threshold, float t){
  // 用 uStarSeed 偏移采样坐标：每天星空布局不同（真实星空随地球公转渐变）
  vec2 p = octahedralMap(eq) * scale + vec2(uStarSeed * 17.3, uStarSeed * 29.7);
  vec2 id = floor(p), f = fract(p);
  float presence = hash21(id + scale);
  vec2 center = 0.18 + hash22(id + 31.7) * 0.64;
  float radius = mix(0.075, 0.19, hash21(id + 9.4));
  float point = 1.0 - smoothstep(radius, radius * 2.2, length(f - center));
  point *= step(threshold, presence);
  float energy = pow(clamp((presence - threshold) / (1.0 - threshold), 0.0, 1.0), 1.7);
  float temperature = hash21(id + 73.1);
  vec3 warm = vec3(1.0, 0.72, 0.50);
  vec3 cold = vec3(0.62, 0.78, 1.0);
  vec3 starColor = mix(warm, cold, smoothstep(0.25, 0.78, temperature));
  // 大气闪烁（scintillation）：真实星闪幅度可达 30-50%，亮星闪得更明显
  float twinkleSpeed = mix(0.8, 2.6, temperature) + presence * 3.0;
  float twinkle = 0.65 + 0.35 * sin(t * twinkleSpeed + presence * 91.0 + uStarSeed * 6.0);
  twinkle *= 0.7 + 0.3 * sin(t * twinkleSpeed * 1.7 + presence * 47.0);
  return starColor * point * (0.38 + energy * 1.85) * twinkle;
}

float catalogStar(vec3 eq, vec3 starDir, float radius){
  float metric = 1.0 - dot(eq, starDir);
  return 1.0 - smoothstep(0.0, 0.5 * radius * radius, metric);
}

// 极光：高纬度+夜晚+太阳风活动时才出现（JS端按概率控制 uAurora）
// 真实极光：绿色最常见（低空氧557.7nm），底部红色（630nm），顶部紫色（氮）
// 帘幕状垂直纹理，随时间缓慢波动，朝磁极方向（北半球=北方天空）
vec3 auroraColor(vec3 dir, float t){
  if (uAurora < 0.01) return vec3(0.0);
  // 极光在北方天空（z 负方向）低空（15-55°高度），朝北越正越强
  float northness = smoothstep(0.1, 0.6, -dir.z);
  float heightBand = smoothstep(0.12, 0.30, dir.y) * (1.0 - smoothstep(0.50, 0.72, dir.y));
  if (northness * heightBand < 0.01) return vec3(0.0);
  // 帘幕：水平方向用噪声生成垂直条纹，垂直方向有亮度梯度
  float t2 = t * 0.08;
  float curtain = valueNoise(vec2(dir.x * 6.0 + t2, dir.y * 3.5)) * 0.55;
  curtain += valueNoise(vec2(dir.x * 14.0 - t2 * 1.3, dir.y * 5.0)) * 0.30;
  curtain += valueNoise(vec2(dir.x * 28.0 + t2 * 0.7, dir.y * 8.0)) * 0.15;
  curtain = pow(max(curtain, 0.0), 2.2);
  // 垂直波动：帘幕底部亮顶部暗，模拟极光从沉降粒子激发
  float vGrad = smoothstep(0.45, 0.15, dir.y);
  curtain *= vGrad;
  // 颜色随高度：底部红→中部绿（最亮）→顶部紫
  float h = smoothstep(0.13, 0.55, dir.y);
  vec3 green = vec3(0.20, 1.00, 0.42);  // 557.7nm 氧绿线
  vec3 red   = vec3(1.00, 0.32, 0.22);  // 630nm 氧红线
  vec3 purple = vec3(0.48, 0.22, 0.78); // 氮紫线
  vec3 col = mix(red, green, smoothstep(0.0, 0.35, h));
  col = mix(col, purple, smoothstep(0.55, 0.85, h));
  return col * curtain * northness * heightBand * uAurora * 0.7;
}

// 返回水面高度；disp 是 Gerstner 轨道位移，glow 是局部浪尖能量。
float sunCloudOcc = 0.0;
float moonCloudOcc = 0.0;

vec3 skyColor(vec3 dir, float t){
  float y = clamp(dir.y, 0.0, 1.0);
  float horizon = pow(1.0 - y, 2.2);
  float sunDot = max(dot(dir, uSunDir), 0.0);
  float sunHeight = uSunDir.y;
  float daylight = 1.0 - uNight;

  // 大气底色 + 晨昏时的局部 Mie 散射。暖色用 uCelestialColor（JS端已区分日出金粉/日落深红）。
  // 渐变指数 0.6：天顶深蓝更集中于高处，与地平线浅蓝形成更强层次对比（保留 uniform 以维持日夜/乌云/晨昏逻辑）
  vec3 col = mix(uSkyHorizon, uSkyZenith, pow(y, 0.6));
  float twilight = exp(-pow((sunHeight + 0.035) / 0.19, 2.0));
  float sunAureole = pow(sunDot, mix(5.0, 15.0, daylight));
  col += uCelestialColor * twilight * sunAureole * (0.24 + 0.76 * horizon);
  // 太阳光晕多层化：近距强核（白）+ 中距大气散射晕（低空红橙/高空白）+ 远距辉光
  // 真实太阳不是固定圆：低空大气厚光晕大而红，高空光晕小而白
  // 光晕系数收窄：避免太阳周围大片天空被洗白，保住天顶深蓝的层次感
  float sunH = max(sunHeight, 0.0);
  float haloLow = pow(sunDot, 28.0);   // 大气散射晕，范围较大
  float haloCore = pow(sunDot, 180.0); // 近距强核
  vec3 haloColor = mix(uCelestialColor, vec3(1.0, 0.98, 0.92), smoothstep(0.0, 0.25, sunH));
  col += haloColor * haloLow * uSunVisibility * (0.18 + 0.20 * twilight);
  col += vec3(1.0, 0.98, 0.95) * haloCore * uSunVisibility * 0.50;

  float clouds = cloudField(dir, t);
  float cirrus = cirrusField(dir, t);
  float totalClouds = clamp(max(clouds, cirrus * 0.65), 0.0, 1.0);

  if (uNight > 0.015){
    vec3 eq = horizontalToEquatorial(dir);
    float clearSky = uNight * uNight * smoothstep(0.025, 0.18, y);

    // 程序化暗星两层，亮度、色温和闪烁周期均不相同。
    vec3 stars = proceduralStars(eq, 185.0, 0.9940, t);
    stars += proceduralStars(eq, 330.0, 0.9970, t) * 0.64;

    // IAU 银北极（RA 12h51m, Dec +27.13°）定义真实银河平面。
    const vec3 galacticNorth = vec3(-0.867666, -0.198076, 0.455984);
    float galacticDistance = abs(dot(eq, galacticNorth));

    // 银河带基本轮廓：调整指数衰减，使其边缘更柔和
    // 将 0.12 缩小到 0.06，让银河带收窄；提高指数到 1.8 增加边缘的对比度
    float milkyBand = exp(-pow(galacticDistance / 0.06, 1.8));

    // 1. 生成银河专属的"密集群星"（取代原本斑块状的 FBM 噪声）
    // 使用极高频的空间映射来生成细小的星尘，让银河由"星点"而非"云斑"组成
    vec2 starDustUv = octahedralMap(eq) * 550.0 + vec2(uStarSeed * 7.3);
    float starDustNoise = hash21(floor(starDustUv));
    // 提取高亮星点，结合微弱的时间函数闪烁
    float starDust = smoothstep(0.85, 1.0, starDustNoise) * (0.6 + 0.4 * sin(t * 1.5 + starDustNoise * 100.0));
    vec2 core=.25+.50*vec2(hash21(floor(starDustUv)+5.1),hash21(floor(starDustUv)-7.3));
    starDust*=1.-smoothstep(.08,.42,length(fract(starDustUv)-core));

    // 2. 柔和的星际气体底色（作为星尘的微弱衬托，彻底消除强烈的斑块感）
    vec2 gUv = octahedralMap(eq) * 18.0;
    float gas = valueNoise(gUv) * 0.5 + valueNoise(gUv * 3.0) * 0.25;

    // 3. 细腻的暗星云裂缝（保留银河的结构感）
    float dustLanes = valueNoise(gUv * 4.0 + vec2(13.7, 5.1));
    float darkRift = smoothstep(0.40, 0.75, dustLanes);

    // 4. 颜色交叉与混合：更加合理、自然的星族色彩过渡
    const vec3 galacticCenter = normalize(vec3(-0.472, -0.485, -0.737));
    float toCenter = max(dot(eq, galacticCenter), 0.0);

    // 核心区：年老恒星密集，偏明亮的黄/香槟色
    vec3 coreColor = vec3(0.85, 0.65, 0.40);
    // 盘面中段：星际尘埃与繁星混合，暖灰紫
    vec3 midColor  = vec3(0.45, 0.40, 0.50);
    // 边缘散落区：年轻恒星，偏深邃的冷蓝
    vec3 edgeColor = vec3(0.12, 0.18, 0.35);

    // 利用到盘面的距离(milkyBand)进行基础过渡
    vec3 baseGasColor = mix(edgeColor, midColor, milkyBand);
    // 叠加中心高亮色彩，加入少量 gas 噪声让颜色有机的交织互相渗透，而非死板渐变
    float coreIntensity = pow(toCenter, 3.5) * milkyBand;
    vec3 milkyColor = mix(baseGasColor, coreColor, coreIntensity + gas * 0.15);

    // 5. 合成银河：柔和气体底色 + 密集的星尘发光 - 暗星云遮挡
    // 星点颜色继承所处区域的色彩并大幅提亮，模拟群星璀璨
    // 将 4.5 降到 1.5（减弱星尘亮度）
    vec3 starDustColor = milkyColor * starDust * 1.5;

    vec3 milkyWay = (milkyColor * gas * 0.35 + starDustColor)
                  * milkyBand
                  * (1.0 - darkRift * 0.6)
                  * 0.40;

    // 主要亮星使用真实 J2000 赤经/赤纬，可随季节和恒星时转动。
    vec3 catalog = vec3(0.0);
    catalog += vec3(0.72, 0.82, 1.00) * catalogStar(eq, vec3(-0.187461,  0.939217, -0.287628), 0.0025) * 2.5; // Sirius
    catalog += vec3(1.00, 0.78, 0.55) * catalogStar(eq, vec3(-0.783792, -0.526984,  0.328570), 0.0020) * 1.9; // Arcturus
    catalog += vec3(0.72, 0.83, 1.00) * catalogStar(eq, vec3( 0.125086, -0.769411,  0.626386), 0.0021) * 2.0; // Vega
    catalog += vec3(1.00, 0.86, 0.65) * catalogStar(eq, vec3( 0.130528,  0.682310,  0.719316), 0.0020) * 1.8; // Capella
    catalog += vec3(0.66, 0.78, 1.00) * catalogStar(eq, vec3( 0.194873,  0.970398, -0.142663), 0.0018) * 1.6; // Rigel
    catalog += vec3(1.00, 0.58, 0.38) * catalogStar(eq, vec3( 0.020897,  0.991435,  0.128917), 0.0018) * 1.4; // Betelgeuse
    catalog += vec3(0.84, 0.88, 1.00) * catalogStar(eq, vec3( 0.459133, -0.874890,  0.154159), 0.0018) * 1.5; // Altair
    catalog += vec3(0.72, 0.82, 1.00) * catalogStar(eq, vec3( 0.455577, -0.536249,  0.710554), 0.0017) * 1.35; // Deneb
    catalog += vec3(1.00, 0.60, 0.42) * catalogStar(eq, vec3(-0.344844, -0.826400, -0.445135), 0.0018) * 1.5; // Antares
    catalog += vec3(0.76, 0.84, 1.00) * catalogStar(eq, vec3( 0.010129,  0.007900,  0.999917), 0.0016) * 1.25; // Polaris

    col += (stars + milkyWay + catalog) * clearSky * (1.0 - totalClouds * 0.92);
    // 极光：在星空之上、云层之下渲染（云会遮挡极光）
    col += auroraColor(dir, t) * clearSky * (1.0 - totalClouds * 0.88);
  }

float sunDisk=(1.0-smoothstep(.024,.038,length(dir-uSunDir)))*uSunVisibility;
  // 云层遮挡日面：厚云（sunCloudOcc→1）遮挡 92%，薄云按密度渐变。乌云时遮挡更强。
  float sunOcc = 1.0 - sunCloudOcc * mix(0.92, 0.98, uCloudDarken);
  col += uCelestialColor * sunDisk * 7.2 * sunOcc;

  // 月面按真实太阳方向求终结线：新月、弦月、满月都由几何关系产生。
  // 月相不是地球阴影遮挡，而是月亮自身的明暗面（Wikipedia: "caused by the Moon's shadow on itself"）
  vec3 moonReference = abs(uMoonDir.y) > 0.94 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  vec3 moonRight = normalize(cross(moonReference, uMoonDir));
  vec3 moonUp = normalize(cross(uMoonDir, moonRight));
  // 月面视觉半径约 2.1°（真实 0.26°，8× 兼顾可见性）；日月视大小近乎相同，符合真实天文学。
  const float moonRadius = 0.0366;
  vec2 moonUv = vec2(dot(dir, moonRight), dot(dir, moonUp)) / moonRadius;
  float moonR2 = dot(moonUv, moonUv);
  float moonDisk = 1.0 - smoothstep(0.965, 1.00, moonR2);
  // antipodal 修复：球面切空间投影在 -uMoonDir 方向也映射到圆盘中心，
  // 会在月亮正对面生成"假月亮"（月相反转、随真月亮运动）。用 dot 门控只在前半球渲染。
  moonDisk *= smoothstep(0.0, 0.06, dot(dir, uMoonDir));
  float moonZ = sqrt(max(0.0, 1.0 - moonR2));
  vec3 moonNormal = normalize(moonRight * moonUv.x + moonUp * moonUv.y - uMoonDir * moonZ);
  // 终结线柔化：真实月面粗糙度使明暗分界有一定过渡宽度，不是硬边
  float moonLit = smoothstep(-0.14, 0.14, dot(moonNormal, uSunDir));
  // 双层环形山纹理：粗噪大斑（月海）+ 细噪小点（陨石坑），增强表面真实感
  float crater1 = valueNoise(moonUv * 6.5 + vec2(3.7, 8.1));
  float crater2 = valueNoise(moonUv * 14.0 + vec2(1.2, 5.6));
  float crater = clamp(crater1 * 0.7 + crater2 * 0.3, 0.0, 1.0);
  // opposition surge：满月时观测方向与光源一致，表面反向散射增强，月面更亮
  vec3 moonAlbedo = mix(vec3(0.36, 0.40, 0.44), vec3(0.92, 0.93, 0.91), crater);
  moonAlbedo *= 0.72 + 0.28 * uMoonPhase;
  // 地照：地球反射阳光照亮月面暗侧，新月时最强（地球满相），满月时为零
  // 极微弱（真实地照仅肉眼勉强可见），避免缺月时看到完整圆轮廓
  vec3 earthshine = vec3(0.014, 0.018, 0.026) * (1.0 - uMoonPhase) * (1.0 - uMoonPhase);
  vec3 moonColor = mix(earthshine, moonAlbedo, moonLit);
  // 月盘可见度随明暗渐变：dark 侧月盘几乎不可见（仅 2%），避免缺月时看到外框圆
  // 真实月相：暗面是月亮自身的夜面，不反光，肉眼看不到圆轮廓
  // smoothstep 下限必须 ≥0：若 <0，moonLit=0 时 smoothstep 仍 >0，门控失效（曾因 -0.08 导致暗部 21.7% 可见）
  float diskVis = mix(0.02, 1.0, smoothstep(0.0, 0.22, moonLit));
  moonDisk *= diskVis;
  // 低空月光大气散射：月光经厚大气层瑞利散射，短波(蓝)被散射掉，剩长波(红橙)。
  // 月出/月落时月亮低空偏橙红，升高后渐变回银白（扩大过渡范围，避免突兀消失）
  float moonAtmo = 1.0 - smoothstep(0.0, 0.55, uMoonDir.y);
  vec3 moonLowColor = vec3(1.0, 0.55, 0.30);
  moonColor = mix(moonColor, moonLowColor * (moonLit * 0.7 + 0.3), moonAtmo * 0.65);
  // 云层遮挡月面：月光较柔，薄云也能明显遮蔽；厚云遮挡 88%。
  float moonOcc = 1.0 - moonCloudOcc * mix(0.85, 0.95, uCloudDarken);
  col += moonColor * moonDisk * uMoonVisibility * 2.15 * moonOcc;
  float moonHalo = pow(max(dot(dir, uMoonDir), 0.0), 720.0);
  // 月晕：低空偏暖橙晕，高空偏冷蓝晕；满月时最强（过渡范围与月盘一致）
  vec3 moonHaloColor = mix(vec3(0.55, 0.35, 0.20), vec3(0.30, 0.40, 0.56), smoothstep(0.0, 0.5, uMoonDir.y));
  // 月晕随月相衰减：弯月反射光总量远少于满月，月晕应更弱。
  // pow(uMoonPhase, 0.5) 让弯月(uMoonPhase≈0.15)时 halo 仍有 0.387，但不至于勾勒出完整圆框
  float haloPhase = pow(uMoonPhase, 0.5);
  col += moonHaloColor * moonHalo * uMoonVisibility * (0.15 + 0.85 * haloPhase) * 0.26 * moonOcc;

  // 云层最后合成，因此会正确遮挡星光与日月，同时接受晨昏暖光和月光。
  // 无月夜云层极暗（仅微弱天光），避免星空上叠加"固定灰云"的视觉
  vec3 cloudNight = vec3(0.025,0.038,0.070)
                  + vec3(0.12, 0.17, 0.25) * uMoonVisibility * uMoonPhase;
  vec3 cloudDay = mix(vec3(0.42, 0.48, 0.52), vec3(0.94, 0.96, 0.97), smoothstep(0.03, 0.75, y));
  vec3 cloudColor = mix(cloudNight, cloudDay, daylight);
  // 3D 体积感：厚云中心自阴影（变暗），云顶被天光照亮、云底在阴影中
  float cloudSelf = mix(1.0, 0.72, clouds * clouds);       // 厚云中心暗
  float cloudTopLight = 0.55 + 0.45 * smoothstep(0.0, 0.45, dir.y); // 云顶亮云底暗
  cloudColor *= cloudSelf * cloudTopLight;
  // 晚霞：太阳方向云层被染橙红；云遮日时云后与边缘透出暖光。
  float sunGlow = pow(sunDot, 4.0);
  cloudColor += uCelestialColor * sunGlow * (0.25 + 0.75 * twilight) * 0.6;
  // 云后透光：太阳被云遮挡时，云从背后被照亮（橙红→暖白），让遮日云团发光
  float backLight = pow(sunDot, 3.0) * totalClouds;
  cloudColor += mix(vec3(1.0, 0.5, 0.2), vec3(1.0, 0.85, 0.65), backLight)
              * backLight * (0.3 + 0.7 * twilight) * 0.7;
  // 云边缘透光：薄云 / 云边缘处在太阳方向透出更亮的橙红
  float edgeGlow = pow(sunDot, 6.0) * totalClouds * (1.0 - totalClouds) * 4.0;
  cloudColor += vec3(1.0, 0.45, 0.15) * edgeGlow * (0.25 + 0.75 * twilight);
  // 暴风雨时乌云变暗变灰沉。
  cloudColor = mix(cloudColor, cloudColor * vec3(0.38, 0.40, 0.46), uCloudDarken);
  // 卷云颜色偏冷蓝白，高空感；在低层云稀薄处叠加卷云层
  vec3 cirrusColor = mix(cloudColor, vec3(0.88, 0.92, 0.98), 0.35);
  cloudColor = mix(cloudColor, cirrusColor, cirrus * (1.0 - clouds));
  // 云层不透明度：厚云接近全遮（0.95），薄云半透，让云后日月被有效遮挡。
  // 白天云更实（0.95），黄昏/夜晚稍透（0.72）让月光微透。
  float cloudOpacity = totalClouds * mix(0.72, 0.95, daylight);
  col = mix(col, cloudColor, cloudOpacity);
  // 闪电从云层内部发出：云体被瞬时从内部照亮（云越厚、越接近云底越明显）。
  // 在 mix 之后叠加，让天空与水面反射中的云层都正确接受闪电照明。
  if (uFlash > 0.05){
    float cloudFlash = totalClouds * smoothstep(0.30, 0.0, dir.y) * uFlash;
    col += vec3(0.92, 0.96, 1.0) * cloudFlash * 0.65;
  }
  return col;
}

varying vec3 sight;
void main(){
  vec3 dir=normalize(sight);float t=mod(uTime,3600.0);
  if(uSunVisibility>0.0 && dot(dir,uSunDir)>.9992)sunCloudOcc=cloudField(uSunDir,t);
  if(uMoonVisibility>0.0 && dot(dir,uMoonDir)>.975)moonCloudOcc=cloudField(uMoonDir,t);
  vec3 col=skyColor(dir,t);
  if(uFlash>.02){
    vec3 bolt=lightningBolts(vec3(0.,.7,0.),dir,uLightningSeed,uFlash);
    col+=(vec3(1.)*bolt.x+vec3(.5,.7,1.)*bolt.y+vec3(.92,.96,1.)*bolt.z)*2.2*mix(.3,1.,uNight);
  }
  gl_FragColor=vec4(col,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
