// Only the slips close to the pointer fan open. Let CSS settle them between inputs.
const fans = [...document.querySelectorAll('.paper-fan')];
const motion = matchMedia('(prefers-reduced-motion: no-preference)');
const still = matchMedia('(prefers-reduced-data: reduce), (forced-colors: active), print');
let centers = [];
let point;
let frame = 0;
let release = 0;

function measure() {
  centers = fans.map(fan => {
    const {left, top} = fan.getBoundingClientRect();
    const length = fan.firstElementChild.offsetWidth;
    const style = getComputedStyle(fan);
    const middle = parseFloat(style.getPropertyValue('--heading')) + 5 * parseFloat(style.getPropertyValue('--step'));
    const angle = middle * Math.PI / 180;
    return {
      x: left + Math.cos(angle) * length * .77,
      y: top + Math.sin(angle) * length * .77,
      radius: length * .92
    };
  });
}

function openNearby() {
  frame = 0;
  fans.forEach((fan, i) => {
    const {x, y, radius} = centers[i];
    const proximity = Math.max(0, 1 - Math.hypot(point.x - x, point.y - y) / radius);
    const angle = (proximity * 2.4).toFixed(1) + 'deg';
    if (angle !== fan.style.getPropertyValue('--open')) fan.style.setProperty('--open', angle);
  });
}

function track(event) {
  if (!motion.matches || still.matches || document.hidden) return;
  point = {x: event.clientX, y: event.clientY};
  if (!frame) frame = requestAnimationFrame(openNearby);
}

function rest() {
  cancelAnimationFrame(frame);
  clearTimeout(release);
  frame = 0;
  fans.forEach(fan => fan.style.removeProperty('--open'));
}

function resize() {
  rest();
  measure();
}

measure();
addEventListener('resize', resize);
addEventListener('pointermove', event => {
  if (event.pointerType !== 'touch') track(event);
}, {passive: true});
addEventListener('pointerdown', event => {
  if (event.pointerType === 'touch') {
    track(event);
    clearTimeout(release);
    release = setTimeout(rest, 450);
  }
}, {passive: true});
document.addEventListener('pointerout', event => {
  if (!event.relatedTarget && event.pointerType !== 'touch') rest();
});
addEventListener('blur', rest);
document.addEventListener('visibilitychange', rest);
motion.addEventListener('change', rest);
still.addEventListener('change', rest);
