/* =========================================================
   Galok · 海水引擎 v4 (water.js)  ——  WebGL 着色器
   参考 WebGL-Ocean-FFT 项目的光照模型与波谱：
   - 方向性 Phillips 波谱 + 对数波长分布（稳定、多尺度的海浪统计）
   - 物理量纲正确的 Gerstner 水平位移 + Stokes 二次谐波浪峰
   - 水体菲涅尔（n=1.33）+ 双层日月镜面高光 + HDR 色调映射
   - 水面色乘天光 + 浪尖白沫 + 次表面散射
   - 随涌浪弯曲、漂移和渐进消散的频散涟漪波包
   - 按地点与日期计算日月位置、月相、银河转动与气辉；手动可切：自动 / 白天 / 黄昏 / 夜晚
   ========================================================= */
(function () {
  "use strict";

  const canvas = document.getElementById("ocean-canvas");
  if (!canvas) return;

  const getContext =
    typeof canvas.getContext === "function"
      ? canvas.getContext.bind(canvas)
      : null;
  const gl =
    getContext &&
    (getContext("webgl", {
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
    }) ||
      getContext("experimental-webgl"));
  if (!gl) {
    canvas.style.background =
      "linear-gradient(180deg,#6cb6e8 0%,#bfe3f5 38%,#4a9fd6 55%,#1a5a8a 100%)";
    // 无 WebGL 时仍保留同一套物理采样接口，让漂浮物不会退化成
    // 互相独立的 CSS 卡片动画；真实海面渲染可在支持 WebGL 的浏览器中启用。
    const fallbackWaves = [
      [-0.31, 0.25, 0.105, 0.4],
      [0.52, 0.18, 0.078, 2.1],
      [-0.74, -0.42, 0.054, 4.4],
      [1.18, 0.56, 0.032, 1.7],
      [-1.62, 0.92, 0.022, 5.3],
    ];
    let fallbackTime = 0;
    const fallbackSampleSurface = (x, z, t) => {
      let height = 0,
        slopeX = 0,
        slopeZ = 0,
        driftX = 0,
        driftZ = 0;
      fallbackWaves.forEach(([kx, kz, amplitude, phaseOffset]) => {
        const k = Math.hypot(kx, kz);
        const phase = kx * x + kz * z - Math.sqrt(9.81 * k) * t + phaseOffset;
        const sine = Math.sin(phase),
          cosine = Math.cos(phase);
        height += amplitude * cosine;
        slopeX += -amplitude * kx * sine;
        slopeZ += -amplitude * kz * sine;
        driftX += (kx / k) * amplitude * sine * 0.7;
        driftZ += (kz / k) * amplitude * sine * 0.7;
      });
      return { height, slopeX, slopeZ, driftX, driftZ };
    };
    window.GalokOcean = {
      setOverride() {
        // 固定时段切换已移除，始终使用真实天文时间。保留空函数兼容旧调用。
      },
      get isNight() {
        return this.period === "night";
      },
      get nightness() {
        return this.period === "night" ? 1 : this.period === "dusk" ? 0.35 : 0;
      },
      get period() {
        const hour = new Date().getHours() + new Date().getMinutes() / 60;
        return hour >= 5.75 && hour < 18.75
          ? "day"
          : hour < 20.25
            ? "dusk"
            : "night";
      },
      get clockText() {
        const now = new Date(Date.now() + 8 * 3600000);
        return `${String(now.getUTCHours()).padStart(2, "0")}:${String(now.getUTCMinutes()).padStart(2, "0")} UTC+8`;
      },
      get locationLabel() {
        return "上海";
      },
      get moonPhase() {
        return 0.5;
      },
      get time() {
        return fallbackTime;
      },
      sampleSurface: fallbackSampleSurface,
      // 无 WebGL 时天气开关为空操作（不渲染雨/闪电）
      setWeather() {},
      get weatherState() {
        return { rainIntensity: 0, flash: 0, cloudDarken: 0 };
      },
      getTimeScale() {
        return 1;
      },
      setTimeScale() {},
    };
    const fallbackStart = performance.now();
    const fallbackFrame = (now) => {
      fallbackTime = (now - fallbackStart) / 1000;
      requestAnimationFrame(fallbackFrame);
    };
    requestAnimationFrame(fallbackFrame);
    return;
  }

  const VS = `attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FS = `
    precision highp float;
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
    uniform vec4  uWaves[14];     // kx, kz, amplitude, phase
    uniform vec4  uRipples[16];   // x, z, startTime, strength（槽位提升到16，雨滴涟漪不易被挤出渲染）
    uniform vec3  uSkyZenith;
    uniform vec3  uSkyHorizon;
    uniform vec3  uWaterDeep;
    uniform vec3  uWaterShallow;
    uniform float uHorizonUv;
    uniform float uChoppy;
    // 天气系统：雨/闪电/乌云（由 JS 状态机驱动，全随机）
    uniform float uRainIntensity;  // 0-1 当前雨强
    uniform float uFlash;          // 0-1 闪电闪光强度
    uniform float uCloudDarken;   // 0-1 乌云暗化（暴风雨时云变灰沉）
    uniform float uLightningSeed; // 闪电纹随机种子

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

    float cloudNoise(vec2 p){
      float n = valueNoise(p) * 0.53;
      p = mat2(0.80, -0.60, 0.60, 0.80) * p * 2.03 + 8.7;
      n += valueNoise(p) * 0.29;
      p = mat2(0.76, -0.65, 0.65, 0.76) * p * 2.11 + 3.1;
      n += valueNoise(p) * 0.18;
      return n;
    }

    float cloudField(vec3 dir, float t){
      float projection = 1.0 / (0.24 + max(dir.y, 0.0));
      // 风速大幅提高，让云层明显飘动；drift 让云形随时间"变动"（不只是平移）。
      vec2 wind = vec2(t * 0.11, t * 0.035);
      vec2 drift = vec2(t * 0.011, -t * 0.0055);
      // 缓慢旋转采样坐标，让云朵形状本身随时间演化（卷云拉伸感）。
      float ang = t * 0.014;
      mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
      vec2 base = rot * (dir.xz * projection * 1.75) + wind;
      vec2 p = base;
      float broad = cloudNoise(p * 0.72 + drift);
      float detail = cloudNoise(p * 2.15 + vec2(4.2, -1.7) + drift * 1.6);
      float shape = broad * 0.78 + detail * 0.22;
      float threshold = mix(0.76, 0.43, uCloudCover);
      float cloud = smoothstep(threshold, threshold + 0.13, shape);
      return cloud * smoothstep(0.015, 0.13, dir.y);
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
    float rain3D(vec3 ro, vec3 rd, float t, float intensity){
      if (intensity < 0.01) return 0.0;
      float yTop = 4.0, yBot = 0.05;
      float tEnter, tExit;
      if (abs(rd.y) < 1e-3){
        if (ro.y < yBot || ro.y > yTop) return 0.0;
        tEnter = 0.0; tExit = 22.0;
      } else {
        float t1 = (yBot - ro.y) / rd.y;
        float t2 = (yTop - ro.y) / rd.y;
        tEnter = max(min(t1, t2), 0.0);
        tExit = max(t1, t2);
        if (tExit <= tEnter) return 0.0;
        tExit = min(tExit, tEnter + 22.0);
      }
      const int STEPS = 12;
      float stepSize = (tExit - tEnter) / float(STEPS);
      float rain = 0.0;
      float fallSpeed = 11.0;
      float ySpan = yTop - yBot;
      for (int i = 0; i < STEPS; i++){
        float s = tEnter + stepSize * (float(i) + 0.5);
        vec3 p = ro + rd * s;
        // 雨滴在 xz 网格上，每个 cell 一个雨滴
        float cellSize = 0.85;
        vec2 cid = floor(p.xz / cellSize);
        // 雨滴 xz 位置（cell 内随机偏移）
        vec2 dpos = (hash22(cid + 0.5) - 0.5) * 0.7;
        vec2 dxz = (cid + 0.5 + dpos) * cellSize;
        // 该位置上方是否有乌云：采样真实云场（雨跟着乌云，不在无云处下雨）
        // 从相机看该雨滴上方云层方向，cloudField 返回 0~1 云密度
        vec3 cloudDir = normalize(vec3(dxz.x, 3.3, dxz.y));
        float cloudCov = cloudField(cloudDir, t);
        float dropExist = cloudCov * intensity;
        if (dropExist < 0.01) continue;
        // 雨滴 y：随时间下落并循环（世界空间向下）
        float dropY = yTop - mod(t * fallSpeed + hash21(cid) * ySpan, ySpan);
        // 雨滴是竖直短线段：dropY → dropY+0.45
        vec3 dropA = vec3(dxz.x, dropY, dxz.y);
        vec3 dropB = vec3(dxz.x, dropY + 0.45, dxz.y);
        vec3 pa = p - dropA, ba = dropB - dropA;
        float hh = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0);
        float distToDrop = length(pa - ba * hh);
        // 雨滴粗细：远处稍粗（透视），近处细
        float thickness = 0.035 + s * 0.0022;
        float drop = smoothstep(thickness, 0.0, distToDrop);
        float fade = exp(-s * 0.05);
        rain += drop * dropExist * fade;
      }
      rain /= float(STEPS);
      return clamp(rain * 2.6, 0.0, 1.2);
    }

    // 3D 闪电：从云层内部发出，位置/长度/形状均多样。
    // 类型：云内短闪(纯散射) / 云到水面(完整主干) / 云底短劈(到云底下方)。
    // 位置 xz 范围大，远处乌云也会有闪电（空间纵深）。每段按中点 y 判断云内/云外：
    // 云内段模糊散射，云外段清晰锯齿折线。所有线段在 3D 世界空间，用 raySegDist 投影。
    float lightning3D(vec3 ro, vec3 rd, float seed, float flash){
      if (flash < 0.25) return 0.0;
      // 闪电类型：0=云内短闪(35%)，1=云到水面(40%)，2=云底短劈(25%)
      float typeRoll = hash13(vec3(seed, 100.0, 50.0));
      // 位置全方位分布（极坐标 0-2π）：旋转视角到任何方向都能看到闪电
      float boltAngle = hash13(vec3(seed, 1.1, 2.2)) * 6.2831853;
      float boltDist = 3.0 + hash13(vec3(seed, 3.3, 4.4)) * 9.5;   // 3-12.5
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
      // 云内散射光团（半径大、亮度低，模拟闪电在云内被云体扩散遮挡）
      float inCloudGlow = (smoothstep(0.14, 0.0, d01) * ic01
                         + smoothstep(0.14, 0.0, d12) * ic12
                         + smoothstep(0.14, 0.0, d23) * ic23
                         + smoothstep(0.14, 0.0, d34) * ic34
                         + smoothstep(0.14, 0.0, d45) * ic45) * 0.35;
      // 云外清晰折线（只对 y < 4 的段）
      float trunkCore = smoothstep(0.028, 0.0, d01) * (1.0 - ic01)
                      + smoothstep(0.028, 0.0, d12) * (1.0 - ic12)
                      + smoothstep(0.028, 0.0, d23) * (1.0 - ic23)
                      + smoothstep(0.028, 0.0, d34) * (1.0 - ic34)
                      + smoothstep(0.028, 0.0, d45) * (1.0 - ic45);
      // 云外最近段光晕（nearestOut 为 999 时 smoothstep 自然归零）
      float nearestOut = 999.0;
      nearestOut = min(nearestOut, mix(d01, 999.0, step(0.5, ic01)));
      nearestOut = min(nearestOut, mix(d12, 999.0, step(0.5, ic12)));
      nearestOut = min(nearestOut, mix(d23, 999.0, step(0.5, ic23)));
      nearestOut = min(nearestOut, mix(d34, 999.0, step(0.5, ic34)));
      nearestOut = min(nearestOut, mix(d45, 999.0, step(0.5, ic45)));
      float trunkGlow = smoothstep(0.09, 0.0, nearestOut) * 0.45;
      float trunkBright = trunkCore + trunkGlow + inCloudGlow;
      // 分叉：仅非云内短闪类型才有（云内短闪纯散射，无分叉）
      float branchMask = step(0.35, typeRoll);
      float branches = 0.0;
      vec3 b1s = p1;
      vec3 b1e = b1s + vec3((hash13(vec3(seed,8.1,1.0))-0.5)*2.0*off, -1.3, (hash13(vec3(seed,9.1,1.0))-0.5)*1.7*off);
      branches += smoothstep(0.020, 0.0, raySegDist(ro, rd, b1s, b1e)) * 0.85 * branchMask;
      vec3 b2s = p3;
      vec3 b2e = b2s + vec3((hash13(vec3(seed,8.1,2.0))-0.5)*1.8*off, -1.1, (hash13(vec3(seed,9.1,2.0))-0.5)*1.6*off);
      branches += smoothstep(0.020, 0.0, raySegDist(ro, rd, b2s, b2e)) * 0.8 * branchMask;
      return (trunkBright + branches) * flash;
    }

    // 多道闪电：每次闪光生成 1-3 道闪电，各自独立种子 → 不同方位与形态。
    // 主闪电必现，副闪电按概率出现且更暗，确保旋转到任何方向都能看到闪电。
    // 种子是 uniform，分支判断对全画面一致，GPU 无分支发散开销。
    float lightningBolts(vec3 ro, vec3 rd, float seed, float flash){
      float result = lightning3D(ro, rd, seed, flash);
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
    vec3 toCameraSpace(vec3 w){
      float cy = cos(uCameraYaw), sy = sin(uCameraYaw);
      float cp = cos(uCameraPitch), sp = sin(uCameraPitch);
      // 先绕 y 转 -yaw
      vec3 v = vec3(cy * w.x - sy * w.z, w.y, sy * w.x + cy * w.z);
      // 再绕 x 转 -pitch
      return vec3(v.x, cp * v.y + sp * v.z, -sp * v.y + cp * v.z);
    }

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
      vec2 p = octahedralMap(eq) * scale;
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
      float twinkle = 0.95 + 0.05 * sin(t * mix(1.1, 2.3, temperature) + presence * 91.0);
      return starColor * point * (0.38 + energy * 1.85) * twinkle;
    }

    float catalogStar(vec3 eq, vec3 starDir, float radius){
      float metric = 1.0 - dot(eq, starDir);
      return 1.0 - smoothstep(0.0, 0.5 * radius * radius, metric);
    }

    // 返回水面高度；disp 是 Gerstner 轨道位移，glow 是局部浪尖能量。
    float waveField(vec2 p, float t, out vec2 disp, out float glow){
      float h = 0.0; disp = vec2(0.0); glow = 0.0;
      for (int i = 0; i < 14; i++){
        vec4 w = uWaves[i];
        float k = length(w.xy);
        if (k < 1e-4) continue;
        float omega = sqrt(9.81 * k);
        float phase = dot(w.xy, p) - omega * t + w.w;
        float s = sin(phase), c = cos(phase);
        float steepness = clamp(k * w.z, 0.0, 0.55);
        h += w.z * (c + 0.18 * steepness * cos(2.0 * phase));
        // Gerstner 水平位移与波幅同量纲；原来多除一次 k 会把长波过度拉伸。
        disp += (w.xy / k) * w.z * s * uChoppy;
      }

      // 随机扰动是有限宽度的频散波包：波峰以相速度运动，能量以群速度扩散。
      // 将波包采样点随基础浪的轨道位移弯曲，避免涟漪像平面贴图。
      vec2 baseDisp = disp;
      for (int i = 0; i < 16; i++){
        vec4 r = uRipples[i];
        float age = t - r.z;
        if (age < 0.0 || age > 9.0 || r.w <= 0.0) continue;

        float seed = hash13(vec3(r.xy, floor(r.z * 7.0)));
        float k = mix(3.0, 4.6, seed);
        float omega = sqrt(9.81 * k);
        float groupSpeed = 0.5 * omega / k;
        vec2 center = r.xy + vec2(0.070, 0.050) * age;
        vec2 radial = p + baseDisp * 0.22 - center;
        float d = length(radial) + 1e-4;

        float width = 0.38 + 0.14 * age;
        float q = d - groupSpeed * age;
        float packet = exp(-0.5 * q * q / (width * width));
        float attack = smoothstep(0.0, 0.32, age);
        float release = 1.0 - smoothstep(6.0, 9.0, age);
        float damping = exp(-0.14 * age) * inversesqrt(1.0 + 0.34 * d);
        float env = packet * attack * release * damping;

        float phase = k * d - omega * age;
        float fineK = k * 1.58;
        float finePhase = fineK * d - sqrt(9.81 * fineK) * age + seed * 6.2831853;
        float crest = sin(phase) + 0.22 * sin(finePhase);
        float amp = env * r.w;
        h += crest * amp;
        disp += (radial / d) * cos(phase) * amp * 0.24 * uChoppy;
        glow += smoothstep(0.30, 1.05, crest) * amp;
      }
      return h;
    }

    // 日月方向的云遮挡量（在 main 中一次性计算，供 skyColor 与水面高光共用）。
    // cloudField 返回 0~1：0=晴空，1=厚云。用于让云层（白云、乌云）按密度遮挡日月。
    float sunCloudOcc = 0.0;
    float moonCloudOcc = 0.0;

    vec3 skyColor(vec3 dir, float t){
      float y = clamp(dir.y, 0.0, 1.0);
      float horizon = pow(1.0 - y, 2.2);
      float sunDot = max(dot(dir, uSunDir), 0.0);
      float sunHeight = uSunDir.y;
      float daylight = 1.0 - uNight;

      // 大气底色 + 晨昏时的局部 Mie 散射。暖色只聚集在太阳方向，不会染橙整条地平线。
      vec3 col = mix(uSkyHorizon, uSkyZenith, pow(y, 0.48));
      float twilight = exp(-pow((sunHeight + 0.035) / 0.19, 2.0));
      float sunAureole = pow(sunDot, mix(5.0, 15.0, daylight));
      col += vec3(1.0, 0.25, 0.065) * twilight * sunAureole * (0.24 + 0.76 * horizon);
      col += uCelestialColor * pow(sunDot, 72.0) * uSunVisibility * 0.42;

      float clouds = cloudField(dir, t);

      if (uNight > 0.015){
        vec3 eq = horizontalToEquatorial(dir);
        float clearSky = uNight * uNight * smoothstep(0.025, 0.18, y);

        // 程序化暗星两层，亮度、色温和闪烁周期均不相同。
        vec3 stars = proceduralStars(eq, 185.0, 0.9940, t);
        stars += proceduralStars(eq, 330.0, 0.9970, t) * 0.64;

        // IAU 银北极（RA 12h51m, Dec +27.13°）定义真实银河平面。
        const vec3 galacticNorth = vec3(-0.867666, -0.198076, 0.455984);
        float galacticDistance = abs(dot(eq, galacticNorth));
        float milkyBand = exp(-pow(galacticDistance / 0.105, 1.45));
        float milkyDust = valueNoise(octahedralMap(eq) * 46.0 + 11.0);
        vec3 milkyWay = vec3(0.20, 0.25, 0.34) * milkyBand
                      * mix(0.28, 1.0, milkyDust) * 0.34;

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

        col += (stars + milkyWay + catalog) * clearSky * (1.0 - clouds * 0.92);
      }

      // 日面：屏幕空间正圆。球面角距离 1-dot 在透视投影下会变椭圆（水平 fov 拉伸
      // + 太阳偏离视线中心），改用屏幕 uv 距离可保证圆盘正圆。直接视线与水面反射都适用。
      // 相机可旋转后，先把方向转到相机空间；太阳在身后（z<=0）时不画圆盘。
      vec3 dirCam = toCameraSpace(dir);
      vec3 sunCam = toCameraSpace(uSunDir);
      float sunDisk = 0.0;
      if (sunCam.z > 0.0){
        float dirInvZ = 1.05 / max(dirCam.z, 0.05);
        vec2 dirScreen = vec2(dirCam.x * dirInvZ / 1.15, dirCam.y * dirInvZ + uHorizonUv);
        float sunInvZ = 1.05 / sunCam.z;
        vec2 sunScreen = vec2(sunCam.x * sunInvZ / 1.15, sunCam.y * sunInvZ + uHorizonUv);
        float sunScreenR = sunInvZ * 0.0366;   // 角半径 2.1° 的屏幕投影（真实 0.27°，7.8× 兼顾可见性）
        float sunScreenDist = length(dirScreen - sunScreen);
        sunDisk = (1.0 - smoothstep(sunScreenR * 0.82, sunScreenR * 1.05, sunScreenDist)) * uSunVisibility;
      }
      // 云层遮挡日面：厚云（sunCloudOcc→1）遮挡 92%，薄云按密度渐变。乌云时遮挡更强。
      float sunOcc = 1.0 - sunCloudOcc * mix(0.92, 0.98, uCloudDarken);
      col += uCelestialColor * sunDisk * 7.2 * sunOcc;

      // 月面按真实太阳方向求终结线：新月、弦月、满月都由几何关系产生。
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
      vec3 earthshine = vec3(0.072, 0.092, 0.128) * (1.0 - uMoonPhase) * (1.0 - uMoonPhase);
      vec3 moonColor = mix(earthshine, moonAlbedo, moonLit);
      // 低空月光大气散射：月光经厚大气层瑞利散射，短波(蓝)被散射掉，剩长波(红橙)。
      // 月出/月落时月亮低空偏橙红，升高后变回银白（真实大气折射效应）。
      float moonAtmo = 1.0 - smoothstep(0.0, 0.35, uMoonDir.y);
      vec3 moonLowColor = vec3(1.0, 0.55, 0.30);
      moonColor = mix(moonColor, moonLowColor * (moonLit * 0.7 + 0.3), moonAtmo * 0.6);
      // 云层遮挡月面：月光较柔，薄云也能明显遮蔽；厚云遮挡 88%。
      float moonOcc = 1.0 - moonCloudOcc * mix(0.85, 0.95, uCloudDarken);
      col += moonColor * moonDisk * uMoonVisibility * 2.15 * moonOcc;
      float moonHalo = pow(max(dot(dir, uMoonDir), 0.0), 720.0);
      // 月晕：低空偏暖橙晕，高空偏冷蓝晕；满月时最强
      vec3 moonHaloColor = mix(vec3(0.55, 0.35, 0.20), vec3(0.30, 0.40, 0.56), smoothstep(0.0, 0.3, uMoonDir.y));
      col += moonHaloColor * moonHalo * uMoonVisibility * (0.3 + 0.7 * uMoonPhase) * 0.26 * moonOcc;

      // 云层最后合成，因此会正确遮挡星光与日月，同时接受晨昏暖光和月光。
      vec3 cloudNight = vec3(0.025, 0.038, 0.070)
                      + vec3(0.12, 0.17, 0.25) * uMoonVisibility * uMoonPhase;
      vec3 cloudDay = mix(vec3(0.42, 0.48, 0.52), vec3(0.94, 0.96, 0.97), smoothstep(0.03, 0.75, y));
      vec3 cloudColor = mix(cloudNight, cloudDay, daylight);
      // 晚霞：太阳方向云层被染橙红；云遮日时云后与边缘透出暖光。
      float sunGlow = pow(sunDot, 4.0);
      cloudColor += uCelestialColor * sunGlow * (0.25 + 0.75 * twilight) * 0.6;
      // 云后透光：太阳被云遮挡时，云从背后被照亮（橙红→暖白），让遮日云团发光
      float backLight = pow(sunDot, 3.0) * clouds;
      cloudColor += mix(vec3(1.0, 0.5, 0.2), vec3(1.0, 0.85, 0.65), backLight)
                  * backLight * (0.3 + 0.7 * twilight) * 0.7;
      // 云边缘透光：薄云 / 云边缘处（clouds 中等）在太阳方向透出更亮的橙红
      float edgeGlow = pow(sunDot, 6.0) * clouds * (1.0 - clouds) * 4.0;
      cloudColor += vec3(1.0, 0.45, 0.15) * edgeGlow * (0.25 + 0.75 * twilight);
      // 暴风雨时乌云变暗变灰沉。
      cloudColor = mix(cloudColor, cloudColor * vec3(0.38, 0.40, 0.46), uCloudDarken);
      // 云层不透明度：厚云接近全遮（0.95），薄云半透，让云后日月被有效遮挡。
      // 白天云更实（0.95），黄昏/夜晚稍透（0.72）让月光微透。
      float cloudOpacity = clouds * mix(0.72, 0.95, daylight);
      col = mix(col, cloudColor, cloudOpacity);
      // 闪电从云层内部发出：云体被瞬时从内部照亮（云越厚、越接近云底越明显）。
      // 在 mix 之后叠加，让天空与水面反射中的云层都正确接受闪电照明。
      if (uFlash > 0.05){
        float cloudFlash = clouds * smoothstep(0.30, 0.0, dir.y) * uFlash;
        col += vec3(0.92, 0.96, 1.0) * cloudFlash * 0.65;
      }
      return col;
    }

    float fresnelWater(vec3 N, vec3 V){
      // 空气/水（n=1.33）的 Schlick 近似，在垂直入射时也不会产生 0/0。
      float f0 = 0.02037;
      float cosI = clamp(dot(N, V), 0.0, 1.0);
      return f0 + (1.0 - f0) * pow(1.0 - cosI, 5.0);
    }

    void main(){
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = (2.0 * fragCoord - uResolution) / uResolution.y;
      float t = uTime;

      vec3 ro = vec3(0.0, 0.70, 0.0);
      // 本地视线（相机朝 +z 南），再旋转到世界空间（先绕 x 俯仰，再绕 y 偏航）
      vec3 rdL = vec3(uv.x * 1.15, (uv.y - uHorizonUv), 1.05);
      float cp = cos(uCameraPitch), sp = sin(uCameraPitch);
      float cy = cos(uCameraYaw),   sy = sin(uCameraYaw);
      vec3 rp = vec3(rdL.x, cp * rdL.y - sp * rdL.z, sp * rdL.y + cp * rdL.z);
      vec3 rd = normalize(vec3(cy * rp.x + sy * rp.z, rp.y, -sy * rp.x + cy * rp.z));

      // 日月方向的云遮挡：一次性计算，供天空圆盘与水面高光共用（避免在 skyColor 中重复采样）
      sunCloudOcc = cloudField(uSunDir, t);
      moonCloudOcc = cloudField(uMoonDir, t);

      vec3 col;
      if (rd.y >= 0.0){
        col = skyColor(rd, t);
      } else {
        float tt = -ro.y / rd.y;
        vec2 p = ro.xz + rd.xz * tt;
        p += vec2(t * 0.015, 0.0);

        vec2 disp0; float glow0;
        waveField(p, t, disp0, glow0);
        p += disp0;

        // 远处每个像素覆盖更大的水面；自适应采样间隔可抑制地平线闪烁。
        float e = clamp(tt * 2.2 / uResolution.y, 0.028, 0.16);
        vec2 dL, dR, dD, dU; float gL, gR, gD, gU;
        float hL = waveField(p - vec2(e, 0.0), t, dL, gL);
        float hR = waveField(p + vec2(e, 0.0), t, dR, gR);
        float hD = waveField(p - vec2(0.0, e), t, dD, gD);
        float hU = waveField(p + vec2(0.0, e), t, dU, gU);
        float h  = (hL + hR + hD + hU) * 0.25;
        float glow = (gL + gR + gD + gU) * 0.25 + glow0;

        vec3 N = normalize(vec3(hL - hR, 2.0 * e, hD - hU));
        vec3 V = -rd;
        float fres = fresnelWater(N, V);

        vec3 R = reflect(rd, N); R.y = abs(R.y);
        vec3 reflCol = skyColor(R, t);

        float depth = clamp(length(p) * 0.05, 0.0, 1.0);
        vec3 waterCol = mix(uWaterShallow, uWaterDeep, depth);
        waterCol *= 0.45 + 0.55 * max(N.y, 0.0);
        vec3 skyLight = skyColor(vec3(0.0, 1.0, 0.0), t);
        waterCol *= 0.6 + 0.4 * (skyLight.r + skyLight.g + skyLight.b) / 3.0;

        col = mix(waterCol, reflCol, fres);

        // 环境月光：满月时整片水面被冷月光均匀提亮，避免夜晚水面纯黑。
        // 与镜面月光不同，这是来自天空散射的间接月光，弥漫在水面上。
        col += vec3(0.045, 0.060, 0.090) * uMoonVisibility * uMoonPhase * (1.0 - moonCloudOcc * 0.7);

        vec3 Hh = normalize(uSunDir + V);
        float ndh = max(dot(N, Hh), 0.0);
        float specCore = pow(ndh, 1100.0);
        float specShimmer = pow(ndh, 90.0);
        col += uCelestialColor * (specCore * 7.5 + specShimmer * 0.10)
             * uSunVisibility * (1.0 - sunCloudOcc * 0.9);

        vec3 moonHalf = normalize(uMoonDir + V);
        float moonNdh = max(dot(N, moonHalf), 0.0);
        // 月光镜面：主高光更亮更宽（照亮水面），副光晕扩散开让整片水面泛起冷月光
        float moonSpec = pow(moonNdh, 1100.0) * 6.5 + pow(moonNdh, 90.0) * 0.12;
        col += vec3(0.72, 0.82, 1.00) * moonSpec * uMoonVisibility * uMoonPhase * (1.0 - moonCloudOcc * 0.85);

        float ss = max(dot(N, uSunDir), 0.0);
        col += vec3(0.10, 0.35, 0.30) * pow(ss, 2.0) * 0.06 * uSunVisibility * (1.0 - sunCloudOcc * 0.9);

        vec3 crestLight = mix(vec3(0.42, 0.55, 0.74), uCelestialColor, uSunVisibility);
        col += crestLight * glow * 0.22;

        float slope = length(vec2(hR - hL, hU - hD)) / (2.0 * e);
        float foam = smoothstep(0.38, 0.78, slope) * smoothstep(0.03, 0.24, h);
        col = mix(col, vec3(0.88, 0.96, 0.98), foam * 0.16);

        float distanceHaze = smoothstep(18.0, 85.0, tt);
        col = mix(col, uSkyHorizon, distanceHaze * 0.16);
      }

      float band = 1.0 - smoothstep(0.0, 0.05, abs(rd.y));
      col = mix(col, uSkyHorizon, band * 0.55);

      // 天气叠加（3D 雨 / 3D 闪电，色调映射前，让闪光能自然过曝为白）
      if (uRainIntensity > 0.01){
        float rain = rain3D(ro, rd, t, uRainIntensity);
        col += vec3(0.55, 0.65, 0.78) * rain * 0.6;
      }
      if (uFlash > 0.05){
        float bolt = lightningBolts(ro, rd, uLightningSeed, uFlash);
        col += vec3(0.92, 0.96, 1.0) * bolt * 2.2;     // 3D 闪电折线（主干+分叉，多道全方位）
        col += vec3(0.82, 0.88, 1.0) * uFlash * 0.32;  // 整体瞬时加亮（降低，避免淹没折线）
      }

      col = 1.0 - exp(-col * 0.85);
      float vig = 1.0 - 0.16 * dot(uv * 0.5, uv * 0.5);
      col *= vig;
      col = pow(col, vec3(0.88));
      gl_FragColor = vec4(col, 1.0);
    }`;

  function compile(src, type) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.error("shader:", gl.getShaderInfoLog(s));
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(VS, gl.VERTEX_SHADER));
  gl.attachShader(prog, compile(FS, gl.FRAGMENT_SHADER));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
    console.error("link:", gl.getProgramInfoLog(prog));
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW,
  );
  const aPos = gl.getAttribLocation(prog, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const U = {};
  [
    "uResolution",
    "uTime",
    "uSunDir",
    "uMoonDir",
    "uCelestialColor",
    "uSunVisibility",
    "uMoonVisibility",
    "uMoonPhase",
    "uNight",
    "uLatitude",
    "uSidereal",
    "uCloudCover",
    "uWaves",
    "uRipples",
    "uSkyZenith",
    "uSkyHorizon",
    "uWaterDeep",
    "uWaterShallow",
    "uHorizonUv",
    "uChoppy",
    "uRainIntensity",
    "uFlash",
    "uCloudDarken",
    "uLightningSeed",
    "uCameraYaw",
    "uCameraPitch",
  ].forEach((n) => (U[n] = gl.getUniformLocation(prog, n)));

  /* ---------------- 尺寸 ---------------- */
  let W = 0,
    H = 0;
  const HORIZON_UV = 0.22;
  const MAX_PIXELS = 1.4e6;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const cssW = window.innerWidth,
      cssH = window.innerHeight;
    let s = dpr;
    const total = cssW * cssH * s * s;
    if (total > MAX_PIXELS) s = Math.sqrt(MAX_PIXELS / (cssW * cssH));
    s = Math.max(0.5, s);
    W = Math.floor(cssW * s);
    H = Math.floor(cssH * s);
    canvas.width = W;
    canvas.height = H;
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    gl.viewport(0, 0, W, H);
  }
  window.addEventListener("resize", resize, { passive: true });

  /* ---------------- Phillips 波谱 ---------------- */
  const NUM_WAVES = 14;
  const waveUniform = new Float32Array(NUM_WAVES * 4);
  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function buildWaves() {
    const g = 9.81;
    const windSpeed = 8.5;
    const L = (windSpeed * windSpeed) / g;
    const windAngle = Math.PI / 4.0;
    const wdx = Math.cos(windAngle),
      wdz = Math.sin(windAngle);
    const random = mulberry32(0x47414c4f);
    const minLambda = 1.35,
      maxLambda = 32.0;
    let energy = 0;
    const tmp = [];
    for (let i = 0; i < NUM_WAVES; i++) {
      // 对数分布可在有限的波数下同时保留长涌浪与短风浪。
      const band = (i + 0.18 + random() * 0.64) / NUM_WAVES;
      const lambda = minLambda * Math.pow(maxLambda / minLambda, band);
      const k = (2 * Math.PI) / lambda;
      const directionSpread = 0.95 - band * 0.55;
      const spread = (random() - 0.5) * directionSpread * Math.PI;
      const ang = windAngle + spread;
      const dx = Math.cos(ang),
        dz = Math.sin(ang);
      let P = Math.exp(-1.0 / (k * k * L * L)) / (k * k * k * k);
      const wdotk = Math.max(0, dx * wdx + dz * wdz);
      // Phillips 模型的 cos² 方向项：长浪顺风，短浪保留适量交叉浪。
      P *= wdotk * wdotk * Math.exp(-k * k * 0.018);
      // 对数 k 分箱的面积权重约为 k²，避免长波吞掉所有细节。
      const amp = Math.sqrt(Math.max(P, 0.0)) * k;
      energy += amp * amp;
      tmp.push({ kx: k * dx, kz: k * dz, amp, phi: random() * Math.PI * 2 });
    }
    const norm = 0.23 / Math.sqrt(Math.max(energy, 1e-6));
    for (let i = 0; i < NUM_WAVES; i++) {
      const w = tmp[i];
      waveUniform[i * 4] = w.kx;
      waveUniform[i * 4 + 1] = w.kz;
      waveUniform[i * 4 + 2] = w.amp * norm;
      waveUniform[i * 4 + 3] = w.phi;
    }
  }
  buildWaves();

  /* ---------------- 天文天空：日月位置、月相与大气调色 ---------------- */
  // GitHub Pages 不请求敏感的地理定位权限；需要其他地点时只改这一处。
  const SKY_LOCATION = Object.freeze({
    latitude: 31.2304,
    longitude: 121.4737,
    utcOffset: 8,
    label: "上海",
  });
  const CLOUD_COVER = 0.36;
  const DEG = Math.PI / 180;
  const HOUR_MS = 3600000;
  const DAY_MS = 86400000;

  function clamp01(v) {
    return Math.max(0, Math.min(1, v));
  }
  function smoothRange(a, b, v) {
    const k = clamp01((v - a) / (b - a || 1));
    return k * k * (3 - 2 * k);
  }
  function mixRgb(a, b, k) {
    return [
      a[0] + (b[0] - a[0]) * k,
      a[1] + (b[1] - a[1]) * k,
      a[2] + (b[2] - a[2]) * k,
    ];
  }
  function normalize3(x, y, z) {
    const l = Math.hypot(x, y, z) || 1;
    return [x / l, y / l, z / l];
  }
  function wrapRadians(v) {
    v %= Math.PI * 2;
    return v < 0 ? v + Math.PI * 2 : v;
  }
  function eclipticToEquatorial(lon, lat, obliquity) {
    const cosLat = Math.cos(lat);
    const x = cosLat * Math.cos(lon);
    const y =
      cosLat * Math.sin(lon) * Math.cos(obliquity) -
      Math.sin(lat) * Math.sin(obliquity);
    const z =
      cosLat * Math.sin(lon) * Math.sin(obliquity) +
      Math.sin(lat) * Math.cos(obliquity);
    return {
      ra: wrapRadians(Math.atan2(y, x)),
      dec: Math.asin(z),
      vector: normalize3(x, y, z),
    };
  }
  function horizontalDirection(ra, dec, sidereal) {
    const lat = SKY_LOCATION.latitude * DEG;
    const hourAngle = sidereal - ra;
    const cosDec = Math.cos(dec),
      sinDec = Math.sin(dec);
    const east = -cosDec * Math.sin(hourAngle);
    const up =
      Math.sin(lat) * sinDec + Math.cos(lat) * cosDec * Math.cos(hourAngle);
    const north =
      Math.cos(lat) * sinDec - Math.sin(lat) * cosDec * Math.cos(hourAngle);
    return normalize3(east, up, -north); // WebGL 场景的 +z 指向南方。
  }
  function astronomyAt(date) {
    const d = date.getTime() / DAY_MS + 2440587.5 - 2451545.0;
    const obliquity = (23.4393 - 3.563e-7 * d) * DEG;
    const sunMeanLon = wrapRadians((280.46 + 0.9856474 * d) * DEG);
    const sunAnomaly = wrapRadians((357.528 + 0.9856003 * d) * DEG);
    const sunLon =
      sunMeanLon +
      (1.915 * Math.sin(sunAnomaly) + 0.02 * Math.sin(2 * sunAnomaly)) * DEG;
    const sunEq = eclipticToEquatorial(sunLon, 0, obliquity);

    const moonMeanLon = wrapRadians((218.316 + 13.176396 * d) * DEG);
    const moonAnomaly = wrapRadians((134.963 + 13.064993 * d) * DEG);
    const moonArgument = wrapRadians((93.272 + 13.22935 * d) * DEG);
    const elongation = wrapRadians((297.85 + 12.190749 * d) * DEG);
    const moonLon =
      moonMeanLon +
      (6.289 * Math.sin(moonAnomaly) +
        1.274 * Math.sin(2 * elongation - moonAnomaly) +
        0.658 * Math.sin(2 * elongation) +
        0.214 * Math.sin(2 * moonAnomaly) -
        0.186 * Math.sin(sunAnomaly) -
        0.059 * Math.sin(2 * elongation - 2 * moonAnomaly) -
        0.057 * Math.sin(2 * elongation - sunAnomaly - moonAnomaly) +
        0.053 * Math.sin(2 * elongation + moonAnomaly) +
        0.046 * Math.sin(2 * elongation - sunAnomaly)) *
        DEG;
    const moonLat =
      (5.128 * Math.sin(moonArgument) +
        0.28 * Math.sin(moonAnomaly + moonArgument) +
        0.277 * Math.sin(moonAnomaly - moonArgument) +
        0.173 * Math.sin(2 * elongation - moonArgument) +
        0.055 * Math.sin(2 * elongation + moonArgument - moonAnomaly)) *
      DEG;
    const moonEq = eclipticToEquatorial(moonLon, moonLat, obliquity);
    const sidereal = wrapRadians(
      (280.46061837 + 360.98564736629 * d + SKY_LOCATION.longitude) * DEG,
    );
    const sunDir = horizontalDirection(sunEq.ra, sunEq.dec, sidereal);
    const moonDir = horizontalDirection(moonEq.ra, moonEq.dec, sidereal);
    const moonPhase = clamp01(
      0.5 *
        (1 -
          (sunEq.vector[0] * moonEq.vector[0] +
            sunEq.vector[1] * moonEq.vector[1] +
            sunEq.vector[2] * moonEq.vector[2])),
    );
    return {
      sunDir,
      moonDir,
      sidereal,
      moonPhase,
      sunElevation: Math.asin(sunDir[1]),
      moonElevation: Math.asin(moonDir[1]),
    };
  }
  function computePalette(date) {
    const sky = astronomyAt(date);
    // 始终使用真实天文方位与高度角，太阳东升西落、月亮按真实轨迹运行。
    // 用户通过鼠标/触摸拖动旋转视角来观察日月升落；视角按钮可跳到对应时刻并对准天体。
    const sunDegrees = sky.sunElevation / DEG;
    const moonDegrees = sky.moonElevation / DEG;
    // 基于真实天文时段（太阳高度角）的多层亮度模型。
    // 真实照度随高度角近似对数变化：正午(h>55°)~10万lux最亮、h=30°~5万、
    // h=10°~1万、黄金时刻(h=0-10°)暖橙低亮、民用/航海/天文曙暮光逐层变暗。
    const sunH = sunDegrees;
    // 白天地平线门控：日出/落瞬间切换昼夜基底
    const daylight = smoothRange(-3, 5, sunH);
    // 白天亮度梯度：正午最亮=1，h=30°≈0.5，h=10°≈0.15，h=0°≈0
    // 让正午比上午/下午明显更亮，黄金时刻最暗（模拟照度对数关系）
    const dayBrightness = smoothRange(2, 55, sunH);
    // 黄金时刻：日出后/日落前 0-10°，低角度暖橙红光
    const goldenHour =
      smoothRange(-1, 8, sunH) * (1 - smoothRange(8, 20, sunH));
    // 曙暮光分层（民用/航海/天文，色温与亮度逐层降低）
    const civilTwi =
      smoothRange(-6, -0.5, sunH) * (1 - smoothRange(1, 5, sunH));
    const nauticalTwi =
      smoothRange(-12, -6, sunH) * (1 - smoothRange(-4, 0, sunH));
    const astroTwi =
      smoothRange(-18, -12, sunH) * (1 - smoothRange(-10, -6, sunH));
    const twilight = civilTwi + nauticalTwi * 0.7; // 兼容旧变量（暖色合成）
    const nightness = 1 - smoothRange(-16, -4, sunH);

    // 天顶：深夜黑 → 天文/航海深蓝 → 白天蓝；正午 dayBrightness 提亮到更浅蓝白
    let skyZenith = mixRgb([0.004, 0.008, 0.03], [0.16, 0.48, 0.76], daylight);
    skyZenith = mixRgb(
      skyZenith,
      [0.34, 0.60, 0.84],
      dayBrightness * daylight * 0.55,
    );
    skyZenith = mixRgb(skyZenith, [0.06, 0.09, 0.18], astroTwi * 0.7);
    skyZenith = mixRgb(skyZenith, [0.075, 0.105, 0.235], nauticalTwi * 0.6);
    skyZenith = mixRgb(skyZenith, [0.12, 0.10, 0.18], civilTwi * 0.4);
    // 地平线：夜黑 → 曙暮光暖紫 → 白天浅蓝；黄金时刻强暖橙、正午偏白
    let skyHorizon = mixRgb([0.018, 0.028, 0.072], [0.63, 0.8, 0.88], daylight);
    skyHorizon = mixRgb(
      skyHorizon,
      [0.78, 0.82, 0.88],
      dayBrightness * daylight * 0.4,
    );
    skyHorizon = mixRgb(skyHorizon, [0.95, 0.45, 0.18], goldenHour * 0.65);
    skyHorizon = mixRgb(skyHorizon, [0.45, 0.18, 0.16], civilTwi * 0.55);
    skyHorizon = mixRgb(skyHorizon, [0.10, 0.08, 0.16], nauticalTwi * 0.5);
    // 水面亮度梯度（比天空稍窄，水面反射更集中于高太阳角）
    const waterDay = smoothRange(-2, 50, sunH);
    const waterDeep = mixRgb([0.008, 0.025, 0.055], [0.025, 0.25, 0.36], waterDay);
    const waterShallow = mixRgb(
      [0.035, 0.105, 0.17],
      [0.12, 0.52, 0.67],
      waterDay,
    );
    // 日出/日落光色区分（真实气象学：日出空气清澈偏金粉，日落气溶胶多偏深红）
    // 用太阳高度角变化方向判断：dh/dt > 0 = 日出（上升），< 0 = 日落（下降）
    const skyLater = astronomyAt(new Date(date.getTime() + 12 * 60000));
    const sunRising = skyLater.sunElevation > sky.sunElevation;
    // 日出：金黄淡橙偏粉；日落：深红血橙饱和。低空时差异最明显，高空统一偏白
    const sunLowColor = sunRising
      ? [1.0, 0.60, 0.32]   // 日出：金粉淡橙
      : [0.95, 0.22, 0.10]; // 日落：深红血橙
    const celestialColor = mixRgb(
      sunLowColor,
      [1.0, 0.95, 0.8],
      smoothRange(-1, 18, sunDegrees),
    );

    return Object.assign(sky, {
      skyZenith,
      skyHorizon,
      waterDeep,
      waterShallow,
      celestialColor,
      // 日月可见度：角半径均约 2.1°，加 0.57° 大气折射，中心到 -2.7° 才完全消失。
      // 地平线(rd.y=0)自然裁切圆盘底半，可见度控制整体渐隐，避免突兀消失。
      sunVisibility: smoothRange(-2.7, 0.3, sunDegrees),
      moonVisibility: smoothRange(-2.7, 0.4, moonDegrees),
      nightness,
      isNight: sunDegrees < -6,
      period: sunDegrees > 5 ? "day" : sunDegrees > -9 ? "dusk" : "night",
    });
  }

  /* ---------------- 相机姿态：鼠标/触摸拖动旋转视角 ----------------
     yaw=0 朝南(+z)、pitch=0 水平。可自由拖动旋转视角观察日月升落。
     天文计算保持真实，用户通过旋转视角来观察日月升落。 */
  let cameraYaw = 0;
  let cameraPitch = 0;
  let cameraYawTarget = 0;
  let cameraPitchTarget = 0;
  let cameraDragging = false;
  // 视角预设锁定：setView 跳到日出/月升等时刻后，锁定 autoTimeOffsetMs 不被
  // 1× 衰减逻辑回退，让用户能持续欣赏该场景；拖动/加速/切回 auto 时解除。
  let viewLocked = false;
  const PITCH_LIMIT = (Math.PI / 2) * 0.48;
  function clampPitch(v) {
    return Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, v));
  }
  let dragLastX = 0,
    dragLastY = 0;
  function pointerXY(e) {
    if (e.touches && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }
  function onPointerDown(e) {
    cameraDragging = true;
    const p = pointerXY(e);
    dragLastX = p.x;
    dragLastY = p.y;
    if (e.cancelable) e.preventDefault();
  }
  function onPointerMove(e) {
    if (!cameraDragging) return;
    const p = pointerXY(e);
    const dx = p.x - dragLastX,
      dy = p.y - dragLastY;
    dragLastX = p.x;
    dragLastY = p.y;
    const sens = 0.0042;
    cameraYaw -= dx * sens;
    cameraPitch = clampPitch(cameraPitch + dy * sens);
    cameraYawTarget = cameraYaw;
    cameraPitchTarget = cameraPitch;
    if (e.cancelable) e.preventDefault();
  }
  function onPointerUp() {
    cameraDragging = false;
  }
  canvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  let previewCacheKey = "",
    previewCache = null;
  function localMidnightMs(baseDate) {
    const shifted = new Date(
      baseDate.getTime() + SKY_LOCATION.utcOffset * HOUR_MS,
    );
    return (
      Date.UTC(
        shifted.getUTCFullYear(),
        shifted.getUTCMonth(),
        shifted.getUTCDate(),
      ) -
      SKY_LOCATION.utcOffset * HOUR_MS
    );
  }
  function previewTimes(baseDate) {
    const midnight = localMidnightMs(baseDate);
    const key = String(midnight);
    if (key === previewCacheKey && previewCache) return previewCache;

    let duskMs = midnight + 19 * HOUR_MS;
    let bestDuskError = Infinity;
    let nightMs = midnight + 23 * HOUR_MS;
    let bestMoonScore = -Infinity;
    for (let minutes = 14 * 60; minutes <= 30 * 60; minutes += 5) {
      const candidate = midnight + minutes * 60000;
      const sky = astronomyAt(new Date(candidate));
      if (minutes <= 22 * 60) {
        const error = Math.abs(sky.sunElevation / DEG + 2.2);
        if (error < bestDuskError) {
          bestDuskError = error;
          duskMs = candidate;
        }
      }
      if (minutes >= 18 * 60 && sky.sunElevation / DEG < -10) {
        // 手动“夜晚”预览优先找到月亮在画面视野内的时间；auto 模式仍保持真实方位。
        const frontOfCamera = Math.max(0, sky.moonDir[2] - 0.28);
        const score = sky.moonElevation + frontOfCamera * 0.2;
        if (score > bestMoonScore) {
          bestMoonScore = score;
          nightMs = candidate;
        }
      }
    }
    previewCacheKey = key;
    previewCache = {
      day: midnight + 13.2 * HOUR_MS,
      dusk: duskMs,
      night: nightMs,
    };
    return previewCache;
  }
  // 找今天（或最近）的日月升落时刻：扫描 5 分钟步长，检测高度角穿越 0°。
  // type: "sunrise" | "sunset" | "moonrise" | "moonset"
  function findEventTime(baseDate, type) {
    const midnight = localMidnightMs(baseDate);
    const isSun = type === "sunrise" || type === "sunset";
    const rise = type === "sunrise" || type === "moonrise";
    let prev = null;
    for (let m = 0; m <= 30 * 60; m += 5) {
      const t = midnight + m * 60000;
      const sky = astronomyAt(new Date(t));
      const el = (isSun ? sky.sunElevation : sky.moonElevation) / DEG;
      if (prev !== null) {
        const crossed = rise ? prev < 0 && el >= 0 : prev >= 0 && el < 0;
        if (crossed) {
          const frac = prev / (prev - el); // 线性插值穿越点
          return t - 5 * 60000 + frac * 5 * 60000;
        }
      }
      prev = el;
    }
    return null;
  }
  // auto 模式时间流速：可由用户在右上角调节（1×/10×/100×/1000×）。
  // 1× = 真实时间；1000× = 一天压缩为 86 秒，快速观察昼夜变化。
  // 手动模式（day/dusk/night）不受影响，仍跳到预览时刻。
  let timeScale = 1;
  let autoTimeOffsetMs = 0;
  const TIME_SCALES = [1, 100, 1000, 10000];
  function targetDateMs() {
    return Date.now() + autoTimeOffsetMs;
  }
  let displayDateMs = Date.now();
  let lastSkyState = computePalette(new Date(displayDateMs));

  /* ---------------- 涟漪：偶发自然涟漪（无鼠标） ---------------- */
  const RIPPLE_LIFETIME = 9.0;
  const MAX_RIPPLES = 48; // JS 端保留更多涟漪状态，避免雨滴涟漪在生命周期内被过早删除
  const ripples = [];
  function addRipple(x, z, strength) {
    ripples.push({ x, z, t0: perfTime, s: strength });
    while (ripples.length > MAX_RIPPLES) ripples.shift();
  }
  const rippleUniform = new Float32Array(64); // 16 个 vec4

  /* ---- JS 端云场采样（与 shader cloudField 同步，供涟漪判断乌云位置）---- */
  // 所有函数严格复刻 GLSL 实现（hash21 / valueNoise / cloudNoise / cloudField）
  function _frac(x) {
    return x - Math.floor(x);
  }
  function _hash21(px, py) {
    let p3x = _frac(px * 0.1031);
    let p3y = _frac(py * 0.1031);
    let p3z = _frac(px * 0.1031); // vec3(p.xyx)
    let d = p3x * (p3y + 33.33) + p3y * (p3z + 33.33) + p3z * (p3x + 33.33);
    p3x += d;
    p3y += d;
    p3z += d;
    return _frac((p3x + p3y) * p3z);
  }
  function _valueNoise(px, py) {
    const ix = Math.floor(px),
      iy = Math.floor(py);
    let fx = px - ix,
      fy = py - iy;
    fx = fx * fx * (3 - 2 * fx);
    fy = fy * fy * (3 - 2 * fy);
    const a = _hash21(ix, iy);
    const b = _hash21(ix + 1, iy);
    const c = _hash21(ix, iy + 1);
    const d = _hash21(ix + 1, iy + 1);
    return a + (b - a) * fx + (c + (d - c) * fx - (a + (b - a) * fx)) * fy;
  }
  function _cloudNoise(px, py) {
    let n = _valueNoise(px, py) * 0.53;
    // mat2(0.80,-0.60, 0.60,0.80) * p * 2.03 + 8.7
    let rx = 0.8 * px + 0.6 * py;
    let ry = -0.6 * px + 0.8 * py;
    rx = rx * 2.03 + 8.7;
    ry = ry * 2.03 + 8.7;
    n += _valueNoise(rx, ry) * 0.29;
    // mat2(0.76,-0.65, 0.65,0.76) * p * 2.11 + 3.1
    let r2x = 0.76 * rx + 0.65 * ry;
    let r2y = -0.65 * rx + 0.76 * ry;
    r2x = r2x * 2.11 + 3.1;
    r2y = r2y * 2.11 + 3.1;
    n += _valueNoise(r2x, r2y) * 0.18;
    return n;
  }
  function _smoothstep(e0, e1, x) {
    const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  }
  // 与 shader cloudField 完全同步：给定天空方向 + 时间 + 云量，返回 0~1 云密度
  function cloudFieldJS(dirX, dirY, dirZ, t, cloudCover) {
    const projection = 1.0 / (0.24 + Math.max(dirY, 0.0));
    const windX = t * 0.11,
      windY = t * 0.035;
    const driftX = t * 0.011,
      driftY = -t * 0.0055;
    const ang = t * 0.014;
    const ca = Math.cos(ang),
      sa = Math.sin(ang);
    // rot * (dir.xz * projection * 1.75) + wind
    const dx = dirX * projection * 1.75;
    const dz = dirZ * projection * 1.75;
    const baseX = ca * dx + sa * dz + windX;
    const baseY = -sa * dx + ca * dz + windY;
    const broad = _cloudNoise(baseX * 0.72 + driftX, baseY * 0.72 + driftY);
    const detail = _cloudNoise(
      baseX * 2.15 + 4.2 + driftX * 1.6,
      baseY * 2.15 - 1.7 + driftY * 1.6,
    );
    const shape = broad * 0.78 + detail * 0.22;
    const threshold = 0.76 + (0.43 - 0.76) * cloudCover;
    const cloud = _smoothstep(threshold, threshold + 0.13, shape);
    return cloud * _smoothstep(0.015, 0.13, dirY);
  }
  // 查询水面 (x,z) 上方是否有乌云：返回 0~1 云密度
  function cloudDensityAt(x, z) {
    // 从相机 (0, 0.7, 0) 看向 (x, 4, z) 方向 ≈ normalize(x, 3.3, z)
    const len = Math.hypot(x, 3.3, z) || 1;
    const cloudCover = CLOUD_COVER + weather.cloudDarken * (1 - CLOUD_COVER);
    return cloudFieldJS(x / len, 3.3 / len, z / len, perfTime, cloudCover);
  }

  /* ---------------- 天气：云层状态机 + 雨 / 闪电（三态开关） ----------------
     核心自然规律：积雨云需数小时堆积（此处压缩为 ~80s），成熟后才有几率降雨/闪电；
     降水/闪电结束后云层仍持续存在，随后缓慢消散（~200s），不会因天气结束而立即散去。
     云层状态机：clearing → building → mature → decaying → clearing（循环）
     - clearing：云量→0，等待下一次积云（长间隔 180-600s，代表 1-3 天）
     - building：云量 0→1 缓慢堆积（~80s；手动模式加速到 ~10s）
     - mature：维持满云（60-150s），此阶段才有几率触发雨/闪电
     - decaying：云量缓慢消散（~200s），雨/闪电不会新触发但已存在的自然结束
     雨和闪电独立概率判定，因此会出现：只有雨、只有闪电（干雷暴）、两者皆有、或全无。
     每个开关三态：off=关闭 | on=立即（加速积云）| auto=随机（默认）
     ---------------------------------------------------------------- */
  const weather = {
    rainMode: "auto", // off | on | auto（默认 auto：随机）
    lightningMode: "auto", // off | on | auto（默认 auto：随机）
    // 云层独立状态机
    cloudLevel: 0, // 0-1 当前云层厚度（独立于雨/闪电）
    cloudPhase: "clearing", // clearing | building | mature | decaying
    matureEndAt: 0, // 成熟期结束时刻
    nextCloudBuildAt: 8 + Math.random() * 12, // 首次积云在 8-20s 后开始
    // 雨
    rainActive: false,
    rainEndAt: 0,
    rainIntensity: 0,
    rainTarget: 0,
    // 闪电
    flash: 0,
    flashSeq: [],
    nextLightningAt: 30 + Math.random() * 60, // 首次闪电推迟到云层可能成熟后
    lightningActive: false,
    lightningEndAt: 0,
    boltSeed: 0,
    // 派生
    cloudDarken: 0,
  };

  function setWeather(opts) {
    if (!opts) return;
    if (opts.rain !== undefined) {
      weather.rainMode = opts.rain;
      if (opts.rain === "off") {
        weather.rainTarget = 0;
        weather.rainActive = false;
      } else if (opts.rain === "on") {
        // 立即模式：加速积云阶段（不跳过"先积云后下雨"的自然顺序）
        if (
          weather.cloudPhase === "clearing" ||
          weather.cloudPhase === "decaying"
        )
          weather.cloudPhase = "building";
      }
      // auto：由云层状态机自然推进，不做特殊处理
    }
    if (opts.lightning !== undefined) {
      weather.lightningMode = opts.lightning;
      if (opts.lightning === "off") {
        weather.lightningActive = false;
        weather.flashSeq = [];
      } else if (opts.lightning === "on") {
        if (
          weather.cloudPhase === "clearing" ||
          weather.cloudPhase === "decaying"
        )
          weather.cloudPhase = "building";
      }
    }
  }

  function updateWeather(t, dt) {
    const manualRain = weather.rainMode === "on";
    const manualLightning = weather.lightningMode === "on";
    const anyManual = manualRain || manualLightning;

    // ---- 云层独立状态机（先积云，后天气）----
    // 手动模式加速积云（约 10s 堆厚），但仍保留"先积云后天气"的自然顺序。
    // 自动模式堆积约 80s，消散约 200s，整个周期 10-18 分钟代表真实 1-3 天。
    const buildRate = anyManual ? 0.1 : 0.012; // 手动 ~10s，自动 ~80s
    const decayRate = 0.005; // 消散比堆积慢（自然规律）

    // 手动模式强制从消散阶段进入积云
    if (
      anyManual &&
      (weather.cloudPhase === "clearing" || weather.cloudPhase === "decaying")
    ) {
      weather.cloudPhase = "building";
    }

    switch (weather.cloudPhase) {
      case "clearing":
        weather.cloudLevel = Math.max(0, weather.cloudLevel - decayRate * dt);
        if (weather.cloudLevel <= 0.001 && t >= weather.nextCloudBuildAt) {
          weather.cloudPhase = "building";
        }
        break;
      case "building":
        weather.cloudLevel = Math.min(1, weather.cloudLevel + buildRate * dt);
        if (weather.cloudLevel >= 0.95) {
          weather.cloudPhase = "mature";
          weather.matureEndAt = t + 60 + Math.random() * 90; // 成熟期 60-150s
        }
        break;
      case "mature":
        weather.cloudLevel = Math.min(
          1,
          weather.cloudLevel + buildRate * 0.2 * dt,
        );
        if (t >= weather.matureEndAt && !anyManual) {
          weather.cloudPhase = "decaying";
        }
        break;
      case "decaying":
        // 缓慢消散；雨/闪电不会新触发，但已存在的会自然结束
        weather.cloudLevel = Math.max(
          0,
          weather.cloudLevel - decayRate * 0.7 * dt,
        );
        if (weather.cloudLevel <= 0.15) {
          weather.cloudPhase = "clearing";
          // 下次积云：长间隔（代表 1-3 天的加速时间）
          weather.nextCloudBuildAt = t + 180 + Math.random() * 420;
        }
        break;
    }

    // cloudDarken 平滑跟随 cloudLevel（不再直接绑定雨/闪电活跃状态）
    weather.cloudDarken +=
      (weather.cloudLevel - weather.cloudDarken) * (1 - Math.exp(-dt * 0.4));

    // ---- 雨：仅在成熟积雨云阶段有几率触发 ----
    if (manualRain) {
      if (weather.cloudPhase === "mature") {
        weather.rainActive = true;
        weather.rainTarget = 1.0;
      }
    } else if (weather.rainMode === "auto") {
      if (!weather.rainActive && weather.cloudPhase === "mature") {
        // 低概率阵雨：每秒约 1.2% 几率（不是每个周期都下雨）
        if (Math.random() < dt * 0.012) {
          weather.rainActive = true;
          weather.rainEndAt = t + 30 + Math.random() * 50; // 阵雨 30-80s
          weather.rainTarget = 0.5 + Math.random() * 0.4;
        }
      }
      if (weather.rainActive && t >= weather.rainEndAt) {
        weather.rainActive = false;
        weather.rainTarget = 0;
        // 雨停后不会立即再下：需等下一个云层周期
      }
    } else {
      weather.rainTarget = 0;
      weather.rainActive = false;
    }
    weather.rainIntensity +=
      (weather.rainTarget - weather.rainIntensity) * (1 - Math.exp(-dt * 1.6));

    // ---- 雨滴打水面涟漪：只在乌云下方的水面生成（雨跟着乌云）----
    if (weather.rainIntensity > 0.12) {
      const dropsPerSec = weather.rainIntensity * 10;
      const expect = dropsPerSec * dt;
      let count =
        Math.floor(expect) +
        (Math.random() < expect - Math.floor(expect) ? 1 : 0);
      let placed = 0;
      for (let i = 0; i < count * 4 && placed < count; i++) {
        // 最多重试 4 倍，找不到乌云就少下
        const x = (Math.random() - 0.5) * 9;
        const z = 0.8 + Math.random() * 5.5;
        const density = cloudDensityAt(x, z);
        if (density < 0.25) continue; // 该位置上方无乌云，不下雨
        // 云越密雨滴越大（乌云中心雨势更猛）
        const s = 0.01 + density * 0.018;
        addRipple(x, z, s);
        placed++;
      }
    }

    // ---- 闪电：与雨独立，仅在厚云阶段有几率触发（可单独出现）----
    const canLightning =
      weather.cloudPhase === "mature" || weather.cloudLevel > 0.75;

    if (
      weather.lightningMode !== "off" &&
      !weather.lightningActive &&
      t >= weather.nextLightningAt
    ) {
      if (
        manualLightning ||
        (weather.lightningMode === "auto" && canLightning)
      ) {
        weather.lightningActive = true;
        const dur = 0.8 + Math.random() * 1.4; // 序列持续 0.8-2.2s
        weather.lightningEndAt = t + dur;
        weather.flashSeq = [];
        let tt = 0;
        while (tt < dur) {
          weather.flashSeq.push({
            at: t + tt,
            dur: 0.06 + Math.random() * 0.09,
            v: 0.7 + Math.random() * 0.3,
          });
          tt += 0.12 + Math.random() * 0.28; // 脉冲间隔
        }
        weather.boltSeed = Math.random() * 100; // 闪电纹种子
      } else if (weather.lightningMode === "auto" && !canLightning) {
        // 云不够厚：推迟到云层可能变厚时再检查
        weather.nextLightningAt = t + 20 + Math.random() * 40;
      }
    }
    let flash = 0;
    for (let i = 0; i < weather.flashSeq.length; i++) {
      const p = weather.flashSeq[i];
      const age = t - p.at;
      if (age >= 0 && age < p.dur) {
        flash = Math.max(flash, p.v * (1 - age / p.dur));
      }
    }
    if (weather.lightningActive && t >= weather.lightningEndAt) {
      weather.lightningActive = false;
      weather.flashSeq = [];
      // 闪电结束不影响云层（云层按自身状态机继续）
      if (manualLightning) weather.nextLightningAt = t + 2 + Math.random() * 3;
      else weather.nextLightningAt = t + 60 + Math.random() * 180; // 长间隔
    }
    weather.flash = flash;
  }

  // 自然扰动：偶发涟漪像风掠过海面，偶尔有较大波浪。
  // 大部分时间为低强度小涟漪；偶尔出现稍明显的局部扰动。
  let nextRippleAt = 1.6;
  function maybeSpawnNatural(t) {
    if (t < nextRippleAt) return;
    const x = (Math.random() - 0.5) * 11;
    const z = 0.8 + Math.random() * 6.0;
    const isSwell = Math.random() < 0.14;
    const strength = isSwell
      ? 0.12 + Math.random() * 0.06
      : 0.055 + Math.random() * 0.045;
    addRipple(x, z, strength);
    nextRippleAt =
      t + (isSwell ? 5.0 + Math.random() * 3.5 : 2.4 + Math.random() * 2.8);
  }

  // CSS/DOM 物体与 WebGL 水面共用这一份局部采样，保证漂浮物的
  // 上下起伏、横向漂移和倾斜都来自同一套 Gerstner/涟漪波场。
  function sampleSurface(x, z, t) {
    let height = 0;
    let slopeX = 0;
    let slopeZ = 0;
    let driftX = 0;
    let driftZ = 0;

    for (let i = 0; i < NUM_WAVES; i++) {
      const kx = waveUniform[i * 4];
      const kz = waveUniform[i * 4 + 1];
      const amplitude = waveUniform[i * 4 + 2];
      const phaseOffset = waveUniform[i * 4 + 3];
      const k = Math.hypot(kx, kz);
      if (k < 1e-4) continue;

      const phase = kx * x + kz * z - Math.sqrt(9.81 * k) * t + phaseOffset;
      const sine = Math.sin(phase);
      const cosine = Math.cos(phase);
      const steepness = Math.min(k * amplitude, 0.55);
      height += amplitude * (cosine + 0.18 * steepness * Math.cos(2 * phase));

      // 对高度场求偏导，得到物体随波面法线产生的 pitch / roll。
      const second = -0.36 * amplitude * steepness * Math.sin(2 * phase);
      slopeX += -amplitude * kx * sine + second * (kx / k);
      slopeZ += -amplitude * kz * sine + second * (kz / k);
      driftX += (kx / k) * amplitude * sine * 0.7;
      driftZ += (kz / k) * amplitude * sine * 0.7;
    }

    // 与 fragment shader 使用相同的有限宽度涟漪包，让物体能被局部扰动轻推，
    // 但仍会随着包络衰减自然回到全局海况，而不是在结尾瞬间消失。
    for (let i = ripples.length - 1; i >= 0; i--) {
      const ripple = ripples[i];
      const age = t - ripple.t0;
      if (age < 0 || age > RIPPLE_LIFETIME) continue;

      const hash =
        Math.abs(
          Math.sin(
            ripple.x * 12.9898 +
              ripple.z * 78.233 +
              Math.floor(ripple.t0 * 7) * 37.719,
          ) * 43758.5453,
        ) % 1;
      const k = 3.0 + 1.6 * hash;
      const omega = Math.sqrt(9.81 * k);
      const groupSpeed = (0.5 * omega) / k;
      const centerX = ripple.x + 0.07 * age;
      const centerZ = ripple.z + 0.05 * age;
      const radialX = x - centerX;
      const radialZ = z - centerZ;
      const distance = Math.hypot(radialX, radialZ) + 1e-4;
      const width = 0.38 + 0.14 * age;
      const packet = Math.exp(
        -0.5 * Math.pow((distance - groupSpeed * age) / width, 2),
      );
      const attack = smoothRange(0.0, 0.32, age);
      const release = 1.0 - smoothRange(6.0, 9.0, age);
      const damping = Math.exp(-0.14 * age) / Math.sqrt(1.0 + 0.34 * distance);
      const envelope = packet * attack * release * damping;
      const phase = k * distance - omega * age;
      const fineK = k * 1.58;
      const finePhase =
        fineK * distance - Math.sqrt(9.81 * fineK) * age + hash * Math.PI * 2;
      const crest = Math.sin(phase) + 0.22 * Math.sin(finePhase);
      const amplitude = envelope * ripple.s;
      height += crest * amplitude;

      const derivative =
        k * Math.cos(phase) + 0.22 * fineK * Math.cos(finePhase);
      slopeX += derivative * (radialX / distance) * amplitude;
      slopeZ += derivative * (radialZ / distance) * amplitude;
      driftX += (radialX / distance) * Math.cos(phase) * amplitude * 0.18;
      driftZ += (radialZ / distance) * Math.cos(phase) * amplitude * 0.18;
    }

    return { height, slopeX, slopeZ, driftX, driftZ };
  }

  /* ---------------- 对外 API ---------------- */
  function localClockText(date) {
    const local = new Date(date.getTime() + SKY_LOCATION.utcOffset * HOUR_MS);
    const hh = String(local.getUTCHours()).padStart(2, "0");
    const mm = String(local.getUTCMinutes()).padStart(2, "0");
    const offset =
      SKY_LOCATION.utcOffset >= 0
        ? `+${SKY_LOCATION.utcOffset}`
        : String(SKY_LOCATION.utcOffset);
    return `${hh}:${mm} UTC${offset}`;
  }
  window.GalokOcean = {
    setOverride() {
      // 固定时段切换已移除，始终使用真实天文时间。保留空函数兼容旧调用。
    },
    get isNight() {
      return lastSkyState.isNight;
    },
    get nightness() {
      return lastSkyState.nightness;
    },
    get period() {
      return computePalette(new Date(displayDateMs)).period;
    },
    // 时钟显示虚拟时间：1× 时 = 真实时间；加速时跟着昼夜一起快进，保持与时钟所见一致
    get clockText() {
      return localClockText(new Date(displayDateMs));
    },
    get locationLabel() {
      return SKY_LOCATION.label;
    },
    get moonPhase() {
      return lastSkyState.moonPhase;
    },
    get time() {
      return perfTime;
    },
    sampleSurface,
    // 在世界坐标 (x, z) 的水面生成涟漪 —— 供 DOM 物体（如卡片）扰动水面
    rippleAt(x, z, strength) {
      addRipple(x, z, strength);
    },
    // 天气开关：{ rain: true/false, lightning: true/false }，二者独立
    setWeather(opts) {
      setWeather(opts);
    },
    get weatherState() {
      return weather;
    },
    // 时间流速调节：scale ∈ {1,2,5,10}，仅 auto 模式生效
    getTimeScale() {
      return timeScale;
    },
    setTimeScale(s) {
      if (TIME_SCALES.includes(s)) timeScale = s;
    },
    // 相机姿态（弧度）：app.js 据此做卡片 3D 投影
    getCamera() {
      return { yaw: cameraYaw, pitch: cameraPitch };
    },
    // 世界坐标 (x,y,z) → 屏幕投影，匹配 shader 相机模型（ro=(0,0.70,0)）。
    // 返回 {visible, px, py, scale, depth}；visible=false 表示在身后/太近。
    projectWorld(x, y, z) {
      const relX = x,
        relY = y - 0.7,
        relZ = z;
      const cy = Math.cos(cameraYaw),
        sy = Math.sin(cameraYaw);
      const cp = Math.cos(cameraPitch),
        sp = Math.sin(cameraPitch);
      // R_y(-yaw)
      const vx = cy * relX - sy * relZ;
      const vy = relY;
      const vz = sy * relX + cy * relZ;
      // R_x(-pitch)
      const cx = vx;
      const cyy = cp * vy + sp * vz;
      const cz = -sp * vy + cp * vz;
      if (cz < 0.2) return { visible: false };
      const ux = (cx / cz) * (1.05 / 1.15);
      const uy = (cyy / cz) * 1.05 + HORIZON_UV;
      const px = (ux * H + W) / 2;
      const py = (H * (1 - uy)) / 2;
      const scale = 2.35 / cz;
      return { visible: true, px, py, scale, depth: cz };
    },
    // 设置相机目标姿态（弧度），平滑过渡；用于视角按钮对准天体
    setCameraTarget(yaw, pitch) {
      cameraYawTarget = yaw;
      cameraPitchTarget = clampPitch(pitch);
    },
    // 立即重置相机（拖动 / 切换模式时调用）
    resetCamera() {
      cameraYaw = 0;
      cameraPitch = 0;
      cameraYawTarget = 0;
      cameraPitchTarget = 0;
      viewLocked = false;
      autoTimeOffsetMs = 0;
    },
    // 视角预设：跳到日月升落时刻并把相机对准该天体（仅 auto 模式生效）
    // view: "auto" | "sunrise" | "sunset" | "moonrise" | "moonset"
    setView(view) {
      if (view === "auto") {
        viewLocked = false;
        autoTimeOffsetMs = 0;
        cameraYawTarget = 0;
        cameraPitchTarget = 0;
        return;
      }
      const now = new Date();
      const target = findEventTime(now, view);
      if (!target) return;
      autoTimeOffsetMs = target - now.getTime();
      viewLocked = true; // 锁定该时刻，1× 下不衰减，持续呈现日出/月升等场景
      const sky = astronomyAt(new Date(target));
      const isSun = view === "sunrise" || view === "sunset";
      const dir = isSun ? sky.sunDir : sky.moonDir;
      // 朝向天体水平方位（atan2(east, south)）；pitch=0 看海平线
      cameraYawTarget = Math.atan2(dir[0], dir[2]);
      cameraPitchTarget = 0;
    },
  };

  /* ---------------- 主循环 ---------------- */
  const start = performance.now();
  let perfTime = 0,
    last = start;
  resize();
  function frame(now) {
    perfTime = (now - start) / 1000;
    const rawDt = (now - last) / 1000;
    last = now; // 真实帧间隔（不受限，用于时间累加）
    const dt = Math.min(0.1, rawDt); // 受限 dt（用于物理/渲染，避免大跳变）

    // 时间加速：用真实帧间隔累加（不受 dt 上限影响，保证低帧率下加速仍准确）
    if (timeScale > 1) {
      autoTimeOffsetMs += rawDt * 1000 * (timeScale - 1);
      viewLocked = false; // 加速推进时间时解除视角锁定，让昼夜自然流逝
    } else if (
      timeScale === 1 &&
      !viewLocked &&
      Math.abs(autoTimeOffsetMs) > 1
    ) {
      // 回到 1× 且非视角锁定时：把偏移平滑回退到 0，让昼夜/时钟自动退回真实时间（约 2.5s 完成）
      autoTimeOffsetMs *= Math.exp(-rawDt * 1.5);
      if (Math.abs(autoTimeOffsetMs) < 1) autoTimeOffsetMs = 0;
    }

    let dateDelta = targetDateMs() - displayDateMs;
    if (dateDelta > DAY_MS / 2) dateDelta -= DAY_MS;
    if (dateDelta < -DAY_MS / 2) dateDelta += DAY_MS;
    // 时间连续推进，直接同步避免平滑滞后
    displayDateMs += dateDelta;
    const p = computePalette(new Date(displayDateMs));
    lastSkyState = p;

    // 相机姿态：拖动时直接同步，否则平滑跟随目标
    if (!cameraDragging) {
      const k = 1 - Math.exp(-dt * 6);
      let dyaw = cameraYawTarget - cameraYaw;
      while (dyaw > Math.PI) dyaw -= Math.PI * 2;
      while (dyaw < -Math.PI) dyaw += Math.PI * 2;
      cameraYaw += dyaw * k;
      cameraPitch += (cameraPitchTarget - cameraPitch) * k;
    }

    maybeSpawnNatural(perfTime);
    updateWeather(perfTime, dt);

    gl.uniform2f(U.uResolution, W, H);
    gl.uniform1f(U.uTime, perfTime);
    gl.uniform3f(U.uSunDir, p.sunDir[0], p.sunDir[1], p.sunDir[2]);
    gl.uniform3f(U.uMoonDir, p.moonDir[0], p.moonDir[1], p.moonDir[2]);
    gl.uniform3f(
      U.uCelestialColor,
      p.celestialColor[0],
      p.celestialColor[1],
      p.celestialColor[2],
    );
    gl.uniform1f(U.uSunVisibility, p.sunVisibility);
    gl.uniform1f(U.uMoonVisibility, p.moonVisibility);
    gl.uniform1f(U.uMoonPhase, p.moonPhase);
    gl.uniform1f(U.uNight, p.nightness);
    gl.uniform1f(U.uLatitude, SKY_LOCATION.latitude * DEG);
    gl.uniform1f(U.uSidereal, p.sidereal);
    gl.uniform1f(U.uCameraYaw, cameraYaw);
    gl.uniform1f(U.uCameraPitch, cameraPitch);
    // 乌云：暴风雨时云量拉满（在基础云量上叠加 cloudDarken）
    gl.uniform1f(
      U.uCloudCover,
      CLOUD_COVER + weather.cloudDarken * (1 - CLOUD_COVER),
    );
    gl.uniform1f(U.uCloudDarken, weather.cloudDarken);
    gl.uniform1f(U.uRainIntensity, weather.rainIntensity);
    gl.uniform1f(U.uFlash, weather.flash);
    gl.uniform1f(U.uLightningSeed, weather.boltSeed);
    gl.uniform3f(U.uSkyZenith, p.skyZenith[0], p.skyZenith[1], p.skyZenith[2]);
    gl.uniform3f(
      U.uSkyHorizon,
      p.skyHorizon[0],
      p.skyHorizon[1],
      p.skyHorizon[2],
    );
    gl.uniform3f(U.uWaterDeep, p.waterDeep[0], p.waterDeep[1], p.waterDeep[2]);
    gl.uniform3f(
      U.uWaterShallow,
      p.waterShallow[0],
      p.waterShallow[1],
      p.waterShallow[2],
    );
    gl.uniform1f(U.uHorizonUv, HORIZON_UV);
    gl.uniform1f(U.uChoppy, 0.7);
    gl.uniform4fv(U.uWaves, waveUniform);

    // 涟漪渲染：按当前可见能量排序选 top 16，避免雨滴涟漪挤占槽位导致截停消失。
    // 能量评分近似 shader 中的包络（attack * release * damping），能量越低越先让出槽位，
    // 因此涟漪是自然淡出到不可见后才被替换，而非被新涟漪突然挤出。
    const scored = [];
    for (let i = 0; i < ripples.length; i++) {
      const r = ripples[i];
      const age = perfTime - r.t0;
      if (age < 0 || age > RIPPLE_LIFETIME) continue;
      const attack = smoothRange(0.0, 0.32, age);
      const release = 1.0 - smoothRange(6.0, 9.0, age);
      const damping = Math.exp(-0.14 * age);
      scored.push({ r, score: r.s * attack * release * damping });
    }
    scored.sort((a, b) => b.score - a.score);
    const top = Math.min(16, scored.length);
    for (let i = 0; i < 16; i++) {
      const idx = i * 4;
      if (i < top) {
        const r = scored[i].r;
        rippleUniform[idx] = r.x;
        rippleUniform[idx + 1] = r.z;
        rippleUniform[idx + 2] = r.t0;
        rippleUniform[idx + 3] = r.s;
      } else {
        rippleUniform[idx] = 0;
        rippleUniform[idx + 1] = 0;
        rippleUniform[idx + 2] = -100;
        rippleUniform[idx + 3] = 0;
      }
    }
    gl.uniform4fv(U.uRipples, rippleUniform);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
