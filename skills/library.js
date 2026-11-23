import {localized} from '/home/language.js';

const collection = document.body.dataset.collection;
const list = document.getElementById('skill-list');
const status = document.getElementById('skill-status');
let entries = [];
let state = 'loading';

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(text, href, className) {
  const anchor = element('a', text, className);
  anchor.href = href;
  return anchor;
}

function card(item) {
  const row = element('li', '', 'skill-card');
  const name = localized(item.name, item.nameEn);
  const slug = item.file.replace(/\.(zip|skill)$/i, '');
  const file = element('div', '', 'file-label');
  const icon = element('i');
  icon.setAttribute('aria-hidden', 'true');
  file.append(icon, element('code', slug));
  row.append(file, element('h2', name), element('p', localized(item.description, item.descriptionEn), 'summary'));

  const actions = element('div', '', 'card-actions');
  const format = item.file.toLowerCase().endsWith('.zip') ? ' ZIP' : '';
  const download = link(localized('下载', 'Download') + format, '/skills/' + encodeURIComponent(item.file), 'download');
  download.download = item.file;
  download.setAttribute('aria-label', localized('下载 ', 'Download ') + name);
  actions.append(download);

  let guide;
  if (item.source) {
    const {repository, revision, path, license, licenseFile} = item.source;
    const project = 'https://github.com/' + repository;
    const snapshot = revision + '/' + path;
    const source = element('div', '', 'source');
    source.append(element('span', localized('来源', 'Source')), link('GitHub · ' + repository, project + '/tree/' + snapshot));
    if (license && licenseFile) source.append(link(license, project + '/blob/' + snapshot + '/' + licenseFile));
    row.append(source);
    guide = link(localized('使用说明（英文）', 'Usage guide'), project + '/blob/' + snapshot + '/SKILL.md');
    guide.hreflang = 'en';
  } else if (item.guide) {
    guide = link(localized('使用说明', 'Guide (中文)'), 'https://github.com/GalokPeng/galokpeng.github.io/blob/main/skills/_sources/' + encodeURIComponent(item.guide) + '/SKILL.md');
    guide.hreflang = 'zh';
  }
  if (guide) actions.append(guide);
  row.append(actions);
  return row;
}

function render() {
  list.replaceChildren(...entries.map(card));
  list.hidden = !entries.length;
  status.hidden = !list.hidden;
  if (state === 'loading') status.textContent = localized('正在读取技能目录…', 'Loading skills…');
  else if (state === 'error') {
    status.replaceChildren(link(localized('目录暂时无法读取，前往 GitHub 下载', 'Catalog unavailable. Find downloads on GitHub'), 'https://github.com/GalokPeng/galokpeng.github.io/tree/main/skills'));
  } else if (!entries.length) status.textContent = localized('这个分类暂时没有 Skill。', 'No skills in this collection yet.');
}

async function loadSkills() {
  try {
    const response = await fetch('/skills/catalog.json');
    if (!response.ok) throw new Error('Catalog unavailable');
    const catalog = await response.json();
    entries = catalog.filter(item => item && (item.collection ?? 'personal') === collection &&
      typeof item.name === 'string' && item.name.trim() && typeof item.file === 'string' &&
      /^[^/\\]+\.(zip|skill)$/i.test(item.file));
    state = 'ready';
  } catch {
    state = 'error';
  }
  render();
}

document.addEventListener('indexlanguagechange', render);
render();
loadSkills();
