/* ============================================
   TeddyFeels Marketing Website — main.js
   ============================================ */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.home': 'Portfolio',
    'nav.features': 'Features',
    'nav.emotions': 'Emotions',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',

    // Hero
    'hero.badge': 'Emotional Wellness for Kids',
    'hero.title.1': 'Helping Kids',
    'hero.title.2': 'Understand Emotions',
    'hero.subtitle': 'TeddyFeels is a warm, safe companion that helps children ages 6–12 identify, express, and manage their emotions through guided activities, a private journal, goal tracking, and a friendly teddy bear buddy.',
    'hero.cta': 'Download on the App Store',

    // Features
    'features.title': 'Everything Your Child Needs',
    'features.subtitle': 'Warm, thoughtful tools designed to help children understand and manage their emotions in a safe space.',
    'feature.checkin.title': 'Emotion Check-In',
    'feature.checkin.desc': '9 emotions with animated bear expressions, personalized coping recommendations, and confetti celebrations.',
    'feature.diary.title': 'Private Journal',
    'feature.diary.desc': 'PIN-protected diary with text and voice recording, dark mode writing space, all entries stored locally.',
    'feature.goals.title': 'Goal Tracker',
    'feature.goals.desc': 'Set personal goals, track progress with visual rings, celebrate completions with confetti.',
    'feature.sos.title': 'SOS Rescue Mode',
    'feature.sos.desc': 'Full-screen breathing exercise with guided inhale/exhale, quick emotion check-in, calming design.',
    'feature.analytics.title': 'Progress Dashboard',
    'feature.analytics.desc': 'Visual energy ring, weekly charts, active days tracking, average score insights.',

    // Emotions
    'emotions.title': 'The 9 Emotions',
    'emotions.subtitle': 'TeddyFeels helps children recognize and navigate nine core emotions, each with tailored activities and coping strategies rooted in child psychology.',
    'emotions.happy.name': 'Happy',
    'emotions.happy.desc': 'Joy and happiness — celebrate the good moments.',
    'emotions.sad.name': 'Sad',
    'emotions.sad.desc': 'Sadness is valid — let yourself feel and heal.',
    'emotions.angry.name': 'Angry',
    'emotions.angry.desc': 'Anger needs an outlet — channel it safely.',
    'emotions.anxious.name': 'Anxious',
    'emotions.anxious.desc': 'Anxiety can be managed — breathe and ground yourself.',
    'emotions.stressed.name': 'Stressed',
    'emotions.stressed.desc': 'Stress calls for a pause — take it one step at a time.',
    'emotions.confused.name': 'Confused',
    'emotions.confused.desc': 'Confusion is the start of learning — explore it.',
    'emotions.hopeful.name': 'Hopeful',
    'emotions.hopeful.desc': 'Hope lights the way — nurture it daily.',
    'emotions.grateful.name': 'Grateful',
    'emotions.grateful.desc': 'Gratitude transforms perspective — practice it.',
    'emotions.proud.name': 'Proud',
    'emotions.proud.desc': 'Pride in your growth — you earned it.',

    // Gallery
    'gallery.title': 'See TeddyFeels in Action',
    'gallery.subtitle': 'Designed for iPhone and iPad with adaptive layouts that feel right on every screen.',
    'gallery.character': 'Character Selection',
    'gallery.home': 'Home',
    'gallery.pin': 'PIN Lock',
    'gallery.journal': 'Journal',
    'gallery.goals': 'Goals',
    'gallery.rule': '3:1 Rule',
    'gallery.progress': 'Progress',
    'gallery.sos': 'SOS Mode',

    // CTA
    'cta.title.1': 'Your Child\'s Emotional',
    'cta.title.2': 'Safe Space',
    'cta.subtitle': 'TeddyFeels is now on the App Store. Give your child a private, caring companion for their emotional journey.',
    'cta.button': 'Download on the App Store',

    // Footer
    'footer.copy': '2026 TeddyFeels. All rights reserved.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: April 2026',
    'privacy.body': `<h2>TeddyFeels Privacy Policy</h2>
<p>TeddyFeels is designed for children ages 6–12. We take your child's privacy extremely seriously. This policy explains how TeddyFeels handles data — in short, <strong>we collect nothing</strong>.</p>

<h2>1. Introduction</h2>
<p>TeddyFeels is an emotional wellness app designed specifically for children ages 6 to 12. The app helps kids identify, express, and manage their emotions through guided activities, a private journal, goal tracking, and a friendly teddy bear companion. Privacy and safety are at the core of everything we build.</p>

<h2>2. Information We Collect</h2>
<p><strong>None.</strong> TeddyFeels does not collect, transmit, or store any personal information on external servers. All data created by the user is stored exclusively on the device.</p>

<h2>3. Data Stored on Device</h2>
<p>The following data is created and stored locally on the user's device only:</p>
<ul>
  <li><strong>Diary entries</strong> — text and voice recordings saved to the private journal</li>
  <li><strong>Goals</strong> — personal goals and progress tracking data</li>
  <li><strong>Emotion check-ins</strong> — selected emotions and scores</li>
  <li><strong>PIN code</strong> — a 4-digit PIN to protect the private journal</li>
  <li><strong>Character preference</strong> — the selected teddy bear character</li>
</ul>
<p>This data is managed via SwiftData and UserDefaults and never leaves the device.</p>

<h2>4. Data We Do NOT Collect</h2>
<p>TeddyFeels does <strong>not</strong> collect any of the following:</p>
<ul>
  <li>Name, email, or any personal identifiers</li>
  <li>Location data</li>
  <li>Photos or camera access</li>
  <li>Contacts</li>
  <li>Device identifiers or advertising IDs</li>
  <li>Browsing or search data</li>
  <li>Analytics or usage tracking data</li>
</ul>

<h2>5. No Network Communication</h2>
<p>TeddyFeels makes <strong>zero network calls</strong>. The app does not connect to the internet, does not communicate with any server, and does not send or receive any data over a network.</p>

<h2>6. Third-Party Services</h2>
<p>TeddyFeels uses the following open-source libraries for visual effects only. None of these libraries collect, transmit, or process any user data:</p>
<ul>
  <li><strong>ConfettiSwiftUI</strong> — confetti celebration animations</li>
  <li><strong>Lottie</strong> — animated illustrations</li>
  <li><strong>Vortex</strong> — particle effects</li>
  <li><strong>SwiftUI-Shimmer</strong> — shimmer loading effects</li>
</ul>
<p>All of these libraries operate purely on-device with no network capabilities.</p>

<h2>7. Microphone</h2>
<p>TeddyFeels offers an optional voice recording feature within the private journal. Voice recordings are processed locally on the device using Apple's Speech Framework. Audio data is <strong>never transmitted</strong> to any external server or third party. The microphone is only activated when the child explicitly taps the record button.</p>

<h2>8. Security</h2>
<p>The private journal is protected by a 4-digit PIN code set by the user. This PIN is stored locally on the device and is not recoverable remotely. The app does not use biometric authentication.</p>

<h2>9. Data Deletion</h2>
<p>Uninstalling TeddyFeels from the device permanently removes all data created by the app, including diary entries, goals, emotion check-ins, the PIN code, and character preferences. There is no cloud backup or remote copy of any data.</p>

<h2>10. Parental Rights</h2>
<p>Parents and guardians can:</p>
<ul>
  <li>Review all content stored in the app directly on the device</li>
  <li>Delete all data permanently by uninstalling the app</li>
  <li>Access the journal by entering the child's PIN</li>
</ul>
<p>Since no data is collected or transmitted, there is no data to request from us.</p>

<h2>11. Compliance</h2>
<p>TeddyFeels is designed to comply with:</p>
<ul>
  <li><strong>COPPA</strong> (Children's Online Privacy Protection Act)</li>
  <li><strong>GDPR</strong> (General Data Protection Regulation)</li>
  <li><strong>Apple's Kids Category Guidelines</strong> for the App Store</li>
</ul>

<h2>12. Contact Us</h2>
<p>If you have questions about this privacy policy, please contact us:</p>
<ul>
  <li><a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a></li>
  <li><a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a></li>
</ul>`,

    // Support Page
    'support.title': 'Support',
    'support.subtitle': 'We\'re here to help',
    'contact.title': 'Contact Us',
    'contact.desc': 'Have a question, feedback, or need help? Reach out to us directly.',
    'contact.email': 'Email Support',
    'faq.title': 'Frequently Asked Questions',

    'faq.q1': 'What is TeddyFeels?',
    'faq.a1': 'TeddyFeels is an emotional wellness app designed for children ages 6 to 12. It helps kids identify, express, and manage their emotions through guided activities, a private journal, goal tracking, and a friendly teddy bear companion. All data stays on the device — nothing is collected or sent online.',
    'faq.q2': 'What age group is TeddyFeels for?',
    'faq.a2': 'TeddyFeels is designed for children ages 6 to 12. The interface, language, and activities are all tailored to be age-appropriate, warm, and easy to understand for kids in this age range.',
    'faq.q3': 'Is my child\'s data safe?',
    'faq.a3': 'Absolutely. TeddyFeels collects zero personal data and makes zero network calls. All information — diary entries, goals, emotions, and preferences — is stored exclusively on the device. There is no account creation, no cloud sync, and no analytics. The app complies with COPPA, GDPR, and Apple\'s Kids Category guidelines.',
    'faq.q4': 'How does the private journal work?',
    'faq.a4': 'The private journal is protected by a 4-digit PIN set by the child. Inside, kids can write text entries or record voice notes. The journal uses a calming dark mode writing space. All entries are stored locally on the device and are never transmitted anywhere.',
    'faq.q5': 'What is SOS Rescue Mode?',
    'faq.a5': 'SOS Rescue Mode is a full-screen calming experience designed for moments of strong emotion. It guides the child through a breathing exercise with visual inhale and exhale prompts, followed by a quick emotion check-in. The design is intentionally simple and soothing.',
    'faq.q6': 'Does TeddyFeels need internet?',
    'faq.a6': 'No. TeddyFeels works completely offline. The app makes no network calls, does not connect to any server, and does not require an internet connection to function. Everything runs locally on the device.',
    'faq.q7': 'What devices are supported?',
    'faq.a7': 'TeddyFeels is available on iPhone and iPad running iOS 18 or later. The app supports English and Spanish, with adaptive layouts optimized for both device types.',
    'faq.q8': 'How do I reset or delete all data?',
    'faq.a8': 'To delete all data, simply uninstall TeddyFeels from the device. Since all data is stored locally and there is no cloud backup, uninstalling the app permanently removes everything — diary entries, goals, emotion check-ins, the PIN, and character preferences.',
  },

  es: {
    // Nav
    'nav.home': 'Portafolio',
    'nav.features': 'Funciones',
    'nav.emotions': 'Emociones',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Bienestar Emocional para Niños',
    'hero.title.1': 'Ayudando a los Niños a',
    'hero.title.2': 'Entender sus Emociones',
    'hero.subtitle': 'TeddyFeels es un compañero cálido y seguro que ayuda a niños de 6 a 12 años a identificar, expresar y manejar sus emociones a través de actividades guiadas, un diario privado, seguimiento de metas y un amigable osito de peluche.',
    'hero.cta': 'Descargar en la App Store',

    // Features
    'features.title': 'Todo lo que tu Hijo Necesita',
    'features.subtitle': 'Herramientas cálidas y pensadas para ayudar a los niños a entender y manejar sus emociones en un espacio seguro.',
    'feature.checkin.title': 'Check-in Emocional',
    'feature.checkin.desc': '9 emociones con expresiones animadas del osito, recomendaciones personalizadas de manejo y celebraciones con confeti.',
    'feature.diary.title': 'Diario Privado',
    'feature.diary.desc': 'Diario protegido con PIN, grabación de texto y voz, espacio de escritura en modo oscuro, todas las entradas almacenadas localmente.',
    'feature.goals.title': 'Seguimiento de Metas',
    'feature.goals.desc': 'Establece metas personales, sigue el progreso con anillos visuales, celebra los logros con confeti.',
    'feature.sos.title': 'Modo SOS de Rescate',
    'feature.sos.desc': 'Ejercicio de respiración a pantalla completa con guía de inhalar/exhalar, check-in emocional rápido, diseño calmante.',
    'feature.analytics.title': 'Panel de Progreso',
    'feature.analytics.desc': 'Anillo visual de energía, gráficas semanales, seguimiento de días activos, promedio de puntaje.',

    // Emotions
    'emotions.title': 'Las 9 Emociones',
    'emotions.subtitle': 'TeddyFeels ayuda a los niños a reconocer y navegar nueve emociones fundamentales, cada una con actividades y estrategias de afrontamiento basadas en psicología infantil.',
    'emotions.happy.name': 'Feliz',
    'emotions.happy.desc': 'Alegría y felicidad — celebra los buenos momentos.',
    'emotions.sad.name': 'Triste',
    'emotions.sad.desc': 'La tristeza es válida — permítete sentir y sanar.',
    'emotions.angry.name': 'Enojado',
    'emotions.angry.desc': 'El enojo necesita una salida — canalízalo de forma segura.',
    'emotions.anxious.name': 'Ansioso',
    'emotions.anxious.desc': 'La ansiedad se puede manejar — respira y ancla tus pies.',
    'emotions.stressed.name': 'Estresado',
    'emotions.stressed.desc': 'El estrés pide una pausa — ve paso a paso.',
    'emotions.confused.name': 'Confundido',
    'emotions.confused.desc': 'La confusión es el inicio del aprendizaje — explórala.',
    'emotions.hopeful.name': 'Esperanzado',
    'emotions.hopeful.desc': 'La esperanza ilumina el camino — aliméntala cada día.',
    'emotions.grateful.name': 'Agradecido',
    'emotions.grateful.desc': 'La gratitud transforma la perspectiva — practícala.',
    'emotions.proud.name': 'Orgulloso',
    'emotions.proud.desc': 'Orgullo por tu crecimiento — te lo mereces.',

    // Gallery
    'gallery.title': 'Mira TeddyFeels en Acción',
    'gallery.subtitle': 'Diseñado para iPhone y iPad con diseños adaptables que se sienten bien en cada pantalla.',
    'gallery.character': 'Selección de Personaje',
    'gallery.home': 'Inicio',
    'gallery.pin': 'PIN Secreto',
    'gallery.journal': 'Diario',
    'gallery.goals': 'Metas',
    'gallery.rule': 'Regla 3:1',
    'gallery.progress': 'Progreso',
    'gallery.sos': 'Modo SOS',

    // CTA
    'cta.title.1': 'El Espacio Seguro',
    'cta.title.2': 'Emocional de tu Hijo',
    'cta.subtitle': 'TeddyFeels ya está en la App Store. Dale a tu hijo un compañero privado y cariñoso para su viaje emocional.',
    'cta.button': 'Descargar en la App Store',

    // Footer
    'footer.copy': '2026 TeddyFeels. Todos los derechos reservados.',

    // Privacy Page
    'privacy.title': 'Política de Privacidad',
    'privacy.updated': 'Última actualización: Abril 2026',
    'privacy.body': `<h2>Política de Privacidad de TeddyFeels</h2>
<p>TeddyFeels está diseñado para niños de 6 a 12 años. Nos tomamos muy en serio la privacidad de tu hijo. Esta política explica cómo TeddyFeels maneja los datos — en resumen, <strong>no recopilamos nada</strong>.</p>

<h2>1. Introducción</h2>
<p>TeddyFeels es una aplicación de bienestar emocional diseñada específicamente para niños de 6 a 12 años. La app ayuda a los niños a identificar, expresar y manejar sus emociones a través de actividades guiadas, un diario privado, seguimiento de metas y un compañero osito de peluche. La privacidad y la seguridad están en el centro de todo lo que construimos.</p>

<h2>2. Información que Recopilamos</h2>
<p><strong>Ninguna.</strong> TeddyFeels no recopila, transmite ni almacena información personal en servidores externos. Todos los datos creados por el usuario se almacenan exclusivamente en el dispositivo.</p>

<h2>3. Datos Almacenados en el Dispositivo</h2>
<p>Los siguientes datos se crean y almacenan localmente en el dispositivo del usuario únicamente:</p>
<ul>
  <li><strong>Entradas del diario</strong> — texto y grabaciones de voz guardadas en el diario privado</li>
  <li><strong>Metas</strong> — metas personales y datos de seguimiento de progreso</li>
  <li><strong>Check-ins emocionales</strong> — emociones seleccionadas y puntuaciones</li>
  <li><strong>Código PIN</strong> — un PIN de 4 dígitos para proteger el diario privado</li>
  <li><strong>Preferencia de personaje</strong> — el personaje de osito seleccionado</li>
</ul>
<p>Estos datos se gestionan mediante SwiftData y UserDefaults y nunca salen del dispositivo.</p>

<h2>4. Datos que NO Recopilamos</h2>
<p>TeddyFeels <strong>no</strong> recopila nada de lo siguiente:</p>
<ul>
  <li>Nombre, correo electrónico ni ningún identificador personal</li>
  <li>Datos de ubicación</li>
  <li>Fotos o acceso a la cámara</li>
  <li>Contactos</li>
  <li>Identificadores de dispositivo o IDs de publicidad</li>
  <li>Datos de navegación o búsqueda</li>
  <li>Datos de análisis o seguimiento de uso</li>
</ul>

<h2>5. Sin Comunicación de Red</h2>
<p>TeddyFeels no realiza <strong>ninguna llamada de red</strong>. La app no se conecta a internet, no se comunica con ningún servidor y no envía ni recibe datos a través de una red.</p>

<h2>6. Servicios de Terceros</h2>
<p>TeddyFeels utiliza las siguientes bibliotecas de código abierto solo para efectos visuales. Ninguna de estas bibliotecas recopila, transmite o procesa datos del usuario:</p>
<ul>
  <li><strong>ConfettiSwiftUI</strong> — animaciones de celebración con confeti</li>
  <li><strong>Lottie</strong> — ilustraciones animadas</li>
  <li><strong>Vortex</strong> — efectos de partículas</li>
  <li><strong>SwiftUI-Shimmer</strong> — efectos de brillo de carga</li>
</ul>
<p>Todas estas bibliotecas operan exclusivamente en el dispositivo sin capacidades de red.</p>

<h2>7. Micrófono</h2>
<p>TeddyFeels ofrece una función opcional de grabación de voz dentro del diario privado. Las grabaciones de voz se procesan localmente en el dispositivo utilizando el Speech Framework de Apple. Los datos de audio <strong>nunca se transmiten</strong> a ningún servidor externo o tercero. El micrófono solo se activa cuando el niño toca explícitamente el botón de grabar.</p>

<h2>8. Seguridad</h2>
<p>El diario privado está protegido por un código PIN de 4 dígitos establecido por el usuario. Este PIN se almacena localmente en el dispositivo y no es recuperable de forma remota. La app no utiliza autenticación biométrica.</p>

<h2>9. Eliminación de Datos</h2>
<p>Desinstalar TeddyFeels del dispositivo elimina permanentemente todos los datos creados por la app, incluyendo entradas del diario, metas, check-ins emocionales, el código PIN y las preferencias de personaje. No existe respaldo en la nube ni copia remota de ningún dato.</p>

<h2>10. Derechos de los Padres</h2>
<p>Los padres y tutores pueden:</p>
<ul>
  <li>Revisar todo el contenido almacenado en la app directamente en el dispositivo</li>
  <li>Eliminar todos los datos permanentemente desinstalando la app</li>
  <li>Acceder al diario ingresando el PIN del niño</li>
</ul>
<p>Dado que no se recopilan ni transmiten datos, no hay datos que solicitarnos.</p>

<h2>11. Cumplimiento</h2>
<p>TeddyFeels está diseñado para cumplir con:</p>
<ul>
  <li><strong>COPPA</strong> (Ley de Protección de la Privacidad Infantil en Línea)</li>
  <li><strong>GDPR</strong> (Reglamento General de Protección de Datos)</li>
  <li><strong>Directrices de la Categoría Infantil de Apple</strong> para la App Store</li>
</ul>

<h2>12. Contáctanos</h2>
<p>Si tienes preguntas sobre esta política de privacidad, contáctanos:</p>
<ul>
  <li><a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a></li>
  <li><a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a></li>
</ul>`,

    // Support Page
    'support.title': 'Soporte',
    'support.subtitle': 'Estamos aquí para ayudarte',
    'contact.title': 'Contáctanos',
    'contact.desc': '¿Tienes una pregunta, comentario o necesitas ayuda? Comunícate con nosotros directamente.',
    'contact.email': 'Enviar Correo',
    'faq.title': 'Preguntas Frecuentes',

    'faq.q1': '¿Qué es TeddyFeels?',
    'faq.a1': 'TeddyFeels es una aplicación de bienestar emocional diseñada para niños de 6 a 12 años. Ayuda a los niños a identificar, expresar y manejar sus emociones a través de actividades guiadas, un diario privado, seguimiento de metas y un compañero osito de peluche. Todos los datos permanecen en el dispositivo — no se recopila ni se envía nada en línea.',
    'faq.q2': '¿Para qué edad es TeddyFeels?',
    'faq.a2': 'TeddyFeels está diseñado para niños de 6 a 12 años. La interfaz, el lenguaje y las actividades están adaptados para ser apropiados para la edad, cálidos y fáciles de entender para niños en este rango de edad.',
    'faq.q3': '¿Los datos de mi hijo están seguros?',
    'faq.a3': 'Absolutamente. TeddyFeels no recopila datos personales y no realiza llamadas de red. Toda la información — entradas del diario, metas, emociones y preferencias — se almacena exclusivamente en el dispositivo. No hay creación de cuentas, ni sincronización en la nube, ni análisis. La app cumple con COPPA, GDPR y las directrices de la Categoría Infantil de Apple.',
    'faq.q4': '¿Cómo funciona el diario privado?',
    'faq.a4': 'El diario privado está protegido por un PIN de 4 dígitos establecido por el niño. Dentro, los niños pueden escribir entradas de texto o grabar notas de voz. El diario usa un espacio de escritura calmante en modo oscuro. Todas las entradas se almacenan localmente en el dispositivo y nunca se transmiten a ningún lugar.',
    'faq.q5': '¿Qué es el Modo SOS de Rescate?',
    'faq.a5': 'El Modo SOS de Rescate es una experiencia calmante a pantalla completa diseñada para momentos de emociones fuertes. Guía al niño a través de un ejercicio de respiración con indicaciones visuales de inhalar y exhalar, seguido de un check-in emocional rápido. El diseño es intencionalmente simple y tranquilizante.',
    'faq.q6': '¿TeddyFeels necesita internet?',
    'faq.a6': 'No. TeddyFeels funciona completamente sin conexión. La app no realiza llamadas de red, no se conecta a ningún servidor y no requiere conexión a internet para funcionar. Todo se ejecuta localmente en el dispositivo.',
    'faq.q7': '¿Qué dispositivos son compatibles?',
    'faq.a7': 'TeddyFeels está disponible en iPhone y iPad con iOS 18 o posterior. La app es compatible con inglés y español, con diseños adaptables optimizados para ambos tipos de dispositivo.',
    'faq.q8': '¿Cómo reinicio o elimino todos los datos?',
    'faq.a8': 'Para eliminar todos los datos, simplemente desinstala TeddyFeels del dispositivo. Dado que todos los datos se almacenan localmente y no hay respaldo en la nube, desinstalar la app elimina permanentemente todo — entradas del diario, metas, check-ins emocionales, el PIN y las preferencias de personaje.',
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
  const savedLang = localStorage.getItem('teddyfeels-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('teddyfeels-lang', lang);

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
    img.src = `Screenshots/TeddyFeels ${device} ${langDir}/${num}.png`;
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
