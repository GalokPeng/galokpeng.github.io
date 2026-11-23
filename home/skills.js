import {localized} from './language.js';

const status = document.getElementById('skill-status');
const list = document.getElementById('skill-list');
let entries = [];
let state = 'loading';

function skillRow(item) {
  const row = document.createElement('li');
  const details = document.createElement('div');
  const name = localized(item.name, item.nameEn);
  const title = document.createElement('strong');
  title.textContent = name;
  details.append(title);
  const description = localized(item.description, item.descriptionEn);
  if (description) {
    const summary = document.createElement('p');
    summary.textContent = description;
    details.append(summary);
  }
  const actions = document.createElement('div');
  actions.className = 'skill-actions';
  if (item.guide && /^[a-z0-9-]+$/.test(item.guide)) {
    const guide = document.createElement('a');
    guide.href = 'https://github.com/GalokPeng/galokpeng.github.io/blob/main/skills/_sources/' + item.guide + '/SKILL.md';
    guide.hreflang = 'zh';
    guide.textContent = localized('使用说明', 'Guide (中文)');
    guide.setAttribute('aria-label', localized(name + '使用说明', name + ' guide in Chinese'));
    actions.append(guide);
  }
  const download = document.createElement('a');
  download.className = 'download';
  download.href = '/skills/' + encodeURIComponent(item.file);
  download.download = item.file;
  download.textContent = localized('下载 ZIP', 'Download ZIP');
  download.setAttribute('aria-label', localized('下载 ', 'Download ') + name);
  if (!item.file.toLowerCase().endsWith('.zip')) download.textContent = localized('下载', 'Download');
  actions.append(download);
  row.append(details, actions);
  return row;
}

function render() {
  list.replaceChildren(...entries.map(skillRow));
  list.hidden = !entries.length;
  status.hidden = !list.hidden;
  if (state === 'loading') status.textContent = localized('正在读取技能目录…', 'Loading the skill catalog…');
  else if (state === 'error') status.textContent = localized('暂时无法读取列表，可通过仓库目录查看文件。', 'The catalog is unavailable. Browse the repository above to find the files.');
  else if (!entries.length) status.textContent = localized('暂时还没有公开的 Skill。', 'No skills have been published yet.');
}

async function loadSkills() {
  try {
    const response = await fetch('/skills/catalog.json');
    if (!response.ok) throw new Error('Skill catalog unavailable');
    entries = (await response.json()).filter(item => item && typeof item.name === 'string' &&
      item.name.trim() && typeof item.file === 'string' && /^[^/\\]+\.(zip|skill)$/i.test(item.file));
    state = 'ready';
  } catch {
    state = 'error';
  }
  render();
}

document.addEventListener('indexlanguagechange', render);
render();
loadSkills();
