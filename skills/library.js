import {localized} from '/home/language.js';

const collection = document.body.dataset.collection;
const list = document.querySelector('.catalog-grid');
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
  if (typeof item.cover === 'string' && /^[a-z0-9-]+\.webp$/.test(item.cover)) {
    const cover = element('img', '', 'skill-cover');
    cover.alt = '';
    cover.width = 1200;
    cover.height = 500;
    cover.addEventListener('error', () => cover.remove(), {once: true});
    cover.src = '/skills/covers/' + item.cover;
    row.append(cover);
  }
  const body = element('div', '', 'card-body');
  body.append(element('h2', name), element('p', localized(item.description, item.descriptionEn), 'summary'));

  const actions = element('div', '', 'card-actions');
  if (item.file) {
    const format = item.file.toLowerCase().endsWith('.zip') ? ' ZIP' : '';
    const download = link(localized('下载', 'Download') + format, '/skills/' + encodeURIComponent(item.file), 'primary-action download');
    download.download = item.file;
    download.setAttribute('aria-label', localized('下载 ', 'Download ') + name);
    actions.append(download);
  }

  let guide;
  if (item.source) {
    const {repository, revision, path, license, licenseFile} = item.source;
    const project = 'https://github.com/' + repository;
    const snapshot = revision + '/' + path;
    const source = element('div', '', 'source');
    source.append(element('span', localized('来源', 'Source')), link('GitHub · ' + repository, project + '/tree/' + snapshot));
    if (license && licenseFile) source.append(link(license, project + '/blob/' + snapshot + '/' + licenseFile));
    body.append(source);
    guide = link(localized('使用说明（英文）', 'Usage guide'), project + '/blob/' + snapshot + '/SKILL.md');
    guide.hreflang = 'en';
  } else {
    if (item.reference) {
      const {publisher, version, url, license, label, labelEn} = item.reference;
      const source = element('div', '', 'source');
      source.append(element('span', publisher + ' · ' + version));
      if (license) source.append(element('span', license));
      const official = link(localized(label || '官方说明', labelEn || 'Official guide'), url);
      if (item.file) source.append(official);
      else {
        official.className = 'primary-action';
        official.setAttribute('aria-label', name + ' · ' + official.textContent);
        actions.append(official);
      }
      body.append(source);
    }
    if (item.guide) {
      const englishGuide = collection === 'referenced';
      guide = link(englishGuide ? localized('使用说明（英文）', 'Usage guide') : localized('使用说明', 'Guide (中文)'),
        'https://github.com/GalokPeng/galokpeng.github.io/blob/main/skills/_sources/' + encodeURIComponent(item.guide) + '/SKILL.md');
      guide.hreflang = englishGuide ? 'en' : 'zh';
    }
  }
  if (guide) actions.append(guide);
  body.append(actions);
  row.append(body);
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
    const response = await fetch('/skills/catalog.json', {cache: 'no-cache'});
    if (!response.ok) throw new Error('Catalog unavailable');
    const catalog = await response.json();
    entries = catalog.filter(item => {
      if (!item || (item.collection ?? 'personal') !== collection ||
          typeof item.name !== 'string' || !item.name.trim()) return false;
      if (typeof item.file === 'string') return /^[^/\\]+\.(zip|skill)$/i.test(item.file);
      return collection === 'referenced' && item.file == null && /^https:\/\//.test(item.reference?.url);
    });
    state = 'ready';
  } catch {
    state = 'error';
  }
  render();
}

document.addEventListener('indexlanguagechange', render);
render();
loadSkills();
