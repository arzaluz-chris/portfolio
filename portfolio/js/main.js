/* ============================================
   PORTFOLIO SHOWCASE — main.js
   ============================================ */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.apps': 'Apps',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.eyebrow': 'iOS Developer Portfolio',
    'hero.title.1': 'Apps That Improve',
    'hero.title.2': 'People\'s Lives',
    'hero.subtitle': '7 published iOS apps built with Swift, SwiftUI, and AI. From on-device Apple Intelligence to Gemini-powered coaching — designed, developed, and shipped to the App Store.',

    // Stats
    'stat.apps': 'Published Apps',
    'stat.ai': 'AI-Powered',
    'stat.platforms': 'iPhone & iPad',
    'stat.live': 'App Store Live',

    // Apps Section
    'apps.title': 'My Applications',
    'apps.subtitle': 'Each app is designed with a focus on user experience, privacy, and modern iOS best practices.',

    // Featured badge
    'featured.badge': 'Latest Release',

    // App: Lumina
    'lumina.tagline': 'Discover Your 24 Character Strengths',
    'lumina.desc': 'Character-strengths app for Colegio Walden Dos. Combines a 96-question VIA test with on-device Apple Intelligence analysis, a conversational AI companion (Buddy), and interactive evolution charts. Zero data collected.',

    // App: Alba
    'alba.tagline': 'AI-Powered Friendship Advisor',
    'alba.desc': 'Your guide to better friendships, grounded in positive psychology. Features AI chat powered by Gemini, a scientific friendship test, a PIN & Face ID-protected journal, and Apple Music integration.',

    // App: TeddyFeels
    'teddyfeels.tagline': 'Emotional Well-being for Kids',
    'teddyfeels.desc': 'Helps children aged 6–12 identify, express, and manage emotions through a teddy bear companion. Includes voice journaling, breathing exercises, and a progress dashboard. 100% offline — zero data collected.',

    // App: VORTH
    'vorth.tagline': 'Discover Your Life Purpose',
    'vorth.desc': 'AI life-coaching app using the PERMA well-being model. Features a live voice coach powered by Gemini AI, a PERMA journal, AI-suggested goals, and iPhone/iPad sync via iCloud.',

    // App: Cordis
    'cordis.tagline': 'Heart Rate Monitoring & Meditation',
    'cordis.desc': 'Track your heart rate, understand stress levels, and find calm with guided meditations and breathing exercises. Integrates with Apple Health via HealthKit. All data stays on-device.',

    // App: Pomo
    'pomo.tagline': 'Minimalist Pomodoro Timer',
    'pomo.desc': 'Boost productivity through structured work and break sessions. Features customizable timers, background support, push notifications, streak tracking, and daily/weekly charts.',

    // App: WaldenVibes
    'waldenvibes.tagline': 'Meditation & Mood Tracking',
    'waldenvibes.desc': 'A minimalist SwiftUI app that combines guided meditation exercises with emotion and mood tracking. Designed with a zen, calming user experience focused on mental well-being.',

    // Common
    'btn.appstore': 'App Store',
    'btn.github': 'GitHub',
    'btn.website': 'Website',
    'btn.details': 'Details',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Core competencies across iOS development, AI integration, and software architecture.',
    'skills.languages': 'Languages & UI',
    'skills.architecture': 'Architecture',
    'skills.frameworks': 'Frameworks & APIs',
    'skills.tools': 'Tools & Services',

    // CTA
    'cta.title': 'Let\'s Build Something Together',
    'cta.subtitle': 'I\'m passionate about creating apps that make a real difference. Let\'s connect.',
    'cta.email': 'Email Me',
    'cta.linkedin': 'LinkedIn',
    'cta.github': 'GitHub',

    // Footer
    'footer.copy': '© 2026 Christian Arzaluz. All rights reserved.',
    'footer.portfolio': 'Interactive Portfolio',
  },

  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.apps': 'Apps',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero
    'hero.eyebrow': 'Portafolio iOS Developer',
    'hero.title.1': 'Apps Que Mejoran',
    'hero.title.2': 'La Vida de las Personas',
    'hero.subtitle': '7 apps iOS publicadas construidas con Swift, SwiftUI e IA. Desde Apple Intelligence on-device hasta coaching con Gemini AI — diseñadas, desarrolladas y publicadas en el App Store.',

    // Stats
    'stat.apps': 'Apps Publicadas',
    'stat.ai': 'Con IA',
    'stat.platforms': 'iPhone & iPad',
    'stat.live': 'En App Store',

    // Apps Section
    'apps.title': 'Mis Aplicaciones',
    'apps.subtitle': 'Cada app está diseñada con enfoque en experiencia de usuario, privacidad y mejores prácticas modernas de iOS.',

    // Featured badge
    'featured.badge': 'Último Lanzamiento',

    // App: Lumina
    'lumina.tagline': 'Descubre Tus 24 Fortalezas de Carácter',
    'lumina.desc': 'App de fortalezas para el Colegio Walden Dos. Combina un test VIA de 96 preguntas con análisis de Apple Intelligence on-device, un compañero conversacional (Buddy) y gráficas de evolución interactivas. Cero datos recolectados.',

    // App: Alba
    'alba.tagline': 'Asesora de Amistades con IA',
    'alba.desc': 'Tu guía para mejores amistades, basada en psicología positiva. Incluye chat IA con Gemini, un test científico de amistad, diario protegido con PIN y Face ID, e integración con Apple Music.',

    // App: TeddyFeels
    'teddyfeels.tagline': 'Bienestar Emocional para Niños',
    'teddyfeels.desc': 'Ayuda a niños de 6 a 12 años a identificar, expresar y gestionar emociones a través de un compañero osito de peluche. Incluye diario de voz, ejercicios de respiración y dashboard de progreso. 100% sin internet.',

    // App: VORTH
    'vorth.tagline': 'Descubre Tu Propósito de Vida',
    'vorth.desc': 'App de coaching de vida con IA usando el modelo PERMA. Incluye coach de voz en vivo con Gemini AI, diario PERMA, metas sugeridas por IA y sincronización iPhone/iPad vía iCloud.',

    // App: Cordis
    'cordis.tagline': 'Monitoreo Cardíaco y Meditación',
    'cordis.desc': 'Registra tu frecuencia cardíaca, entiende tus niveles de estrés y encuentra calma con meditaciones guiadas y ejercicios de respiración. Integración con Apple Health vía HealthKit.',

    // App: Pomo
    'pomo.tagline': 'Temporizador Pomodoro Minimalista',
    'pomo.desc': 'Aumenta tu productividad con sesiones estructuradas de trabajo y descanso. Temporizadores personalizables, soporte en segundo plano, notificaciones push, racha y gráficas diarias/semanales.',

    // App: WaldenVibes
    'waldenvibes.tagline': 'Meditación y Seguimiento Emocional',
    'waldenvibes.desc': 'Una app minimalista en SwiftUI que combina ejercicios de meditación guiada con seguimiento de emociones y estados de ánimo. Diseñada con una experiencia zen enfocada en el bienestar mental.',

    // Common
    'btn.appstore': 'App Store',
    'btn.github': 'GitHub',
    'btn.website': 'Sitio Web',
    'btn.details': 'Detalles',

    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Competencias clave en desarrollo iOS, integración de IA y arquitectura de software.',
    'skills.languages': 'Lenguajes & UI',
    'skills.architecture': 'Arquitectura',
    'skills.frameworks': 'Frameworks & APIs',
    'skills.tools': 'Herramientas',

    // CTA
    'cta.title': 'Construyamos Algo Juntos',
    'cta.subtitle': 'Me apasiona crear apps que hagan una diferencia real. Conectemos.',
    'cta.email': 'Enviar Correo',
    'cta.linkedin': 'LinkedIn',
    'cta.github': 'GitHub',

    // Footer
    'footer.copy': '© 2026 Christian Arzaluz. Todos los derechos reservados.',
    'footer.portfolio': 'Portafolio Interactivo',
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
  initScrollAnimations();
  updateScreenshots();
});

// --- Language ---
function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const savedLang = localStorage.getItem('portfolio-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update screenshots for language
  updateScreenshots();
}

function toggleLanguage(lang) {
  applyLanguage(lang);
}

// --- Update Screenshots Based on Language ---
function updateScreenshots() {
  document.querySelectorAll('[data-screenshot-en]').forEach(img => {
    const enSrc = img.getAttribute('data-screenshot-en');
    const esSrc = img.getAttribute('data-screenshot-es');
    img.src = currentLang === 'es' && esSrc ? esSrc : enSrc;
  });
}

// --- Nav Scroll ---
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  navbar.classList.toggle('scrolled', window.scrollY > 10);
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
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 52;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
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
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
