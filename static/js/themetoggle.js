(function () {
  const button = document.getElementById('dark-mode-toggle');
  const style = document.getElementById('darkModeStyle');
  const english = document.documentElement.lang.startsWith('en');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('theme-storage'); } catch (_) {}
  let mode = saved === 'dark' || saved === 'light' ? saved : (system.matches ? 'dark' : 'light');
  function apply() {
    const dark = mode === 'dark';
    style.disabled = !dark;
    document.documentElement.dataset.theme = mode;
    button.textContent = dark ? (english ? '☀ Light' : '☀ 亮色') : (english ? '☾ Dark' : '☾ 暗色');
    button.setAttribute('aria-label', dark ? (english ? 'Switch to light mode' : '切换到亮色模式') : (english ? 'Switch to dark mode' : '切换到暗色模式'));
    button.setAttribute('aria-pressed', String(dark));
  }
  button.addEventListener('click', function () {
    mode = mode === 'dark' ? 'light' : 'dark';
    saved = mode;
    try { localStorage.setItem('theme-storage', mode); } catch (_) {}
    apply();
  });
  system.addEventListener('change', function () {
    if (!saved) { mode = system.matches ? 'dark' : 'light'; apply(); }
  });
  apply();
}());
