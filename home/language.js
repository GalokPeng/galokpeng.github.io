const key = 'galok.index.language';
const button = document.getElementById('language');
const translations = [];
for (const node of document.querySelectorAll('[data-en], [data-en-label]')) {
  const property = node.hasAttribute('data-en-label') ? 'ariaLabel' :
    node.tagName === 'META' ? 'content' : 'textContent';
  translations.push({node, property, zh: node[property], en: node.dataset.enLabel ?? node.dataset.en});
}

function supported(value) {
  return value === 'zh' || value === 'en';
}

function initialLanguage() {
  const requested = new URL(location.href).searchParams.get('lang');
  if (supported(requested)) return requested;
  try {
    const saved = localStorage.getItem(key);
    if (supported(saved)) return saved;
  } catch { /* Browser storage is optional. */ }
  return navigator.languages.map(code => code.toLowerCase().split('-')[0]).find(supported) || 'zh';
}

let language = initialLanguage();
export function localized(zh, en) {
  return language === 'en' && en ? en : zh;
}

function applyLanguage() {
  document.documentElement.lang = localized('zh-CN', 'en');
  for (const {node, property, zh, en} of translations) node[property] = localized(zh, en);
  button.textContent = localized('EN', '中文');
  button.lang = localized('en', 'zh-CN');
  button.setAttribute('aria-label', localized('Switch to English', '切换到中文'));
  button.hidden = false;
  document.dispatchEvent(new Event('indexlanguagechange'));
}

button.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  try { localStorage.setItem(key, language); } catch { /* Allow switching without storage. */ }
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(history.state, '', url);
  applyLanguage();
});
applyLanguage();
