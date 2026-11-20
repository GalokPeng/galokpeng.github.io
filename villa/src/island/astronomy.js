// Port of the original water.js Phillips spectrum, Shanghai ephemeris, palette and seeded daily plan.
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
function computePalette(date, cloudDarken=0) {
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

  // 天顶：深夜黑 → 天文/航海深蓝 → 白天更深的蓝；正午 dayBrightness 轻微提亮
  // 天气影响：乌云满天时天空更暗更灰沉（cloudDarken 越大越压抑）
  const cd = cloudDarken;
  // 晴天蓝度指数：基于日期的低频正弦叠加，缓慢变化，偶尔出现深蓝天
  // 多频叠加避免周期感，pow 让大部分日子接近正常、少数日子明显更蓝
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getUTCFullYear(), 0, 0).getTime()) / 86400000,
  );
  const blueBlend =
    0.5 +
    0.5 *
      Math.sin(dayOfYear * 0.052) *
      Math.sin(dayOfYear * 0.017 + 1.3) *
      Math.sin(dayOfYear * 0.0083 + 2.7);
  // 0-1 蓝度增益：强制每天都使用最高级别的深蓝天空和海水
  const blueness = 1.0;
  // 深蓝目标色（清澈夏日天空）：比常规天顶蓝更纯更饱和（修改为更深邃的宝蓝色）
  const deepBlueZenith = [0.02, 0.12, 0.40];
  const deepBlueHorizon = [0.08, 0.32, 0.65];
  // 仅在晴天（cd 小）才让蓝度显现，乌云时不叠加深蓝
  const clearSky = 1 - cd;
  let skyZenith = mixRgb([0.004, 0.008, 0.03], [0.10, 0.36, 0.68], daylight);
  skyZenith = mixRgb(
    skyZenith,
    [0.20, 0.46, 0.74],
    dayBrightness * daylight * 0.35,
  );
  // 晴天深蓝增益（按日期缓慢变化，不突兀）
  skyZenith = mixRgb(skyZenith, deepBlueZenith, blueness * clearSky * daylight);
  // 乌云时天顶压暗、去蓝偏灰（真实阴天天空灰沉）
  skyZenith = mixRgb(skyZenith, [0.18, 0.20, 0.24], cd * 0.55 * daylight);
  skyZenith = mixRgb(skyZenith, [0.06, 0.09, 0.18], astroTwi * 0.7);
  skyZenith = mixRgb(skyZenith, [0.075, 0.105, 0.235], nauticalTwi * 0.6);
  skyZenith = mixRgb(skyZenith, [0.12, 0.1, 0.18], civilTwi * 0.4);
  // 地平线：夜黑 → 曙暮光暖紫 → 白天蓝；黄金时刻强暖橙（降低过白）
  let skyHorizon = mixRgb([0.018, 0.028, 0.072], [0.42, 0.66, 0.80], daylight);
  skyHorizon = mixRgb(
    skyHorizon,
    [0.58, 0.74, 0.84],
    dayBrightness * daylight * 0.3,
  );
  // 晴天深蓝增益同步作用于地平线
  skyHorizon = mixRgb(skyHorizon, deepBlueHorizon, blueness * clearSky * daylight);
  // 乌云时地平线压暗去蓝（避免远方海平面过白）
  skyHorizon = mixRgb(skyHorizon, [0.22, 0.24, 0.28], cd * 0.6 * daylight);
  skyHorizon = mixRgb(skyHorizon, [0.95, 0.45, 0.18], goldenHour * 0.65);
  skyHorizon = mixRgb(skyHorizon, [0.45, 0.18, 0.16], civilTwi * 0.55);
  skyHorizon = mixRgb(skyHorizon, [0.1, 0.08, 0.16], nauticalTwi * 0.5);
  // 水面亮度梯度（比天空稍窄，水面反射更集中于高太阳角）
  const waterDay = smoothRange(-2, 50, sunH);
  let waterDeep = mixRgb(
    [0.008, 0.025, 0.055],
    [0.025, 0.25, 0.36],
    waterDay,
  );
  let waterShallow = mixRgb(
    [0.035, 0.105, 0.17],
    [0.12, 0.52, 0.67],
    waterDay,
  );

  // 【新增】让海水也跟随"晴天蓝度指数"，在特定天气下变成深海宝蓝
  const deepBlueWater = [0.01, 0.08, 0.28];      // 深海宝蓝
  const deepBlueShallow = [0.04, 0.25, 0.50];    // 深海浅水过渡蓝
  waterDeep = mixRgb(waterDeep, deepBlueWater, blueness * clearSky * daylight);
  waterShallow = mixRgb(waterShallow, deepBlueShallow, blueness * clearSky * daylight);
  // 日出/日落光色区分（真实气象学：日出空气清澈偏金粉，日落气溶胶多偏深红）
  // 用太阳高度角变化方向判断：dh/dt > 0 = 日出（上升），< 0 = 日落（下降）
  const skyLater = astronomyAt(new Date(date.getTime() + 12 * 60000));
  const sunRising = skyLater.sunElevation > sky.sunElevation;
  // 日出：金黄淡橙偏粉；日落：深红血橙饱和。低空时差异最明显，高空统一偏白
  const sunLowColor = sunRising
    ? [1.0, 0.6, 0.32] // 日出：金粉淡橙
    : [0.95, 0.22, 0.1]; // 日落：深红血橙
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
function dateSeedOf(date) {
  return (
    date.getUTCFullYear() * 10000 + (date.getUTCMonth() + 1) * 100 + date.getUTCDate()
  );
}

