// A pair of currents in the margins of the shared index layout.
const canvas = document.querySelector('.tidal-paper');
const ctx = canvas.getContext('2d');
if (ctx) paintTides();

function paintTides() {
  const still = matchMedia('(prefers-reduced-motion: reduce), (prefers-reduced-data: reduce)');
  const hiddenInk = matchMedia('print, (forced-colors: active)');
  const fine = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const banks = [
    [[.29, -.16], [.80, .28], [.75, -.05], [1.12, .69]],
    [[-.12, .24], [.23, .49], [-.12, .72], [.42, 1.14]]
  ];
  const reach = 158;
  const pointer = {x: 0, y: 0, last: -Infinity};
  let strokeX = 0, strokeY = 0, strokeTime = 0;
  const wake = [];
  let tracks = [];
  let width = 0, height = 0;
  let pigment, frame = 0, timer = 0, previous = 0, time = 0, away = false;

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    // Budget the backing surface independently of device pixel density.
    const density = Math.min(devicePixelRatio || 1, 1.25, Math.sqrt(1400000 / (w*h)));
    const pixels = Math.max(1, Math.round(w*density));
    const rows = Math.max(1, Math.round(h*density));
    if (w === width && h === height && pixels === canvas.width && rows === canvas.height) return;
    width = w; height = h;
    canvas.width = pixels; canvas.height = rows;
    ctx.setTransform(pixels/w, 0, 0, rows/h, 0, 0);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const lanes = w < 660 ? 4 : 7;
    const gap = Math.min(13, Math.max(6, Math.min(w,h)*.014));
    const steps = Math.min(72, Math.max(32, Math.ceil((w+h)/32)));
    tracks = [];
    banks.forEach(([a,b,c,d], bank) => {
      for (let lane = 0; lane < lanes; lane++) {
        const offset = (lane-(lanes-1)/2)*gap*(1+.1*Math.sin(lane*1.7));
        const points = [];
        for (let j = 0; j <= steps; j++) {
          const u = j/steps, v = 1-u;
          const x = w*(v*v*v*a[0]+3*v*v*u*b[0]+3*v*u*u*c[0]+u*u*u*d[0]);
          const y = h*(v*v*v*a[1]+3*v*v*u*b[1]+3*v*u*u*c[1]+u*u*u*d[1]);
          const dx = w*(v*v*(b[0]-a[0])+2*v*u*(c[0]-b[0])+u*u*(d[0]-c[0]));
          const dy = h*(v*v*(b[1]-a[1])+2*v*u*(c[1]-b[1])+u*u*(d[1]-c[1]));
          const length = Math.hypot(dx,dy);
          const nx = -dy/length, ny = dx/length;
          const spread = offset*(.66+.5*Math.sin(Math.PI*u)+.19*Math.cos(7*u+bank));
          const bx = x+nx*spread, by = y+ny*spread;
          points.push({bx, by, nx, ny, phase: u*8+lane*.19+bank*2, x:bx, y:by});
        }
        tracks.push({points, seed: (bank*.41+lane*.618)%1, speed:.009+lane*.0008,
          opacity: .115+.065*(.5+.5*Math.cos(lane*2.23)), heavy: lane===1});
      }
    });
  }

  function draw(now) {
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle = ctx.fillStyle = pigment;
    const influence = Math.max(0,1-(now-pointer.last)/950);
    for (const track of tracks) {
      ctx.beginPath();
      for (let i = 0; i < track.points.length; i++) {
        const p = track.points[i];
        const swell = 4.2*Math.sin(p.phase+time*.29)+1.6*Math.sin(p.phase*1.7-time*.17);
        p.x = p.bx+p.nx*swell; p.y = p.by+p.ny*swell;
        if (influence) {
          const dx = p.x-pointer.x, dy = p.y-pointer.y;
          const q = Math.max(0,1-(dx*dx+dy*dy)/(reach*reach));
          p.x += dx*q*q*.46*influence; p.y += dy*q*q*.46*influence;
        }
        if (i) ctx.lineTo(p.x,p.y); else ctx.moveTo(p.x,p.y);
      }
      ctx.lineWidth = track.heavy ? 1.05 : .8;
      ctx.globalAlpha = track.opacity;
      ctx.stroke();

      // Grains ride the deformed curve, so they follow the mouse deflection too.
      for (let k = 0; k < 3; k++) {
        const u = ((track.seed+k*.347+time*track.speed)%1)*(track.points.length-1);
        const i = Math.floor(u), a = track.points[i], b = track.points[i+1], f = u-i;
        ctx.beginPath();
        ctx.arc(a.x+(b.x-a.x)*f, a.y+(b.y-a.y)*f, k===0 ? 1.55 : 1.05, 0, 2*Math.PI);
        ctx.globalAlpha = k===0 ? .46 : .33;
        ctx.fill();
      }
    }
    // A short, split ripple makes a sweep readable even in the quieter centre.
    for (let i=wake.length-1; i>=0; i--) {
      const w = wake[i], age = (now-w.at)/740;
      if (age>=1) { wake.splice(i,1); continue; }
      ctx.globalAlpha = .30*(1-age)*(1-age);
      ctx.lineWidth = 1;
      const drift = 5*age;
      for (const side of [-1,1]) {
        const spread = side*(5+14*age), end = side*(10+19*age);
        const x = w.x-w.dx*drift, y = w.y-w.dy*drift;
        ctx.beginPath();
        ctx.moveTo(x-w.dy*spread, y+w.dx*spread);
        ctx.quadraticCurveTo(x-w.dx*3-w.dy*end, y-w.dy*3+w.dx*end,
          x-w.dx*12-w.dy*end, y-w.dy*12+w.dx*end);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  function tick(now) {
    frame = 0;
    if (!previous) resize();
    if (previous) time += Math.min(.12,(now-previous)/1000);
    previous = now;
    draw(now);
    if (!still.matches) {
      const fps = now-pointer.last < 950 ? 30 : fine.matches ? 20 : 12;
      timer = setTimeout(() => { timer = 0; frame = requestAnimationFrame(tick); },
        Math.max(0,1000/fps-(performance.now()-now)-8));
    }
  }

  function refresh() {
    cancelAnimationFrame(frame); clearTimeout(timer);
    frame = timer = previous = 0;
    if (away || document.hidden || hiddenInk.matches) return;
    pigment = getComputedStyle(canvas).color;
    if (still.matches) { pointer.last = -Infinity; wake.length = 0; }
    frame = requestAnimationFrame(tick);
  }

  function move(event) {
    if (event.pointerType === 'touch' || !fine.matches || still.matches || hiddenInk.matches) return;
    const now = performance.now();
    const x = event.clientX, y = event.clientY;
    if (now-pointer.last >= 180) {
      strokeX = x; strokeY = y; strokeTime = now;
    }
    const dx = x-strokeX, dy = y-strokeY, length = Math.hypot(dx,dy);
    if (length>12 && now-strokeTime>55) {
      if (wake.length===5) wake.shift();
      wake.push({x,y, dx:dx/length, dy:dy/length, at:now});
      strokeX = x; strokeY = y; strokeTime = now;
    }
    pointer.x = x; pointer.y = y; pointer.last = now;
  }

  window.addEventListener('pointermove', move, {passive:true});
  window.addEventListener('resize', refresh);
  window.addEventListener('pagehide', () => { away = true; refresh(); });
  window.addEventListener('pageshow', () => { away = false; refresh(); });
  document.addEventListener('visibilitychange', refresh);
  still.addEventListener('change', refresh);
  hiddenInk.addEventListener('change', refresh);
  new MutationObserver(refresh).observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
  refresh();
}
