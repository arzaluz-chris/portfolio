/* ============================================
   VORTH Marketing Website — main.js
   ============================================ */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.home': 'Portfolio',
    'nav.features': 'Features',
    'nav.perma': 'PERMA',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',

    // Hero
    'hero.badge': 'AI-Powered Personal Growth',
    'hero.title.1': 'Discover Your',
    'hero.title.2': 'Life Purpose',
    'hero.subtitle': 'VORTH uses AI coaching, the PERMA well-being model, and smart journaling to help you uncover what truly matters and build a purposeful life.',
    'hero.cta': 'Download on the App Store',

    // Features
    'features.title': 'Everything You Need to Thrive',
    'features.subtitle': 'Powerful AI-driven tools designed to guide your journey of self-discovery and personal growth.',
    'feature.coach.title': 'Live AI Coach',
    'feature.coach.desc': 'Real-time voice coaching sessions powered by Gemini AI. Talk through your thoughts and receive personalized guidance instantly.',
    'feature.journal.title': 'PERMA Journal',
    'feature.journal.desc': 'Reflect on your day through the lens of the five pillars of well-being. Track patterns and growth over time.',
    'feature.goals.title': 'Smart Goals',
    'feature.goals.desc': 'AI-suggested goals tailored to your purpose statement. Break down big ambitions into actionable steps.',
    'feature.assistant.title': 'AI Assistant',
    'feature.assistant.desc': 'Chat with a purpose-aware AI that knows your journey. Get insights, motivation, and clarity on demand.',
    'feature.alchemy.title': 'Emotional Alchemy',
    'feature.alchemy.desc': 'Transform challenging emotions into growth opportunities with guided exercises and reflective prompts.',

    // PERMA
    'perma.title': 'The PERMA Well-Being Model',
    'perma.subtitle': 'Grounded in positive psychology research by Dr. Martin Seligman, PERMA identifies five pillars of lasting well-being.',
    'perma.p.name': 'Positive Emotion',
    'perma.p.desc': 'Cultivate joy, gratitude, and hope in your daily life.',
    'perma.e.name': 'Engagement',
    'perma.e.desc': 'Find flow states and deep involvement in meaningful activities.',
    'perma.r.name': 'Relationships',
    'perma.r.desc': 'Build and nurture authentic connections with others.',
    'perma.m.name': 'Meaning',
    'perma.m.desc': 'Discover purpose by serving something greater than yourself.',
    'perma.a.name': 'Achievement',
    'perma.a.desc': 'Set goals, build mastery, and celebrate your accomplishments.',

    // Gallery
    'gallery.title': 'See VORTH in Action',
    'gallery.subtitle': 'Designed for iPhone and iPad with adaptive layouts that feel right on every screen.',
    'gallery.dashboard': 'Dashboard',
    'gallery.coach': 'Live Coach',
    'gallery.journal': 'Journal',
    'gallery.goals': 'Goals',
    'gallery.assistant': 'Assistant',
    'gallery.brand': 'VORTH',

    // CTA
    'cta.title.1': 'Start Your Journey',
    'cta.title.2': 'Today',
    'cta.subtitle': 'Download VORTH and take the first step toward discovering your life purpose.',
    'cta.button': 'Download on the App Store',

    // Footer
    'footer.copy': '2026 VORTH. All rights reserved.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: February 2026',
    'privacy.body': `<h2>VORTH Privacy Policy</h2>
<p>Your privacy is important to us. This Privacy Policy explains how VORTH collects, uses, and protects your personal information.</p>

<h2>1. Information We Collect</h2>
<p><strong>Account Information:</strong> When you create an account, we collect your name, email address, and authentication credentials. If you sign in with Apple, we receive the information you choose to share.</p>
<p><strong>Journal Content:</strong> Your journal entries, purpose statements, goals, and coaching session transcripts are stored to provide the app's core functionality.</p>
<p><strong>Usage Data:</strong> We collect anonymous usage statistics to improve the app experience, such as feature usage frequency and session duration.</p>

<h2>2. How We Use Your Information</h2>
<p>We use your information to:</p>
<ul>
  <li>Provide and personalize the VORTH experience</li>
  <li>Generate AI-powered coaching and purpose analysis</li>
  <li>Sync your data across your devices via iCloud</li>
  <li>Improve our services and develop new features</li>
</ul>

<h2>3. AI Processing</h2>
<p>VORTH uses Google's Gemini AI to provide coaching and analysis features. When you use AI features, relevant context from your profile is sent to Google's servers for processing. Google's AI services are subject to Google's privacy policy.</p>

<h2>4. Data Storage and Security</h2>
<p>Your data is stored securely using Apple's CloudKit infrastructure and synced via iCloud. We use industry-standard security measures to protect your information. Your data is encrypted in transit and at rest.</p>

<h2>5. Data Sharing</h2>
<p>We do not sell your personal information. We only share data with:</p>
<ul>
  <li>Apple (iCloud sync and authentication)</li>
  <li>Google (AI processing via Gemini)</li>
</ul>

<h2>6. Your Rights</h2>
<p>You can:</p>
<ul>
  <li>Access and export your data at any time</li>
  <li>Delete your account and all associated data</li>
  <li>Opt out of AI features</li>
</ul>

<h2>7. Children's Privacy</h2>
<p>VORTH is not intended for children under 13. We do not knowingly collect information from children under 13.</p>

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

    'faq.q1': 'What is VORTH?',
    'faq.a1': 'VORTH is an AI-powered personal development app that helps you discover your life purpose through journaling, coaching, and the scientifically-backed PERMA well-being model. It combines smart AI with reflective practices to guide your growth journey.',
    'faq.q2': 'How does VORTH work?',
    'faq.a2': 'VORTH guides you through a conversational onboarding to understand your values and passions, then generates a personalized purpose statement. From there, you use AI coaching, PERMA journaling, and smart goals to deepen self-awareness and take meaningful action.',
    'faq.q3': 'What is the PERMA model?',
    'faq.a3': 'PERMA is a well-being framework developed by psychologist Dr. Martin Seligman. It stands for Positive Emotion, Engagement, Relationships, Meaning, and Achievement \u2014 five pillars that contribute to a flourishing life. VORTH uses this model to structure your journaling and growth.',
    'faq.q4': 'Is my data private and secure?',
    'faq.a4': 'Yes. Your data is stored securely using Apple\'s CloudKit infrastructure and synced via iCloud. Data is encrypted in transit and at rest. We never sell your personal information. AI processing uses Google Gemini, subject to Google\'s privacy policy.',
    'faq.q5': 'Does VORTH sync across devices?',
    'faq.a5': 'Yes! VORTH uses iCloud to automatically sync all your journal entries, goals, purpose statements, and coaching history across your iPhone and iPad.',
    'faq.q6': 'Are there limits on AI features?',
    'faq.a6': 'Yes, certain AI features like voice coaching and chat have daily usage limits to ensure fair access for all users. These limits reset every 24 hours.',
    'faq.q7': 'How do I delete my account?',
    'faq.a7': 'You can delete your account and all associated data from the Settings tab within the app. This action is permanent and cannot be undone.',
    'faq.q8': 'What devices and languages are supported?',
    'faq.a8': 'VORTH is available on iPhone and iPad running iOS 17 or later. The app supports English and Spanish, with more languages planned for the future.',
  },

  es: {
    // Nav
    'nav.home': 'Portafolio',
    'nav.features': 'Funciones',
    'nav.perma': 'PERMA',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Crecimiento Personal con IA',
    'hero.title.1': 'Descubre Tu',
    'hero.title.2': 'Prop\u00f3sito de Vida',
    'hero.subtitle': 'VORTH usa coaching con IA, el modelo de bienestar PERMA y un diario inteligente para ayudarte a descubrir lo que realmente importa y construir una vida con prop\u00f3sito.',
    'hero.cta': 'Descargar en la App Store',

    // Features
    'features.title': 'Todo lo Que Necesitas para Prosperar',
    'features.subtitle': 'Herramientas poderosas impulsadas por IA dise\u00f1adas para guiar tu viaje de autodescubrimiento y crecimiento personal.',
    'feature.coach.title': 'Coach de Voz en Vivo',
    'feature.coach.desc': 'Sesiones de coaching por voz en tiempo real con Gemini AI. Habla sobre tus pensamientos y recibe orientaci\u00f3n personalizada al instante.',
    'feature.journal.title': 'Diario PERMA',
    'feature.journal.desc': 'Reflexiona sobre tu d\u00eda a trav\u00e9s de los cinco pilares del bienestar. Rastrea patrones y crecimiento a lo largo del tiempo.',
    'feature.goals.title': 'Metas Inteligentes',
    'feature.goals.desc': 'Metas sugeridas por IA adaptadas a tu declaraci\u00f3n de prop\u00f3sito. Divide grandes ambiciones en pasos concretos.',
    'feature.assistant.title': 'Asistente IA',
    'feature.assistant.desc': 'Chatea con una IA consciente de tu prop\u00f3sito que conoce tu camino. Obt\u00e9n ideas, motivaci\u00f3n y claridad cuando lo necesites.',
    'feature.alchemy.title': 'Alquimia Emocional',
    'feature.alchemy.desc': 'Transforma emociones desafiantes en oportunidades de crecimiento con ejercicios guiados y reflexiones.',

    // PERMA
    'perma.title': 'El Modelo de Bienestar PERMA',
    'perma.subtitle': 'Basado en la investigaci\u00f3n de psicolog\u00eda positiva del Dr. Martin Seligman, PERMA identifica cinco pilares del bienestar duradero.',
    'perma.p.name': 'Emoci\u00f3n Positiva',
    'perma.p.desc': 'Cultiva alegr\u00eda, gratitud y esperanza en tu vida diaria.',
    'perma.e.name': 'Compromiso',
    'perma.e.desc': 'Encuentra estados de flujo e involucramiento profundo en actividades significativas.',
    'perma.r.name': 'Relaciones',
    'perma.r.desc': 'Construye y nutre conexiones aut\u00e9nticas con los dem\u00e1s.',
    'perma.m.name': 'Significado',
    'perma.m.desc': 'Descubre prop\u00f3sito sirviendo a algo m\u00e1s grande que t\u00fa.',
    'perma.a.name': 'Logro',
    'perma.a.desc': 'Establece metas, desarrolla maestr\u00eda y celebra tus logros.',

    // Gallery
    'gallery.title': 'Mira VORTH en Acci\u00f3n',
    'gallery.subtitle': 'Dise\u00f1ado para iPhone y iPad con dise\u00f1os adaptables que se sienten bien en cada pantalla.',
    'gallery.dashboard': 'Panel',
    'gallery.coach': 'Coach en Vivo',
    'gallery.journal': 'Diario',
    'gallery.goals': 'Metas',
    'gallery.assistant': 'Asistente',
    'gallery.brand': 'VORTH',

    // CTA
    'cta.title.1': 'Comienza Tu Viaje',
    'cta.title.2': 'Hoy',
    'cta.subtitle': 'Descarga VORTH y da el primer paso hacia descubrir tu prop\u00f3sito de vida.',
    'cta.button': 'Descargar en la App Store',

    // Footer
    'footer.copy': '2026 VORTH. Todos los derechos reservados.',

    // Privacy Page
    'privacy.title': 'Pol\u00edtica de Privacidad',
    'privacy.updated': '\u00daltima actualizaci\u00f3n: Febrero 2026',
    'privacy.body': `<h2>Pol\u00edtica de Privacidad de VORTH</h2>