// 生成今日天气剧本：1-3 个天气事件，每个事件是一个云层周期
// 时间单位：小时（0-24），对应真实钟点
function generateDailyPlan(date) {
  const seed = dateSeedOf(date);
  const rng = mulberry32(seed);
  const events = [];
  // 1-3 个天气事件（积云周期）
  const eventCount = 1 + Math.floor(rng() * 3);
  let cursor = 6 + rng() * 4; // 首次积云在 6-10 点开始
  for (let i = 0; i < eventCount; i++) {
    // 积云堆积时长（小时）：0.8-1.5（真实约 60-90 分钟）
    const buildHours = 0.8 + rng() * 0.7;
    // 成熟期时长（小时）：1-3
    const matureHours = 1.0 + rng() * 2.0;
    // 消散时长（小时）：0.5-1.0
    const decayHours = 0.5 + rng() * 0.5;
    const cloudStart = cursor;
    const matureStart = cloudStart + buildHours;
    const decayStart = matureStart + matureHours;
    const clearStart = decayStart + decayHours;
    // 降水：60% 概率有雨，强度 0.3-0.9
    const hasRain = rng() < 0.6;
    const rainIntensity = hasRain ? 0.3 + rng() * 0.6 : 0;
    // 雨在成熟期中段开始，持续到成熟期末
    const rainStart = hasRain
      ? matureStart + matureHours * (0.2 + rng() * 0.2)
      : 0;
    const rainEnd = hasRain
      ? matureStart + matureHours * (0.7 + rng() * 0.2)
      : 0;
    // 闪电：仅有雨时有 40% 概率，或独立干雷暴 10%
    const hasLightning = hasRain ? rng() < 0.4 : rng() < 0.1;
    events.push({
      cloudStart,
      matureStart,
      decayStart,
      clearStart,
      hasRain,
      rainIntensity,
      rainStart,
      rainEnd,
      hasLightning,
    });
    // 下个事件间隔 2-5 小时
    cursor = clearStart + 2 + rng() * 3;
    if (cursor > 22) break; // 不排到深夜
  }
  return { dateSeed: seed, events };
}

// 剧本缓存（同一天只算一次）
let cachedPlan = null;
let cachedPlanDate = -1;
function getDailyPlan(date) {
  const ds = dateSeedOf(date);
  if (cachedPlan && cachedPlanDate === ds) return cachedPlan;
  cachedPlan = generateDailyPlan(date);
  cachedPlanDate = ds;
  return cachedPlan;
}

// 根据真实时间查剧本，得当前天气目标状态（不是瞬时值，是"该在哪个阶段"）
// 返回 { phase, cloudTarget, rainTarget, lightningAllow }
function queryPlanState(date) {
  const plan = getDailyPlan(date);
  const hour =
    date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  // 找当前落在哪个事件里
  let cur = null;
  for (const ev of plan.events) {
    if (hour >= ev.cloudStart && hour < ev.clearStart) {
      cur = ev;
      break;
    }
  }
  if (!cur) {
    // 不在任何事件中：晴天
    return {
      phase: "clear",
      cloudTarget: 0,
      rainTarget: 0,
      lightningAllow: false,
    };
  }
  if (hour < cur.matureStart) {
    // 积云阶段：白云逐渐堆厚（还不乌）
    return {
      phase: "building",
      cloudTarget: 0.95,
      rainTarget: 0,
      lightningAllow: false,
    };
  }
  if (hour < cur.decayStart) {
    // 成熟期：厚云，可能开始乌化+下雨
    const inRain = cur.hasRain && hour >= cur.rainStart && hour < cur.rainEnd;
    // 乌化目标：有雨或即将下雨(雨前10分钟)时渐乌
    const rainApproaching =
      cur.hasRain && hour >= cur.rainStart - 1 / 6 && hour < cur.rainStart;
    const darkenTarget = inRain || rainApproaching ? 0.85 : 0.15;
    return {
      phase: "mature",
      cloudTarget: 1.0,
      rainTarget: inRain ? cur.rainIntensity : 0,
      lightningAllow: cur.hasLightning,
      darkenTarget,
    };
  }
  // 消散阶段：云逐渐消散，乌化先退（雨停后乌云先变白再散）
  const decayProgress =
    (hour - cur.decayStart) / (cur.clearStart - cur.decayStart);
  return {
    phase: "decaying",
    cloudTarget: Math.max(0, 1.0 - decayProgress),
    rainTarget: 0,
    lightningAllow: false,
    darkenTarget: Math.max(0, 0.85 * (1 - decayProgress * 2)), // 前半段快速变白
  };
}


export { waveUniform,computePalette,queryPlanState,localMidnightMs,findEventTime,SKY_LOCATION };
