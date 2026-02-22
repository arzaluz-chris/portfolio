/* ============================================
   POMO Marketing Website — main.js
   ============================================ */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.home': 'Portfolio',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',

    // Hero
    'hero.badge': 'Pomodoro Timer',
    'hero.title.1': 'Stay Focused,',
    'hero.title.2': 'Stay Productive',
    'hero.subtitle': 'Pomo helps you manage your time with customizable Pomodoro sessions, smart break scheduling, and detailed focus statistics.',
    'hero.cta': 'Download on the App Store',

    // Features
    'features.title': 'Everything You Need to Stay Focused',
    'features.subtitle': 'Simple, powerful tools designed to help you build better focus habits and get more done.',
    'feature.timer.title': 'Pomodoro Timer',
    'feature.timer.desc': 'Customizable work and break sessions with a beautiful circular progress indicator. Set your ideal focus duration and get to work.',
    'feature.island.title': 'Dynamic Island',
    'feature.island.desc': 'See your timer on the lock screen and Dynamic Island with Live Activities. Stay aware of your session without opening the app.',
    'feature.watch.title': 'Apple Watch',
    'feature.watch.desc': 'Full companion app on your wrist. Start, pause, and track sessions directly from your Apple Watch with bidirectional sync.',
    'feature.stats.title': 'Statistics',
    'feature.stats.desc': 'Track your completed sessions, daily streaks, and weekly focus time. Visualize your productivity with detailed charts and insights.',
    'feature.breaks.title': 'Smart Breaks',
    'feature.breaks.desc': 'Automatic break scheduling with configurable long break cycles. Stay refreshed with perfectly timed rest periods between focus sessions.',

    // How It Works
    'steps.title': 'How It Works',
    'steps.subtitle': 'Three simple steps to boost your productivity with the Pomodoro Technique.',
    'steps.1.name': 'Focus',
    'steps.1.desc': 'Set your timer and dive into deep work. Stay focused on a single task with no distractions.',
    'steps.2.name': 'Break',
    'steps.2.desc': 'Take a well-deserved short break to recharge. Stretch, breathe, and reset your mind.',
    'steps.3.name': 'Repeat',
    'steps.3.desc': 'Build momentum with consecutive sessions. After a few cycles, enjoy a longer break to fully recover.',

    // Gallery
    'gallery.title': 'See Pomo in Action',
    'gallery.subtitle': 'A beautiful, intuitive interface designed to keep you in the zone.',
    'gallery.timer': 'Timer',
    'gallery.island': 'Dynamic Island',
    'gallery.watch': 'Apple Watch',
    'gallery.stats': 'Statistics',
    'gallery.breaks': 'Smart Breaks',
    'gallery.watch.timer': 'Timer',
    'gallery.watch.session': 'Session',
    'gallery.watch.break': 'Break',
    'gallery.watch.stats': 'Stats',
    'gallery.watch.settings': 'Settings',
    'gallery.watch.complication': 'Complication',
    'gallery.watch.notification': 'Notification',
    'gallery.watch.menu': 'Menu',

    // CTA
    'cta.title.1': 'Start Focusing',
    'cta.title.2': 'Today',
    'cta.subtitle': 'Download Pomo and take control of your productivity with the Pomodoro Technique.',
    'cta.button': 'Download on the App Store',

    // Footer
    'footer.copy': '2026 Pomo. All rights reserved.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: February 2026',
    'privacy.body': `<h2>Pomo Privacy Policy</h2>
<p>Your privacy is important to us. This Privacy Policy explains how Pomo collects, uses, and protects your personal information.</p>

<h2>1. Information We Collect</h2>
<p><strong>No Account Required:</strong> Pomo does not require you to create an account. You do not need to provide an email address, password, or any personal identification to use the app.</p>
<p><strong>Timer Data:</strong> Your Pomodoro session data, including completed sessions, focus time, and streak information, is stored locally on your device using UserDefaults and AppStorage.</p>
<p><strong>Settings:</strong> Your timer preferences (work duration, break duration, long break cycles) are stored locally on your device.</p>

<h2>2. How We Use Your Information</h2>
<p>We use your information exclusively to:</p>
<ul>
  <li>Track and display your completed Pomodoro sessions and focus statistics</li>
  <li>Maintain your daily streaks and weekly progress</li>
  <li>Remember your timer preferences and settings</li>
  <li>Sync timer state between your iPhone and Apple Watch via App Groups (local only)</li>
</ul>

<h2>3. Data Storage and Security</h2>
<p>All your data is stored locally on your device using Apple's UserDefaults and AppStorage frameworks. Pomo does not transmit your session data or personal information to any external server.</p>
<p>iPhone-to-Apple Watch synchronization uses Apple's App Groups and WatchConnectivity frameworks. This data transfer occurs locally between your paired devices and does not pass through external servers.</p>

<h2>4. Third-Party Services</h2>
<p>Pomo does not use any third-party analytics, advertising, or AI processing services. There is no external data processing of your personal information.</p>

<h2>5. Data Sharing</h2>
<p>We do not sell, share, or transmit your personal information to any third party. Your data stays on your device.</p>

<h2>6. Your Rights</h2>
<p>You can:</p>
<ul>
  <li>Reset your session history and statistics from within the app's Settings</li>
  <li>Delete the app to remove all locally stored data</li>
</ul>

<h2>7. Age Requirement</h2>
<p>Pomo is intended for users aged 13 and older. The app is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you are under 13, please do not use this app.</p>

<h2>8. Changes to This Policy</h2>
<p>We may update this policy from time to time. We will notify you of significant changes through the app.</p>

<h2>9. Contact Us</h2>
<p>If you have questions about this privacy policy, please contact us at <a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a>.</p>`,

    // Support Page
    'support.title': 'Support',
    'support.subtitle': 'We\'re here to help',
    'contact.title': 'Contact Us',
    'contact.desc': 'Have a question, feedback, or need help? Reach out to us directly.',
    'contact.email': 'Email Support',
    'faq.title': 'Frequently Asked Questions',

    'faq.q1': 'What is Pomo?',
    'faq.a1': 'Pomo is a Pomodoro timer app designed to help you stay focused and productive. It features customizable work and break sessions, a circular progress timer, statistics tracking, Dynamic Island support, and an Apple Watch companion app.',
    'faq.q2': 'What is the Pomodoro Technique?',
    'faq.a2': 'The Pomodoro Technique is a time management method where you work in focused intervals (typically 25 minutes) followed by short breaks (5 minutes). After completing several work sessions, you take a longer break. This cycle helps maintain concentration and prevents burnout.',
    'faq.q3': 'How does Apple Watch sync work?',
    'faq.a3': 'Pomo syncs timer state and settings between your iPhone and Apple Watch using WatchConnectivity. You can start a session on either device and see the progress on both. Settings changes on one device are automatically reflected on the other.',
    'faq.q4': 'How does Dynamic Island work?',
    'faq.a4': 'When you start a Pomodoro session, Pomo displays a Live Activity on your lock screen and in the Dynamic Island (on supported iPhones). You can see your remaining time and session type without opening the app.',
    'faq.q5': 'Is my data private?',
    'faq.a5': 'Yes. All your data is stored locally on your device. Pomo does not require an account, does not use third-party analytics or advertising, and never transmits your data to external servers. iPhone-Watch sync happens locally between your paired devices.',
    'faq.q6': 'Can I customize the timer durations?',
    'faq.a6': 'Yes. You can customize the work session duration, short break duration, long break duration, and the number of sessions before a long break. Changes are saved automatically and synced to your Apple Watch.',
    'faq.q7': 'What devices are supported?',
    'faq.a7': 'Pomo is available on iPhone running iOS 18 or later, with an Apple Watch companion app for watchOS 10 or later. The app fully supports English and Spanish.',
    'faq.q8': 'How do I delete my data?',
    'faq.a8': 'You can reset your session history and statistics from the app\'s Settings screen. To remove all data completely, simply delete the app from your device. This will also remove data from the paired Apple Watch.',
  },

  es: {
    // Nav
    'nav.home': 'Portafolio',
    'nav.features': 'Funciones',
    'nav.howItWorks': 'C\u00f3mo Funciona',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Temporizador Pomodoro',
    'hero.title.1': 'Mantente Enfocado,',
    'hero.title.2': 'S\u00e9 Productivo',
    'hero.subtitle': 'Pomo te ayuda a gestionar tu tiempo con sesiones Pomodoro personalizables, descansos inteligentes y estad\u00edsticas detalladas de enfoque.',
    'hero.cta': 'Descargar en la App Store',

    // Features
    'features.title': 'Todo lo Que Necesitas para Mantenerte Enfocado',
    'features.subtitle': 'Herramientas simples y poderosas dise\u00f1adas para ayudarte a crear mejores h\u00e1bitos de enfoque y hacer m\u00e1s.',
    'feature.timer.title': 'Temporizador Pomodoro',
    'feature.timer.desc': 'Sesiones de trabajo y descanso personalizables con un hermoso indicador de progreso circular. Establece tu duraci\u00f3n ideal de enfoque y ponte a trabajar.',
    'feature.island.title': 'Dynamic Island',
    'feature.island.desc': 'Ve tu temporizador en la pantalla de bloqueo y Dynamic Island con Live Activities. Mant\u00e9nte al tanto de tu sesi\u00f3n sin abrir la app.',
    'feature.watch.title': 'Apple Watch',
    'feature.watch.desc': 'App complementaria completa en tu mu\u00f1eca. Inicia, pausa y rastrea sesiones directamente desde tu Apple Watch con sincronizaci\u00f3n bidireccional.',
    'feature.stats.title': 'Estad\u00edsticas',
    'feature.stats.desc': 'Rastrea tus sesiones completadas, rachas diarias y tiempo de enfoque semanal. Visualiza tu productividad con gr\u00e1ficas detalladas.',
    'feature.breaks.title': 'Descansos Inteligentes',
    'feature.breaks.desc': 'Programaci\u00f3n autom\u00e1tica de descansos con ciclos de descanso largo configurables. Mant\u00e9nte fresco con periodos de descanso perfectamente programados.',

    // How It Works
    'steps.title': 'C\u00f3mo Funciona',
    'steps.subtitle': 'Tres simples pasos para impulsar tu productividad con la T\u00e9cnica Pomodoro.',
    'steps.1.name': 'Enfoca',
    'steps.1.desc': 'Configura tu temporizador y sum\u00e9rgete en el trabajo profundo. Mant\u00e9nte enfocado en una sola tarea sin distracciones.',
    'steps.2.name': 'Descansa',
    'steps.2.desc': 'Toma un merecido descanso corto para recargarte. Est\u00edrate, respira y reinicia tu mente.',
    'steps.3.name': 'Repite',
    'steps.3.desc': 'Construye impulso con sesiones consecutivas. Despu\u00e9s de algunos ciclos, disfruta de un descanso m\u00e1s largo para recuperarte completamente.',

    // Gallery
    'gallery.title': 'Mira Pomo en Acci\u00f3n',
    'gallery.subtitle': 'Una interfaz hermosa e intuitiva dise\u00f1ada para mantenerte en la zona.',
    'gallery.timer': 'Temporizador',
    'gallery.island': 'Dynamic Island',
    'gallery.watch': 'Apple Watch',
    'gallery.stats': 'Estad\u00edsticas',
    'gallery.breaks': 'Descansos Inteligentes',
    'gallery.watch.timer': 'Temporizador',
    'gallery.watch.session': 'Sesi\u00f3n',
    'gallery.watch.break': 'Descanso',
    'gallery.watch.stats': 'Estad\u00edsticas',
    'gallery.watch.settings': 'Ajustes',
    'gallery.watch.complication': 'Complicaci\u00f3n',
    'gallery.watch.notification': 'Notificaci\u00f3n',
    'gallery.watch.menu': 'Men\u00fa',

    // CTA
    'cta.title.1': 'Empieza a Enfocarte',
    'cta.title.2': 'Hoy',
    'cta.subtitle': 'Descarga Pomo y toma el control de tu productividad con la T\u00e9cnica Pomodoro.',
    'cta.button': 'Descargar en la App Store',

    // Footer
    'footer.copy': '2026 Pomo. Todos los derechos reservados.',

    // Privacy Page
    'privacy.title': 'Pol\u00edtica de Privacidad',
    'privacy.updated': '\u00daltima actualizaci\u00f3n: Febrero 2026',
    'privacy.body': `<h2>Pol\u00edtica de Privacidad de Pomo</h2>
<p>Tu privacidad es importante para nosotros. Esta Pol\u00edtica de Privacidad explica c\u00f3mo Pomo recopila, usa y protege tu informaci\u00f3n personal.</p>

<h2>1. Informaci\u00f3n que recopilamos</h2>
<p><strong>Sin cuenta requerida:</strong> Pomo no requiere que crees una cuenta. No necesitas proporcionar correo electr\u00f3nico, contrase\u00f1a ni identificaci\u00f3n personal para usar la app.</p>
<p><strong>Datos del temporizador:</strong> Los datos de tus sesiones Pomodoro, incluyendo sesiones completadas, tiempo de enfoque e informaci\u00f3n de rachas, se almacenan localmente en tu dispositivo usando UserDefaults y AppStorage.</p>
<p><strong>Configuraci\u00f3n:</strong> Tus preferencias de temporizador (duraci\u00f3n de trabajo, duraci\u00f3n de descanso, ciclos de descanso largo) se almacenan localmente en tu dispositivo.</p>

<h2>2. C\u00f3mo usamos tu informaci\u00f3n</h2>
<p>Usamos tu informaci\u00f3n exclusivamente para:</p>
<ul>
  <li>Rastrear y mostrar tus sesiones Pomodoro completadas y estad\u00edsticas de enfoque</li>
  <li>Mantener tus rachas diarias y progreso semanal</li>
  <li>Recordar tus preferencias y configuraci\u00f3n del temporizador</li>
  <li>Sincronizar el estado del temporizador entre tu iPhone y Apple Watch v\u00eda App Groups (solo local)</li>
</ul>

<h2>3. Almacenamiento y seguridad de datos</h2>
<p>Todos tus datos se almacenan localmente en tu dispositivo usando los frameworks UserDefaults y AppStorage de Apple. Pomo no transmite los datos de tus sesiones ni informaci\u00f3n personal a ning\u00fan servidor externo.</p>
<p>La sincronizaci\u00f3n iPhone-Apple Watch usa los frameworks App Groups y WatchConnectivity de Apple. Esta transferencia de datos ocurre localmente entre tus dispositivos emparejados y no pasa por servidores externos.</p>

<h2>4. Servicios de terceros</h2>
<p>Pomo no usa servicios de an\u00e1lisis, publicidad ni procesamiento de IA de terceros. No hay procesamiento externo de tu informaci\u00f3n personal.</p>

<h2>5. Compartici\u00f3n de datos</h2>
<p>No vendemos, compartimos ni transmitimos tu informaci\u00f3n personal a terceros. Tus datos permanecen en tu dispositivo.</p>

<h2>6. Tus derechos</h2>
<p>Puedes:</p>
<ul>
  <li>Restablecer tu historial de sesiones y estad\u00edsticas desde la Configuraci\u00f3n de la app</li>
  <li>Eliminar la app para borrar todos los datos almacenados localmente</li>
</ul>

<h2>7. Requisito de edad</h2>
<p>Pomo est\u00e1 destinado a usuarios de 13 a\u00f1os en adelante. La app no est\u00e1 dirigida a menores de 13 a\u00f1os y no recopilamos intencionalmente informaci\u00f3n personal de menores de 13 a\u00f1os. Si eres menor de 13 a\u00f1os, por favor no uses esta app.</p>

<h2>8. Cambios a esta pol\u00edtica</h2>
<p>Podemos actualizar esta pol\u00edtica de vez en cuando. Te notificaremos de cambios significativos a trav\u00e9s de la app.</p>

<h2>9. Cont\u00e1ctanos</h2>
<p>Si tienes preguntas sobre esta pol\u00edtica de privacidad, cont\u00e1ctanos en <a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a>.</p>`,

    // Support Page
    'support.title': 'Soporte',
    'support.subtitle': 'Estamos aqu\u00ed para ayudarte',
    'contact.title': 'Cont\u00e1ctanos',
    'contact.desc': '\u00bfTienes una pregunta, comentario o necesitas ayuda? Comun\u00edcate con nosotros directamente.',
    'contact.email': 'Enviar Correo',
    'faq.title': 'Preguntas Frecuentes',

    'faq.q1': '\u00bfQu\u00e9 es Pomo?',
    'faq.a1': 'Pomo es una app de temporizador Pomodoro dise\u00f1ada para ayudarte a mantenerte enfocado y productivo. Incluye sesiones de trabajo y descanso personalizables, un temporizador con progreso circular, seguimiento de estad\u00edsticas, soporte para Dynamic Island y una app complementaria para Apple Watch.',
    'faq.q2': '\u00bfQu\u00e9 es la T\u00e9cnica Pomodoro?',
    'faq.a2': 'La T\u00e9cnica Pomodoro es un m\u00e9todo de gesti\u00f3n del tiempo donde trabajas en intervalos enfocados (t\u00edpicamente 25 minutos) seguidos de descansos cortos (5 minutos). Despu\u00e9s de completar varias sesiones de trabajo, tomas un descanso m\u00e1s largo. Este ciclo ayuda a mantener la concentraci\u00f3n y previene el agotamiento.',
    'faq.q3': '\u00bfC\u00f3mo funciona la sincronizaci\u00f3n con Apple Watch?',
    'faq.a3': 'Pomo sincroniza el estado del temporizador y la configuraci\u00f3n entre tu iPhone y Apple Watch usando WatchConnectivity. Puedes iniciar una sesi\u00f3n en cualquier dispositivo y ver el progreso en ambos. Los cambios de configuraci\u00f3n en un dispositivo se reflejan autom\u00e1ticamente en el otro.',
    'faq.q4': '\u00bfC\u00f3mo funciona Dynamic Island?',
    'faq.a4': 'Cuando inicias una sesi\u00f3n Pomodoro, Pomo muestra una Live Activity en tu pantalla de bloqueo y en el Dynamic Island (en iPhones compatibles). Puedes ver tu tiempo restante y tipo de sesi\u00f3n sin abrir la app.',
    'faq.q5': '\u00bfMis datos son privados?',
    'faq.a5': 'S\u00ed. Todos tus datos se almacenan localmente en tu dispositivo. Pomo no requiere cuenta, no usa an\u00e1lisis ni publicidad de terceros, y nunca transmite tus datos a servidores externos. La sincronizaci\u00f3n iPhone-Watch ocurre localmente entre tus dispositivos emparejados.',
    'faq.q6': '\u00bfPuedo personalizar las duraciones del temporizador?',
    'faq.a6': 'S\u00ed. Puedes personalizar la duraci\u00f3n de la sesi\u00f3n de trabajo, la duraci\u00f3n del descanso corto, la duraci\u00f3n del descanso largo y el n\u00famero de sesiones antes de un descanso largo. Los cambios se guardan autom\u00e1ticamente y se sincronizan con tu Apple Watch.',
    'faq.q7': '\u00bfQu\u00e9 dispositivos son compatibles?',
    'faq.a7': 'Pomo est\u00e1 disponible en iPhone con iOS 18 o posterior, con una app complementaria para Apple Watch con watchOS 10 o posterior. La app es totalmente compatible con ingl\u00e9s y espa\u00f1ol.',
    'faq.q8': '\u00bfC\u00f3mo elimino mis datos?',
    'faq.a8': 'Puedes restablecer tu historial de sesiones y estad\u00edsticas desde la pantalla de Configuraci\u00f3n de la app. Para borrar todos los datos completamente, simplemente elimina la app de tu dispositivo. Esto tambi\u00e9n eliminar\u00e1 los datos del Apple Watch emparejado.',
  }
};