<p>Tu privacidad es importante para nosotros. Esta Pol\u00edtica de Privacidad explica c\u00f3mo VORTH recopila, usa y protege tu informaci\u00f3n personal.</p>

<h2>1. Informaci\u00f3n que recopilamos</h2>
<p><strong>Informaci\u00f3n de la cuenta:</strong> Cuando creas una cuenta, recopilamos tu nombre, direcci\u00f3n de correo electr\u00f3nico y credenciales de autenticaci\u00f3n. Si inicias sesi\u00f3n con Apple, recibimos la informaci\u00f3n que elijas compartir.</p>
<p><strong>Contenido del diario:</strong> Tus entradas de diario, declaraciones de prop\u00f3sito, metas y transcripciones de sesiones de coaching se almacenan para proporcionar la funcionalidad principal de la app.</p>
<p><strong>Datos de uso:</strong> Recopilamos estad\u00edsticas de uso an\u00f3nimas para mejorar la experiencia de la app, como la frecuencia de uso de funciones y la duraci\u00f3n de las sesiones.</p>

<h2>2. C\u00f3mo usamos tu informaci\u00f3n</h2>
<p>Usamos tu informaci\u00f3n para:</p>
<ul>
  <li>Proporcionar y personalizar la experiencia VORTH</li>
  <li>Generar coaching y an\u00e1lisis de prop\u00f3sito con IA</li>
  <li>Sincronizar tus datos entre tus dispositivos a trav\u00e9s de iCloud</li>
  <li>Mejorar nuestros servicios y desarrollar nuevas funciones</li>
