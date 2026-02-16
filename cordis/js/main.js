/* ============================================
   CORDIS Marketing Website — main.js
   ============================================ */

// --- Translations ---
const translations = {
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'nav.privacy': 'Privacy',
    'nav.support': 'Support',

    // Hero
    'hero.badge': 'Heart Rate Wellness',
    'hero.title.1': 'Monitor Your',
    'hero.title.2': 'Heart Rate',
    'hero.subtitle': 'Cordis helps you track your heart rate, understand your stress levels, and find calm with guided meditations and breathing exercises.',
    'hero.cta': 'Download on the App Store',

    // Features
    'features.title': 'Everything You Need for Your Well-Being',
    'features.subtitle': 'Simple, powerful tools designed to help you understand and take care of your heart health.',
    'feature.bpm.title': 'BPM Tracking',
    'feature.bpm.desc': 'Log your heart rate manually or sync from Apple Health. Get instant stress level feedback based on your age group.',
    'feature.manual.title': 'Manual Measurement',
    'feature.manual.desc': 'Measure your pulse with a guided 15-second timer. Just find your radial artery and tap along with your heartbeat.',
    'feature.stats.title': 'Statistics & Charts',
    'feature.stats.desc': 'Visualize your heart rate trends over time with interactive charts. Track your average, minimum, and maximum BPM.',
    'feature.assistant.title': 'Health Assistant',
    'feature.assistant.desc': 'Get answers to 50+ questions about heart health, stress, and wellness. Personalized responses based on your data.',
    'feature.breathing.title': 'Breathing Exercises',
    'feature.breathing.desc': 'Practice the 4-7-8 breathing technique with guided visual cues. Calm your mind and lower your heart rate naturally.',
    'feature.meditation.title': 'Guided Meditations',
    'feature.meditation.desc': 'Listen to guided meditation sessions with haptic feedback and audio visualization. Relax anytime, anywhere.',

    // How It Works
    'steps.title': 'How It Works',
    'steps.subtitle': 'Three simple steps to better understand and manage your heart health.',
    'steps.1.name': 'Track',
    'steps.1.desc': 'Record your heart rate manually, with the pulse timer, or sync from Apple Health.',
    'steps.2.name': 'Understand',
    'steps.2.desc': 'See your stress levels, trends, and statistics to understand your body better.',
    'steps.3.name': 'Relax',
    'steps.3.desc': 'Use breathing exercises and guided meditations to calm your mind and lower stress.',

    // Gallery
    'gallery.title': 'See Cordis in Action',
    'gallery.subtitle': 'A beautiful, intuitive interface designed for everyone.',
    'gallery.home': 'Home',
    'gallery.manual': 'Manual Measurement',
    'gallery.stats': 'Statistics',
    'gallery.assistant': 'Health Assistant',
    'gallery.breathing': 'Breathing',
    'gallery.meditation': 'Meditation',

    // CTA
    'cta.title.1': 'Start Taking Care',
    'cta.title.2': 'Today',
    'cta.subtitle': 'Download Cordis and take the first step toward understanding your heart health.',
    'cta.button': 'Download on the App Store',

    // Footer
    'footer.copy': '2026 Cordis. All rights reserved.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: February 2026',
    'privacy.body': `<h2>Cordis Privacy Policy</h2>
<p>Your privacy is important to us. This Privacy Policy explains how Cordis collects, uses, and protects your personal information.</p>

<h2>1. Information We Collect</h2>
<p><strong>No Account Required:</strong> Cordis does not require you to create an account. You do not need to provide an email address, password, or any personal identification to use the app.</p>
<p><strong>Profile Information:</strong> You may optionally provide your name and age group within the app. This information is stored locally on your device and is used solely to personalize your experience.</p>
<p><strong>Health Data:</strong> If you grant permission, Cordis reads heart rate data from Apple Health (HealthKit). This data is used only within the app to display your heart rate history and statistics. Cordis does not write to or modify your HealthKit data beyond saving BPM entries you explicitly choose to save.</p>
<p><strong>App Data:</strong> Your BPM entries, chat history with the Health Assistant, and app settings are stored locally on your device using SwiftData.</p>

<h2>2. How We Use Your Information</h2>
<p>We use your information exclusively to:</p>
<ul>
  <li>Display your heart rate entries and wellness level classifications</li>
  <li>Generate personalized statistics and charts</li>
  <li>Provide context-aware responses in the Health Assistant</li>
  <li>Remember your preferences (name, age group, theme, reminders)</li>
</ul>

<h2>3. Health Information Disclaimer</h2>
<p><strong>Cordis is not a medical device.</strong> The app is designed solely for general wellness and educational purposes. It does not provide medical advice, medical diagnoses, or treatment recommendations of any kind.</p>
<p>The heart rate data, wellness level classifications (such as "relaxed," "normal," "elevated," or "high"), and any information displayed within the app \u2014 including responses from the Health Assistant \u2014 are <strong>not</strong> intended to be used as a substitute for professional medical advice, diagnosis, or treatment. These classifications are general wellness indicators based on publicly available age-group ranges and should not be interpreted as clinical assessments.</p>
<p>The Health Assistant feature provides pre-written educational responses to frequently asked questions about general wellness topics. It does <strong>not</strong> use artificial intelligence, machine learning, or any algorithmic analysis to generate personalized medical recommendations. All responses are static, informational, and general in nature.</p>
<p>Cordis does <strong>not</strong>:</p>
<ul>
  <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
  <li>Provide clinical or medical-grade heart rate monitoring</li>
  <li>Replace the advice of a qualified healthcare professional</li>
  <li>Make any claims about detecting, predicting, or managing medical conditions</li>
  <li>Use algorithms to assess individual health risk or provide personalized medical guidance</li>
</ul>
<p>The breathing exercises and guided meditation content offered in Cordis are intended for general relaxation and wellness purposes only. They are not therapeutic interventions and are not intended to treat anxiety, stress disorders, or any other medical or psychological condition.</p>
<p><strong>Always consult a qualified healthcare provider</strong> with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of information presented in this app. If you are experiencing a medical emergency, call your local emergency number immediately.</p>

<h2>4. Data Storage and Security</h2>
<p>All your personal data is stored locally on your device using Apple's SwiftData framework. Cordis does not transmit your health data, BPM entries, or personal information to any external server.</p>
<p>Guided meditation audio files are delivered via Apple's CloudKit (iCloud) infrastructure. Only the audio content is stored in CloudKit \u2014 no personal data is uploaded.</p>

<h2>5. Third-Party Services</h2>
<p>Cordis does not use any third-party analytics, advertising, or AI processing services. There is no external data processing of your personal information.</p>

<h2>6. Data Sharing</h2>
<p>We do not sell, share, or transmit your personal information to any third party. Your data stays on your device.</p>

<h2>7. Your Rights</h2>
<p>You can:</p>
<ul>
  <li>Delete all your BPM entries and chat history from within the app's Settings</li>
  <li>Revoke HealthKit permissions at any time through iOS Settings</li>
  <li>Delete the app to remove all locally stored data</li>
</ul>

<h2>8. Age Requirement</h2>
<p>Cordis is intended for users aged 13 and older. The app is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you are under 13, please do not use this app. If we become aware that we have inadvertently collected information from a user under 13, we will take steps to delete that information promptly.</p>

<h2>9. Changes to This Policy</h2>
<p>We may update this policy from time to time. We will notify you of significant changes through the app.</p>

<h2>10. Contact Us</h2>
<p>If you have questions about this privacy policy, please contact us at <a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a>.</p>`,

    // Support Page
    'support.title': 'Support',
    'support.subtitle': 'We\'re here to help',
    'contact.title': 'Contact Us',
    'contact.desc': 'Have a question, feedback, or need help? Reach out to us directly.',
    'contact.email': 'Email Support',
    'faq.title': 'Frequently Asked Questions',

    'faq.q1': 'What is Cordis?',
    'faq.a1': 'Cordis is a heart rate wellness app designed for users aged 13 and older. It helps you track your heart rate, understand your wellness levels, practice breathing exercises, and listen to guided meditations \u2014 all in a beautiful, easy-to-use interface.',
    'faq.q2': 'How do I measure my heart rate?',
    'faq.a2': 'You have three options: enter your BPM manually on the Home screen, use the Manual Measurement feature with a guided 15-second pulse timer, or sync your heart rate data from Apple Health if you have an Apple Watch or compatible device.',
    'faq.q3': 'What do the stress levels mean?',
    'faq.a3': 'Cordis classifies your heart rate into wellness levels (relaxed, normal, elevated, high) based on general age-appropriate ranges. These are general wellness indicators to help you be more aware of your body \u2014 they are not medical diagnoses and should not be used as a substitute for professional medical advice.',
    'faq.q4': 'Is my data private?',
    'faq.a4': 'Yes. All your data is stored locally on your device. Cordis does not require an account, does not use third-party analytics or AI services, and never transmits your personal or health data to external servers.',
    'faq.q5': 'Does Cordis sync across devices?',
    'faq.a5': 'Currently, your BPM entries and settings are stored locally on each device. Guided meditation audio is delivered via iCloud (CloudKit), but personal data does not sync between devices.',
    'faq.q6': 'How does the Health Assistant work?',
    'faq.a6': 'The Health Assistant provides answers to over 50 frequently asked questions about heart health, stress, and wellness. It uses your profile data (name, BPM, averages) to personalize responses \u2014 all processing happens locally on your device, with no external AI.',
    'faq.q7': 'How do I delete my data?',
    'faq.a7': 'You can delete your BPM entries individually by swiping in the History screen, or delete all chat history from Settings. To remove all data completely, simply delete the app from your device.',
    'faq.q8': 'What devices and languages are supported?',
    'faq.a8': 'Cordis is available on iPhone and iPad running iOS 18 or later. The app fully supports English and Spanish (Latin American), with all interface text and Health Assistant content available in both languages.',
  },

  es: {
    // Nav
    'nav.features': 'Funciones',
    'nav.howItWorks': 'C\u00f3mo Funciona',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descargar',
    'nav.privacy': 'Privacidad',
    'nav.support': 'Soporte',

    // Hero
    'hero.badge': 'Bienestar del Ritmo Card\u00edaco',
    'hero.title.1': 'Monitorea Tu',
    'hero.title.2': 'Ritmo Card\u00edaco',
    'hero.subtitle': 'Cordis te ayuda a registrar tu frecuencia card\u00edaca, entender tus niveles de estr\u00e9s y encontrar calma con meditaciones guiadas y ejercicios de respiraci\u00f3n.',
    'hero.cta': 'Descargar en la App Store',

    // Features
    'features.title': 'Todo lo Que Necesitas para Tu Bienestar',
    'features.subtitle': 'Herramientas simples y poderosas dise\u00f1adas para ayudarte a entender y cuidar tu salud card\u00edaca.',
    'feature.bpm.title': 'Registro de BPM',
    'feature.bpm.desc': 'Registra tu frecuencia card\u00edaca manualmente o sincroniza desde Apple Health. Obt\u00e9n retroalimentaci\u00f3n instant\u00e1nea de tu nivel de estr\u00e9s seg\u00fan tu grupo de edad.',
    'feature.manual.title': 'Medici\u00f3n Manual',
    'feature.manual.desc': 'Mide tu pulso con un temporizador guiado de 15 segundos. Solo encuentra tu arteria radial y toca al ritmo de tu latido.',
    'feature.stats.title': 'Estad\u00edsticas y Gr\u00e1ficas',
    'feature.stats.desc': 'Visualiza las tendencias de tu frecuencia card\u00edaca con gr\u00e1ficas interactivas. Rastrea tu BPM promedio, m\u00ednimo y m\u00e1ximo.',
    'feature.assistant.title': 'Asistente de Salud',
    'feature.assistant.desc': 'Obt\u00e9n respuestas a m\u00e1s de 50 preguntas sobre salud card\u00edaca, estr\u00e9s y bienestar. Respuestas personalizadas basadas en tus datos.',
    'feature.breathing.title': 'Ejercicios de Respiraci\u00f3n',
    'feature.breathing.desc': 'Practica la t\u00e9cnica de respiraci\u00f3n 4-7-8 con gu\u00edas visuales. Calma tu mente y reduce tu frecuencia card\u00edaca de forma natural.',
    'feature.meditation.title': 'Meditaciones Guiadas',
    'feature.meditation.desc': 'Escucha sesiones de meditaci\u00f3n guiada con retroalimentaci\u00f3n h\u00e1ptica y visualizaci\u00f3n de audio. Rel\u00e1jate en cualquier momento y lugar.',

    // How It Works
    'steps.title': 'C\u00f3mo Funciona',
    'steps.subtitle': 'Tres simples pasos para entender y manejar mejor tu salud card\u00edaca.',
    'steps.1.name': 'Registra',
    'steps.1.desc': 'Registra tu frecuencia card\u00edaca manualmente, con el temporizador de pulso, o sincroniza desde Apple Health.',
    'steps.2.name': 'Entiende',
    'steps.2.desc': 'Ve tus niveles de estr\u00e9s, tendencias y estad\u00edsticas para entender mejor tu cuerpo.',
    'steps.3.name': 'Rel\u00e1jate',
    'steps.3.desc': 'Usa ejercicios de respiraci\u00f3n y meditaciones guiadas para calmar tu mente y reducir el estr\u00e9s.',

    // Gallery
    'gallery.title': 'Mira Cordis en Acci\u00f3n',
    'gallery.subtitle': 'Una interfaz hermosa e intuitiva dise\u00f1ada para todos.',
    'gallery.home': 'Inicio',
    'gallery.manual': 'Medici\u00f3n Manual',
    'gallery.stats': 'Estad\u00edsticas',
    'gallery.assistant': 'Asistente de Salud',
    'gallery.breathing': 'Respiraci\u00f3n',
    'gallery.meditation': 'Meditaci\u00f3n',

    // CTA
    'cta.title.1': 'Empieza a Cuidarte',
    'cta.title.2': 'Hoy',
    'cta.subtitle': 'Descarga Cordis y da el primer paso para entender tu salud card\u00edaca.',
    'cta.button': 'Descargar en la App Store',

    // Footer
    'footer.copy': '2026 Cordis. Todos los derechos reservados.',

    // Privacy Page
    'privacy.title': 'Pol\u00edtica de Privacidad',
    'privacy.updated': '\u00daltima actualizaci\u00f3n: Febrero 2026',
    'privacy.body': `<h2>Pol\u00edtica de Privacidad de Cordis</h2>
<p>Tu privacidad es importante para nosotros. Esta Pol\u00edtica de Privacidad explica c\u00f3mo Cordis recopila, usa y protege tu informaci\u00f3n personal.</p>

<h2>1. Informaci\u00f3n que recopilamos</h2>
<p><strong>Sin cuenta requerida:</strong> Cordis no requiere que crees una cuenta. No necesitas proporcionar correo electr\u00f3nico, contrase\u00f1a ni identificaci\u00f3n personal para usar la app.</p>
<p><strong>Informaci\u00f3n de perfil:</strong> Puedes opcionalmente proporcionar tu nombre y grupo de edad dentro de la app. Esta informaci\u00f3n se almacena localmente en tu dispositivo y se usa \u00fanicamente para personalizar tu experiencia.</p>
<p><strong>Datos de salud:</strong> Si das permiso, Cordis lee datos de frecuencia card\u00edaca de Apple Health (HealthKit). Estos datos se usan solo dentro de la app para mostrar tu historial y estad\u00edsticas de frecuencia card\u00edaca. Cordis no escribe ni modifica tus datos de HealthKit m\u00e1s all\u00e1 de guardar las entradas de BPM que elijas guardar expl\u00edcitamente.</p>
<p><strong>Datos de la app:</strong> Tus entradas de BPM, historial de chat con el Asistente de Salud y configuraciones se almacenan localmente en tu dispositivo usando SwiftData.</p>

<h2>2. C\u00f3mo usamos tu informaci\u00f3n</h2>
<p>Usamos tu informaci\u00f3n exclusivamente para:</p>
<ul>
  <li>Mostrar tus entradas de frecuencia card\u00edaca y clasificaciones de nivel de bienestar</li>
  <li>Generar estad\u00edsticas y gr\u00e1ficas personalizadas</li>
  <li>Proporcionar respuestas contextuales en el Asistente de Salud</li>
  <li>Recordar tus preferencias (nombre, grupo de edad, tema, recordatorios)</li>
</ul>

<h2>3. Aviso sobre informaci\u00f3n de salud</h2>
<p><strong>Cordis no es un dispositivo m\u00e9dico.</strong> La app est\u00e1 dise\u00f1ada \u00fanicamente con fines de bienestar general y educativos. No proporciona consejos m\u00e9dicos, diagn\u00f3sticos m\u00e9dicos ni recomendaciones de tratamiento de ning\u00fan tipo.</p>
<p>Los datos de frecuencia card\u00edaca, las clasificaciones de nivel de bienestar (como \u201crelajado\u201d, \u201cnormal\u201d, \u201celevado\u201d o \u201calto\u201d) y cualquier informaci\u00f3n mostrada en la app \u2014 incluyendo las respuestas del Asistente de Salud \u2014 <strong>no</strong> est\u00e1n destinados a sustituir el consejo m\u00e9dico profesional, el diagn\u00f3stico o el tratamiento. Estas clasificaciones son indicadores generales de bienestar basados en rangos de edad p\u00fablicamente disponibles y no deben interpretarse como evaluaciones cl\u00ednicas.</p>
<p>La funci\u00f3n de Asistente de Salud proporciona respuestas educativas preescritas a preguntas frecuentes sobre temas de bienestar general. <strong>No</strong> utiliza inteligencia artificial, aprendizaje autom\u00e1tico ni ning\u00fan an\u00e1lisis algor\u00edtmico para generar recomendaciones m\u00e9dicas personalizadas. Todas las respuestas son est\u00e1ticas, informativas y de car\u00e1cter general.</p>
<p>Cordis <strong>no</strong>:</p>
<ul>
  <li>Diagnostica, trata, cura ni previene ninguna enfermedad o condici\u00f3n m\u00e9dica</li>
  <li>Proporciona monitoreo de frecuencia card\u00edaca de grado cl\u00ednico o m\u00e9dico</li>
  <li>Reemplaza el consejo de un profesional de salud calificado</li>
  <li>Hace afirmaciones sobre detectar, predecir o manejar condiciones m\u00e9dicas</li>
  <li>Usa algoritmos para evaluar riesgo de salud individual o proporcionar orientaci\u00f3n m\u00e9dica personalizada</li>
</ul>
<p>Los ejercicios de respiraci\u00f3n y el contenido de meditaci\u00f3n guiada ofrecidos en Cordis est\u00e1n destinados \u00fanicamente a fines de relajaci\u00f3n y bienestar general. No son intervenciones terap\u00e9uticas y no est\u00e1n destinados a tratar ansiedad, trastornos de estr\u00e9s ni ninguna otra condici\u00f3n m\u00e9dica o psicol\u00f3gica.</p>
<p><strong>Siempre consulta a un profesional de salud calificado</strong> si tienes preguntas sobre una condici\u00f3n m\u00e9dica. Nunca ignores el consejo m\u00e9dico profesional ni demores en buscarlo por informaci\u00f3n presentada en esta app. Si est\u00e1s experimentando una emergencia m\u00e9dica, llama a tu n\u00famero de emergencias local inmediatamente.</p>

<h2>4. Almacenamiento y seguridad de datos</h2>
<p>Todos tus datos personales se almacenan localmente en tu dispositivo usando el framework SwiftData de Apple. Cordis no transmite tus datos de salud, entradas de BPM ni informaci\u00f3n personal a ning\u00fan servidor externo.</p>
<p>Los archivos de audio de meditaci\u00f3n guiada se entregan a trav\u00e9s de la infraestructura CloudKit (iCloud) de Apple. Solo el contenido de audio se almacena en CloudKit \u2014 no se sube informaci\u00f3n personal.</p>

<h2>5. Servicios de terceros</h2>
<p>Cordis no usa servicios de an\u00e1lisis, publicidad ni procesamiento de IA de terceros. No hay procesamiento externo de tu informaci\u00f3n personal.</p>

<h2>6. Compartici\u00f3n de datos</h2>
<p>No vendemos, compartimos ni transmitimos tu informaci\u00f3n personal a terceros. Tus datos permanecen en tu dispositivo.</p>

<h2>7. Tus derechos</h2>
<p>Puedes:</p>
<ul>
  <li>Eliminar todas tus entradas de BPM e historial de chat desde la Configuraci\u00f3n de la app</li>
  <li>Revocar los permisos de HealthKit en cualquier momento desde la Configuraci\u00f3n de iOS</li>
  <li>Eliminar la app para borrar todos los datos almacenados localmente</li>
</ul>

<h2>8. Requisito de edad</h2>
<p>Cordis est\u00e1 destinado a usuarios de 13 a\u00f1os en adelante. La app no est\u00e1 dirigida a menores de 13 a\u00f1os y no recopilamos intencionalmente informaci\u00f3n personal de menores de 13 a\u00f1os. Si eres menor de 13 a\u00f1os, por favor no uses esta app. Si nos enteramos de que hemos recopilado informaci\u00f3n inadvertidamente de un usuario menor de 13 a\u00f1os, tomaremos medidas para eliminar esa informaci\u00f3n de inmediato.</p>

<h2>9. Cambios a esta pol\u00edtica</h2>
<p>Podemos actualizar esta pol\u00edtica de vez en cuando. Te notificaremos de cambios significativos a trav\u00e9s de la app.</p>

<h2>10. Cont\u00e1ctanos</h2>
<p>Si tienes preguntas sobre esta pol\u00edtica de privacidad, cont\u00e1ctanos en <a href="mailto:christian.arzaluz@gmail.com">christian.arzaluz@gmail.com</a>.</p>`,

    // Support Page
    'support.title': 'Soporte',
    'support.subtitle': 'Estamos aqu\u00ed para ayudarte',
    'contact.title': 'Cont\u00e1ctanos',
    'contact.desc': '\u00bfTienes una pregunta, comentario o necesitas ayuda? Comun\u00edcate con nosotros directamente.',
    'contact.email': 'Enviar Correo',
    'faq.title': 'Preguntas Frecuentes',

    'faq.q1': '\u00bfQu\u00e9 es Cordis?',
    'faq.a1': 'Cordis es una app de bienestar card\u00edaco dise\u00f1ada para usuarios de 13 a\u00f1os en adelante. Te ayuda a registrar tu frecuencia card\u00edaca, entender tus niveles de bienestar, practicar ejercicios de respiraci\u00f3n y escuchar meditaciones guiadas \u2014 todo en una interfaz hermosa y f\u00e1cil de usar.',
    'faq.q2': '\u00bfC\u00f3mo mido mi frecuencia card\u00edaca?',
    'faq.a2': 'Tienes tres opciones: ingresar tu BPM manualmente en la pantalla de Inicio, usar la funci\u00f3n de Medici\u00f3n Manual con un temporizador de pulso guiado de 15 segundos, o sincronizar tus datos de frecuencia card\u00edaca desde Apple Health si tienes un Apple Watch o dispositivo compatible.',
    'faq.q3': '\u00bfQu\u00e9 significan los niveles de estr\u00e9s?',
    'faq.a3': 'Cordis clasifica tu frecuencia card\u00edaca en niveles de bienestar (relajado, normal, elevado, alto) basados en rangos generales apropiados para tu edad. Son indicadores generales de bienestar para ayudarte a ser m\u00e1s consciente de tu cuerpo \u2014 no son diagn\u00f3sticos m\u00e9dicos y no deben usarse como sustituto del consejo m\u00e9dico profesional.',
    'faq.q4': '\u00bfMis datos son privados?',
    'faq.a4': 'S\u00ed. Todos tus datos se almacenan localmente en tu dispositivo. Cordis no requiere cuenta, no usa an\u00e1lisis ni servicios de IA de terceros, y nunca transmite tus datos personales o de salud a servidores externos.',
    'faq.q5': '\u00bfCordis se sincroniza entre dispositivos?',
    'faq.a5': 'Actualmente, tus entradas de BPM y configuraciones se almacenan localmente en cada dispositivo. El audio de meditaci\u00f3n guiada se entrega a trav\u00e9s de iCloud (CloudKit), pero los datos personales no se sincronizan entre dispositivos.',
    'faq.q6': '\u00bfC\u00f3mo funciona el Asistente de Salud?',
    'faq.a6': 'El Asistente de Salud proporciona respuestas a m\u00e1s de 50 preguntas frecuentes sobre salud card\u00edaca, estr\u00e9s y bienestar. Usa tus datos de perfil (nombre, BPM, promedios) para personalizar las respuestas \u2014 todo el procesamiento ocurre localmente en tu dispositivo, sin IA externa.',
    'faq.q7': '\u00bfC\u00f3mo elimino mis datos?',
    'faq.a7': 'Puedes eliminar tus entradas de BPM individualmente deslizando en la pantalla de Historial, o eliminar todo el historial de chat desde Configuraci\u00f3n. Para borrar todos los datos completamente, simplemente elimina la app de tu dispositivo.',
    'faq.q8': '\u00bfQu\u00e9 dispositivos e idiomas son compatibles?',
    'faq.a8': 'Cordis est\u00e1 disponible en iPhone y iPad con iOS 18 o posterior. La app es totalmente compatible con ingl\u00e9s y espa\u00f1ol (latinoamericano), con todo el texto de la interfaz y contenido del Asistente de Salud disponible en ambos idiomas.',
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
  const savedLang = localStorage.getItem('cordis-lang');

  currentLang = urlLang || savedLang || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('cordis-lang', lang);

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
    img.src = `Screenshots/Cordis ${langDir}/${num}.png`;
    const altKey = img.getAttribute('data-screenshot-alt');
    if (altKey && translations[lang][altKey]) {
      img.alt = translations[lang][altKey];
    }
  });

  // Update iPad screenshot paths
  document.querySelectorAll('[data-ipad-screenshot-num]').forEach(img => {
    const num = img.getAttribute('data-ipad-screenshot-num');
    img.src = `Screenshots/iPad ${langDir}/${num}.png`;
    const altKey = img.getAttribute('data-screenshot-alt');
    if (altKey && translations[lang][altKey]) {
      img.alt = translations[lang][altKey];
    }
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

// --- Device Toggle (iPhone / iPad) ---
function toggleDevice(device) {
  const iphoneGallery = document.getElementById('gallery-iphone');
  const ipadGallery = document.getElementById('gallery-ipad');
  if (!iphoneGallery || !ipadGallery) return;

  if (device === 'ipad') {
    iphoneGallery.classList.add('gallery-hidden');
    ipadGallery.classList.remove('gallery-hidden');
  } else {
    ipadGallery.classList.add('gallery-hidden');
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
