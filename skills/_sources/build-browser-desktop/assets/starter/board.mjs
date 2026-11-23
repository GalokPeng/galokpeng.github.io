export function createBoard(canvas, status) {
  const ctx = canvas.getContext('2d');
  const ink = document.createElement('canvas');
  ink.width = canvas.width;
  ink.height = canvas.height;
  const overlay = ink.getContext('2d');
  const byId = id => document.getElementById(id);
  const undo = byId('undo'), redo = byId('redo');
  let paper = byId('color').value, tool = 'pen', gesture = null;
  const marks = [], undone = [];
  const keyboardTip = {x:canvas.width/2, y:canvas.height/2};
  const marker = document.createElement('i');
  marker.className = 'keyboard-tip';
  marker.setAttribute('aria-hidden','true');
  marker.hidden = true;
  const surface = document.createElement('div');
  surface.className = 'surface';
  canvas.replaceWith(surface);
  surface.append(canvas,marker);

  function draw(mark) {
    overlay.save();
    overlay.globalCompositeOperation = mark.tool === 'eraser' ? 'destination-out' : 'source-over';
    overlay.strokeStyle = '#293e55';
    overlay.lineWidth = mark.tool === 'eraser' ? 28 : 12;
    overlay.lineCap = overlay.lineJoin = 'round';
    const [first,...rest] = mark.points;
    overlay.beginPath();
    overlay.moveTo(first.x,first.y);
    for (const p of rest) overlay.lineTo(p.x,p.y);
    if (!rest.length) overlay.lineTo(first.x + .01,first.y);
    overlay.stroke();
    overlay.restore();
  }

  function render() {
    overlay.clearRect(0,0,ink.width,ink.height);
    for (const mark of marks) draw(mark);
    if (gesture) draw(gesture.mark);
    ctx.fillStyle = paper;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(ink,0,0);
  }

  function changed() {
    undo.disabled = !marks.length;
    redo.disabled = !undone.length;
    render();
  }

  function commit(mark) {
    marks.push(mark);
    undone.length = 0;
    changed();
  }

  function select(next) {
    tool = next;
    for (const name of ['pen','eraser']) byId(name).setAttribute('aria-pressed',String(next === name));
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x:(event.clientX - rect.left) * canvas.width / rect.width,
      y:(event.clientY - rect.top) * canvas.height / rect.height
    };
  }

  byId('pen').onclick = () => select('pen');
  byId('eraser').onclick = () => select('eraser');
  undo.onclick = () => { if (marks.length) undone.push(marks.pop()); changed(); };
  redo.onclick = () => { if (undone.length) marks.push(undone.pop()); changed(); };

  canvas.addEventListener('pointerdown', event => {
    if (gesture || event.button !== 0) return;
    marker.hidden = true;
    canvas.setPointerCapture(event.pointerId);
    gesture = {id:event.pointerId, mark:{tool, points:[point(event)]}};
    render();
  });
  canvas.addEventListener('pointermove', event => {
    if (event.pointerId !== gesture?.id) return;
    gesture.mark.points.push(point(event));
    render();
  });
  canvas.addEventListener('pointerup', event => {
    if (event.pointerId !== gesture?.id) return;
    const {mark} = gesture;
    mark.points.push(point(event));
    gesture = null;
    commit(mark);
  });
  function cancel(event) {
    if (event.pointerId === gesture?.id) { gesture = null; render(); }
  }
  canvas.addEventListener('pointercancel',cancel);
  canvas.addEventListener('lostpointercapture',cancel);

  function showTip() {
    marker.style.left = 100*keyboardTip.x/canvas.width + '%';
    marker.style.top = 100*keyboardTip.y/canvas.height + '%';
    marker.hidden = false;
  }
  canvas.onblur = () => { marker.hidden = true; };
  canvas.onfocus = () => { if (canvas.matches(':focus-visible')) showTip(); };
  canvas.onkeydown = event => {
    if (gesture) return;
    const moves = {ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1]};
    const move = moves[event.key];
    if (move) {
      const step = event.shiftKey ? 1 : 8;
      keyboardTip.x = Math.max(0,Math.min(canvas.width-1,keyboardTip.x+move[0]*step));
      keyboardTip.y = Math.max(0,Math.min(canvas.height-1,keyboardTip.y+move[1]*step));
    } else if (event.key === ' ') {
      commit({tool,points:[{...keyboardTip}]});
    } else { return; }
    event.preventDefault();
    showTip();
  };

  byId('save').onclick = () => canvas.toBlob(blob => {
    if (!blob) { status('PNG 导出失败，请重试。'); return; }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'artboard.png';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 30000);
    status('已导出 640 × 360 PNG。');
  },'image/png');
  changed();
  return {
    render,
    apply(color) { paper = color; render(); status('底色已应用。'); }
  };
}