</ul>

<h2>3. Procesamiento de IA</h2>
<p>VORTH utiliza Gemini de Google para proporcionar funciones de coaching y an\u00e1lisis. Cuando usas funciones de IA, el contexto relevante de tu perfil se env\u00eda a los servidores de Google para su procesamiento. Los servicios de IA de Google est\u00e1n sujetos a la pol\u00edtica de privacidad de Google.</p>

<h2>4. Almacenamiento y seguridad de datos</h2>
<p>Tus datos se almacenan de forma segura utilizando la infraestructura CloudKit de Apple y se sincronizan a trav\u00e9s de iCloud. Utilizamos medidas de seguridad est\u00e1ndar de la industria para proteger tu informaci\u00f3n. Tus datos est\u00e1n cifrados en tr\u00e1nsito y en reposo.</p>

<h2>5. Compartici\u00f3n de datos</h2>
<p>No vendemos tu informaci\u00f3n personal. Solo compartimos datos con:</p>
<ul>
  <li>Apple (sincronizaci\u00f3n iCloud y autenticaci\u00f3n)</li>
  <li>Google (procesamiento de IA a trav\u00e9s de Gemini)</li>
</ul>

<h2>6. Tus derechos</h2>
<p>Puedes:</p>
<ul>
  <li>Acceder y exportar tus datos en cualquier momento</li>
  <li>Eliminar tu cuenta y todos los datos asociados</li>
  <li>Dejar de usar las funciones de IA</li>
