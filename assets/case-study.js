// Language toggle for the case-study pages. Shares the desktop's preference key.
(function () {
  var KEY = 'preferredLanguage';
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    var lang = q || saved || (navigator.language || 'es').slice(0, 2);
    return lang === 'en' ? 'en' : 'es';
  }
  function apply(lang) {
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === lang));
    });
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang-toggle button');
    if (b) apply(b.dataset.set);
  });
  apply(pick());
})();
