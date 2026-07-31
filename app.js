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
      target: "_self", // _self 当前页跳转 | _blank 新标签页
      accent: "#4a9fd6",
    },
    {
      type: "books",
      name: "Galok's 知序书房",
      desc: "BOOKS · 书海漫游",
      url: "https://books.galok.cn",
      target: "_self",
      accent: "#8a7bb8",
    },
  ];

  /* ============== ② 页面标题（左上角品牌名） ============== */
  const SITE_NAME = "Galok";

  /* ======================================================== */

  const islandsEl = document.getElementById("islands");
  const nameEl = document.getElementById("site-name");
  const toggleBtn = document.getElementById("theme-toggle");
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

  /* ---------- 主题：auto → day → dusk → night → auto ---------- */
  const MODES = ["auto", "day", "dusk", "night"];
  const MODE_LABEL = { auto: "自动", day: "白天", dusk: "黄昏", night: "夜晚" };
  let modeIdx = 0;
  const modeLabelEl = document.getElementById("hud-mode");

  function curMode() {
    return MODES[modeIdx];
  }

  // 真实时段由海水引擎按太阳高度角判定，不再使用固定的钟点切分。
  function effectiveTheme() {
    const m = curMode();
    if (m !== "auto") return m; // 手动模式直接采用
    if (window.GalokOcean && window.GalokOcean.period)
      return window.GalokOcean.period;
    const h = new Date().getHours();
    return h >= 6 && h < 18 ? "day" : "night";
  }

  function applyTheme() {
    const m = curMode();
    // 让海水引擎随手动选择平滑翻转整个场景（auto=跟随地点天文时间）
    if (window.GalokOcean && window.GalokOcean.setOverride)
      window.GalokOcean.setOverride(m);
    const eff = effectiveTheme(); // day | dusk | night
    document.body.setAttribute("data-theme", eff);
    document.body.setAttribute("data-period", eff);
    document.body.setAttribute("data-mode", m === "auto" ? "auto" : "manual");
    const badge = toggleBtn ? toggleBtn.querySelector(".auto-badge") : null;
    if (badge) badge.style.opacity = m === "auto" ? "1" : "0";
    if (modeLabelEl) modeLabelEl.textContent = MODE_LABEL[m];
    if (toggleBtn) {
      toggleBtn.setAttribute("title", `主题：${MODE_LABEL[m]} · 点击切换`);
      toggleBtn.setAttribute("aria-label", `切换主题，当前 ${MODE_LABEL[m]}`);
    }
    // 手动模式相机锁朝南（等价自动视角），视角按钮回到“自动”并清除视角锁定
    if (m !== "auto" && curView !== "auto") {
      curView = "auto";
      syncViewButtons();
      if (window.GalokOcean && window.GalokOcean.setView)
        window.GalokOcean.setView("auto");
    }
  }

  function cycleMode() {
    modeIdx = (modeIdx + 1) % MODES.length;
    applyTheme();
    applyTimeScale(); // 切换主题后同步时间流速按钮的可用状态
  }
  if (toggleBtn) toggleBtn.addEventListener("click", cycleMode);

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

  /* ---------- 时间流速：1× → 10× → 100× → 1000× → 1×（仅 auto 模式生效） ---------- */
  const timeScaleBtn = document.getElementById("time-scale");
  const TIME_SCALES = [1, 100, 1000, 10000];
  let timeScaleIdx = 0;
  function applyTimeScale() {
    const isAuto = curMode() === "auto";
    // 非 auto 模式强制 1×（手动模式跳固定预览时刻，加速无意义）
    let scale;
    if (isAuto) {
      scale = TIME_SCALES[timeScaleIdx];
    } else {
      scale = 1;
      timeScaleIdx = 0;
    }
    if (window.GalokOcean && window.GalokOcean.setTimeScale)
      window.GalokOcean.setTimeScale(scale);
    if (timeScaleBtn) {
      timeScaleBtn.textContent = scale + "×";
      timeScaleBtn.classList.toggle("is-fast", scale > 1 && isAuto);
      timeScaleBtn.disabled = !isAuto; // 非 auto 模式禁用
      timeScaleBtn.setAttribute(
        "title",
        isAuto
          ? `时间流速：${scale}×${scale > 1 ? "（加速昼夜）" : "（真实时间）"}`
          : "时间流速仅自动昼夜模式可用",
      );
      timeScaleBtn.setAttribute("aria-label", `时间流速 ${scale} 倍，点击切换`);
    }
  }
  if (timeScaleBtn)
    timeScaleBtn.addEventListener("click", () => {
      timeScaleIdx = (timeScaleIdx + 1) % TIME_SCALES.length;
      applyTimeScale();
    });

  /* ---------- 视角切换：自动 / 日出 / 日落 / 月升 / 月落（仅 auto 模式） ---------- */
  const viewPanel = document.getElementById("view-panel");
  let curView = "auto";
  function syncViewButtons() {
    if (!viewPanel) return;
    viewPanel.querySelectorAll(".view-btn").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.view === curView);
    });
  }
  function applyView(view) {
    // 视角按钮只在 auto 模式生效；非 auto 时先切回 auto
    if (curMode() !== "auto") {
      modeIdx = 0;
      applyTheme();
      applyTimeScale();
    }
    curView = view;
    if (window.GalokOcean && window.GalokOcean.setView)
      window.GalokOcean.setView(view);
    syncViewButtons();
  }
  if (viewPanel)
    viewPanel.addEventListener("click", (e) => {
      const btn = e.target.closest(".view-btn");
      if (!btn) return;
      applyView(btn.dataset.view);
    });
  // 拖动旋转视角时，视为切回“自动”自由视角（取消日出/日落等对准）
  const oceanCanvas = document.getElementById("ocean-canvas");
  if (oceanCanvas)
    oceanCanvas.addEventListener("pointerdown", () => {
      if (curView !== "auto") {
        curView = "auto";
        syncViewButtons();
        // 同步清除 water.js 的视角锁定与时间偏移，让画面退回真实时间
        if (window.GalokOcean && window.GalokOcean.setView)
          window.GalokOcean.setView("auto");
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
        const proj = ocean.projectWorld(
          x + surface.driftX,
          surface.height,
          z,
        );
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

  // auto 模式下，每 20s 复查一次实际昼夜
  setInterval(() => {
    if (curMode() === "auto") applyTheme();
  }, 20000);

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
    applyTheme();
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
