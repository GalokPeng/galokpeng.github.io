const status = document.getElementById('skill-status');
const list = document.getElementById('skill-list');

async function loadSkills() {
  try {
    const response = await fetch('/skills/catalog.json');
    if (!response.ok) throw new Error('Skill catalog unavailable');
    const entries = await response.json();
    for (const {name, description, file} of entries) {
      if (typeof name !== 'string' || !name.trim() || typeof file !== 'string' ||
          !/^[^/\\]+\.(zip|skill)$/i.test(file)) continue;
      const row = document.createElement('li');
      const details = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = name;
      details.append(title);
      if (description) {
        const summary = document.createElement('p');
        summary.textContent = description;
        details.append(summary);
      }
      const link = document.createElement('a');
      link.className = 'download';
      link.href = '/skills/' + encodeURIComponent(file);
      link.download = file;
      link.textContent = '下载';
      link.setAttribute('aria-label', '下载 ' + name);
      row.append(details, link);
      list.append(row);
    }
    list.hidden = !list.childElementCount;
    status.hidden = !list.hidden;
    if (list.hidden) status.textContent = '暂时还没有公开的 Skill。';
  } catch {
    status.textContent = '暂时无法读取列表，可通过仓库目录查看文件。';
  }
}
loadSkills();
