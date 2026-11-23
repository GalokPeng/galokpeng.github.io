// Draw the header once. The two axes form a small perspective chart of a swell.
const canvas = document.getElementById('wave');
const ctx = canvas.getContext('2d');
if (ctx) drawWave(ctx);

function drawWave(ctx) {
  ctx.scale(2, 2);
  const ink = '#3059c9', paper = '#f8f9f6';
  const point = (x, z) => {
    const swell = Math.exp(-((x + .34 * z - .4) ** 2) / 2.2) * (1 + .20 * Math.sin(z * .68));
    const ripple = Math.cos(1.3 * x + .34 * z) * Math.exp(-.036 * x * x);
    return [222 + x * 23 + z * 16, 109 + z * 4 - x * 2.6 - 41 * swell - 8 * ripple];
  };
  ctx.strokeStyle = '#d5dcda'; ctx.lineWidth = .55;
  for (let x = 12; x < 450; x += 17) for (let y = 9; y < 153; y += 17) {
    ctx.beginPath(); ctx.moveTo(x - 1.5, y); ctx.lineTo(x + 1.5, y);
    ctx.moveTo(x, y - 1.5); ctx.lineTo(x, y + 1.5); ctx.stroke();
  }
  ctx.fillStyle = '#e3e9fb'; ctx.strokeStyle = ink; ctx.lineWidth = .8;
  ctx.beginPath(); ctx.arc(321, 39, 19, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  // Clip parallel hatching to the sun.
  ctx.save(); ctx.clip(); ctx.lineWidth = .5;
  for (let x = 274; x < 352; x += 3.6) {
    ctx.beginPath(); ctx.moveTo(x, 61); ctx.lineTo(x + 33, 17); ctx.stroke();
  }
  ctx.restore();
  for (let j = 0; j < 18; j++) {
    const z = -4 + 8 * j / 18, nextZ = -4 + 8 * (j + 1) / 18;
    for (let i = 0; i < 36; i++) {
      const x = -6 + i / 3, nextX = x + 1 / 3;
      const corners = [point(x, z), point(nextX, z), point(nextX, nextZ), point(x, nextZ)];
      ctx.beginPath(); ctx.moveTo(...corners[0]);
      for (const corner of corners.slice(1)) ctx.lineTo(...corner);
      ctx.closePath(); ctx.fillStyle = paper; ctx.fill();
      ctx.strokeStyle = ink; ctx.lineWidth = .62; ctx.stroke();
    }
  }
}
