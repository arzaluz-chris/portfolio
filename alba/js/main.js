/* ============================================
   Alba Marketing Website — main.js
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
    'hero.badge': 'Friendship Guide',
    'hero.title.1': 'Your Guide to',
    'hero.title.2': 'Better Friendships',
    'hero.subtitle': 'Alba is an AI-powered friendship advisor grounded in positive psychology. Take the friendship test, chat with AlbaIA, journal your reflections, and listen to music — all in one place.',
    'hero.cta': 'Coming Soon on the App Store',

    // Features
    'features.title': 'Everything You Need for Healthier Friendships',
    'features.subtitle': 'Powerful tools designed to help you understand, nurture, and grow your closest relationships.',
    'feature.ai.title': 'AlbaIA',
    'feature.ai.desc': 'Chat with an AI friend who truly listens. Get personalized advice grounded in positive psychology whenever you need it.',
    'feature.test.title': 'Alba Test',
    'feature.test.desc': 'Evaluate your friendships scientifically. Understand the strengths and areas of growth in each relationship.',
    'feature.journal.title': 'Friendship Journal',
    'feature.journal.desc': 'A private diary protected with PIN and Face ID. Reflect on your friendships and track your emotional growth.',
    'feature.blocks.title': 'Alba Blocks',
    'feature.blocks.desc': 'Read curated articles on positive psychology, friendship dynamics, and personal well-being.',
    'feature.music.title': 'Apple Music',
    'feature.music.desc': 'Listen to music while you chat with AlbaIA. Set the mood and make your conversations even more meaningful.',
    'feature.personalization.title': 'AI Personalization',
    'feature.personalization.desc': 'Customize how Alba communicates with you. Adjust her tone, style, and personality to match your preferences.',
    'feature.security.title': 'Privacy & Security',
    'feature.security.desc': 'Your journal is protected with a 4-digit PIN and Face ID. Your data stays on your device — always private, always yours.',

    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Three simple steps to transform your friendships and build deeper connections.',
    'step.1.title': 'Evaluate',
    'step.1.desc': 'Take the Alba Test to understand the quality of your friendships. Get a clear picture of where each relationship stands.',
    'step.2.title': 'Chat',
    'step.2.desc': 'Get personalized advice from AlbaIA based on your test results and personal context. She listens, understands, and guides.',
    'step.3.title': 'Grow',
    'step.3.desc': 'Track your progress in your friendship journal. Reflect on your conversations, set intentions, and watch your relationships flourish.',

    // Gallery
    'gallery.title': 'See Alba in Action',
    'gallery.subtitle': 'Designed for iPhone and iPad with adaptive layouts that feel right on every screen.',
    'gallery.home': 'Home',
    'gallery.test': 'Test',
    'gallery.results': 'Results',
    'gallery.chat': 'Chat',
    'gallery.security': 'Security',
    'gallery.journal': 'Journal',
    'gallery.blocks': 'Blocks',
    'gallery.music': 'Music',

    // CTA
    'cta.title.1': 'Start Building',
    'cta.title.2': 'Better Friendships',
    'cta.subtitle': 'Download Alba and take the first step toward understanding and strengthening your closest relationships.',
    'cta.button': 'Coming Soon on the App Store',

    // Footer
    'footer.copy': '2026 Alba. All rights reserved.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: April 2026',
    'privacy.body': `<h2>Alba Privacy Policy</h2>
<p>Your privacy is important to us. This Privacy Policy explains how Alba collects, uses, and protects your personal information.</p>

<h2>1. Information We Collect</h2>
<p><strong>Account Information:</strong> When you sign in with Apple, we receive only the information you choose to share. No passwords are stored by Alba.</p>
<p><strong>Local Data:</strong> Your friendship journal entries, test results, and chat history are stored locally on your device. Alba prioritizes on-device storage to keep your data private.</p>
<p><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve the app experience, such as feature usage frequency and session duration.</p>

<h2>2. How We Use Your Information</h2>
<p>We use your information to:</p>
<ul>
  <li>Provide and personalize the Alba experience</li>
  <li>Generate AI-powered friendship advice and analysis</li>
  <li>Improve our services and develop new features</li>
</ul>

<h2>3. AI Processing</h2>
<p>Alba uses Google's Gemini AI to power AlbaIA chat features. When you use AI features, relevant context from your conversation is sent to Google's servers for processing. Google's AI services are subject to Google's privacy policy. Alba does not store your conversations on external servers beyond what is needed for real-time processing.</p>

<h2>4. Data Storage and Security</h2>
<p>Your data is stored locally on your device. Journal entries are protected with PIN and Face ID authentication. We use industry-standard security measures to protect your information.</p>

<h2>5. Data Sharing</h2>
<p>We do not sell your personal information. We do not use tracking technologies. We only share data with:</p>
<ul>
  <li>Apple (Sign in with Apple authentication)</li>
  <li>Google (AI processing via Gemini)</li>
</ul>

<h2>6. Your Rights</h2>
<p>You can:</p>
<ul>
  <li>Access all your data directly on your device at any time</li>
  <li>Delete your account and all associated data from within the app</li>
  <li>Opt out of AI features at any time</li>
</ul>

<h2>7. Children's Privacy</h2>
<p>Alba is not intended for children under 13. We do not knowingly collect information from children under 13.</p>

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

    'faq.q1': 'What is Alba?',
    'faq.a1': 'Alba is an AI-powered friendship advisor that helps you understand, evaluate, and strengthen your relationships. It combines a scientifically-backed friendship test, an AI chat companion, a private journal, curated articles on positive psychology, and Apple Music integration — all in one app.',
    'faq.q2': 'How does the friendship test work?',
    'faq.a2': 'The Alba Test asks you a series of questions about a specific friendship. Based on your answers, it generates a detailed analysis of the relationship\'s strengths and areas for growth, giving you a clear picture of where things stand and how to improve.',
    'faq.q3': 'Is my data private?',
    'faq.a3': 'Yes. Your data is stored locally on your device, not on external servers. Journal entries are protected with PIN and Face ID. Alba uses Sign in with Apple for authentication, so we never see your password. We do not sell your data or use tracking technologies.',
    'faq.q4': 'Does Alba use AI?',
    'faq.a4': 'Yes. AlbaIA is powered by Google\'s Gemini AI. She provides personalized friendship advice based on positive psychology. Your conversations are processed in real time and are not stored on external servers beyond what is needed for immediate processing.',
    'faq.q5': 'What is positive psychology?',
    'faq.a5': 'Positive psychology is the scientific study of what makes life worth living. It focuses on strengths, well-being, and flourishing rather than just treating problems. Alba uses principles from positive psychology to help you build healthier, more meaningful friendships.',
    'faq.q6': 'Are there daily limits for AI features?',
    'faq.a6': 'Yes, AlbaIA has tiered daily usage limits to ensure fair access for all users. These limits reset every 24 hours. You can always use the journal, test, and articles without any restrictions.',
    'faq.q7': 'How do I delete my data?',
    'faq.a7': 'You can delete your account and all associated data from the Settings section within the app. Since data is stored locally, deleting the app also removes your data. This action is permanent and cannot be undone.',
    'faq.q8': 'What devices and languages are supported?',
    'faq.a8': 'Alba is available on iPhone and iPad running iOS 17 or later. The app supports English and Spanish, with more languages planned for the future.',
  },

  es: {
    // Nav
    'nav.home': 'Portafolio',
    'nav.features': 'Características',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Guía de Amistades',
    'hero.title.1': 'Tu Guía para',
    'hero.title.2': 'Mejores Amistades',
    'hero.subtitle': 'Alba es una asesora de amistades impulsada por IA y basada en la psicología positiva. Toma el test de amistad, platica con AlbaIA, escribe en tu diario y escucha música — todo en un solo lugar.',
    'hero.cta': 'Próximamente en la App Store',

    // Features
    'features.title': 'Todo lo Que Necesitas para Amistades Más Sanas',
    'features.subtitle': 'Herramientas poderosas diseñadas para ayudarte a entender, cuidar y hacer crecer tus relaciones más cercanas.',
    'feature.ai.title': 'AlbaIA',
    'feature.ai.desc': 'Platica con una amiga IA que realmente escucha. Recibe consejos personalizados basados en psicología positiva cuando los necesites.',
    'feature.test.title': 'Alba Test',
    'feature.test.desc': 'Evalúa tus amistades científicamente. Comprende las fortalezas y áreas de crecimiento en cada relación.',
    'feature.journal.title': 'Diario de Amistades',
    'feature.journal.desc': 'Un diario privado protegido con PIN y Face ID. Reflexiona sobre tus amistades y da seguimiento a tu crecimiento emocional.',
    'feature.blocks.title': 'Alba Blocks',
    'feature.blocks.desc': 'Lee artículos seleccionados sobre psicología positiva, dinámica de amistades y bienestar personal.',
    'feature.music.title': 'Apple Music',
    'feature.music.desc': 'Escucha música mientras platicas con AlbaIA. Crea el ambiente perfecto y haz tus conversaciones aún más significativas.',
    'feature.personalization.title': 'Personalización IA',
    'feature.personalization.desc': 'Personaliza cómo se comunica Alba contigo. Ajusta su tono, estilo y personalidad según tus preferencias.',
    'feature.security.title': 'Privacidad y Seguridad',
    'feature.security.desc': 'Tu diario está protegido con un PIN de 4 dígitos y Face ID. Tus datos se quedan en tu dispositivo — siempre privados, siempre tuyos.',

    // How It Works
    'howItWorks.title': 'Cómo Funciona',
    'howItWorks.subtitle': 'Tres simples pasos para transformar tus amistades y construir conexiones más profundas.',
    'step.1.title': 'Evalúa',
    'step.1.desc': 'Toma el Alba Test para entender la calidad de tus amistades. Obtén una imagen clara de cómo está cada relación.',
    'step.2.title': 'Platica',
    'step.2.desc': 'Recibe consejos personalizados de AlbaIA basados en tus resultados del test y tu contexto personal. Ella escucha, comprende y guía.',
    'step.3.title': 'Crece',
    'step.3.desc': 'Da seguimiento a tu progreso en tu diario de amistades. Reflexiona sobre tus conversaciones, establece intenciones y observa cómo florecen tus relaciones.',

    // Gallery
    'gallery.title': 'Mira Alba en Acción',
    'gallery.subtitle': 'Diseñado para iPhone y iPad con diseños adaptables que se sienten bien en cada pantalla.',
    'gallery.home': 'Inicio',
    'gallery.test': 'Test',
    'gallery.results': 'Resultados',
    'gallery.chat': 'Chat',
    'gallery.security': 'Seguridad',
    'gallery.journal': 'Diario',
    'gallery.blocks': 'Bloques',
    'gallery.music': 'Música',

    // CTA
    'cta.title.1': 'Comienza a Construir',
    'cta.title.2': 'Mejores Amistades',
    'cta.subtitle': 'Descarga Alba y da el primer paso para entender y fortalecer tus relaciones más cercanas.',
    'cta.button': 'Próximamente en la App Store',

    // Footer
    'footer.copy': '2026 Alba. Todos los derechos reservados.',

    // Privacy Page
    'privacy.title': 'Política de Privacidad',
    'privacy.updated': 'Última actualización: Abril 2026',
    'privacy.body': `<h2>Política de Privacidad de Alba</h2>
<p>Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo Alba recopila, usa y protege tu información personal.</p>

<h2>1. Información que recopilamos</h2>
<p><strong>Información de la cuenta:</strong> Cuando inicias sesión con Apple, recibimos únicamente la información que elijas compartir. Alba no almacena contraseñas.</p>
<p><strong>Datos locales:</strong> Tus entradas del diario de amistades, resultados del test e historial de chat se almacenan localmente en tu dispositivo. Alba prioriza el almacenamiento en el dispositivo para mantener tus datos privados.</p>
<p><strong>Datos de uso:</strong> Podemos recopilar estadísticas de uso anónimas para mejorar la experiencia de la app, como la frecuencia de uso de funciones y la duración de las sesiones.</p>

<h2>2. Cómo usamos tu información</h2>
<p>Usamos tu información para:</p>
<ul>
  <li>Proporcionar y personalizar la experiencia Alba</li>
  <li>Generar consejos de amistad y análisis con IA</li>
  <li>Mejorar nuestros servicios y desarrollar nuevas funciones</li>
</ul>

<h2>3. Procesamiento de IA</h2>
<p>Alba utiliza Gemini de Google para impulsar las funciones de chat de AlbaIA. Cuando usas funciones de IA, el contexto relevante de tu conversación se envía a los servidores de Google para su procesamiento. Los servicios de IA de Google están sujetos a la política de privacidad de Google. Alba no almacena tus conversaciones en servidores externos más allá de lo necesario para el procesamiento en tiempo real.</p>

<h2>4. Almacenamiento y seguridad de datos</h2>
<p>Tus datos se almacenan localmente en tu dispositivo. Las entradas del diario están protegidas con autenticación PIN y Face ID. Utilizamos medidas de seguridad estándar de la industria para proteger tu información.</p>

<h2>5. Compartición de datos</h2>
<p>No vendemos tu información personal. No utilizamos tecnologías de rastreo. Solo compartimos datos con:</p>
<ul>
  <li>Apple (autenticación con Sign in with Apple)</li>
  <li>Google (procesamiento de IA a través de Gemini)</li>
</ul>

<h2>6. Tus derechos</h2>
<p>Puedes:</p>
<ul>
  <li>Acceder a todos tus datos directamente en tu dispositivo en cualquier momento</li>
  <li>Eliminar tu cuenta y todos los datos asociados desde la app</li>
  <li>Dejar de usar las funciones de IA en cualquier momento</li>
</ul>

<h2>7. Privacidad de menores</h2>
<p>Alba no está destinado a menores de 13 años. No recopilamos intencionalmente información de menores de 13 años.</p>

<h2>8. Cambios a esta política</h2>
<p>Podemos actualizar esta política de vez en cuando. Te notificaremos de cambios significativos a través de la app.</p>

<h2>9. Contáctanos</h2>
<p>Si tienes preguntas sobre esta política de privacidad, contáctanos en <a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a>.</p>`,

    // Support Page
    'support.title': 'Soporte',
    'support.subtitle': 'Estamos aquí para ayudarte',
    'contact.title': 'Contáctanos',
    'contact.desc': '¿Tienes una pregunta, comentario o necesitas ayuda? Comunícate con nosotros directamente.',
    'contact.email': 'Enviar Correo',
    'faq.title': 'Preguntas Frecuentes',

    'faq.q1': '¿Qué es Alba?',
    'faq.a1': 'Alba es una asesora de amistades impulsada por IA que te ayuda a entender, evaluar y fortalecer tus relaciones. Combina un test de amistad respaldado científicamente, una compañera de chat con IA, un diario privado, artículos de psicología positiva e integración con Apple Music — todo en una sola app.',
    'faq.q2': '¿Cómo funciona el test de amistad?',
    'faq.a2': 'El Alba Test te hace una serie de preguntas sobre una amistad específica. Basándose en tus respuestas, genera un análisis detallado de las fortalezas y áreas de crecimiento de la relación, dándote una imagen clara de cómo están las cosas y cómo mejorar.',
    'faq.q3': '¿Mis datos son privados?',
    'faq.a3': 'Sí. Tus datos se almacenan localmente en tu dispositivo, no en servidores externos. Las entradas del diario están protegidas con PIN y Face ID. Alba usa Sign in with Apple para la autenticación, así que nunca vemos tu contraseña. No vendemos tus datos ni usamos tecnologías de rastreo.',
    'faq.q4': '¿Alba usa IA?',
    'faq.a4': 'Sí. AlbaIA está impulsada por Gemini de Google. Ella proporciona consejos personalizados de amistad basados en psicología positiva. Tus conversaciones se procesan en tiempo real y no se almacenan en servidores externos más allá de lo necesario para el procesamiento inmediato.',
    'faq.q5': '¿Qué es la psicología positiva?',
    'faq.a5': 'La psicología positiva es el estudio científico de lo que hace que la vida valga la pena. Se enfoca en fortalezas, bienestar y florecimiento en lugar de solo tratar problemas. Alba usa principios de la psicología positiva para ayudarte a construir amistades más sanas y significativas.',
    'faq.q6': '¿Hay límites diarios para las funciones de IA?',
    'faq.a6': 'Sí, AlbaIA tiene límites de uso diario escalonados para asegurar un acceso justo para todos los usuarios. Estos límites se reinician cada 24 horas. Siempre puedes usar el diario, el test y los artículos sin ninguna restricción.',
    'faq.q7': '¿Cómo elimino mis datos?',
    'faq.a7': 'Puedes eliminar tu cuenta y todos los datos asociados desde la sección de Configuración dentro de la app. Como los datos se almacenan localmente, eliminar la app también elimina tus datos. Esta acción es permanente y no se puede deshacer.',
    'faq.q8': '¿Qué dispositivos e idiomas son compatibles?',
    'faq.a8': 'Alba está disponible en iPhone y iPad con iOS 17 o posterior. La app es compatible con inglés y español, con más idiomas planeados para el futuro.',
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
  initDeviceToggle();
  initGalleryScroll();
  initFaqAccordion();
  initScrollAnimations();
});

// --- Language ---
function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const savedLang = localStorage.getItem('alba-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('alba-lang', lang);

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

  // Update screenshot paths
  const langDir = lang === 'es' ? 'ES' : 'EN';
  document.querySelectorAll('[data-screenshot-device]').forEach(img => {
    const device = img.getAttribute('data-screenshot-device');
    const num = img.getAttribute('data-screenshot-num');
    img.src = `Screenshots/${device} ${langDir}/${num}.png`;
    img.alt = translations[lang][img.getAttribute('data-screenshot-alt')] || '';
  });

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

// --- Device Toggle (iPhone / iPad) ---
function initDeviceToggle() {
  const toggleBtns = document.querySelectorAll('.device-btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const device = btn.getAttribute('data-device');

      // Update active button
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update gallery class for styling
      const gallery = document.querySelector('.screenshot-gallery');
      if (gallery) {
        gallery.setAttribute('data-active-device', device);
      }

      // Update screenshot images
      const langDir = currentLang === 'es' ? 'ES' : 'EN';
      document.querySelectorAll('[data-screenshot-device]').forEach(img => {
        const num = img.getAttribute('data-screenshot-num');
        img.setAttribute('data-screenshot-device', device);
        img.src = `Screenshots/${device} ${langDir}/${num}.png`;
      });
    });
  });
}

// --- Gallery Horizontal Scroll ---
function initGalleryScroll() {
  const track = document.querySelector('.gallery-track');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  if (!track) return;

  const scrollAmount = 320;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
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
