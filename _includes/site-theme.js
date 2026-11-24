(() => {
  const root = document.documentElement;
  const key = 'galok.index.theme';
  const system = matchMedia('(prefers-color-scheme: dark)');
  const color = document.querySelector('meta[name="theme-color"]');
  let preference = 'system';

  function restore() {
    try {
      const saved = localStorage.getItem(key) ?? localStorage.getItem('ladder-guide-simulation-theme');
      preference = ['light', 'dark'].includes(saved) ? saved : 'system';
    } catch { /* Storage is optional. */ }
    apply();
  }

  function apply() {
    const effective = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    root.dataset.theme = effective;
    color.content = effective === 'dark' ? '#151f29' : '#f7f8f4';
    const control = document.getElementById('site-theme');
    if (control) {
      const dark = effective === 'dark';
      const action = root.lang === 'en'
        ? (dark ? 'Switch to light mode' : 'Switch to dark mode')
        : (dark ? '切换到浅色模式' : '切换到深色模式');
      control.setAttribute('aria-label', action);
      control.title = action;
    }
  }

  restore();
  system.addEventListener('change', apply);
  window.addEventListener('storage', restore);
  window.addEventListener('pageshow', restore);
  document.addEventListener('indexlanguagechange', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.getElementById('site-theme');
    apply();
    control.hidden = false;
    control.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch { /* Apply for this page. */ }
      apply();
    });
  });
})();
