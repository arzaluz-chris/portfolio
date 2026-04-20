/* ============================================
   Lumina Marketing Website — main.js
   ============================================ */

const translations = {
  es: {
    // Nav
    'nav.home': 'Portafolio',
    'nav.features': 'Características',
    'nav.howItWorks': 'Cómo funciona',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Colegio Walden Dos de México',
    'hero.title.1': 'Descubre tus',
    'hero.title.2': '24 fortalezas',
    'hero.subtitle': 'Lumina es una app de psicología positiva basada en la clasificación VIA Character Strengths. Toma el test, recibe un análisis personalizado con Apple Intelligence on-device y cultiva tu carácter — sin recolección de datos.',
    'hero.cta': 'Próximamente en la App Store',
    'hero.secondary': 'Conoce las funciones',
    'hero.hl.1': 'Apple Intelligence on-device',
    'hero.hl.2': 'Cero datos recolectados',
    'hero.hl.3': 'VIA Character Strengths',

    // Features
    'features.title': 'Todo tu viaje de carácter, en una app',
    'features.subtitle': 'Lumina combina ciencia, diseño y privacidad para acompañarte en el descubrimiento de lo mejor de ti.',
    'feature.test.title': 'Test VIA',
    'feature.test.desc': '96 preguntas respaldadas por la clasificación VIA Character Strengths de Peterson, Seligman y Niemiec. Mide tus 24 fortalezas agrupadas en 6 virtudes.',
    'feature.top.title': 'Tu top 3',
    'feature.top.desc': 'Conoce tus fortalezas más expresadas y una reflexión diaria inspirada en ellas. Explora las 24, ordenadas de la más fuerte a la menos expresada.',
    'feature.analysis.title': 'Análisis personalizado',
    'feature.analysis.desc': 'Apple Intelligence genera un análisis único de tu perfil, directamente en tu iPhone o iPad. Sin servidores, sin que nadie más vea tus resultados.',
    'feature.evolution.title': 'Evolución',
    'feature.evolution.desc': 'Retoma el test cuantas veces quieras. Visualiza cómo cambian tus fortalezas a lo largo del tiempo con gráficas interactivas.',
    'feature.stories.title': 'Historias',
    'feature.stories.desc': 'Registra los momentos en los que ejercitaste una fortaleza — con foto, fecha y recordatorios de aniversario. Tu bitácora de carácter, privada en tu dispositivo.',
    'feature.buddy.title': 'Buddy',
    'feature.buddy.desc': 'Un compañero conversacional que te ayuda a reflexionar sobre tus fortalezas. Todo se procesa con Foundation Models en tu dispositivo — nada sale de ahí.',

    // Virtues
    'virtues.title': 'Las 6 virtudes de VIA',
    'virtues.subtitle': '24 fortalezas de carácter, agrupadas en 6 virtudes universales documentadas por la psicología positiva.',
    'virtue.wisdom': 'Sabiduría',
    'virtue.wisdom.desc': 'Creatividad · Curiosidad · Juicio · Amor por el aprendizaje · Perspectiva',
    'virtue.courage': 'Coraje',
    'virtue.courage.desc': 'Valentía · Perseverancia · Honestidad · Vitalidad',
    'virtue.humanity': 'Humanidad',
    'virtue.humanity.desc': 'Amor · Bondad · Inteligencia social',
    'virtue.justice': 'Justicia',
    'virtue.justice.desc': 'Trabajo en equipo · Imparcialidad · Liderazgo',
    'virtue.temperance': 'Templanza',
    'virtue.temperance.desc': 'Perdón · Humildad · Prudencia · Autorregulación',
    'virtue.transcendence': 'Trascendencia',
    'virtue.transcendence.desc': 'Apreciación de la belleza · Gratitud · Esperanza · Humor · Espiritualidad',

    // How it works
    'howItWorks.title': 'Cómo funciona',
    'howItWorks.subtitle': 'Tres pasos simples para empezar a trabajar con tus fortalezas de carácter.',
    'step.1.title': 'Haz el test',
    'step.1.desc': 'Responde las preguntas a tu ritmo. Puedes pausarlo y retomarlo cuando quieras — y activar la lectura en voz alta si lo prefieres.',
    'step.2.title': 'Recibe tu análisis',
    'step.2.desc': 'Apple Intelligence genera un análisis único de tu top 3 sin enviar nada fuera de tu dispositivo. Lee reflexiones diarias inspiradas en ti.',
    'step.3.title': 'Cultiva tu carácter',
    'step.3.desc': 'Registra historias, conversa con Buddy y retoma el test para ver tu evolución. Tus fortalezas se expresan practicándolas.',

    // Gallery
    'gallery.title': 'Lumina en acción',
    'gallery.subtitle': 'Diseñada para iPhone y iPad, con layouts adaptativos que aprovechan cada pantalla.',
    'gallery.iphone': 'iPhone',
    'gallery.ipad': 'iPad',
    'gallery.label.home': 'Mis 24',
    'gallery.label.analysis': 'Análisis',
    'gallery.label.evolution': 'Evolución',
    'gallery.label.stories': 'Historias',
    'gallery.label.storyDetail': 'Detalle',
    'gallery.label.buddy': 'Buddy',
    'gallery.label.conversations': 'Conversaciones',
    'gallery.label.test': 'Test',
    'gallery.label.settings': 'Ajustes',

    // Privacy banner
    'privacy.banner.title': 'Privacidad por diseño',
    'privacy.banner.desc': 'Lumina no recolecta datos. Ninguno. El test, tus historias, tus conversaciones con Buddy y tus fotos viven dentro del sandbox de la app en tu dispositivo. Todo el procesamiento de IA ocurre localmente con Foundation Models.',
    'privacy.banner.b1': '0 datos recolectados',
    'privacy.banner.b2': '0 rastreadores',
    'privacy.banner.b3': '0 servidores externos',
    'privacy.banner.b4': '100% procesamiento on-device',

    // CTA
    'cta.title.1': 'Ilumina',
    'cta.title.2': 'tus fortalezas',
    'cta.subtitle': 'Lumina llega pronto a la App Store. Diseñada para estudiantes y familias del Colegio Walden Dos de México — y para cualquiera que quiera conocerse mejor.',
    'cta.button': 'Próximamente en la App Store',

    // Footer
    'footer.copy': '2026 Lumina · Colegio Walden Dos de México',

    // Privacy page
    'privacy.title': 'Aviso de privacidad',
    'privacy.updated': 'Vigente desde el 18 de abril de 2026',
    'privacy.body': `
<h2>Responsable del tratamiento</h2>
<p>Colegio Walden Dos de México (Walden Dos), con domicilio en México, es el responsable de la aplicación Lumina. Puedes contactarnos en <a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a>.</p>

<h2>Qué datos recolectamos</h2>
<p><strong>Ninguno.</strong> Lumina no envía a servidores propios ni de terceros tus respuestas al test, tus historias, tus conversaciones con Buddy ni tus fotos. Todo queda dentro del sandbox de la app en tu dispositivo.</p>

<h2>Procesamiento en el dispositivo</h2>
<p>Las respuestas de análisis, las reflexiones diarias y las conversaciones con Buddy se generan con Apple Intelligence y el framework Foundation Models, que se ejecutan completamente en tu iPhone o iPad. Apple no recibe ni almacena estos datos; nosotros tampoco.</p>

<h2>Lectura en voz alta</h2>
<p>La función "Leer en voz alta" reproduce preguntas, historias y respuestas con la voz del sistema (AVSpeechSynthesizer). Todo el proceso ocurre en tu dispositivo: Lumina no enciende el micrófono, no graba audio y no envía texto a ningún servidor. Puedes desactivar la función en Ajustes → Accesibilidad.</p>

<h2>Notificaciones locales</h2>
<p>Si las activas, Lumina programa recordatorios (tips diarios, aniversarios de historias, re-test) usando el sistema de notificaciones locales de iOS. La decisión de entregarlas la toma tu dispositivo; no hay servidores de push involucrados.</p>

<h2>Fotos</h2>
<p>Para adjuntar una foto a una historia usamos el selector de Apple (PhotosPicker), que te permite elegir una imagen sin que Lumina acceda al resto de tu fototeca. La foto seleccionada se guarda dentro del contenedor privado de la aplicación y nunca se envía fuera de tu dispositivo. Al borrar la historia, la foto se elimina del almacenamiento de la app.</p>

<h2>Tus derechos</h2>
<p>Puedes borrar todos tus datos en cualquier momento desde <strong>Ajustes → Datos → Borrar todo</strong>. En términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México), conservas los derechos ARCO (acceso, rectificación, cancelación y oposición). Como no almacenamos tus datos fuera de tu dispositivo, puedes ejercer cancelación y oposición borrando la app o usando la opción anterior.</p>

<h2>Menores de edad</h2>
<p>Lumina es utilizada por estudiantes y familias del Colegio Walden Dos de México. La app no requiere crear cuenta y no recoge información personal identificable. Recomendamos que niñas y niños usen la app con acompañamiento de un adulto responsable.</p>

<h2>Cumplimiento App Store</h2>
<p>Conforme al App Privacy Manifest de Apple, Lumina declara:</p>
<ul>
  <li><strong>Data Not Collected:</strong> Sí. No se recolectan datos personales.</li>
  <li><strong>Data Used to Track You:</strong> No. Lumina no realiza tracking.</li>
  <li><strong>Encryption:</strong> ITSAppUsesNonExemptEncryption = NO.</li>
</ul>

<h2>Cambios a este aviso</h2>
<p>Si modificamos este aviso, actualizaremos la fecha de vigencia al inicio del documento y comunicaremos el cambio en la siguiente actualización de la app.</p>

<h2>Contacto</h2>
<p>Cualquier duda sobre privacidad o tratamiento de datos: <a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a>.</p>

<p><em>Lumina se construye para acompañarte en el descubrimiento de tus fortalezas de carácter, no para recolectar información sobre ti.</em></p>
`,

    // Support page
    'support.title': 'Soporte',
    'support.subtitle': 'Estamos para ayudarte',
    'contact.title': 'Contáctanos',
    'contact.desc': '¿Tienes una duda, comentario o necesitas ayuda con Lumina? Escríbenos directamente.',
    'contact.email': 'Enviar correo',
    'faq.title': 'Preguntas frecuentes',

    'faq.q1': '¿Qué es Lumina?',
    'faq.a1': 'Lumina es una app de fortalezas de carácter para el Colegio Walden Dos de México. Combina el test VIA (24 fortalezas, 6 virtudes), un análisis personalizado con Apple Intelligence, historias (bitácora personal) y Buddy, un compañero conversacional — todo procesado en tu dispositivo.',
    'faq.q2': '¿Qué dispositivos necesito?',
    'faq.a2': 'Lumina requiere iOS 26 o posterior y está optimizada para iPhone y iPad. Las funciones de IA (Buddy, análisis personalizado, reflexiones) requieren un dispositivo con Apple Intelligence (iPhone 15 Pro o posterior). En dispositivos sin Apple Intelligence la app funciona y puedes tomar el test; la pestaña Buddy y las tarjetas de IA simplemente no aparecen.',
    'faq.q3': '¿Mis datos son privados?',
    'faq.a3': 'Sí. Lumina no recolecta ningún dato. El test, tus historias, conversaciones con Buddy y fotos se guardan únicamente dentro del sandbox de la app en tu dispositivo. Nada viaja a servidores propios ni de terceros. Todo el procesamiento de IA ocurre localmente con Foundation Models.',
    'faq.q4': '¿Qué son las 24 fortalezas VIA?',
    'faq.a4': 'La clasificación VIA Character Strengths, desarrollada por Christopher Peterson y Martin Seligman, identifica 24 fortalezas de carácter agrupadas en 6 virtudes universales: Sabiduría, Coraje, Humanidad, Justicia, Templanza y Trascendencia. Son cualidades positivas presentes en prácticamente todas las culturas.',
    'faq.q5': '¿Cuánto dura el test?',
    'faq.a5': 'El test tiene 96 preguntas y toma entre 15 y 20 minutos. Puedes pausarlo y retomarlo cuando quieras — Lumina guarda tu progreso. También puedes activar la lectura automática de preguntas en Ajustes → Accesibilidad.',
    'faq.q6': '¿Puedo volver a hacer el test?',
    'faq.a6': 'Sí, puedes retomarlo cuantas veces quieras. Después del segundo test verás la sección "Evolución" con gráficas que muestran cómo cambian tus fortalezas a lo largo del tiempo.',
    'faq.q7': '¿Cómo funciona Buddy?',
    'faq.a7': 'Buddy es un compañero conversacional que te ayuda a reflexionar sobre tus fortalezas. Usa Foundation Models (Apple Intelligence) para generar respuestas directamente en tu dispositivo. La primera vez que lo uses verás un disclaimer explicando que las respuestas son generadas por IA y no sustituyen la valoración de un profesional.',
    'faq.q8': '¿Cómo borro mis datos?',
    'faq.a8': 'Ve a Ajustes → Datos → Borrar todo dentro de la app. Esta acción elimina inmediatamente todos los resultados, historias, conversaciones y fotos. También puedes desinstalar la app desde iOS para eliminar todo su contenido.',
    'faq.q9': '¿Lumina tiene costo o anuncios?',
    'faq.a9': 'No. Lumina es gratuita, no tiene compras integradas, no muestra anuncios y no incluye rastreadores de terceros.',
    'faq.q10': '¿Qué hago si encuentro un error?',
    'faq.a10': 'Escríbenos al correo de soporte con una breve descripción, el modelo de tu dispositivo y la versión de iOS. Nos ayuda mucho si incluyes capturas de pantalla.'
  },

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
    'hero.badge': 'Colegio Walden Dos de México',
    'hero.title.1': 'Discover your',
    'hero.title.2': '24 strengths',
    'hero.subtitle': 'Lumina is a positive-psychology app based on the VIA Character Strengths classification. Take the test, receive a personalized analysis powered by on-device Apple Intelligence, and cultivate your character — with zero data collection.',
    'hero.cta': 'Coming Soon on the App Store',
    'hero.secondary': 'Explore the features',
    'hero.hl.1': 'On-device Apple Intelligence',
    'hero.hl.2': 'Zero data collected',
    'hero.hl.3': 'VIA Character Strengths',

    // Features
    'features.title': 'Your whole character journey, in one app',
    'features.subtitle': 'Lumina blends science, design and privacy to help you discover the best of who you are.',
    'feature.test.title': 'VIA Test',
    'feature.test.desc': '96 questions grounded in the VIA Character Strengths classification by Peterson, Seligman and Niemiec. Measures your 24 strengths across 6 virtues.',
    'feature.top.title': 'Your top 3',
    'feature.top.desc': 'Discover your most expressed strengths and a daily reflection inspired by them. Explore all 24, ranked from strongest to least expressed.',
    'feature.analysis.title': 'Personalized analysis',
    'feature.analysis.desc': 'Apple Intelligence crafts a unique analysis of your profile — right on your iPhone or iPad. No servers, no one else sees your results.',
    'feature.evolution.title': 'Evolution',
    'feature.evolution.desc': 'Retake the test whenever you want. See how your strengths shift over time with interactive charts.',
    'feature.stories.title': 'Stories',
    'feature.stories.desc': 'Log the moments you lived a strength — with photo, date and anniversary reminders. A private character journal, stored on your device.',
    'feature.buddy.title': 'Buddy',
    'feature.buddy.desc': 'A conversational companion that helps you reflect on your strengths. Everything runs with on-device Foundation Models — nothing ever leaves.',

    // Virtues
    'virtues.title': 'The 6 VIA virtues',
    'virtues.subtitle': '24 character strengths grouped into 6 universal virtues documented by positive psychology.',
    'virtue.wisdom': 'Wisdom',
    'virtue.wisdom.desc': 'Creativity · Curiosity · Judgment · Love of learning · Perspective',
    'virtue.courage': 'Courage',
    'virtue.courage.desc': 'Bravery · Perseverance · Honesty · Zest',
    'virtue.humanity': 'Humanity',
    'virtue.humanity.desc': 'Love · Kindness · Social intelligence',
    'virtue.justice': 'Justice',
    'virtue.justice.desc': 'Teamwork · Fairness · Leadership',
    'virtue.temperance': 'Temperance',
    'virtue.temperance.desc': 'Forgiveness · Humility · Prudence · Self-regulation',
    'virtue.transcendence': 'Transcendence',
    'virtue.transcendence.desc': 'Appreciation of beauty · Gratitude · Hope · Humor · Spirituality',

    // How it works
    'howItWorks.title': 'How it works',
    'howItWorks.subtitle': 'Three simple steps to start working with your character strengths.',
    'step.1.title': 'Take the test',
    'step.1.desc': 'Answer the questions at your own pace. Pause and resume anytime — and turn on read-aloud if you prefer.',
    'step.2.title': 'Get your analysis',
    'step.2.desc': 'Apple Intelligence builds a unique analysis of your top 3, without sending anything off-device. Read daily reflections inspired by you.',
    'step.3.title': 'Cultivate your character',
    'step.3.desc': 'Log stories, chat with Buddy and retake the test to see your evolution. Strengths grow by practicing them.',

    // Gallery
    'gallery.title': 'Lumina in action',
    'gallery.subtitle': 'Built for iPhone and iPad with adaptive layouts that feel right on every screen.',
    'gallery.iphone': 'iPhone',
    'gallery.ipad': 'iPad',
    'gallery.label.home': 'My 24',
    'gallery.label.analysis': 'Analysis',
    'gallery.label.evolution': 'Evolution',
    'gallery.label.stories': 'Stories',
    'gallery.label.storyDetail': 'Detail',
    'gallery.label.buddy': 'Buddy',
    'gallery.label.conversations': 'Conversations',
    'gallery.label.test': 'Test',
    'gallery.label.settings': 'Settings',

    // Privacy banner
    'privacy.banner.title': 'Privacy by design',
    'privacy.banner.desc': 'Lumina collects no data. None. The test, your stories, your Buddy chats and your photos live inside the app sandbox on your device. All AI processing runs locally with Foundation Models.',
    'privacy.banner.b1': '0 data collected',
    'privacy.banner.b2': '0 trackers',
    'privacy.banner.b3': '0 external servers',
    'privacy.banner.b4': '100% on-device processing',

    // CTA
    'cta.title.1': 'Illuminate',
    'cta.title.2': 'your strengths',
    'cta.subtitle': 'Lumina is coming soon to the App Store. Designed for students and families of Colegio Walden Dos de México — and for anyone who wants to know themselves better.',
    'cta.button': 'Coming Soon on the App Store',

    // Footer
    'footer.copy': '2026 Lumina · Colegio Walden Dos de México',

    // Privacy page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Effective April 18, 2026',
    'privacy.body': `
<h2>Data controller</h2>
<p>Colegio Walden Dos de México (Walden Dos), based in Mexico, is the controller of the Lumina application. You can contact us at <a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a>.</p>

<h2>What data we collect</h2>
<p><strong>None.</strong> Lumina does not send your test answers, stories, Buddy conversations, or photos to our servers or any third party. Everything stays inside the app sandbox on your device.</p>

<h2>On-device processing</h2>
<p>Analysis responses, daily reflections, and Buddy conversations are generated with Apple Intelligence and the Foundation Models framework, which run entirely on your iPhone or iPad. Apple does not receive or store this data; neither do we.</p>

<h2>Read-aloud</h2>
<p>The "Read aloud" feature speaks questions, stories and responses using the system voice (AVSpeechSynthesizer). The entire process happens on your device: Lumina does not turn on the microphone, does not record audio and does not send text to any server. You can disable this feature in Settings → Accessibility.</p>

<h2>Local notifications</h2>
<p>If you enable them, Lumina schedules reminders (daily tips, story anniversaries, re-test) using iOS's local notification system. Delivery is decided by your device; no push server is involved.</p>

<h2>Photos</h2>
<p>To attach a photo to a story, we use Apple's PhotosPicker, which lets you choose one image without Lumina accessing the rest of your photo library. The selected photo is stored inside the app's private container and never leaves your device. Deleting the story also deletes the photo from the app's storage.</p>

<h2>Your rights</h2>
<p>You can delete all your data at any time via <strong>Settings → Data → Delete everything</strong>. Under Mexico's Federal Law on Protection of Personal Data Held by Private Parties, you retain ARCO rights (access, rectification, cancellation and opposition). Since we don't store your data off-device, you can exercise cancellation and opposition by deleting the app or using the option above.</p>

<h2>Minors</h2>
<p>Lumina is used by students and families of Colegio Walden Dos de México. The app does not require account creation and does not collect personally identifiable information. We recommend that children use the app with adult supervision.</p>

<h2>App Store compliance</h2>
<p>Consistent with Apple's App Privacy Manifest, Lumina declares:</p>
<ul>
  <li><strong>Data Not Collected:</strong> Yes. No personal data is collected.</li>
  <li><strong>Data Used to Track You:</strong> No. Lumina does not track.</li>
  <li><strong>Encryption:</strong> ITSAppUsesNonExemptEncryption = NO.</li>
</ul>

<h2>Changes to this notice</h2>
<p>If we modify this notice, we will update the effective date at the top of the document and communicate the change in the next app update.</p>

<h2>Contact</h2>
<p>Any question about privacy or data handling: <a href="mailto:eduardogarcia@waldendos.edu.mx">eduardogarcia@waldendos.edu.mx</a>.</p>

<p><em>Lumina is built to accompany you in discovering your character strengths — not to collect information about you.</em></p>
`,

    // Support page
    'support.title': 'Support',
    'support.subtitle': "We're here to help",
    'contact.title': 'Contact us',
    'contact.desc': 'Have a question, feedback or need help with Lumina? Reach out directly.',
    'contact.email': 'Email support',
    'faq.title': 'Frequently Asked Questions',

    'faq.q1': 'What is Lumina?',
    'faq.a1': "Lumina is a character-strengths app for Colegio Walden Dos de México. It combines the VIA test (24 strengths across 6 virtues), a personalized analysis powered by Apple Intelligence, Stories (a personal journal) and Buddy, a conversational companion — all processed on your device.",
    'faq.q2': 'What devices do I need?',
    'faq.a2': 'Lumina requires iOS 26 or later and is optimized for iPhone and iPad. The AI features (Buddy, personalized analysis, reflections) require a device with Apple Intelligence (iPhone 15 Pro or later). On devices without Apple Intelligence the app still works and you can take the test; the Buddy tab and AI cards simply don\'t appear.',
    'faq.q3': 'Is my data private?',
    'faq.a3': "Yes. Lumina collects no data. The test, your stories, Buddy chats and photos are stored only in the app's sandbox on your device. Nothing travels to our servers or any third party. All AI processing happens locally with Foundation Models.",
    'faq.q4': 'What are the 24 VIA strengths?',
    'faq.a4': 'The VIA Character Strengths classification, developed by Christopher Peterson and Martin Seligman, identifies 24 character strengths grouped into 6 universal virtues: Wisdom, Courage, Humanity, Justice, Temperance and Transcendence. These are positive qualities present across virtually every culture.',
    'faq.q5': 'How long does the test take?',
    'faq.a5': 'The test has 96 questions and takes 15 to 20 minutes. You can pause and resume whenever you want — Lumina saves your progress. You can also enable auto read-aloud of questions in Settings → Accessibility.',
    'faq.q6': 'Can I take the test again?',
    'faq.a6': 'Yes, as many times as you want. After the second test you\'ll see the "Evolution" section with charts showing how your strengths change over time.',
    'faq.q7': 'How does Buddy work?',
    'faq.a7': 'Buddy is a conversational companion that helps you reflect on your strengths. It uses Foundation Models (Apple Intelligence) to generate responses directly on your device. The first time you use it you\'ll see a disclaimer explaining that responses are AI-generated and don\'t replace professional guidance.',
    'faq.q8': 'How do I delete my data?',
    'faq.a8': 'Go to Settings → Data → Delete everything inside the app. This immediately removes all results, stories, conversations and photos. You can also uninstall the app from iOS to remove all of its content.',
    'faq.q9': 'Does Lumina cost money or show ads?',
    'faq.a9': 'No. Lumina is free, has no in-app purchases, shows no ads and includes no third-party trackers.',
    'faq.q10': 'What do I do if I find a bug?',
    'faq.a10': 'Email us with a brief description, your device model and iOS version. Screenshots help a lot.'
  }
};

// --- State ---
let currentLang = 'es';

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavScroll();
  initMobileMenu();
  initSmoothScroll();
  initDeviceToggle();
  initFaqAccordion();
  initScrollAnimations();
});

// --- Language ---
function initLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  const savedLang = localStorage.getItem('lumina-lang');

  // Default to Spanish for Lumina (es-MX app)
  currentLang = urlLang || savedLang || 'es';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'es';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lumina-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}

function toggleLanguage(lang) { applyLanguage(lang); }

// --- Nav scroll ---
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// --- Mobile menu ---
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

// --- Smooth scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// --- Device toggle (iPhone / iPad) ---
function initDeviceToggle() {
  const toggleBtns = document.querySelectorAll('.device-btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const device = btn.getAttribute('data-device');

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = item.getAttribute('data-device') === device ? '' : 'none';
      });
    });
  });
}

// --- FAQ accordion ---
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        if (activeItem !== item) activeItem.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

// --- Scroll animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
