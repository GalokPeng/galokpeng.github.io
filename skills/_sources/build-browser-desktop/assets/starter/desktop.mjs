import {createBoard} from './board.mjs';
import {createRecorder} from './recorder.mjs';

const byId = id => document.getElementById(id);
const desk = byId('desktop');
const panel = byId('window');
const handle = byId('handle');
const task = byId('task');
const shortcut = byId('shortcut');
const status = message => { byId('status').textContent = message; };
const board = createBoard(byId('board'), status);
const recorder = createRecorder(byId('board'), board.render, status);

function position(x, y) {
  const right = Math.max(0, desk.clientWidth - panel.offsetWidth);
  const bottom = Math.max(0, desk.clientHeight - panel.offsetHeight - 45);
  panel.style.left = Math.max(0, Math.min(right, x)) + 'px';
  panel.style.top = Math.max(0, Math.min(bottom, y)) + 'px';
}

function toggleWindow(visible) {
  panel.hidden = !visible;
  task.setAttribute('aria-expanded', String(visible));
  if (visible) {
    position(panel.offsetLeft, panel.offsetTop);
    handle.focus({preventScroll: true});
  } else {
    recorder.stop();
    task.focus({preventScroll: true});
  }
}

byId('minimize').onclick = () => toggleWindow(false);
task.onclick = () => toggleWindow(panel.hidden);
shortcut.ondblclick = () => toggleWindow(true);
shortcut.onclick = event => {
  if (event.detail === 0 || matchMedia('(pointer: coarse)').matches) toggleWindow(true);
};

let drag = null;
handle.addEventListener('pointerdown', event => {
  if (event.button !== 0 || drag) return;
  drag = {id:event.pointerId, x:event.clientX, y:event.clientY, left:panel.offsetLeft, top:panel.offsetTop};
  handle.setPointerCapture(event.pointerId);
});
handle.addEventListener('pointermove', event => {
  if (event.pointerId !== drag?.id) return;
  position(drag.left + event.clientX - drag.x, drag.top + event.clientY - drag.y);
});
const finishDrag = event => {
  if (event.pointerId === drag?.id) drag = null;
};
for (const type of ['pointerup','pointercancel','lostpointercapture']) handle.addEventListener(type, finishDrag);
handle.addEventListener('keydown', event => {
  const moves = {ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1]};
  const move = moves[event.key];
  if (!move) return;
  event.preventDefault();
  position(panel.offsetLeft + move[0]*8, panel.offsetTop + move[1]*8);
});
new ResizeObserver(() => {
  if (!panel.hidden) position(panel.offsetLeft, panel.offsetTop);
}).observe(desk);

const color = byId('color');
color.oninput = () => { byId('swatch').style.backgroundColor = color.value; };
byId('apply').onclick = () => board.apply(color.value);