// --- State ---
let currentLang = 'en';

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavScroll();
  initMobileMenu();
  initSmoothScroll();
  initFaqAccordion();
  initScrollAnimations();
});

// --- Language ---
function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const savedLang = localStorage.getItem('pomo-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pomo-lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all data-i18n-html elements (for rich content like privacy policy)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update iPhone screenshot paths
  const langDir = lang === 'es' ? 'Spanish' : 'English';
  document.querySelectorAll('[data-screenshot-num]').forEach(img => {
    const num = img.getAttribute('data-screenshot-num');
    img.src = `Screenshots/Pomo ${langDir}/${num}.png`;
    const altKey = img.getAttribute('data-screenshot-alt');
    if (altKey && translations[lang][altKey]) {
      img.alt = translations[lang][altKey];
    }
  });

  // Watch screenshots stay the same (not language-dependent)

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function toggleLanguage(lang) {
  applyLanguage(lang);
}

// --- Device Toggle (iPhone / Apple Watch) ---
function toggleDevice(device) {
  const iphoneGallery = document.getElementById('gallery-iphone');
  const watchGallery = document.getElementById('gallery-watch');
  if (!iphoneGallery || !watchGallery) return;

  if (device === 'watch') {
    iphoneGallery.classList.add('gallery-hidden');
    watchGallery.classList.remove('gallery-hidden');
  } else {
    watchGallery.classList.add('gallery-hidden');
    iphoneGallery.classList.remove('gallery-hidden');
  }

  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-device') === device);
  });
}

// --- Nav Scroll ---
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Set initial state
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}

// --- Mobile Menu ---
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// --- Smooth Scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// --- FAQ Accordion ---
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        if (activeItem !== item) activeItem.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
