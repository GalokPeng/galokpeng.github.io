// Blue-water caustics: advect one seamless light map and refract it at the pointer.
const canvas = document.querySelector('.tidal-paper');
const ctx = canvas.getContext('2d');
if (ctx) start();

async function lightMap() {
  const size = 256;
  const map = new Uint8Array(size * size);
  const image = new Image();
  image.src = new URL('./tidal-light.webp', import.meta.url).href;
  try {
    await image.decode();
    const tile = document.createElement('canvas');
    tile.width = tile.height = size;
    const tileCtx = tile.getContext('2d', {willReadFrequently: true});
    tileCtx.drawImage(image, 0, 0, size, size);
    const rgba = tileCtx.getImageData(0, 0, size, size).data;
    for (let i = 0; i < map.length; i++) map[i] = rgba[i * 4];
  } catch {
    // Keep the water interactive when the texture is unavailable.
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const a = x * Math.PI / 128, b = y * Math.PI / 128;
        const wave = Math.sin(3*a + 2*Math.sin(b)) + Math.cos(4*b + Math.sin(2*a));
        map[y*size+x] = 240 * Math.exp(-6 * Math.abs(wave));
      }
    }
  }
  return map;
}

async function start() {
  const map = await lightMap();
  const still = matchMedia('(prefers-reduced-motion: reduce), (prefers-reduced-data: reduce)');
  const hidden = matchMedia('print, (forced-colors: active)');
  const fine = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const field = document.createElement('canvas');
  const fieldCtx = field.getContext('2d');
  const paletteBytes = new Uint8ClampedArray(256 * 4);
  const palette = new Uint32Array(paletteBytes.buffer);
  const ripples = [];
  let w = 0, h = 0, frame = 0, timer = 0, before = 0, time = 0, away = false;
  let bitmap, pixels, shiftU, shiftV, glint, colU, colV, scale, pigment;
  let lastX = 0, lastY = 0, lastEmit = -Infinity;

  function resize() {
    const width = canvas.clientWidth, height = canvas.clientHeight;
    if (!width || !height) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.25, Math.sqrt(1400000 / (width*height)));
    const target = Math.max(1, Math.round(width*dpr)), rows = Math.max(1, Math.round(height*dpr));
    if (w === width && h === height && canvas.width === target && canvas.height === rows) return;
    w = width; h = height; canvas.width = target; canvas.height = rows;
    ctx.setTransform(target/w, 0, 0, rows/h, 0, 0);
    // The light field is deliberately soft. Only suspended grains use the display resolution.
    const ratio = Math.min(.48, Math.sqrt((fine.matches ? 66000 : 40000)/(w*h)));
    field.width = Math.max(1, Math.round(w*ratio));
    field.height = Math.max(1, Math.round(h*ratio));
    bitmap = fieldCtx.createImageData(field.width, field.height);
    pixels = new Uint32Array(bitmap.data.buffer);
    shiftU = new Float32Array(pixels.length);
    shiftV = new Float32Array(pixels.length);
    glint = new Float32Array(pixels.length);
    colU = new Float32Array(field.width);
    colV = new Float32Array(field.width);
    scale = 256 / Math.min(1340, Math.max(575, .68*w + .27*h));
  }

  function updatePalette() {
    const night = document.documentElement.dataset.theme === 'dark';
    pigment = getComputedStyle(canvas).color;
    const shadow = night ? [4, 14, 40] : [55, 110, 147];
    const light = night ? [117, 203, 211] : [255, 255, 246];
    for (let i = 0; i < 256; i++) {
      const v = i / 255;
      const high = v >= .29;
      const color = high ? light : shadow;
      const alpha = high ? (v-.29)/.71*(night ? .32 : .64) : (.29-v)/.29*(night ? .23 : .16);
      paletteBytes.set([...color, alpha*255], i*4);
    }
  }

  function displace(now) {
    shiftU.fill(0); shiftV.fill(0); glint.fill(0);
    const sx = field.width/w, sy = field.height/h;
    for (let i = ripples.length-1; i >= 0; i--) {
      const r = ripples[i], age = (now-r.at)/1250;
      if (age >= 1) { ripples.splice(i,1); continue; }
      const radius = 5 + age*r.size, band = 19 + 8*age;
      const extent = radius+band;
      const left = Math.max(0, Math.floor((r.x-extent)*sx));
      const right = Math.min(field.width-1, Math.ceil((r.x+extent)*sx));
      const top = Math.max(0, Math.floor((r.y-extent*.78)*sy));
      const bottom = Math.min(field.height-1, Math.ceil((r.y+extent*.78)*sy));
      for (let y=top; y<=bottom; y++) {
        const dy = (y/sy-r.y)/.78;
        for (let x=left; x<=right; x++) {
          const dx=x/sx-r.x, dist=Math.sqrt(dx*dx+dy*dy);
          const phase=(dist-radius)/band;
          if (Math.abs(phase)>=1 || dist<.01) continue;
          const envelope = (1-phase*phase) * (1-age)**2;
          const push = Math.sin(phase*Math.PI) * envelope * 31*scale/dist;
          const at = y*field.width+x;
          shiftU[at] += dx*push; shiftV[at] += dy*push;
          // The crest catches oblique light even over an otherwise uniform pool.
          const facing = .62 + .38*(.45*dx-.89*dy)/dist;
          glint[at] += Math.cos(phase*Math.PI)*envelope*facing*96;
        }
      }
    }
  }

  function draw(now) {
    if (!bitmap) return;
    const fw = field.width, fh = field.height;
    const active = ripples.length > 0;
    if (active) displace(now);
    for (let x=0; x<fw; x++) {
      const px=x*w/fw, u=px*scale;
      colU[x] = u + 6*Math.sin(u*.018+time*.16);
      colV[x] = u*.19 + 13*Math.sin(u*.020-time*.19);
    }
    for (let y=0; y<fh; y++) {
      const v=y*h/fh*scale;
      const rowU=81-v*.22 + 18*Math.sin(v*.017+time*.22)+time*1.28;
      const rowV=41+v*1.13 + 7*Math.sin(v*.028-time*.12)-time*.72;
      for (let x=0; x<fw; x++) {
        const at = y*fw+x;
        const u = colU[x]+rowU+(active ? shiftU[at] : 0);
        const v2 = colV[x]+rowV+(active ? shiftV[at] : 0);
        const a=Math.floor(u), b=Math.floor(v2), fx=u-a, fy=v2-b;
        const x0=a&255, x1=(a+1)&255, y0=(b&255)<<8, y1=((b+1)&255)<<8;
        const top = map[y0+x0]*(1-fx)+map[y0+x1]*fx;
        const bottom = map[y1+x0]*(1-fx)+map[y1+x1]*fx;
        const light = top+(bottom-top)*fy;
        const value = active ? Math.min(255,Math.max(0,light+glint[at])) : light;
        pixels[at] = palette[Math.round(value)];
      }
    }
    fieldCtx.putImageData(bitmap, 0, 0);
    ctx.clearRect(0,0,w,h);
    ctx.drawImage(field,0,0,w,h);
    ctx.fillStyle = pigment;
    const grains = Math.min(56, Math.max(18, Math.round(w*h/22000)));
    for (let i=0; i<grains; i++) {
      const u=i*.618034+(time*(.0014+.0002*(i%4)));
      const v=i*.414214+.09+.007*Math.sin(i+time*.18)-time*.0009;
      const x=(u-Math.floor(u))*w, y=(v-Math.floor(v))*h;
      ctx.globalAlpha=.18*Math.min(1,x/18,(w-x)/18,y/18,(h-y)/18);
      ctx.beginPath(); ctx.arc(x,y,i%3===0 ? 1.45 : .85,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
  }

  function tick(now) {
    frame=0;
    if (!before) resize();
    else time+=Math.min(.15,(now-before)/1000);
    before=now;
    draw(now);
    if (!still.matches) {
      const fps = ripples.length ? 26 : fine.matches ? 18 : 11;
      timer=setTimeout(() => {timer=0; frame=requestAnimationFrame(tick);},
        Math.max(0,1000/fps-(performance.now()-now)-8));
    }
  }

  function refresh() {
    cancelAnimationFrame(frame); clearTimeout(timer);
    frame=timer=before=0;
    if (away || document.hidden || hidden.matches) return;
    updatePalette();
    if (still.matches) ripples.length=0;
    frame=requestAnimationFrame(tick);
  }

  function stir(event) {
    if (still.matches || hidden.matches || document.hidden) return;
    const tap = event.type==='pointerdown';
    if (!tap && (event.pointerType==='touch' || !fine.matches)) return;
    const now=performance.now(), x=event.clientX, y=event.clientY;
    if (!tap && (now-lastEmit<70 || Math.hypot(x-lastX,y-lastY)<16)) return;
    lastX=x; lastY=y; lastEmit=now;
    if (ripples.length===5) ripples.shift();
    ripples.push({x,y,at:now,size:tap ? 164 : 112});
  }

  window.addEventListener('pointermove',stir,{passive:true});
  window.addEventListener('pointerdown',stir,{passive:true});
  window.addEventListener('resize',refresh);
  window.addEventListener('pagehide',()=>{away=true;refresh();});
  window.addEventListener('pageshow',()=>{away=false;refresh();});
  document.addEventListener('visibilitychange',refresh);
  still.addEventListener('change',refresh);
  hidden.addEventListener('change',refresh);
  fine.addEventListener('change',refresh);
  new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  refresh();
}
