export function createRecorder(canvas, draw, status) {
  const byId = id => document.getElementById(id);
  const start = byId('record'), end = byId('stop'), video = byId('playback');
  const link = byId('download-clip'), review = byId('review');
  const types = ['video/webm;codecs=vp8','video/webm','video/mp4'];
  const mime = window.MediaRecorder && types.find(type => MediaRecorder.isTypeSupported(type));
  let current = null, previewUrl = null;

  function clearPreview() {
    video.pause();
    video.removeAttribute('src');
    video.load();
    link.removeAttribute('href');
    review.hidden = true;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = null;
  }

  function finish(job, successful) {
    if (current !== job) return;
    current = null;
    clearInterval(job.timer);
    clearTimeout(job.limit);
    job.stream?.getTracks().forEach(track => track.stop());
    start.hidden = false;
    end.hidden = true;
    end.disabled = false;
    if (!successful || !job.chunks.length) {
      status('录制未生成文件，可以重试。');
      return;
    }
    const type = job.recorder.mimeType || mime;
    const blob = new Blob(job.chunks,{type});
    previewUrl = URL.createObjectURL(blob);
    video.src = link.href = previewUrl;
    link.download = type.includes('mp4') ? 'artboard.mp4' : 'artboard.webm';
    review.hidden = false;
    status('录制完成，可回放或保存。');
  }

  function stop() {
    if (!current || current.stopping) return;
    current.stopping = true;
    end.disabled = true;
    clearInterval(current.timer);
    if (current.recorder.state !== 'inactive') current.recorder.stop();
  }

  if (!mime || !canvas.captureStream) {
    start.disabled = true;
    status('此浏览器缺少可用的视频录制能力，仍可绘图并导出 PNG。');
    return {stop};
  }

  start.onclick = () => {
    if (current) return;
    clearPreview();
    const job = {chunks:[], stopping:false, timer:null, limit:null};
    current = job;
    try {
      job.stream = canvas.captureStream(12);
      job.recorder = new MediaRecorder(job.stream,{mimeType:mime});
      job.recorder.ondataavailable = ({data}) => { if (data.size) job.chunks.push(data); };
      job.recorder.onstop = () => finish(job,true);
      job.recorder.onerror = () => finish(job,false);
      job.recorder.start(250);
      draw();
      job.timer = setInterval(draw,1000/12);
      job.limit = setTimeout(stop,6000);
      start.hidden = true;
      end.hidden = false;
      status('正在录制画板，最长 6 秒，可继续绘制。');
    } catch { finish(job,false); }
  };
  end.onclick = stop;
  document.addEventListener('visibilitychange',() => { if (document.hidden) stop(); });
  window.addEventListener('pagehide',() => {
    stop();
    if (current) {
      const job = current;
      job.recorder.ondataavailable = job.recorder.onstop = null;
      finish(job,false);
    }
    clearPreview();
  });
  return {stop};
}