</ul>

<h2>7. Privacidad de menores</h2>
<p>VORTH no est\u00e1 destinado a menores de 13 a\u00f1os. No recopilamos intencionalmente informaci\u00f3n de menores de 13 a\u00f1os.</p>

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

    'faq.q1': '\u00bfQu\u00e9 es VORTH?',
    'faq.a1': 'VORTH es una app de desarrollo personal impulsada por IA que te ayuda a descubrir tu prop\u00f3sito de vida a trav\u00e9s del diario, coaching y el modelo de bienestar PERMA respaldado cient\u00edficamente. Combina IA inteligente con pr\u00e1cticas reflexivas para guiar tu viaje de crecimiento.',
    'faq.q2': '\u00bfC\u00f3mo funciona VORTH?',
    'faq.a2': 'VORTH te gu\u00eda a trav\u00e9s de una incorporaci\u00f3n conversacional para entender tus valores y pasiones, luego genera una declaraci\u00f3n de prop\u00f3sito personalizada. Desde all\u00ed, usas coaching con IA, diario PERMA y metas inteligentes para profundizar tu autoconocimiento y tomar acci\u00f3n significativa.',
    'faq.q3': '\u00bfQu\u00e9 es el modelo PERMA?',
    'faq.a3': 'PERMA es un marco de bienestar desarrollado por el psic\u00f3logo Dr. Martin Seligman. Significa Emoci\u00f3n Positiva, Compromiso, Relaciones, Significado y Logro \u2014 cinco pilares que contribuyen a una vida plena. VORTH usa este modelo para estructurar tu diario y crecimiento.',
    'faq.q4': '\u00bfMis datos son privados y seguros?',
    'faq.a4': 'S\u00ed. Tus datos se almacenan de forma segura usando la infraestructura CloudKit de Apple y se sincronizan a trav\u00e9s de iCloud. Los datos est\u00e1n cifrados en tr\u00e1nsito y en reposo. Nunca vendemos tu informaci\u00f3n personal. El procesamiento de IA usa Google Gemini, sujeto a la pol\u00edtica de privacidad de Google.',
    'faq.q5': '\u00bfVORTH se sincroniza entre dispositivos?',
    'faq.a5': '\u00a1S\u00ed! VORTH usa iCloud para sincronizar autom\u00e1ticamente todas tus entradas de diario, metas, declaraciones de prop\u00f3sito e historial de coaching entre tu iPhone y iPad.',
    'faq.q6': '\u00bfHay l\u00edmites en las funciones de IA?',
    'faq.a6': 'S\u00ed, ciertas funciones de IA como el coaching de voz y el chat tienen l\u00edmites de uso diario para asegurar un acceso justo para todos los usuarios. Estos l\u00edmites se reinician cada 24 horas.',
    'faq.q7': '\u00bfC\u00f3mo elimino mi cuenta?',
    'faq.a7': 'Puedes eliminar tu cuenta y todos los datos asociados desde la pesta\u00f1a de Configuraci\u00f3n dentro de la app. Esta acci\u00f3n es permanente y no se puede deshacer.',
    'faq.q8': '\u00bfQu\u00e9 dispositivos e idiomas son compatibles?',
    'faq.a8': 'VORTH est\u00e1 disponible en iPhone y iPad con iOS 17 o posterior. La app es compatible con ingl\u00e9s y espa\u00f1ol, con m\u00e1s idiomas planeados para el futuro.',
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
  const savedLang = localStorage.getItem('vorth-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('vorth-lang', lang);

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
  const langDir = lang === 'es' ? 'Español' : 'English';
  document.querySelectorAll('[data-screenshot-device]').forEach(img => {
    const device = img.getAttribute('data-screenshot-device');
    const num = img.getAttribute('data-screenshot-num');
    img.src = `Screenshots/VORTH ${device} ${langDir}/${num}.png`;
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
