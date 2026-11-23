// Pomo — sitio: idioma, tema, capturas que cambian con ambos, ciclos de pantallas y aparición al hacer scroll.
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Idioma y tema ----------
  function lang() { return root.lang === 'es' ? 'es' : 'en'; }
  function theme() { return root.dataset.theme === 'dark' ? 'dark' : 'light'; }

  var langBtn = document.getElementById('lang');
  if (langBtn) langBtn.addEventListener('click', function () {
    root.lang = lang() === 'es' ? 'en' : 'es';
    localStorage.setItem('pomo-lang', root.lang);
    refreshShots();
  });
  var themeBtn = document.getElementById('theme');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    root.dataset.theme = theme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('pomo-theme', root.dataset.theme);
  });

  // ---------- Capturas ----------
  // Cada pantalla (.screen[data-device]) muestra la captura real en el idioma elegido. data-mode fija claro u oscuro
  // (los pares muestran uno de cada uno, como en la app); sin data-mode sigue el tema del sitio.
  var ALT = {
    en: { timer: 'Pomo timer: the dial turns with every minute', adjust: 'Setting the time by holding and sliding', break: 'A short break in teal',
          stats: 'Statistics: pomodoros, focus time and streak', settings: 'Settings: sessions, cycles and alerts' },
    es: { timer: 'Temporizador de Pomo: la carátula gira con cada minuto', adjust: 'Ajuste del tiempo manteniendo y deslizando', break: 'Un descanso corto en verde azulado',
          stats: 'Estadísticas: pomodoros, enfoque y racha', settings: 'Ajustes: sesiones, ciclos y alertas' }
  };
  function src(screen, name) {
    var dev = screen.dataset.device, mode = screen.dataset.mode || theme();
    if (dev === 'watch') return 'shots/watch/' + lang() + '.webp';
    return 'shots/' + dev + '/' + lang() + '-' + mode + '-' + name + '.webp';
  }
  var screens = [].slice.call(document.querySelectorAll('.screen[data-device]'));
  screens.forEach(function (s) {
    var names = (s.dataset.shots || 'timer').split(/\s+/);
    var lazy = s.querySelector('img') && s.querySelector('img').loading === 'lazy';
    s.innerHTML = '';
    names.forEach(function (n, i) {
      var img = new Image();
      if (lazy) img.loading = 'lazy';
      img.decoding = 'async';
      img.dataset.name = n;
      if (i === 0) img.className = 'on'; else img.setAttribute('aria-hidden', 'true');
      s.appendChild(img);
    });
  });
  function refreshShots() {
    screens.forEach(function (s) {
      [].forEach.call(s.querySelectorAll('img'), function (img) {
        var n = img.dataset.name, next = src(s, n);
        if (img.getAttribute('src') !== next) img.src = next;
        img.alt = s.dataset.device === 'watch' ? (lang() === 'es' ? 'Pomo en el Apple Watch' : 'Pomo on Apple Watch') : (ALT[lang()][n] || 'Pomo');
      });
    });
  }
  refreshShots();
  new MutationObserver(refreshShots).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  // ---------- Ciclos (varias pantallas en el mismo aparato) ----------
  var groups = {};
  screens.forEach(function (s) {
    if (s.querySelectorAll('img').length < 2) return;
    var g = s.dataset.group || Math.random().toString(36);
    (groups[g] = groups[g] || []).push(s);
  });
  Object.keys(groups).forEach(function (g) {
    var list = groups[g], count = list[0].querySelectorAll('img').length, i = 0;
    var dots = document.querySelector('[data-dots="' + g + '"]');
    if (dots) for (var k = 0; k < count; k++) dots.appendChild(document.createElement('i'));
    function show(n) {
      list.forEach(function (s) {
        [].forEach.call(s.querySelectorAll('img'), function (img, j) {
          img.classList.toggle('on', j === n);
          if (j === n) img.removeAttribute('aria-hidden'); else img.setAttribute('aria-hidden', 'true');
        });
      });
      if (dots) [].forEach.call(dots.children, function (d, j) { d.classList.toggle('on', j === n); });
    }
    show(0);
    if (reduce) return;
    var visible = false;
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(list[0]);
    setInterval(function () { if (!visible || document.hidden) return; i = (i + 1) % count; show(i); }, 4200);
  });

  // ---------- Aparición al hacer scroll ----------
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduce) {
    [].forEach.call(items, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    [].forEach.call(items, function (el) { io.observe(el); });
  }
})();
