import {localized} from '/home/language.js';

const article = document.querySelector('.prose');
const contents = document.querySelector('.contents');
const hasChapterList = !!contents.querySelector('a');
const sections = hasChapterList ? [] : [...article.querySelectorAll('h2[id]')];
if (sections.length > 1 || hasChapterList) {
  const details = contents.querySelector('details');
  const list = contents.querySelector('ol');
  for (const section of sections) {
    const row = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + encodeURIComponent(section.id);
    link.textContent = section.textContent;
    link.lang = article.lang;
    row.append(link);
    list.append(row);
  }
  const wide = matchMedia('(min-width: 901px)');
  const sizeContents = () => { details.open = wide.matches; };
  sizeContents();
  wide.addEventListener('change', sizeContents);
  contents.hidden = false;

  const links = [...list.querySelectorAll('a')];
  const targets = links.map(link => document.getElementById(decodeURIComponent(link.hash.slice(1))));
  let scheduled = false;
  let current;
  function markTarget() {
    scheduled = false;
    const threshold = Math.min(innerHeight * .23, 160);
    let index = 0;
    for (const [i, target] of targets.entries()) {
      if (target && target.getBoundingClientRect().top <= threshold) index = i;
    }
    if (current === links[index]) return;
    current?.removeAttribute('aria-current');
    current = links[index];
    current.setAttribute('aria-current', 'location');
  }
  function track() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(markTarget);
  }
  list.addEventListener('click', event => {
    if (!wide.matches && event.target.closest('a') && !event.ctrlKey && !event.metaKey) details.open = false;
  });
  markTarget();
  window.addEventListener('scroll', track, {passive: true});
  window.addEventListener('resize', track);
}

for (const table of article.querySelectorAll('table')) {
  if (table.closest('.table-wrap')) continue;
  const scroller = document.createElement('div');
  scroller.className = 'table-scroll';
  table.before(scroller);
  scroller.append(table);
}

if (navigator.clipboard) {
  const buttons = [];
  function label(button) {
    button.textContent = button.dataset.state === 'copied' ? localized('已复制', 'Copied') :
      button.dataset.state === 'failed' ? localized('请手动复制', 'Select and copy') : localized('复制代码', 'Copy code');
  }
  for (const pre of article.querySelectorAll('pre')) {
    const code = pre.querySelector('code');
    if (!code) continue;
    const wrap = document.createElement('div');
    wrap.className = 'code-block';
    const tools = document.createElement('div');
    tools.className = 'code-tools';
    const syntax = [...(pre.closest('.highlighter-rouge')?.classList ?? []), ...code.classList].find(c => c.startsWith('language-'));
    if (syntax) tools.append(syntax.slice('language-'.length));
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-live', 'polite');
    label(button);
    buttons.push(button);
    let timer;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.dataset.state = 'copied';
      } catch {
        button.dataset.state = 'failed';
      }
      label(button);
      clearTimeout(timer);
      timer = setTimeout(() => { delete button.dataset.state; label(button); }, 2200);
    });
    tools.append(button);
    pre.before(wrap);
    wrap.append(tools, pre);
  }
  document.addEventListener('indexlanguagechange', () => buttons.forEach(label));
}
