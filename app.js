/* =========================================================
   Galok · 应用逻辑 (app.js)
   - 在此修改你的站点配置（SITES）
   - 卡片渲染、主题切换、跳转
   ========================================================= */
(function () {
  "use strict";

  /* ============== ① 站点配置 —— 你只需要改这里 ============== */
  const SITES = [
    {
      type: "blog", // 视觉风格：blog | books | link
      name: "Galok's Blog",
      desc: "BLOG · 思绪与札记",
      url: "https://blog.galok.cn",
      target: "_blank", // _self 当前页跳转 | _blank 新标签页
      accent: "#4a9fd6",
    },
    {
      type: "books",
      name: "Galok's 知序书房",
      desc: "BOOKS · 书海漫游",
      url: "https://books.galok.cn",
      target: "_blank",
      accent: "#8a7bb8",
    },
    {
      type: "share",
      name: "Galok's 热爱分享",
      desc: "Share · 海量资源",
      url: "https://pgxcg.qzz.io",
      target: "_blank",
      accent: "#8a2bb1",
    },
  ];

  /* ============== ② 页面标题（左上角品牌名） ============== */
  const SITE_NAME = "Galok";

  /* ======================================================== */

  const islandsEl = document.getElementById("islands");
  const nameEl = document.getElementById("site-name");
  const clockEl = document.getElementById("clock");

  if (nameEl) nameEl.textContent = SITE_NAME;

  /* ---------- 卡片视觉模板 ---------- */
  function visualHtml(type) {
    switch (type) {
      case "blog":
        return `
          <div class="paper">
            <div class="line title"></div>
            <div class="line s"></div>
            <div class="line m"></div>
            <div class="pic"></div>
            <div class="line s"></div>
            <div class="line t"></div>
            <span class="tag">ESSAY</span>
          </div>`;
      case "books":
        return `
          <div class="stack">
            <span class="bookmark"></span>
            <div class="bk">VOL · I</div>
            <div class="bk">VOL · II</div>
            <div class="bk">VOL · III</div>
            <div class="bk">VOL · IV</div>
          </div>`;
      default: // link / generic
        return `
          <div style="font-family:'Cormorant Garamond',serif;font-size:3.4rem;letter-spacing:.1em;opacity:.85">↗</div>`;
    }
  }

  /* ---------- 渲染卡片 ---------- */
  function render() {
    if (!islandsEl) return;
    islandsEl.innerHTML = "";
    SITES.forEach((s, i) => {
      const el = document.createElement("a");
      el.className = "island";
      el.setAttribute("data-type", s.type);
      const spread = (SITES.length - 1) * 0.5;
      el.dataset.floatX = ((i - spread) * 2.25).toFixed(3);
      el.dataset.floatZ = (2.35 + i * 0.42).toFixed(3);
      el.href = s.url || "#";
      el.target = s.target || "_self";
      if (el.target === "_blank") el.rel = "noopener noreferrer";
      el.style.setProperty("--accent", s.accent || "#4a9fd6");
      el.style.setProperty("--bob-delay", (i * 1.35).toFixed(2) + "s");
      el.setAttribute("aria-label", `${s.name} — ${s.desc}`);

      el.innerHTML = `
        <div class="island-card">
          <div class="island-stripe"></div>
          <div class="island-visual vis-${s.type || "link"}">${visualHtml(s.type)}</div>
          <div class="island-foot">
            <div>
              <div class="island-name">${s.name}</div>
              <div class="island-desc">${s.desc || ""}</div>
            </div>
            <div class="island-go" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </div>
          </div>
        </div>`;

      islandsEl.appendChild(el);
    });
  }

  /* ---------- 主题：始终跟随真实天文时段（day/dusk/night） ---------- */
  // 时段由海水引擎按太阳高度角判定，CSS 根据真实时段切换卡片配色。
  // 固定时段切换已移除，太阳月亮始终按真实天文轨迹运行。
  function syncTheme() {
    let eff = "day";
    if (window.GalokOcean && window.GalokOcean.period)
      eff = window.GalokOcean.period;
    else {
      const h = new Date().getHours();
      eff = h >= 6 && h < 18 ? "day" : "night";
    }
    document.body.setAttribute("data-theme", eff);
    document.body.setAttribute("data-period", eff);
  }

  /* ---------- 天气开关：雨 / 闪电（三态：关闭 → 立即 → 自动 → 关闭） ---------- */
  const rainBtn = document.getElementById("weather-rain");
  const lightningBtn = document.getElementById("weather-lightning");
  const WEATHER_MODES = ["off", "on", "auto"];
  const RAIN_LABEL = { off: "关闭", on: "立即下雨", auto: "自动下雨" };
  const LIGHTNING_LABEL = { off: "关闭", on: "立即闪电", auto: "自动闪电" };
  let rainIdx = 2,
    lightningIdx = 2; // 默认 auto（随机）：云层状态机自然推进
  function applyWeather() {
    const rainMode = WEATHER_MODES[rainIdx];
    const lightningMode = WEATHER_MODES[lightningIdx];
    if (window.GalokOcean && window.GalokOcean.setWeather) {
      window.GalokOcean.setWeather({
        rain: rainMode,
        lightning: lightningMode,
      });
    }
    if (rainBtn) {
      rainBtn.classList.toggle("is-active", rainMode !== "off");
      rainBtn.classList.toggle("is-auto", rainMode === "auto");
      rainBtn.setAttribute("title", `下雨：${RAIN_LABEL[rainMode]}`);
      rainBtn.setAttribute(
        "aria-label",
        `下雨：${RAIN_LABEL[rainMode]}，点击切换`,
      );
    }
    if (lightningBtn) {
      lightningBtn.classList.toggle("is-active", lightningMode !== "off");
      lightningBtn.classList.toggle("is-auto", lightningMode === "auto");
      lightningBtn.setAttribute(
        "title",
        `闪电：${LIGHTNING_LABEL[lightningMode]}`,
      );
      lightningBtn.setAttribute(
        "aria-label",
        `闪电：${LIGHTNING_LABEL[lightningMode]}，点击切换`,
      );
    }
  }
  if (rainBtn)
    rainBtn.addEventListener("click", () => {
      rainIdx = (rainIdx + 1) % 3;
      applyWeather();
    });
  if (lightningBtn)
    lightningBtn.addEventListener("click", () => {
      lightningIdx = (lightningIdx + 1) % 3;
      applyWeather();
    });

  /* ---------- 时间流速：1× → 100× → 1000× → 10000× → 1× ---------- */
  const timeScaleBtn = document.getElementById("time-scale");
  const TIME_SCALES = [1, 100, 1000, 10000];
  let timeScaleIdx = 0;
  function applyTimeScale() {
    const scale = TIME_SCALES[timeScaleIdx];
    if (window.GalokOcean && window.GalokOcean.setTimeScale)
      window.GalokOcean.setTimeScale(scale);
    if (timeScaleBtn) {
      timeScaleBtn.textContent = scale + "×";
      timeScaleBtn.classList.toggle("is-fast", scale > 1);
      timeScaleBtn.setAttribute(
        "title",
        `时间流速：${scale}×${scale > 1 ? "（加速昼夜）" : "（真实时间）"}`,
      );
      timeScaleBtn.setAttribute("aria-label", `时间流速 ${scale} 倍，点击切换`);
    }
  }
  if (timeScaleBtn)
    timeScaleBtn.addEventListener("click", () => {
      timeScaleIdx = (timeScaleIdx + 1) % TIME_SCALES.length;
      applyTimeScale();
    });

  /* ---------- 视角切换：自动 → 日出 → 日落 → 月升 → 月落 → 自动（单按钮循环） ---------- */
  const viewToggleBtn = document.getElementById("view-toggle");
  const VIEWS = ["auto", "sunrise", "sunset", "moonrise", "moonset"];
  const VIEW_LABEL = {
    auto: "自动",
    sunrise: "日出",
    sunset: "日落",
    moonrise: "月升",
    moonset: "月落",
  };
  const VIEW_DESC = {
    auto: "自动视角：自由拖动",
    sunrise: "跳到日出时刻并对准东方",
    sunset: "跳到日落时刻并对准西方",
    moonrise: "跳到月升时刻并对准月亮",
    moonset: "跳到月落时刻并对准月亮",
  };
  let viewIdx = 0;
  let curView = "auto";
  function syncViewButton() {
    if (!viewToggleBtn) return;
    viewToggleBtn.textContent = VIEW_LABEL[curView];
    viewToggleBtn.classList.toggle("is-active", curView !== "auto");
    viewToggleBtn.setAttribute("title", VIEW_DESC[curView]);
    viewToggleBtn.setAttribute(
      "aria-label",
      `切换视角，当前 ${VIEW_LABEL[curView]}`,
    );
  }
  function applyView(view) {
    curView = view;
    viewIdx = VIEWS.indexOf(view);
    if (window.GalokOcean && window.GalokOcean.setView)
      window.GalokOcean.setView(view);
    syncViewButton();
  }
  if (viewToggleBtn)
    viewToggleBtn.addEventListener("click", () => {
      viewIdx = (viewIdx + 1) % VIEWS.length;
      applyView(VIEWS[viewIdx]);
    });
  // 拖动旋转视角时，视为切回"自动"自由视角（取消日出/日落等对准）
  const oceanCanvas = document.getElementById("ocean-canvas");
  if (oceanCanvas)
    oceanCanvas.addEventListener("pointerdown", () => {
      if (curView !== "auto") {
        applyView("auto");
      }
    });

  /* ---------- 物体浮力：从海水波场读取高度、斜率和 Gerstner 漂移 ---------- */
  const buoyancyStates = new WeakMap();
  // 每张卡片各自的下一次涟漪时刻，错开避免节奏雷同
  const rippleSchedules = new WeakMap();
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function updateBuoyancy(now) {
    const objects = islandsEl ? islandsEl.querySelectorAll(".island") : [];
    const ocean = window.GalokOcean;
    const t =
      ocean && typeof ocean.time === "number" ? ocean.time : now * 0.001;
    const dt = Math.min(
      0.08,
      Math.max(0.001, (now - (updateBuoyancy.last || now)) * 0.001),
    );
    updateBuoyancy.last = now;
    const canRipple = !!(ocean && typeof ocean.rippleAt === "function");
    const canProject = !!(ocean && typeof ocean.projectWorld === "function");
    const order = [];

    objects.forEach((el) => {
      if (!ocean || typeof ocean.sampleSurface !== "function") {
        el.classList.add("is-css-float");
        el.style.left = `calc(50% + ${(Number(el.dataset.floatX) || 0) * 70}px)`;
        el.style.top = "55%";
        return;
      }
      el.classList.remove("is-css-float");
      if (reduceMotion) {
        el.style.transform = "translate(-50%, -50%)";
        return;
      }
      const x = Number(el.dataset.floatX) || 0;
      const z = Number(el.dataset.floatZ) || 2.5;
      const surface = ocean.sampleSurface(x, z, t);
      let state = buoyancyStates.get(el);
      if (!state) {
        state = { px: 0, py: 0, scale: 1, rx: 0, ry: 0, inited: false };
        buoyancyStates.set(el, state);
      }
      const follow = 1 - Math.exp(-dt * 5.5);
      const targetRx = surface.slopeZ * 11;
      const targetRy = -surface.slopeX * 11;
      state.rx += (targetRx - state.rx) * follow;
      state.ry += (targetRy - state.ry) * follow;

      if (canProject) {
        // 卡片世界坐标：水面漂移 + 水面高度；投影到屏幕，随相机姿态变化
        const proj = ocean.projectWorld(x + surface.driftX, surface.height, z);
        if (!proj.visible) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          state.inited = false; // 重新可见时直接定位，避免从旧位置缓动
          return;
        }
        el.style.opacity = "";
        el.style.pointerEvents = "";
        if (!state.inited) {
          state.px = proj.px;
          state.py = proj.py;
          state.scale = proj.scale;
          state.inited = true;
        } else {
          state.px += (proj.px - state.px) * follow;
          state.py += (proj.py - state.py) * follow;
          state.scale += (proj.scale - state.scale) * follow;
        }
        el.style.left = state.px.toFixed(1) + "px";
        el.style.top = state.py.toFixed(1) + "px";
        el.style.transform = `translate(-50%, -50%) scale(${state.scale.toFixed(
          3,
        )}) rotateX(${state.rx.toFixed(2)}deg) rotateY(${state.ry.toFixed(2)}deg)`;
        order.push({ el, depth: proj.depth });
      } else {
        el.style.left = `calc(50% + ${x * 70}px)`;
        el.style.top = "55%";
        el.style.transform = `translate(-50%, -50%) rotateX(${state.rx.toFixed(
          2,
        )}deg) rotateY(${state.ry.toFixed(2)}deg)`;
      }

      // 卡片在自己水面位置周期性泛起微弱涟漪 —— 让水面"知道"卡片存在。
      // hover 时卡片悬浮离开水面 → 暂停涟漪，视觉上像被托起。
      if (canRipple && !el.matches(":hover")) {
        let sched = rippleSchedules.get(el);
        if (!sched) {
          sched = { nextAt: t + 0.6 + Math.random() * 1.4 };
          rippleSchedules.set(el, sched);
        }
        if (t >= sched.nextAt) {
          ocean.rippleAt(x, z, 0.08 + Math.random() * 0.06);
          sched.nextAt = t + 2.2 + Math.random() * 2.0;
        }
      }
    });

    // 深度排序：远的（depth 大）在下层，近的在上层，保证近处卡片遮挡远处
    order.sort((a, b) => b.depth - a.depth);
    order.forEach((o, i) => {
      o.el.style.zIndex = o.el.matches(":hover") ? "100" : String(10 + i);
    });
    requestAnimationFrame(updateBuoyancy);
  }

  // 每 20s 复查一次实际昼夜，同步卡片配色
  setInterval(syncTheme, 20000);

  /* ---------- 观测点当地时钟 ---------- */
  function tickClock() {
    if (!clockEl) return;
    if (window.GalokOcean && window.GalokOcean.clockText) {
      clockEl.textContent = window.GalokOcean.clockText;
      clockEl.title = `${window.GalokOcean.locationLabel || "天空观测点"}当地时间`;
      return;
    }
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    clockEl.textContent = `${hh}:${mm} local`;
  }
  setInterval(tickClock, 1000);

  /* ---------- 启动 ---------- */
  function init() {
    render();
    syncTheme();
    applyWeather(); // 同步按钮初始状态（默认 auto 随机）
    applyTimeScale(); // 同步时间流速按钮初始状态（默认 1×）
    tickClock();
    requestAnimationFrame(updateBuoyancy);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
