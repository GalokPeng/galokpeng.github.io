import {localized} from '/home/language.js';

const article = document.querySelector('.prose');
const contents = document.querySelector('.contents');
const sections = [...article.querySelectorAll('h2[id]')];
if (sections.length > 1) {
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

  function markTarget() {
    for (const link of list.querySelectorAll('a')) {
      if (link.hash === location.hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  markTarget();
  window.addEventListener('hashchange', markTarget);
}

for (const table of article.querySelectorAll('table')) {
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
