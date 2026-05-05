/**
 * macOS Portfolio - Main JavaScript
 * Christian Arzaluz - iOS Developer
 * Interactive macOS-style portfolio simulator
 */

// --- System Config & State ---

// Internationalization (i18n) - Language Support
const translations = {
    es: {
        // Menu Bar
        menuFile: 'Archivo',
        menuEdit: 'Editar',
        menuView: 'Ver',
        menuWindow: 'Ventana',

        // Context Menu
        aboutMe: 'Sobre Mí',
        openTerminal: 'Abrir Terminal',

        // Dock Apps
        finder: 'Finder',
        aboutMeApp: 'Sobre Mí',
        safari: 'Safari',
        terminal: 'Terminal',
        textEdit: 'TextEdit',
        sketch: 'Sketch',
        calculator: 'Calculator',
        appsPage: 'Apps',
        settings: 'Settings',
        mail: 'Mail',
        bin: 'Bin',

        // Portfolio
        portfolioTitle: 'iOS Developer | Computer Science Student | General Physician',
        portfolioIntro: '¡Hola! Soy un desarrollador iOS apasionado por crear aplicaciones móviles que mejoran la vida de las personas. Actualmente estudio Ingeniería en Sistemas Computacionales en México y me especializo en desarrollo móvil con Swift y SwiftUI.',
        portfolioIntro2: 'Como médico general, combino mi experiencia clínica con el desarrollo de software para crear aplicaciones que resuelven problemas reales en salud y bienestar. Me encanta construir apps minimalistas, funcionales y con excelente experiencia de usuario.',
        languagesFrameworks: 'Lenguajes & Frameworks',
        architecturePatterns: 'Arquitectura & Patrones',

        // Finder
        favorites: 'Favoritos',
        desktop: 'Desktop',
        documents: 'Documents',
        downloads: 'Downloads',
        newFolder: 'Nueva Carpeta',
        newFile: 'Nuevo Archivo',
        open: 'Abrir',
        rename: 'Renombrar',
        duplicate: 'Duplicar',
        moveToTrash: 'Mover a Papelera',

        // Calculator
        calcUndefined: 'Sin definir',

        // Terminal
        terminalLastLogin: 'Last login',
        terminalVersion: 'macOS Portfolio Edition [Version 1.0]',
        availableCommands: 'Comandos disponibles: help, clear, ls, whoami, date, echo, linkedin, mail',
        commandNotFound: 'zsh: command not found',
        openingLinkedIn: 'Abriendo LinkedIn...',

        // TextEdit
        save: 'Guardar',
        new: 'Nuevo',
        createNewDoc: '¿Crear nuevo documento? Los cambios no guardados se perderán.',
        startTyping: 'Comienza a escribir...',

        // Paint
        brush: 'Pincel',
        eraser: 'Borrador',
        rectangle: 'Rectángulo',
        circle: 'Círculo',
        line: 'Línea',
        clean: 'Limpiar',

        // Settings
        wallpapers: 'Fondos de Pantalla',
        appearance: 'Apariencia',
        light: 'Claro',
        dark: 'Oscuro',
        auto: 'Auto',
        systemInfo: 'Información del Sistema',
        macOSVersion: 'Versión macOS',
        browser: 'Navegador',
        resolution: 'Resolución',
        memory: 'Memoria',
        unknown: 'Desconocida',
        language: 'Idioma',

        // Trash
        trashEmpty: 'La Papelera está Vacía',
        trashEmptyDesc: 'Los archivos eliminados aparecerán aquí',
        itemsInTrash: 'elemento(s) en la Papelera',
        emptyTrash: 'Vaciar Papelera',
        restore: 'Restaurar',
        deletePermanently: 'Eliminar Permanentemente',
        confirmEmptyTrash: '¿Vaciar la Papelera? Esto eliminará permanentemente todos los elementos.',
        confirmDelete: '¿Eliminar permanentemente "{item}"? Esta acción no se puede deshacer.',
        inTrash: '"{item}" está en la Papelera. Restáuralo para abrirlo.',

        // Mail
        contact: 'Contacto',
        sendEmail: 'Enviar Correo',

        // Projects
        mainFeatures: 'Características Principales',
        techStack: 'Stack Tecnológico',
        viewOnGitHub: 'Ver en GitHub',
        viewOnAppStore: 'Ver en App Store',
        visitWebsite: 'Visitar sitio web',

        // Alerts
        folderExists: 'Ya existe una carpeta con este nombre.',
        fileExists: 'Ya existe un archivo con este nombre.',
        folderName: 'Nombre de la carpeta:',
        fileName: 'Nombre del archivo (con extensión):',
        newName: 'Nuevo nombre:',

        // TextEdit / Paint / Misc UI
        textEditDefaultFileName: 'documento.txt',
        paintSizeLabel: 'Tamaño',
        duplicateSuffix: 'copia',
        iosDeveloperTitle: 'Desarrollador iOS',

        // Clock locale (for toLocaleDateString / toLocaleTimeString)
        clockLocale: 'es-MX'
    },
    en: {
        // Menu Bar
        menuFile: 'File',
        menuEdit: 'Edit',
        menuView: 'View',
        menuWindow: 'Window',

        // Context Menu
        aboutMe: 'About Me',
        openTerminal: 'Open Terminal',

        // Dock Apps
        finder: 'Finder',
        aboutMeApp: 'About Me',
        safari: 'Safari',
        terminal: 'Terminal',
        textEdit: 'TextEdit',
        sketch: 'Sketch',
        calculator: 'Calculator',
        appsPage: 'Apps',
        settings: 'Settings',
        mail: 'Mail',
        bin: 'Bin',

        // Portfolio
        portfolioTitle: 'iOS Developer | Computer Science Student | General Physician',
        portfolioIntro: 'Hello! I\'m an iOS developer passionate about creating mobile applications that improve people\'s lives. I\'m currently studying Computer Systems Engineering in Mexico and specialize in mobile development with Swift and SwiftUI.',
        portfolioIntro2: 'As a general physician, I combine my clinical experience with software development to create applications that solve real problems in health and wellness. I love building minimalist, functional apps with excellent user experience.',
        languagesFrameworks: 'Languages & Frameworks',
        architecturePatterns: 'Architecture & Patterns',

        // Finder
        favorites: 'Favorites',
        desktop: 'Desktop',
        documents: 'Documents',
        downloads: 'Downloads',
        newFolder: 'New Folder',
        newFile: 'New File',
        open: 'Open',
        rename: 'Rename',
        duplicate: 'Duplicate',
        moveToTrash: 'Move to Trash',

        // Calculator
        calcUndefined: 'Undefined',

        // Terminal
        terminalLastLogin: 'Last login',
        terminalVersion: 'macOS Portfolio Edition [Version 1.0]',
        availableCommands: 'Available commands: help, clear, ls, whoami, date, echo, linkedin, mail',
        commandNotFound: 'zsh: command not found',
        openingLinkedIn: 'Opening LinkedIn...',

        // TextEdit
        save: 'Save',
        new: 'New',
        createNewDoc: 'Create new document? Unsaved changes will be lost.',
        startTyping: 'Start typing...',

        // Paint
        brush: 'Brush',
        eraser: 'Eraser',
        rectangle: 'Rectangle',
        circle: 'Circle',
        line: 'Line',
        clean: 'Clean',

        // Settings
        wallpapers: 'Wallpapers',
        appearance: 'Appearance',
        light: 'Light',
        dark: 'Dark',
        auto: 'Auto',
        systemInfo: 'System Information',
        macOSVersion: 'macOS Version',
        browser: 'Browser',
        resolution: 'Resolution',
        memory: 'Memory',
        unknown: 'Unknown',
        language: 'Language',

        // Trash
        trashEmpty: 'Trash is Empty',
        trashEmptyDesc: 'Deleted files will appear here',
        itemsInTrash: 'item(s) in Trash',
        emptyTrash: 'Empty Trash',
        restore: 'Restore',
        deletePermanently: 'Delete Permanently',
        confirmEmptyTrash: 'Empty Trash? This will permanently delete all items.',
        confirmDelete: 'Permanently delete "{item}"? This action cannot be undone.',
        inTrash: '"{item}" is in Trash. Restore it to open.',

        // Mail
        contact: 'Contact',
        sendEmail: 'Send Email',

        // Projects
        mainFeatures: 'Main Features',
        techStack: 'Tech Stack',
        viewOnGitHub: 'View on GitHub',
        viewOnAppStore: 'View on App Store',
        visitWebsite: 'Visit website',

        // Alerts
        folderExists: 'A folder with this name already exists.',
        fileExists: 'A file with this name already exists.',
        folderName: 'Folder name:',
        fileName: 'File name (with extension):',
        newName: 'New name:',

        // TextEdit / Paint / Misc UI
        textEditDefaultFileName: 'document.txt',
        paintSizeLabel: 'Size',
        duplicateSuffix: 'copy',
        iosDeveloperTitle: 'iOS Developer',

        // Clock locale (for toLocaleDateString / toLocaleTimeString)
        clockLocale: 'en-US'
    }
};

// Current language (default: Spanish, will be auto-detected)
let currentLang = 'es';

// Helper function to get translation
function t(key) {
    return translations[currentLang][key] || translations['es'][key] || key;
}

// Asset format support & fallbacks
const supportsWebp = (() => {
    try {
        const canvas = document.createElement('canvas');
        if (!canvas.getContext) return false;
        return canvas.toDataURL('image/webp').startsWith('data:image/webp');
    } catch (error) {
        return false;
    }
})();

function resolveWebpFallback(path, fallbackExt) {
    if (!path || supportsWebp) return path;
    const webpPattern = /\.webp$/i;
    return webpPattern.test(path) ? path.replace(webpPattern, fallbackExt) : path;
}

function resolveDockIcon(path) {
    return resolveWebpFallback(path, '.png');
}

function resolveWallpaperAsset(path) {
    return resolveWebpFallback(path, '.jpg');
}

// Function to update all UI text when language changes
function updateLanguage(lang) {
    currentLang = lang;

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update all elements with data-i18n attribute
    $('[data-i18n]').each(function() {
        const key = $(this).attr('data-i18n');
        $(this).text(t(key));
    });

    // Refresh dock tooltips/alt text and menu-bar active app label.
    if (typeof wm !== 'undefined' && wm) {
        wm.refreshDockLabels();

        // Find the active window BEFORE mutating names, so we can
        // re-localize the menubar after the update.
        const activeWinId = Object.keys(wm.windows).find(
            wid => wm.windows[wid].name === wm.activeApp
        );

        // Re-render all open windows (content + window title)
        Object.keys(wm.windows).forEach(winId => {
            const config = wm.windows[winId];

            // For non-project apps, recompute the localized name.
            if (!config.isProject) {
                const appConfig = apps.find(a => a.id === config.id);
                if (appConfig) config.name = appDisplayName(appConfig);
            }

            $(`#win-${winId} .window-title`).text(config.name);

            const container = $(`#content-${winId}`);
            if (container.length) {
                wm.loadAppContent(winId, config);
            }
        });

        // Update the menu bar's active-app label with the new name.
        const activeConfig = activeWinId ? wm.windows[activeWinId] : null;
        wm.updateMenubar(activeConfig ? activeConfig.name : t('finder'));
    }

    // Update clock so it uses the new locale right away.
    if (typeof updateClock === 'function') updateClock();

    // Update HTML lang attribute
    $('html').attr('lang', lang === 'es' ? 'es' : 'en');
}

// Auto-detect browser language on first visit
function detectLanguage() {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        return savedLang;
    }

    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;

    // If browser is in English, set to English; otherwise default to Spanish
    if (browserLang.startsWith('en')) {
        return 'en';
    }

    return 'es';
}

// DATOS DE TUS PROYECTOS (Extraídos del video y tus links)
// description / features son objetos { es, en } y se resuelven en render según currentLang.
const projects = {
    'pomo': {
        name: 'Pomo',
        icon: 'f2f2',
        description: {
            es: 'Una aplicación minimalista de temporizador Pomodoro diseñada para aumentar tu productividad a través de sesiones estructuradas de trabajo y descanso. Pomo te ayuda a mantener el enfoque y gestionar tu tiempo de manera efectiva con una interfaz elegante y funcional.',
            en: 'A minimalist Pomodoro timer app designed to boost your productivity through structured work and break sessions. Pomo helps you stay focused and manage your time effectively with an elegant, functional interface.'
        },
        features: {
            es: [
                'Temporizadores personalizables (10-60 min para trabajo, 3-15 min para descansos)',
                'Flujo automático entre sesiones de trabajo y descanso',
                'Soporte para temporizador en segundo plano',
                'Notificaciones push y alertas de sonido',
                'Seguimiento de productividad diario y semanal con gráficas',
                'Contador de rachas para mantener la motivación',
                'Modo claro y oscuro automático',
                'Soporte para español e inglés'
            ],
            en: [
                'Customizable timers (10-60 min for work, 3-15 min for breaks)',
                'Automatic flow between work and break sessions',
                'Background timer support',
                'Push notifications and sound alerts',
                'Daily and weekly productivity tracking with charts',
                'Streak counter to keep you motivated',
                'Automatic light and dark mode',
                'Spanish and English support'
            ]
        },
        stack: ['Swift 5.0', 'SwiftUI', 'MVVM', 'SwiftData', 'Combine', 'UserNotifications', 'AVFoundation', 'Charts'],
        url: 'https://github.com/arzaluz-chris/Pomo',
        appStoreUrl: 'https://apps.apple.com/us/app/pomo-simple-timer/id6746705227'
    },
    'waldenvibes': {
        name: 'WaldenVibes',
        icon: 'f06c',
        description: {
            es: 'Una aplicación minimalista desarrollada con SwiftUI que combina meditación y seguimiento emocional. WaldenVibes te ayuda a mantener un equilibrio mental y emocional a través de prácticas de mindfulness y registro de estados de ánimo.',
            en: 'A minimalist SwiftUI app that combines meditation and mood tracking. WaldenVibes helps you maintain mental and emotional balance through mindfulness practices and mood logging.'
        },
        features: {
            es: [
                'Interfaz minimalista y zen con SwiftUI',
                'Seguimiento de emociones y estados de ánimo',
                'Ejercicios de meditación guiada',
                'Registro diario de bienestar personal',
                'Diseño enfocado en el bienestar mental',
                'Experiencia de usuario serena y relajante'
            ],
            en: [
                'Minimalist, zen SwiftUI interface',
                'Emotion and mood tracking',
                'Guided meditation exercises',
                'Daily personal well-being log',
                'Design focused on mental well-being',
                'Calm, relaxing user experience'
            ]
        },
        stack: ['Swift', 'SwiftUI', 'iOS', 'Xcode'],
        url: 'https://github.com/arzaluz-chris/WaldenVibes',
        appStoreUrl: 'https://apps.apple.com/us/app/waldenvibes-emotion-tracker/id6748090601'
    },
    'vorth': {
        name: 'VORTH',
        icon: 'f14e',
        description: {
            es: 'VORTH usa coaching con IA, el modelo de bienestar PERMA y un diario inteligente para ayudarte a descubrir lo que realmente importa y construir una vida con propósito.',
            en: 'VORTH uses AI coaching, the PERMA well-being model, and an intelligent journal to help you discover what truly matters and build a life of purpose.'
        },
        features: {
            es: [
                'Coach de voz en vivo con Gemini AI',
                'Diario PERMA para seguimiento de bienestar',
                'Metas inteligentes sugeridas por IA',
                'Asistente IA consciente de tu propósito',
                'Alquimia emocional con ejercicios guiados',
                'Sincronización entre iPhone y iPad via iCloud'
            ],
            en: [
                'Live voice coach powered by Gemini AI',
                'PERMA journal for well-being tracking',
                'AI-suggested smart goals',
                'AI assistant aware of your purpose',
                'Emotional alchemy with guided exercises',
                'iPhone and iPad sync via iCloud'
            ]
        },
        stack: ['Swift', 'SwiftUI', 'MVVM', 'Gemini AI', 'SwiftData', 'AVFoundation', 'Speech'],
        url: 'https://github.com/arzaluz-chris/Journify',
        appStoreUrl: 'https://apps.apple.com/mx/app/vorth/id6759020391'
    },
    'teddyfeels': {
        name: 'TeddyFeels',
        icon: 'f1b0',
        description: {
            es: 'Una app de bienestar emocional para niños de 6 a 12 años. TeddyFeels ayuda a los niños a identificar, expresar y gestionar sus emociones a través de un compañero osito de peluche, un diario privado protegido con PIN y actividades guiadas.',
            en: 'An emotional well-being app for kids aged 6 to 12. TeddyFeels helps children identify, express, and manage their emotions through a teddy bear companion, a PIN-protected private journal, and guided activities.'
        },
        features: {
            es: [
                'Check-in emocional con 9 emociones y oso animado',
                'Diario privado protegido con PIN de 4 dígitos',
                'Grabación de voz con transcripción local',
                'Metas personales con celebraciones de confeti',
                'Modo SOS de rescate con ejercicios de respiración',
                'Dashboard de progreso con gráficas semanales',
                'Todos los datos 100% locales — sin internet ni recopilación de datos'
            ],
            en: [
                'Emotional check-in with 9 emotions and an animated bear',
                'Private journal protected with a 4-digit PIN',
                'Voice recording with on-device transcription',
                'Personal goals with confetti celebrations',
                'SOS rescue mode with breathing exercises',
                'Progress dashboard with weekly charts',
                'All data 100% local — no internet, no data collection'
            ]
        },
        stack: ['Swift', 'SwiftUI', 'MVVM', 'SwiftData', 'Speech', 'AVFoundation', 'Vortex', 'Lottie'],
        url: 'https://github.com/arzaluz-chris/TeddyFeels',
        appStoreUrl: 'https://apps.apple.com/us/app/teddyfeels/id6761302473'
    },
    'alba': {
        name: 'Alba',
        icon: 'f4be',
        description: {
            es: 'Alba es tu guía para mejorar tus amistades. Basada en psicología positiva, Alba te ayuda a evaluar, entender y fortalecer tus relaciones a través de consejos personalizados con IA, un test científico y un diario privado.',
            en: 'Alba is your guide to better friendships. Grounded in positive psychology, Alba helps you assess, understand, and strengthen your relationships through AI-personalized advice, a scientific test, and a private journal.'
        },
        features: {
            es: [
                'Chat con IA basado en psicología positiva (Gemini)',
                'Test de amistad con evaluación de confianza, apoyo, límites y asertividad',
                'Diario de amistades protegido con PIN y Face ID',
                'Artículos de psicología positiva (Alba Blocks)',
                'Integración con Apple Music',
                'Personalización del estilo de comunicación de la IA',
                'Soporte para español e inglés'
            ],
            en: [
                'AI chat grounded in positive psychology (Gemini)',
                'Friendship test measuring trust, support, boundaries, and assertiveness',
                'Friendship journal protected with PIN and Face ID',
                'Positive psychology articles (Alba Blocks)',
                'Apple Music integration',
                'Customizable AI communication style',
                'Spanish and English support'
            ]
        },
        stack: ['Swift', 'SwiftUI', 'MVVM', 'Gemini AI', 'MusicKit', 'CryptoKit', 'LocalAuthentication', 'Combine'],
        url: 'https://github.com/arzaluz-chris/Alba',
        appStoreUrl: 'https://apps.apple.com/us/app/alba-ai-relationship-advisor/id6761395418',
        websiteUrl: '/alba/'
    },
    'lumina': {
        name: 'Lumina',
        icon: '185',
        description: {
            es: 'Lumina es la app de fortalezas de carácter del Colegio Walden Dos de México. Basada en la clasificación VIA Character Strengths, combina un test de 96 preguntas, análisis personalizado con Apple Intelligence on-device, historias de carácter y Buddy, un compañero conversacional. Cero datos recolectados, todo procesado en tu dispositivo.',
            en: 'Lumina is the character-strengths app for Colegio Walden Dos in Mexico. Based on the VIA Character Strengths classification, it combines a 96-question test, personalized analysis with on-device Apple Intelligence, character stories, and Buddy, a conversational companion. Zero data collected — everything runs on your device.'
        },
        features: {
            es: [
                'Test VIA con 24 fortalezas agrupadas en 6 virtudes',
                'Análisis personalizado con Apple Intelligence (Foundation Models on-device)',
                'Buddy: compañero conversacional con IA, 100% en el dispositivo',
                'Historias: bitácora de carácter con fotos y recordatorios de aniversario',
                'Evolución: gráficas interactivas del cambio de fortalezas en el tiempo',
                'Accesibilidad: lectura en voz alta con AVSpeechSynthesizer',
                'Notificaciones locales (tips diarios, aniversarios, re-test)',
                'Quick Actions + Review prompt inteligente',
                'Privacy manifest: 0 tracking, 0 datos recolectados'
            ],
            en: [
                'VIA test with 24 strengths grouped into 6 virtues',
                'Personalized analysis with Apple Intelligence (on-device Foundation Models)',
                'Buddy: conversational AI companion, 100% on-device',
                'Stories: character log with photos and anniversary reminders',
                'Evolution: interactive charts of how strengths change over time',
                'Accessibility: read-aloud with AVSpeechSynthesizer',
                'Local notifications (daily tips, anniversaries, re-test)',
                'Quick Actions + smart review prompt',
                'Privacy manifest: 0 tracking, 0 data collected'
            ]
        },
        stack: ['Swift 6', 'SwiftUI', 'iOS 26', 'Foundation Models', 'Apple Intelligence', 'SwiftData', 'UserNotifications', 'AVFoundation', 'PhotosPicker'],
        url: 'https://github.com/arzaluz-chris/Lumina',
        appStoreUrl: 'https://apps.apple.com/us/app/lumina-via/id6762521594',
        websiteUrl: '/lumina/'
    }
};

// Helper: pick localized field (string or { es, en }) for the current language.
function localized(field) {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    return field[currentLang] || field['es'] || field['en'] || '';
}

// APPS DEL DOCK. Use nameKey for apps whose label depends on language;
// proper nouns keep a fixed name.
const apps = [
    { id: 'finder',      nameKey: 'finder',      icon: 'assets/dock-icons/processed/finder.png' },
    { id: 'aboutme',     nameKey: 'aboutMeApp',  icon: 'assets/dock-icons/processed/contacts.png' },
    { id: 'appspage',    nameKey: 'appsPage',    icon: 'assets/dock-icons/processed/apps.webp', url: 'https://chrisarzaluz.dev/portfolio/#apps' },
    { id: 'safari',      nameKey: 'safari',      icon: 'assets/dock-icons/processed/safari.png' },
    { id: 'terminal',    nameKey: 'terminal',    icon: 'assets/dock-icons/processed/terminal.png' },
    { id: 'textedit',    nameKey: 'textEdit',    icon: 'assets/dock-icons/processed/textedit.png' },
    { id: 'paint',       nameKey: 'sketch',      icon: 'assets/dock-icons/processed/paint.png' },
    { id: 'calculator',  nameKey: 'calculator',  icon: 'assets/dock-icons/processed/calculator.png' },
    { id: 'settings',    nameKey: 'settings',    icon: 'assets/dock-icons/processed/settings.png' },
    { id: 'pomo',        name: 'Pomo',           icon: 'assets/dock-icons/processed/pomo.png' },
    { id: 'waldenvibes', name: 'WaldenVibes',    icon: 'assets/dock-icons/processed/waldenvibes.png' },
    { id: 'vorth',       name: 'VORTH',          icon: 'assets/dock-icons/processed/vorth.png' },
    { id: 'teddyfeels',  name: 'TeddyFeels',     icon: 'assets/dock-icons/processed/teddyfeels.png' },
    { id: 'alba',        name: 'Alba',           icon: 'assets/dock-icons/processed/alba.png' },
    { id: 'lumina',      name: 'Lumina',         icon: 'assets/dock-icons/processed/lumina.png' },
    { id: 'mail',        nameKey: 'mail',        icon: 'assets/dock-icons/processed/mail.png' },
    { id: 'trash',       nameKey: 'bin',         icon: 'assets/dock-icons/processed/trash-empty.png', separator: true }
];

function appDisplayName(app) {
    if (!app) return '';
    return app.nameKey ? t(app.nameKey) : app.name;
}

// WALLPAPERS — dynamic, with light/dark variants
const wallpapers = [
    { id: 'tahoe',        name: 'Tahoe',        light: 'assets/wallpapers/full/tahoe-light.webp',        dark: 'assets/wallpapers/full/tahoe-dark.webp' },
    { id: 'sequoia',      name: 'Sequoia',      light: 'assets/wallpapers/full/sequoia-light.webp',      dark: 'assets/wallpapers/full/sequoia-dark.webp' },
    { id: 'sonoma',       name: 'Sonoma',       light: 'assets/wallpapers/full/sonoma-light.webp' },
    { id: 'monterey',     name: 'Monterey',     light: 'assets/wallpapers/full/monterey-light.webp',     dark: 'assets/wallpapers/full/monterey-dark.webp' },
    { id: 'lion',         name: 'Lion',         light: 'assets/wallpapers/full/lion-light.webp' },
    { id: 'mountain',     name: 'Mountain',     dark:  'assets/wallpapers/full/mountain-dark.webp' },
    { id: 'snow-leopard', name: 'Snow Leopard', light: 'assets/wallpapers/full/snow-leopard-light.webp', dark: 'assets/wallpapers/full/snow-leopard-dark.webp' },
    { id: 'tiger',        name: 'Tiger',        light: 'assets/wallpapers/full/tiger.webp' }
];
const WALLPAPER_ROTATION_MS = 10 * 1000;
let currentWallpaperId = null;
let currentAppearance = localStorage.getItem('appearance') || 'dark';
let wallpaperRotationTimer = null;

function getEffectiveAppearance() {
    if (currentAppearance === 'auto') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return currentAppearance;
}
function wallpaperUrl(w, mode) {
    const base = w[mode] || w.light || w.dark;
    return base ? resolveWallpaperAsset(base) : '';
}
function wallpaperThumbUrl(w, mode) {
    const url = wallpaperUrl(w, mode);
    return url ? url.replace('/full/', '/thumbs/') : '';
}
let wallpaperLayerIdx = 0;
function applyWallpaper(id, persist) {
    const w = wallpapers.find(x => x.id === id);
    if (!w) return;
    currentWallpaperId = id;
    const url = wallpaperUrl(w, getEffectiveAppearance());
    const layers = $('#wallpaper .wallpaper-layer');
    const incoming = layers.eq(wallpaperLayerIdx);
    const outgoing = layers.eq(1 - wallpaperLayerIdx);
    // Preload, then crossfade.
    const img = new Image();
    img.onload = () => {
        incoming.css('background-image', `url('${url}')`);
        incoming.css('opacity', 1);
        outgoing.css('opacity', 0);
        wallpaperLayerIdx = 1 - wallpaperLayerIdx;
    };
    img.src = url;
    // Stop the gradient animation behind the wallpaper for cleanliness.
    $('body').css('animation', 'none');
    if (persist) localStorage.setItem('wallpaper', id);
    $('.wall-thumb').removeClass('selected');
    $(`.wall-thumb[data-wall-id="${id}"]`).addClass('selected');
}
function startWallpaperRotation() {
    clearInterval(wallpaperRotationTimer);
    wallpaperRotationTimer = setInterval(() => {
        // Only rotate through wallpapers that have a variant for the
        // current mode — keeps rotation visually consistent in dark/light.
        const mode = getEffectiveAppearance();
        const eligible = wallpapers.filter(w => w[mode]);
        if (eligible.length === 0) return;
        const idx = eligible.findIndex(w => w.id === currentWallpaperId);
        const next = eligible[(idx + 1) % eligible.length];
        applyWallpaper(next.id, false);
    }, WALLPAPER_ROTATION_MS);
}
function stopWallpaperRotation() {
    clearInterval(wallpaperRotationTimer);
    wallpaperRotationTimer = null;
}
function initWallpaper() {
    const savedId = localStorage.getItem('wallpaper');
    if (savedId && wallpapers.find(w => w.id === savedId)) {
        applyWallpaper(savedId, false);
    } else {
        applyWallpaper('monterey', false);  // default start
        startWallpaperRotation();
    }
}

// Simulated File System
// Text contents use { es, en } so they update live when the language changes.
const fileSystem = {
    'Desktop': { type: 'folder', children: {
        'Welcome.txt': { type: 'text', content: {
            es: '¡Bienvenido a mi portafolio! Esta página web es una simulación de macOS construida con HTML, CSS y JavaScript. Siéntete libre de interactuar con todas las aplicaciones. Puedes usar la línea de comandos, navegar por el Finder y en internet, hacer operaciones con calculadora e incluso hacer un bonito dibujo. También puedes revisar las aplicaciones que he creado para iOS.',
            en: 'Welcome to my portfolio! This website is a macOS simulation built with HTML, CSS, and JavaScript. Feel free to interact with every app. You can use the command line, browse the Finder and the internet, run calculations, and even make a nice drawing. You can also check out the apps I have built for iOS.'
        }},
        'Projects': { type: 'folder', children: {
            'Pomo.txt': { type: 'text', content: {
                es: 'Pomo - Temporizador Pomodoro\n\nUna aplicación minimalista de temporizador Pomodoro diseñada para aumentar tu productividad a través de sesiones estructuradas de trabajo y descanso.\n\nCaracterísticas:\n• Temporizadores personalizables (10-60 min para trabajo, 3-15 min para descansos)\n• Flujo automático entre sesiones de trabajo y descanso\n• Soporte para temporizador en segundo plano\n• Notificaciones push y alertas de sonido\n• Seguimiento de productividad diario y semanal con gráficas\n• Contador de rachas para mantener la motivación\n• Modo claro y oscuro automático\n• Soporte para español e inglés\n\nStack: Swift 5.0, SwiftUI, MVVM, SwiftData, Combine, UserNotifications, AVFoundation, Charts\n\nGitHub: https://github.com/arzaluz-chris/Pomo',
                en: 'Pomo - Pomodoro Timer\n\nA minimalist Pomodoro timer app designed to boost your productivity through structured work and break sessions.\n\nFeatures:\n• Customizable timers (10-60 min for work, 3-15 min for breaks)\n• Automatic flow between work and break sessions\n• Background timer support\n• Push notifications and sound alerts\n• Daily and weekly productivity tracking with charts\n• Streak counter to keep you motivated\n• Automatic light and dark mode\n• Spanish and English support\n\nStack: Swift 5.0, SwiftUI, MVVM, SwiftData, Combine, UserNotifications, AVFoundation, Charts\n\nGitHub: https://github.com/arzaluz-chris/Pomo'
            }},
            'WaldenVibes.txt': { type: 'text', content: {
                es: 'WaldenVibes - Meditación y Bienestar\n\nUna aplicación minimalista desarrollada con SwiftUI que combina meditación y seguimiento emocional.\n\nCaracterísticas:\n• Interfaz minimalista y zen con SwiftUI\n• Seguimiento de emociones y estados de ánimo\n• Ejercicios de meditación guiada\n• Registro diario de bienestar personal\n• Diseño enfocado en el bienestar mental\n• Experiencia de usuario serena y relajante\n\nStack: Swift, SwiftUI, iOS, Xcode\n\nGitHub: https://github.com/arzaluz-chris/WaldenVibes',
                en: 'WaldenVibes - Meditation & Well-being\n\nA minimalist SwiftUI app that combines meditation and mood tracking.\n\nFeatures:\n• Minimalist, zen SwiftUI interface\n• Emotion and mood tracking\n• Guided meditation exercises\n• Daily personal well-being log\n• Design focused on mental well-being\n• Calm, relaxing user experience\n\nStack: Swift, SwiftUI, iOS, Xcode\n\nGitHub: https://github.com/arzaluz-chris/WaldenVibes'
            }},
            'VORTH.txt': { type: 'text', content: {
                es: 'VORTH - Descubre Tu Propósito de Vida\n\nVORTH usa coaching con IA, el modelo de bienestar PERMA y un diario inteligente para ayudarte a descubrir lo que realmente importa y construir una vida con propósito.\n\nCaracterísticas:\n• Coach de voz en vivo con Gemini AI\n• Diario PERMA para seguimiento de bienestar\n• Metas inteligentes sugeridas por IA\n• Asistente IA consciente de tu propósito\n• Alquimia emocional con ejercicios guiados\n• Sincronización entre iPhone y iPad via iCloud\n\nStack: Swift, SwiftUI, MVVM, Gemini AI, SwiftData, AVFoundation, Speech\n\nGitHub: https://github.com/arzaluz-chris/Journify\nApp Store: https://apps.apple.com/mx/app/vorth/id6759020391',
                en: 'VORTH - Discover Your Life Purpose\n\nVORTH uses AI coaching, the PERMA well-being model, and an intelligent journal to help you discover what truly matters and build a life of purpose.\n\nFeatures:\n• Live voice coach powered by Gemini AI\n• PERMA journal for well-being tracking\n• AI-suggested smart goals\n• AI assistant aware of your purpose\n• Emotional alchemy with guided exercises\n• iPhone and iPad sync via iCloud\n\nStack: Swift, SwiftUI, MVVM, Gemini AI, SwiftData, AVFoundation, Speech\n\nGitHub: https://github.com/arzaluz-chris/Journify\nApp Store: https://apps.apple.com/mx/app/vorth/id6759020391'
            }},
            'Alba.txt': { type: 'text', content: {
                es: 'Alba - Tu Guía para Mejores Amistades\n\nAlba es tu guía para mejorar tus amistades, basada en psicología positiva.\n\nCaracterísticas:\n• Chat con IA basado en psicología positiva (Gemini)\n• Test de amistad con evaluación de confianza, apoyo, límites y asertividad\n• Diario de amistades protegido con PIN y Face ID\n• Artículos de psicología positiva (Alba Blocks)\n• Integración con Apple Music\n• Personalización del estilo de comunicación de la IA\n• Soporte para español e inglés\n\nStack: Swift, SwiftUI, MVVM, Gemini AI, MusicKit, CryptoKit, LocalAuthentication, Combine\n\nGitHub: https://github.com/arzaluz-chris/Alba\nApp Store: https://apps.apple.com/us/app/alba-ai-relationship-advisor/id6761395418',
                en: 'Alba - Your Guide to Better Friendships\n\nAlba is your guide to better friendships, grounded in positive psychology.\n\nFeatures:\n• AI chat grounded in positive psychology (Gemini)\n• Friendship test measuring trust, support, boundaries, and assertiveness\n• Friendship journal protected with PIN and Face ID\n• Positive psychology articles (Alba Blocks)\n• Apple Music integration\n• Customizable AI communication style\n• Spanish and English support\n\nStack: Swift, SwiftUI, MVVM, Gemini AI, MusicKit, CryptoKit, LocalAuthentication, Combine\n\nGitHub: https://github.com/arzaluz-chris/Alba\nApp Store: https://apps.apple.com/us/app/alba-ai-relationship-advisor/id6761395418'
            }},
            'TeddyFeels.txt': { type: 'text', content: {
                es: 'TeddyFeels - Bienestar Emocional para Niños\n\nUna app de bienestar emocional para niños de 6 a 12 años. TeddyFeels ayuda a los niños a identificar, expresar y gestionar sus emociones a través de un compañero osito de peluche.\n\nCaracterísticas:\n• Check-in emocional con 9 emociones y oso animado\n• Diario privado protegido con PIN de 4 dígitos\n• Grabación de voz con transcripción local\n• Metas personales con celebraciones de confeti\n• Modo SOS de rescate con ejercicios de respiración\n• Dashboard de progreso con gráficas semanales\n• Todos los datos 100% locales — sin internet\n\nStack: Swift, SwiftUI, MVVM, SwiftData, Speech, AVFoundation, Vortex, Lottie\n\nGitHub: https://github.com/arzaluz-chris/TeddyFeels\nApp Store: https://apps.apple.com/us/app/teddyfeels/id6761302473',
                en: 'TeddyFeels - Emotional Well-being for Kids\n\nAn emotional well-being app for kids aged 6 to 12. TeddyFeels helps children identify, express, and manage their emotions through a teddy bear companion.\n\nFeatures:\n• Emotional check-in with 9 emotions and an animated bear\n• Private journal protected with a 4-digit PIN\n• Voice recording with on-device transcription\n• Personal goals with confetti celebrations\n• SOS rescue mode with breathing exercises\n• Progress dashboard with weekly charts\n• All data 100% local — no internet\n\nStack: Swift, SwiftUI, MVVM, SwiftData, Speech, AVFoundation, Vortex, Lottie\n\nGitHub: https://github.com/arzaluz-chris/TeddyFeels\nApp Store: https://apps.apple.com/us/app/teddyfeels/id6761302473'
            }},
            'Lumina.txt': { type: 'text', content: {
                es: 'Lumina - Descubre tus 24 fortalezas\n\nApp de fortalezas de carácter para el Colegio Walden Dos de México, basada en la clasificación VIA Character Strengths. Combina test de 96 preguntas, análisis personalizado con Apple Intelligence on-device, historias y Buddy (compañero conversacional). Cero datos recolectados.\n\nCaracterísticas:\n• Test VIA con 24 fortalezas agrupadas en 6 virtudes\n• Análisis personalizado con Apple Intelligence (Foundation Models on-device)\n• Buddy: compañero conversacional con IA, 100% en el dispositivo\n• Historias: bitácora de carácter con fotos y recordatorios de aniversario\n• Evolución: gráficas interactivas del cambio de fortalezas en el tiempo\n• Accesibilidad: lectura en voz alta\n• Quick Actions + Review prompt inteligente\n• Privacy manifest: 0 tracking, 0 datos recolectados\n\nStack: Swift 6, SwiftUI, iOS 26, Foundation Models, Apple Intelligence, SwiftData, UserNotifications, AVFoundation, PhotosPicker\n\nGitHub: https://github.com/arzaluz-chris/Lumina\nApp Store: https://apps.apple.com/us/app/lumina-via/id6762521594\nSitio: https://chrisarzaluz.dev/lumina/',
                en: 'Lumina - Discover Your 24 Strengths\n\nCharacter-strengths app for Colegio Walden Dos in Mexico, based on the VIA Character Strengths classification. It combines a 96-question test, personalized analysis with on-device Apple Intelligence, stories, and Buddy (conversational companion). Zero data collected.\n\nFeatures:\n• VIA test with 24 strengths grouped into 6 virtues\n• Personalized analysis with Apple Intelligence (on-device Foundation Models)\n• Buddy: conversational AI companion, 100% on-device\n• Stories: character log with photos and anniversary reminders\n• Evolution: interactive charts of how strengths change over time\n• Accessibility: read-aloud support\n• Quick Actions + smart review prompt\n• Privacy manifest: 0 tracking, 0 data collected\n\nStack: Swift 6, SwiftUI, iOS 26, Foundation Models, Apple Intelligence, SwiftData, UserNotifications, AVFoundation, PhotosPicker\n\nGitHub: https://github.com/arzaluz-chris/Lumina\nApp Store: https://apps.apple.com/us/app/lumina-via/id6762521594\nWebsite: https://chrisarzaluz.dev/lumina/'
            }}
        } },
        'MyPhoto.jpg': { type: 'img', src: 'assets/profile.png'}
    }},
    'Documents': { type: 'folder', children: {
        'CV.pdf': { type: 'pdf', src: 'assets/cv.pdf'},
        'Notes.txt': { type: 'text', content: {
            es: 'Ideas para nuevos proyectos:\n- App de salud\n- Calculadora científica\n- Rastreador de hábitos',
            en: 'Ideas for new projects:\n- Health app\n- Scientific calculator\n- Habit tracker'
        }}
    }},
    'Downloads': { type: 'folder', children: {
        'README.txt': { type: 'text', content: {
            es: '# macOS Portfolio - Christian Arzaluz\n\n## Descripción\nSimulador interactivo de macOS construido completamente con HTML, CSS y JavaScript vanilla. Este portafolio presenta una experiencia completa del sistema operativo macOS, incluyendo el dock, ventanas arrastrables y redimensionables, y múltiples aplicaciones funcionales.\n\n## Tecnologías Utilizadas\n• HTML5 - Estructura semántica\n• CSS3 - Estilos y animaciones (glassmorphism, gradientes)\n• JavaScript (ES6+) - Lógica de la aplicación\n• jQuery & jQuery UI - Sistema de ventanas drag & drop\n• Font Awesome - Iconografía\n• Google Fonts (Inter) - Tipografía del sistema\n\n## Características Principales\n✓ Sistema de ventanas completo (minimizar, maximizar, cerrar)\n✓ Dock animado con efectos hover\n✓ Finder con navegación de carpetas\n✓ Terminal funcional con comandos reales\n✓ Calculadora completa\n✓ Navegador Safari integrado (iframe)\n✓ Editor de texto con formato\n✓ Aplicación de dibujo/sketch\n✓ Sistema de configuración (Settings)\n✓ Aplicaciones de proyectos iOS (Pomo, WaldenVibes, VORTH)\n✓ Diseño responsive para móviles y tablets\n✓ Soporte multiidioma (Español/Inglés)\n\n## Estructura del Proyecto\n/portfolio/\n├── index.html          # Documento principal\n├── script.js           # Lógica de la aplicación\n├── styles.css          # Estilos y responsive design\n├── assets/             # Recursos multimedia\n│   ├── profile.png\n│   └── screenshot.jpg\n└── CNAME              # Configuración de dominio personalizado\n\n## Deployment\nHospedado en GitHub Pages\nDominio: chrisarzaluz.dev\n\n## Desarrollado por\nChristian Arzaluz\nDesarrollador iOS | Estudiante de Ingeniería en Sistemas\ncontact: christian.arzaluz@gmail.com',
            en: '# macOS Portfolio - Christian Arzaluz\n\n## Description\nAn interactive macOS simulator built entirely with vanilla HTML, CSS, and JavaScript. This portfolio presents a full macOS desktop experience, including the dock, draggable and resizable windows, and multiple working applications.\n\n## Technologies Used\n• HTML5 - Semantic structure\n• CSS3 - Styling and animations (glassmorphism, gradients)\n• JavaScript (ES6+) - App logic\n• jQuery & jQuery UI - Drag & drop window system\n• Font Awesome - Iconography\n• Google Fonts (Inter) - System typography\n\n## Main Features\n✓ Full window system (minimize, maximize, close)\n✓ Animated dock with hover effects\n✓ Finder with folder navigation\n✓ Working Terminal with real commands\n✓ Full Calculator\n✓ Embedded Safari browser (iframe)\n✓ Rich-text editor\n✓ Drawing / Sketch app\n✓ Settings app\n✓ iOS project apps (Pomo, WaldenVibes, VORTH)\n✓ Responsive design for mobile and tablets\n✓ Multi-language support (Spanish/English)\n\n## Project Structure\n/portfolio/\n├── index.html          # Main document\n├── script.js           # App logic\n├── styles.css          # Styling and responsive design\n├── assets/             # Media resources\n│   ├── profile.png\n│   └── screenshot.jpg\n└── CNAME              # Custom domain configuration\n\n## Deployment\nHosted on GitHub Pages\nDomain: chrisarzaluz.dev\n\n## Built by\nChristian Arzaluz\niOS Developer | Computer Science Student\ncontact: christian.arzaluz@gmail.com'
        }},
        'Screenshot.jpg': { type: 'img', src: 'assets/screenshot.jpg'}
    }}
};
let currentPath = ['Desktop'];
let trashItems = {}; // Store deleted items with their original path

// --- Window Manager Class ---
class WindowManager {
    constructor() {
        this.windows = {};
        this.zIndexCounter = 100;
        this.activeApp = 'Finder';
        this.initDock();
        this.setupDockMagnification();
        this.setupDockTooltips();
        this.setupTrashDropTarget();
        this.setupDesktop();
    }

    setupDockMagnification() {
        if (!window.matchMedia('(hover: hover)').matches) return;
        const dock = document.getElementById('dock');
        const BASE_SIZE = 55;
        const MAX_SCALE = 1.3;
        const REACH = 170;   // px from cursor where magnification decays to 1.0
        const MAX_LIFT = 8;
        let pendingX = null, rafId = null;

        // Cosine bell curve: 1.0 at the cursor, 0.0 at REACH.
        const scaleFor = (dist) => {
            if (dist >= REACH) return 1;
            return 1 + (MAX_SCALE - 1) * Math.cos(dist / REACH * Math.PI / 2);
        };

        const update = (x) => {
            dock.querySelectorAll('.dock-item').forEach(item => {
                if (item.classList.contains('bouncing')) return;
                item.classList.remove('animate-reset');
                const r = item.getBoundingClientRect();
                const dist = Math.abs(x - (r.left + r.width / 2));
                const s = scaleFor(dist);
                const size = BASE_SIZE * s;
                item.style.width = `${size}px`;
                item.style.height = `${size}px`;
                // Lift peaks at MAX_LIFT when fully scaled; 0 at base size.
                const lift = -(s - 1) / (MAX_SCALE - 1) * MAX_LIFT;
                item.style.transform = `translateY(${lift}px)`;
            });
        };

        dock.addEventListener('mousemove', (e) => {
            pendingX = e.clientX;
            if (rafId) return;
            rafId = requestAnimationFrame(() => { update(pendingX); rafId = null; });
        });
        dock.addEventListener('mouseleave', () => {
            dock.querySelectorAll('.dock-item').forEach(item => {
                item.classList.add('animate-reset');
                item.style.width = '';
                item.style.height = '';
                item.style.transform = '';
            });
        });
    }

    setupDockTooltips() {
        if (!window.matchMedia('(hover: hover)').matches) return;
        const dock = document.getElementById('dock');
        const tooltip = document.getElementById('dock-tooltip');
        if (!dock || !tooltip) return;

        let activeItem = null;
        let posRaf = null;

        const positionTooltip = () => {
            posRaf = null;
            if (!activeItem) return;
            const r = activeItem.getBoundingClientRect();
            const tw = tooltip.offsetWidth;
            const th = tooltip.offsetHeight;
            const left = r.left + r.width / 2 - tw / 2;
            const top = r.top - th - 10;
            tooltip.style.left = `${Math.round(left)}px`;
            tooltip.style.top = `${Math.round(top)}px`;
        };

        const schedulePosition = () => {
            if (posRaf) return;
            posRaf = requestAnimationFrame(positionTooltip);
        };

        const showFor = (item) => {
            if (item === activeItem) return;
            activeItem = item;
            tooltip.textContent = item.getAttribute('aria-label') || '';
            tooltip.setAttribute('aria-hidden', 'false');
            tooltip.classList.add('visible');
            schedulePosition();
        };

        const hide = () => {
            activeItem = null;
            tooltip.classList.remove('visible');
            tooltip.setAttribute('aria-hidden', 'true');
        };

        dock.addEventListener('mouseover', (e) => {
            const item = e.target.closest('.dock-item');
            if (!item || !dock.contains(item)) return;
            showFor(item);
        });

        dock.addEventListener('mousemove', () => {
            if (activeItem) schedulePosition();
        });

        dock.addEventListener('mouseleave', hide);

        dock.addEventListener('mousedown', (e) => {
            if (e.target.closest('.dock-item')) hide();
        });
    }

    setupTrashDropTarget() {
        const trash = document.getElementById('dock-trash');
        if (!trash) return;
        trash.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            trash.classList.add('drag-over');
        });
        trash.addEventListener('dragleave', () => trash.classList.remove('drag-over'));
        trash.addEventListener('drop', (e) => {
            e.preventDefault();
            trash.classList.remove('drag-over');
            const data = e.dataTransfer.getData('application/x-finder-file');
            if (!data) return;
            const { fileName, path } = JSON.parse(data);
            deleteFile(fileName, path);
        });
    }

    initDock() {
        const dock = $('#dock');
        apps.forEach(app => {
            if(app.separator) dock.append('<div style="width:1px; height:40px; background:rgba(255,255,255,0.2); margin: 0 5px;"></div>');

            const label = appDisplayName(app);
            const iconSrc = resolveDockIcon(app.icon);
            let el = $(`
                <div class="dock-item" id="dock-${app.id}" aria-label="${label}">
                    <div class="dock-icon-svg">
                        <img class="dock-icon-img" src="${iconSrc}" alt="${label}" draggable="false">
                    </div>
                    <div class="dock-dot"></div>
                </div>
            `);
            el.on('click', () => this.openApp(app.id));
            dock.append(el);
        });
        this.updateTrashIcon();
    }

    refreshDockLabels() {
        apps.forEach(app => {
            const label = appDisplayName(app);
            const $el = $(`#dock-${app.id}`);
            $el.attr('aria-label', label);
            $el.find('.dock-icon-img').attr('alt', label);
        });
    }

    updateTrashIcon() {
        const isEmpty = Object.keys(trashItems).length === 0;
        const src = isEmpty
            ? 'assets/dock-icons/processed/trash-empty.png'
            : 'assets/dock-icons/processed/trash-full.png';
        $('#dock-trash .dock-icon-img').attr('src', src);
    }

    setupDesktop() {
        // Context Menu
        $(document).on('contextmenu', '#desktop', (e) => {
            if ($(e.target).closest('.window').length === 0 && $(e.target).closest('#dock').length === 0 && $(e.target).closest('#menubar').length === 0) {
                e.preventDefault();
                $('#context-menu').css({top: e.clientY, left: e.clientX}).fadeIn(100);
            }
        });
        $(document).on('click', () => $('#context-menu').fadeOut(100));
    }

    updateMenubar(appName) {
        this.activeApp = appName;
        $('#active-app-name').text(appName);
    }

    setActiveWindow(id) {
        $('.window').addClass('inactive');
        $(`#win-${id}`).removeClass('inactive').css('z-index', ++this.zIndexCounter);

        let appName = 'Finder'; // Default
        if (this.windows[id]) {
            appName = this.windows[id].name;
        }
        this.updateMenubar(appName);
    }

    openApp(appId) {
        const appConfig = apps.find(a => a.id === appId);
        if (!appConfig) return; // No hacer nada si la app no existe

        // If the app has a direct URL, navigate to it instead of opening a window
        if (appConfig.url) {
            const dockItem = $(`#dock-${appId}`);
            if (!dockItem.hasClass('bouncing')) {
                dockItem.addClass('bouncing');
                let timeoutId;
                const stopBounce = () => {
                    dockItem.removeClass('bouncing');
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                };
                function handleVisibilityChange() {
                    if (document.hidden) {
                        clearTimeout(timeoutId);
                        stopBounce();
                    }
                }
                document.addEventListener('visibilitychange', handleVisibilityChange);
                timeoutId = setTimeout(stopBounce, 600);
            }
            window.open(appConfig.url, '_blank');
            return;
        }

        let windowId = appId;
        let config = { ...appConfig, name: appDisplayName(appConfig) };

        // Lógica para proyectos
        if (projects[appId]) {
            windowId = 'proj-' + appId; // ID único para la ventana del proyecto
            config = {
                id: windowId,
                name: projects[appId].name,
                isProject: true // Flag para el cargador de contenido
            };
        }

        // Bounce animation
        const dockItem = $(`#dock-${appId}`);
        if(!dockItem.hasClass('active') && !dockItem.hasClass('bouncing')) {
            dockItem.addClass('bouncing');
            setTimeout(() => dockItem.removeClass('bouncing').addClass('active'), 600);
        }

        // Check if already open
        if (this.windows[windowId]) {
            if($(`#win-${windowId}`).is(':hidden')) {
                this.restoreWindow(windowId);
            } else {
                this.setActiveWindow(windowId);
            }
            return;
        }

        this.createWindow(windowId, config);
    }

    createWindow(id, config) {
        this.windows[id] = config;

        const isMobile = window.innerWidth <= 768;

        // Default dimensions based on app type and device
        let w, h, top, left;

        if (isMobile) {
            // Mobile: responsive sizes
            w = Math.min(window.innerWidth * 0.9, 450);
            h = Math.min(window.innerHeight * 0.75, 650);
            // Center on screen (no menu bar on mobile)
            top = (window.innerHeight - h) / 2;
            left = (window.innerWidth - w) / 2;

            // Adjust specific apps for mobile
            if(id === 'calculator') {
                w = 300;
                h = 450;
            }
        } else {
            // Desktop: fixed sizes
            w = 640;
            h = 440;
            if(id === 'calculator') { w = 250; h = 350; }
            if(id === 'terminal') { w = 500; h = 300; }
            if(id === 'safari') { w = 800; h = 600; }
            if(config.isProject) { w = 600; h = 500; }

            // Random position placement for desktop
            top = 60 + (Object.keys(this.windows).length * 20);
            left = 100 + (Object.keys(this.windows).length * 20);
        }

        const winHTML = `
            <div class="window opening" id="win-${id}" style="width:${w}px; height:${h}px; top:${top}px; left:${left}px; z-index:${++this.zIndexCounter}">
                <div class="window-header">
                    <div class="traffic-lights">
                        <div class="t-btn close-btn"><i class="fas fa-times"></i></div>
                        <div class="t-btn min-btn"><i class="fas fa-minus"></i></div>
                        <div class="t-btn max-btn"><i class="fas fa-plus"></i></div>
                    </div>
                    <div class="window-title">${config.name}</div>
                </div>
                <div class="window-content" id="content-${id}"></div>
            </div>
        `;

        $('#windows-container').append(winHTML);
        const $win = $(`#win-${id}`);

        // Enable dragging on both desktop and mobile
        $win.draggable({
            handle: '.window-header',
            containment: '#desktop',
            start: () => this.setActiveWindow(id),
            // Add touch support for mobile
            cancel: '.t-btn'
        });

        // Enable resizing with adjusted settings for mobile
        if (isMobile) {
            $win.resizable({
                minHeight: 300,
                minWidth: 280,
                maxHeight: window.innerHeight - 50,
                maxWidth: window.innerWidth - 20
            });
        } else {
            $win.resizable({
                minHeight: 200,
                minWidth: 250
            });
        }

        $win.on('mousedown touchstart', () => this.setActiveWindow(id));

        // Window button events
        $win.find('.close-btn').on('click', (e) => { e.stopPropagation(); this.closeWindow(id); });
        $win.find('.min-btn').on('click', (e) => { e.stopPropagation(); this.minimizeWindow(id); });
        $win.find('.max-btn').on('click', (e) => { e.stopPropagation(); this.maximizeWindow(id); });

        // Remove opening class after animation
        setTimeout(() => $win.removeClass('opening'), 200);

        this.setActiveWindow(id);
        this.loadAppContent(id, config);
    }

    closeWindow(id) {
        $(`#win-${id}`).fadeOut(150, function() { $(this).remove(); });
        delete this.windows[id];

        let appId = id;
        if (id.startsWith('proj-')) {
            appId = id.replace('proj-', '');
        }
        $(`#dock-${appId}`).removeClass('active');

        this.updateMenubar('Finder');
    }

    minimizeWindow(id) {
        $(`#win-${id}`).fadeOut(200);
        this.updateMenubar('Finder');
    }

    restoreWindow(id) {
        $(`#win-${id}`).fadeIn(200);
        this.setActiveWindow(id);
    }

    maximizeWindow(id) {
        const $win = $(`#win-${id}`);
        const isMobile = window.innerWidth <= 768;

        if ($win.hasClass('maximized')) {
            // Restore to original size
            $win.css({
                top: $win.data('top'),
                left: $win.data('left'),
                width: $win.data('width'),
                height: $win.data('height')
            }).removeClass('maximized');
        } else {
            // Save current dimensions
            $win.data({
                top: $win.css('top'),
                left: $win.css('left'),
                width: $win.css('width'),
                height: $win.css('height')
            });

            // Maximize with appropriate dimensions for device
            if (isMobile) {
                $win.css({
                    top: '5px',
                    left: '5px',
                    width: 'calc(100vw - 10px)',
                    height: 'calc(100vh - 100px)'
                }).addClass('maximized');
            } else {
                $win.css({
                    top: '30px',
                    left: '0',
                    width: '100%',
                    height: 'calc(100vh - 110px)'
                }).addClass('maximized');
            }
        }
    }

    loadAppContent(id, config) {
        const container = $(`#content-${id}`);

        if (config.isProject) {
            renderProject(container, id.replace('proj-', ''));
            return;
        }

        switch(id) {
            case 'aboutme': renderPortfolio(container); break;
            case 'finder': renderFinder(container); break;
            case 'terminal': renderTerminal(container); break;
            case 'textedit': renderTextEdit(container); break;
            case 'paint': renderPaint(container); break;
            case 'calculator': renderCalculator(container); break;
            case 'safari': renderSafari(container); break;
            case 'settings': renderSettings(container); break;
            case 'trash': renderTrash(container); break;
            case 'mail':
                container.html(`
                    <div style="padding:40px; text-align:center; color:#aaa; font-size: 14px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <i class="fas fa-envelope" style="font-size: 60px; color: #3481F8;"></i>
                        <div>
                            <div style="margin-bottom: 10px; color: #888;">${t('contact')}:</div>
                            <b style="color:white; font-size: 18px;">christian.arzaluz@gmail.com</b>
                        </div>
                        <a href="mailto:christian.arzaluz@gmail.com" style="background: #3481F8; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.2s; display: inline-block;">
                            <i class="fas fa-paper-plane"></i> ${t('sendEmail')}
                        </a>
                    </div>
                `);
                break;
        }
    }
}

const wm = new WindowManager();

// --- App Implementations ---

// 1. PORTFOLIO (Sobre Mí) - Extraído de tu video
function renderPortfolio(container) {
    container.html(`
        <div class="portfolio-app">
            <div class="profile-header">
                <div class="profile-pic"><span class="initial">CA</span></div>
                <div class="profile-info">
                    <h1>Christian Arzaluz</h1>
                    <h2>${t('portfolioTitle')}</h2>
                </div>
            </div>
            <div class="profile-body">
                <p>${t('portfolioIntro')}</p>
                <p>${t('portfolioIntro2')}</p>

                <h3><i class="fas fa-code"></i> ${t('languagesFrameworks')}</h3>
                <ul class="skills-grid">
                    <li>Swift 5.0+</li>
                    <li>SwiftUI</li>
                    <li>UIKit</li>
                    <li>Combine</li>
                    <li>Objective-C</li>
                    <li>XCode 15+</li>
                    <li>Core Data</li>
                    <li>AVFoundation</li>
                    <li>UserNotifications</li>
                    <li>Charts</li>
                    <li>Git & GitHub</li>
                </ul>

                <h3><i class="fas fa-sitemap"></i> ${t('architecturePatterns')}</h3>
                <ul class="skills-grid">
                    <li>MVVM</li>
                    <li>MVC</li>
                    <li>Clean Architecture</li>
                    <li>Reactive Programming</li>
                    <li>TDD</li>
                </ul>
            </div>
        </div>
    `);
}

// 2. GENERIC PROJECT RENDERER
function renderProject(container, projectId) {
    const project = projects[projectId];
    if (!project) return;

    const features = Array.isArray(project.features) ? project.features : (project.features[currentLang] || project.features['es'] || []);
    container.html(`
        <div class="project-app">
            <h2><i class="fas fa-${project.icon}" style="color: var(--accent);"></i> ${project.name}</h2>
            <p>${localized(project.description)}</p>

            <h3><i class="fas fa-star"></i> ${t('mainFeatures')}</h3>
            <ul>
                ${features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <h3><i class="fas fa-microchip"></i> ${t('techStack')}</h3>
            <ul class="tech-stack">
                ${project.stack.map(t => `<li>${t}</li>`).join('')}
            </ul>

            ${project.url ? `
            <a href="${project.url}" target="_blank" class="github-link">
                <i class="fab fa-github"></i> ${t('viewOnGitHub')}
            </a>
            ` : ''}
            ${project.appStoreUrl ? `
            <a href="${project.appStoreUrl}" target="_blank" class="appstore-link">
                <i class="fab fa-apple"></i> ${t('viewOnAppStore')}
            </a>
            ` : ''}
            ${project.websiteUrl ? `
            <a href="${project.websiteUrl}" target="_blank" class="website-link">
                <i class="fas fa-globe"></i> ${t('visitWebsite')}
            </a>
            ` : ''}
        </div>
    `);
}

// 3. TERMINAL (Modificado como en tu video)
function renderTerminal(container) {
    container.html(`
        <div class="terminal-app" id="term-output">
            <div class="term-line">${t('terminalLastLogin')}: ${new Date().toLocaleString(t('clockLocale'), {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'})} on ttys000</div>
            <div class="term-line">${t('terminalVersion')}</div>
            <br>
            <div id="term-history"></div>
            <div class="term-input-line">
                <span class="term-prompt">guest@portfolio ~ %</span>
                <span id="term-input" contenteditable="true" spellcheck="false"
                      autocorrect="off" autocapitalize="off"
                      role="textbox" aria-label="Terminal command" tabindex="0"></span>
            </div>
        </div>
    `);

    const history = $('#term-history');
    const input = $('#term-input');
    const output = $('#term-output');

    container.on('click', () => input[0].focus());
    setTimeout(() => input[0].focus(), 60);

    input.on('keydown', function(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            const cmd = (this.textContent || '').trim();
            history.append(`<div class="term-line"><span class="term-prompt">guest@portfolio ~ %</span> ${cmd}</div>`);
            this.textContent = '';
            processCommand(cmd);
            output.scrollTop(output[0].scrollHeight);
        }
    });

    // Strip formatting from pastes so we get plain text only
    input.on('paste', function(e) {
        e.preventDefault();
        const text = (e.originalEvent || e).clipboardData.getData('text/plain').replace(/\r?\n/g, ' ');
        document.execCommand('insertText', false, text);
    });

    // Auto-ejecutar comando 'help' al abrir la terminal
    setTimeout(() => {
        processCommand('help');
        output.scrollTop(output[0].scrollHeight);
    }, 100);

    function processCommand(cmd) {
        const args = cmd.split(' ');
        let response = '';
        switch(args[0].toLowerCase()) {
            case 'help': response = t('availableCommands'); break;
            case 'clear': history.empty(); return;
            case 'ls': response = 'Pomo<span class="Apple-converted-space">  </span>WaldenVibes<span class="Apple-converted-space">  </span>VORTH<span class="Apple-converted-space">  </span>TeddyFeels<span class="Apple-converted-space">  </span>Alba<span class="Apple-converted-space">  </span>Lumina'; break;
            case 'whoami': response = `Christian Arzaluz - ${t('iosDeveloperTitle')}`; break;
            case 'date': response = new Date().toString(); break;
            case 'echo': response = args.slice(1).join(' '); break;
            case 'linkedin':
                response = t('openingLinkedIn');
                window.open('https://www.linkedin.com/in/christian-arzaluz/', '_blank');
                break;
            case 'mail': response = 'christian.arzaluz@gmail.com'; break;
            case '': return;
            default: response = `${t('commandNotFound')}: ${args[0]}`;
        }
        history.append(`<div class="term-line">${response}</div>`);
    }
}

// 4. CALCULATOR
function renderCalculator(container) {
    container.html(`
        <div class="calc-app">
            <input type="text" id="calc-display" value="0" readonly>
            <div class="calc-grid">
                <button class="calc-btn c-top" onclick="calcClear()">AC</button>
                <button class="calc-btn c-top" onclick="calcOp('+-')">+/-</button>
                <button class="calc-btn c-top" onclick="calcOp('%')">%</button>
                <button class="calc-btn c-op" onclick="calcOp('/')">÷</button>
                <button class="calc-btn c-num" onclick="calcNum(7)">7</button>
                <button class="calc-btn c-num" onclick="calcNum(8)">8</button>
                <button class="calc-btn c-num" onclick="calcNum(9)">9</button>
                <button class="calc-btn c-op" onclick="calcOp('*')">×</button>
                <button class="calc-btn c-num" onclick="calcNum(4)">4</button>
                <button class="calc-btn c-num" onclick="calcNum(5)">5</button>
                <button class="calc-btn c-num" onclick="calcNum(6)">6</button>
                <button class="calc-btn c-op" onclick="calcOp('-')">−</button>
                <button class="calc-btn c-num" onclick="calcNum(1)">1</button>
                <button class="calc-btn c-num" onclick="calcNum(2)">2</button>
                <button class="calc-btn c-num" onclick="calcNum(3)">3</button>
                <button class="calc-btn c-op" onclick="calcOp('+')">+</button>
                <button class="calc-btn c-num c-zero" onclick="calcNum(0)">0</button>
                <button class="calc-btn c-num" onclick="calcNum('.')">.</button>
                <button class="calc-btn c-op" onclick="calcEq()">=</button>
            </div>
        </div>
    `);
}

let calcCur = '0', calcPrev = null, calcOper = null, newNum = true, calcError = false;
const updateDisp = () => {
    if (calcError) {
        $('#calc-display').val(t('calcUndefined'));
        return;
    }
    // Formatear la salida
    let parts = calcCur.split('.');
    parts[0] = parseFloat(parts[0]).toLocaleString();
    $('#calc-display').val(parts.join('.'));
};
window.calcNum = (num) => {
    if (calcError) calcClear();
    if (num === '.' && calcCur.includes('.')) return;
    if(newNum) { calcCur = num.toString(); newNum = false; } else { calcCur = calcCur === '0' ? num.toString() : calcCur + num; }
    // Limitar longitud para que no se desborde
    if (calcCur.length > 15) calcCur = calcCur.substring(0, 15);
    updateDisp();
};
window.calcOp = (op) => {
    if (calcError) return;
    if (op === '+-') {
        calcCur = (parseFloat(calcCur) * -1).toString();
        updateDisp();
        return;
    }
    if (op === '%') {
        calcCur = (parseFloat(calcCur) / 100).toString();
        updateDisp();
        return;
    }
    if (!newNum) {
         calcEq(); // Calcular el resultado anterior si se encadenan operaciones
    }
    calcPrev = parseFloat(calcCur);
    calcOper = op;
    newNum = true;
};
window.calcClear = () => { calcCur='0'; calcPrev=null; calcOper=null; newNum=true; calcError=false; updateDisp(); };
window.calcEq = () => {
    if(calcOper && !newNum) {
        const cur = parseFloat(calcCur);
        let result;
        switch(calcOper){
            case '+': result = calcPrev + cur; break;
            case '-': result = calcPrev - cur; break;
            case '*': result = calcPrev * cur; break;
            case '/': result = calcPrev / cur; break;
        }
        if (!isFinite(result)) {
            calcError = true;
            calcOper = null; newNum = true;
            updateDisp();
            return;
        }
        calcCur = result.toString();
        calcOper = null; newNum = true; updateDisp();
    }
};

// 5. SAFARI (Error corregido)
function renderSafari(container) {
    container.html(`
        <div class="safari-app">
            <div class="safari-bar">
                <i class="fas fa-chevron-left" style="color:#888;"></i>
                <i class="fas fa-chevron-right" style="color:#888;"></i>
                <i class="fas fa-redo" style="color:#555; font-size:12px;"></i>
                <input type="text" class="url-bar" value="https://en.wikipedia.org/wiki/MacOS" id="safari-url">
                <i class="fas fa-share-square" style="color:#555;"></i>
            </div>
            <iframe src="https://en.wikipedia.org/wiki/MacOS" class="safari-frame" id="safari-frame" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>
        </div>
    `);
    $('#safari-url').on('keypress', function(e) {
        if(e.which == 13) { // 13 es la tecla Enter
            let url = this.value;
            if(!url.startsWith('http')) url = 'https://' + url;

            // Nota: Muchos sitios modernos (como Google, LinkedIn, GitHub) bloquean ser cargados en un iframe.
            // Wikipedia funciona. Para otros sitios, se necesitaría un proxy, lo cual es más complejo.
            $('#safari-frame').attr('src', url);
        }
    });
}

// --- Infrastructure ---

// Clock
function updateClock() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(t('clockLocale'), { weekday: 'short', month: 'short', day: 'numeric' });
    const timeStr = now.toLocaleTimeString(t('clockLocale'), { hour: 'numeric', minute: '2-digit', hour12: true });
    $('#clock').text(`${dateStr} ${timeStr}`);
}
setInterval(updateClock, 1000);
updateClock();

// Battery (if supported)
if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
        $('#battery-level').text(Math.round(battery.level * 100) + '%');
    });
}

// 0. FINDER APP
function renderFinder(container) {
    container.html(`
        <div class="finder-layout">
            <div class="finder-sidebar">
                <div style="font-size:10px; color:#888; padding-left:10px; margin-top:10px;">${t('favorites')}</div>
                <div class="sidebar-item" onclick="navFinder(['Desktop'])"><i class="fas fa-desktop"></i> ${t('desktop')}</div>
                <div class="sidebar-item" onclick="navFinder(['Documents'])"><i class="fas fa-file-alt"></i> ${t('documents')}</div>
                <div class="sidebar-item" onclick="navFinder(['Downloads'])"><i class="fas fa-download"></i> ${t('downloads')}</div>
            </div>
            <div class="finder-main">
                <div style="margin-bottom:10px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="color:#888; font-size:12px;">
                        <i class="fas fa-chevron-left" onclick="navigateBack()" style="cursor:pointer;"></i>
                        <i class="fas fa-chevron-right" style="opacity:0.3;"></i>
                        &nbsp; ${currentPath.join(' > ')}
                    </div>
                    <div style="display: flex; gap: 5px;">
                        <button class="text-tool" onclick="createNewFolder()" style="font-size: 11px; padding: 3px 8px;">
                            <i class="fas fa-folder-plus"></i> ${t('newFolder')}
                        </button>
                        <button class="text-tool" onclick="createNewFile()" style="font-size: 11px; padding: 3px 8px;">
                            <i class="fas fa-file-plus"></i> ${t('newFile')}
                        </button>
                    </div>
                </div>
                <div class="finder-grid" id="finder-grid"></div>
            </div>
        </div>
    `);
    updateFinderGrid();
}

window.navFinder = function(path) {
    currentPath = path;
    renderFinder($('#content-finder'));
}

function updateFinderGrid() {
    const grid = $('#finder-grid');
    grid.empty();

    let target = fileSystem;
    currentPath.forEach(p => target = target[p] ? target[p].children : target);

    if(!target) return;

    Object.keys(target).forEach(key => {
        const item = target[key];
        let icon = 'fa-folder folder';
        if(item.type === 'text') icon = 'fa-file-alt text';
        if(item.type === 'img') icon = 'fa-file-image img';
        if(item.type === 'pdf') icon = 'fa-file-pdf text';

        const el = $(`
            <div class="file-item" draggable="true">
                <i class="fas ${icon} file-icon"></i>
                <div class="file-name">${key}</div>
            </div>
        `);

        el[0].addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('application/x-finder-file',
                JSON.stringify({ fileName: key, path: [...currentPath] }));
            el.addClass('dragging');
        });
        el[0].addEventListener('dragend', () => el.removeClass('dragging'));

        el.on('dblclick', () => {
            if(item.type === 'folder') {
                currentPath.push(key);
                renderFinder($('#content-finder'));
            } else if (item.type === 'text') {
                wm.openApp('textedit');
                setTimeout(() => $('#text-area').val(localized(item.content)), 200);
            } else if (item.type === 'img') {
                openPreview(key, item.src, 'img');
            } else if (item.type === 'pdf') {
                openPreview(key, item.src, 'pdf');
            }
        });

        el.on('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showFinderContextMenu(e.clientX, e.clientY, key, item);
        });

        grid.append(el);
    });
}

function showFinderContextMenu(x, y, fileName, item) {
    $('.finder-context-menu').remove();

    const menu = $(`
        <div class="finder-context-menu" style="position: absolute; background: rgba(40,40,40,0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 5px 0; width: 180px; z-index: 99999; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;">
                <i class="fas fa-folder-open"></i> ${t('open')}
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;">
                <i class="fas fa-edit"></i> ${t('rename')}
            </div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;">
                <i class="fas fa-copy"></i> ${t('duplicate')}
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer; color: #ff5f56;">
                <i class="fas fa-trash"></i> ${t('moveToTrash')}
            </div>
        </div>
    `).css({ top: y + 'px', left: x + 'px' });

    $('body').append(menu);

    menu.find('.ctx-item:eq(0)').on('click', () => {
        if(item.type === 'folder') {
            currentPath.push(fileName);
            renderFinder($('#content-finder'));
        } else if (item.type === 'text') {
            wm.openApp('textedit');
            setTimeout(() => $('#text-area').val(localized(item.content)), 200);
        }
        menu.remove();
    });

    menu.find('.ctx-item:eq(1)').on('click', () => {
        const newName = prompt(t('newName'), fileName);
        if(newName && newName !== fileName) {
            renameFile(fileName, newName);
        }
        menu.remove();
    });

    menu.find('.ctx-item:eq(2)').on('click', () => {
        duplicateFile(fileName, item);
        menu.remove();
    });

    menu.find('.ctx-item:eq(3)').on('click', () => {
        deleteFile(fileName, currentPath);
        menu.remove();
    });

    menu.find('.ctx-item').on('mouseenter', function() {
        $(this).css('background', 'var(--accent)');
    }).on('mouseleave', function() {
        $(this).css('background', 'transparent');
    });

    $(document).one('click', () => menu.remove());
}

window.navigateBack = function() {
    if(currentPath.length > 1) {
        currentPath.pop();
        renderFinder($('#content-finder'));
    }
};

window.createNewFolder = function() {
    const folderName = prompt(t('folderName'));
    if(!folderName) return;

    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    if(target[folderName]) {
        alert(t('folderExists'));
        return;
    }

    target[folderName] = { type: 'folder', children: {} };
    updateFinderGrid();
};

window.createNewFile = function() {
    const fileName = prompt(t('fileName'));
    if(!fileName) return;

    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    if(target[fileName]) {
        alert(t('fileExists'));
        return;
    }

    let fileType = 'text';
    if(fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.endsWith('.gif')) {
        fileType = 'img';
    }

    target[fileName] = {
        type: fileType,
        content: fileType === 'text' ? '' : undefined,
        src: fileType === 'img' ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ccc" width="100" height="100"/%3E%3C/svg%3E' : undefined
    };

    updateFinderGrid();
};

function renameFile(oldName, newName) {
    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    if(target[newName]) {
        alert(t('fileExists'));
        return;
    }

    target[newName] = target[oldName];
    delete target[oldName];
    updateFinderGrid();
}

function duplicateFile(fileName, item) {
    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    let copyName = fileName;
    let counter = 1;

    while(target[copyName]) {
        const parts = fileName.split('.');
        if(parts.length > 1) {
            const ext = parts.pop();
            copyName = parts.join('.') + ' ' + t('duplicateSuffix') + (counter > 1 ? ' ' + counter : '') + '.' + ext;
        } else {
            copyName = fileName + ' ' + t('duplicateSuffix') + (counter > 1 ? ' ' + counter : '');
        }
        counter++;
    }

    target[copyName] = JSON.parse(JSON.stringify(item));
    updateFinderGrid();
}

// TEXTEDIT APP
function renderTextEdit(container) {
    container.html(`
        <div class="textedit-app">
            <div class="text-toolbar">
                <select class="text-tool" id="font-family">
                    <option value="Inter">Helvetica</option>
                    <option value="Courier New">Courier</option>
                    <option value="Times New Roman">Times</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Arial">Arial</option>
                </select>
                <select class="text-tool" id="font-size">
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                </select>
                <button class="text-tool" id="btn-bold"><i class="fas fa-bold"></i></button>
                <button class="text-tool" id="btn-italic"><i class="fas fa-italic"></i></button>
                <button class="text-tool" id="btn-underline"><i class="fas fa-underline"></i></button>
                <span style="border-left: 1px solid #555; height: 20px; margin: 0 5px;"></span>
                <button class="text-tool" id="btn-save"><i class="fas fa-save"></i> ${t('save')}</button>
                <button class="text-tool" id="btn-new"><i class="fas fa-file"></i> ${t('new')}</button>
            </div>
            <textarea id="text-area" placeholder="${t('startTyping')}" style="font-family: Inter; font-size: 14px;"></textarea>
        </div>
    `);

    $('#font-family').on('change', function() {
        $('#text-area').css('font-family', this.value);
    });

    $('#font-size').on('change', function() {
        $('#text-area').css('font-size', this.value + 'px');
    });

    let isBold = false, isItalic = false, isUnderline = false;

    $('#btn-bold').on('click', function() {
        isBold = !isBold;
        $('#text-area').css('font-weight', isBold ? 'bold' : 'normal');
        $(this).css('background', isBold ? '#555' : '#444');
    });

    $('#btn-italic').on('click', function() {
        isItalic = !isItalic;
        $('#text-area').css('font-style', isItalic ? 'italic' : 'normal');
        $(this).css('background', isItalic ? '#555' : '#444');
    });

    $('#btn-underline').on('click', function() {
        isUnderline = !isUnderline;
        $('#text-area').css('text-decoration', isUnderline ? 'underline' : 'none');
        $(this).css('background', isUnderline ? '#555' : '#444');
    });

    $('#btn-new').on('click', function() {
        if(confirm(t('createNewDoc'))) {
            $('#text-area').val('');
        }
    });

    $('#btn-save').on('click', function() {
        const content = $('#text-area').val();
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = t('textEditDefaultFileName');
        a.click();
        URL.revokeObjectURL(url);
    });
}

// SKETCH/PAINT APP
let canvas, ctx, painting = false;
function renderPaint(container) {
    container.html(`
        <div class="paint-app">
            <div class="paint-toolbar">
                <label style="color:#333; font-size:11px; display:flex; align-items:center; gap:5px;">
                    <i class="fas fa-palette"></i>
                    <input type="color" id="p-color" value="#000000" style="width:40px; height:25px; border:none; border-radius:4px; cursor:pointer;">
                </label>
                <label style="color:#333; font-size:11px; display:flex; align-items:center; gap:5px;">
                    ${t('paintSizeLabel')}: <span id="size-label">5</span>px
                    <input type="range" id="p-size" min="1" max="50" value="5" style="width:80px;">
                </label>
                <button class="text-tool" id="p-brush"><i class="fas fa-paintbrush"></i> ${t('brush')}</button>
                <button class="text-tool" id="p-eraser"><i class="fas fa-eraser"></i> ${t('eraser')}</button>
                <span style="border-left: 1px solid #ccc; height: 20px; margin: 0 5px;"></span>
                <button class="text-tool" id="p-rectangle"><i class="fas fa-square"></i> ${t('rectangle')}</button>
                <button class="text-tool" id="p-circle"><i class="fas fa-circle"></i> ${t('circle')}</button>
                <button class="text-tool" id="p-line"><i class="fas fa-minus"></i> ${t('line')}</button>
                <span style="border-left: 1px solid #ccc; height: 20px; margin: 0 5px;"></span>
                <button class="text-tool" onclick="clearCanvas()"><i class="fas fa-trash"></i> ${t('clean')}</button>
                <button class="text-tool" id="p-download"><i class="fas fa-download"></i> ${t('save')}</button>
            </div>
            <div style="flex:1; overflow:hidden; position:relative;">
                <canvas id="paint-canvas"></canvas>
            </div>
        </div>
    `);

    setTimeout(initCanvas, 100);
}

function initCanvas() {
    canvas = document.getElementById('paint-canvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    resizeCanvas();

    let color = '#000000';
    let size = 5;
    let mode = 'brush';
    let startX, startY;
    let snapshot;

    $('#p-color').on('change', function() { color = this.value; });
    $('#p-size').on('input', function() {
        size = this.value;
        $('#size-label').text(size);
    });

    const resetToolButtons = () => {
        $('.text-tool').css('background', '#444');
    };

    $('#p-brush').on('click', function() {
        mode = 'brush';
        resetToolButtons();
        $(this).css('background', '#555');
    });

    $('#p-eraser').on('click', function() {
        mode = 'erase';
        resetToolButtons();
        $(this).css('background', '#555');
    });

    $('#p-rectangle').on('click', function() {
        mode = 'rectangle';
        resetToolButtons();
        $(this).css('background', '#555');
    });

    $('#p-circle').on('click', function() {
        mode = 'circle';
        resetToolButtons();
        $(this).css('background', '#555');
    });

    $('#p-line').on('click', function() {
        mode = 'line';
        resetToolButtons();
        $(this).css('background', '#555');
    });

    $('#p-download').on('click', function() {
        const link = document.createElement('a');
        link.download = 'dibujo.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    $('#p-brush').css('background', '#555');

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function startPosition(e) {
        painting = true;
        const pos = getMousePos(e);
        startX = pos.x;
        startY = pos.y;

        snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if(mode === 'brush' || mode === 'erase') {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
        }
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        const pos = getMousePos(e);

        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.strokeStyle = mode === 'erase' ? '#ffffff' : color;
        ctx.fillStyle = color;

        if(mode === 'brush') {
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else if(mode === 'erase') {
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else if(mode === 'rectangle') {
            ctx.putImageData(snapshot, 0, 0);
            const width = pos.x - startX;
            const height = pos.y - startY;
            ctx.strokeRect(startX, startY, width, height);
        } else if(mode === 'circle') {
            ctx.putImageData(snapshot, 0, 0);
            const radius = Math.sqrt(Math.pow(pos.x - startX, 2) + Math.pow(pos.y - startY, 2));
            ctx.beginPath();
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
            ctx.stroke();
        } else if(mode === 'line') {
            ctx.putImageData(snapshot, 0, 0);
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
    }

    // Mouse events
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', finishedPosition);

    // Touch events for mobile
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });

    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        canvas.dispatchEvent(mouseEvent);
    });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    });
}

window.resizeCanvas = function() {
    if(!canvas) return;
    const parent = canvas.parentElement;
    const imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0,0);
}

window.clearCanvas = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// SETTINGS APP
function renderSettings(container) {
    container.html(`
        <div class="settings-app">
            <div style="display:flex; align-items:center; gap:15px; width:100%; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px; margin-bottom: 20px;">
                <div style="width:60px; height:60px; background:#ccc; border-radius:50%; display:flex; justify-content:center; align-items:center; font-size:30px; color:#555;"><i class="fas fa-user"></i></div>
                <div><div style="font-weight:600; font-size:16px;">Christian Arzaluz</div><div style="font-size:12px; color:#aaa;">${t('iosDeveloperTitle')}</div></div>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">${t('language')}</div>
            <div style="width: 100%; display: flex; gap: 10px; margin-bottom: 20px;">
                <button class="text-tool lang-btn ${currentLang === 'es' ? 'active' : ''}" style="flex: 1;" onclick="updateLanguage('es')" data-lang="es">
                    <i class="fas fa-globe"></i> Español
                </button>
                <button class="text-tool lang-btn ${currentLang === 'en' ? 'active' : ''}" style="flex: 1;" onclick="updateLanguage('en')" data-lang="en">
                    <i class="fas fa-globe"></i> English
                </button>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">${t('wallpapers')}</div>
            <div class="wall-grid" style="margin-bottom: 20px;">
                ${wallpapers.map(w => {
                    const thumb = wallpaperThumbUrl(w, getEffectiveAppearance());
                    const selected = w.id === currentWallpaperId ? 'selected' : '';
                    return `<div class="wall-thumb ${selected}" data-wall-id="${w.id}" title="${w.name}" style="background-image: url('${thumb}'); background-size: cover; background-position: center;" onclick="changeWall('${w.id}')"></div>`;
                }).join('')}
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">${t('appearance')}</div>
            <div style="width: 100%; display: flex; gap: 10px; margin-bottom: 20px;">
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('light')"><i class="fas fa-sun"></i> ${t('light')}</button>
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('dark')"><i class="fas fa-moon"></i> ${t('dark')}</button>
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('auto')"><i class="fas fa-adjust"></i> ${t('auto')}</button>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">${t('systemInfo')}</div>
            <div style="width: 100%; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; font-size: 12px; color: #aaa;">
                <div style="margin-bottom: 8px;"><strong>${t('macOSVersion')}:</strong> Portfolio Edition 1.0</div>
                <div style="margin-bottom: 8px;"><strong>${t('browser')}:</strong> <span id="browser-info"></span></div>
                <div style="margin-bottom: 8px;"><strong>${t('resolution')}:</strong> <span id="screen-info"></span></div>
                <div><strong>${t('memory')}:</strong> <span id="memory-info">${t('unknown')}</span></div>
            </div>
        </div>
    `);

    $('#browser-info').text(navigator.userAgent.split(' ').slice(-1)[0]);
    $('#screen-info').text(`${window.screen.width} × ${window.screen.height}`);

    if(navigator.deviceMemory) {
        $('#memory-info').text(`${navigator.deviceMemory} GB`);
    }
}

window.changeWall = function(id) {
    applyWallpaper(id, true);
    stopWallpaperRotation();
};

window.setAppearance = function(mode) {
    currentAppearance = mode;
    localStorage.setItem('appearance', mode);
    const eff = getEffectiveAppearance();
    if (eff === 'light') {
        $(':root').css({
            '--window-bg': 'rgba(240, 240, 245, 0.85)',
            '--window-header': '#f0f0f5',
            '--text-color': '#000000'
        });
    } else {
        $(':root').css({
            '--window-bg': 'rgba(30, 30, 32, 0.85)',
            '--window-header': '#2d2d2d',
            '--text-color': '#ffffff'
        });
    }
    if (currentWallpaperId) applyWallpaper(currentWallpaperId, false);
};

// TRASH APP
function renderTrash(container) {
    const itemCount = Object.keys(trashItems).length;

    if(itemCount === 0) {
        container.html(`
            <div style="padding: 40px; text-align: center; color: #aaa;">
                <i class="fas fa-trash fa-4x" style="margin-bottom: 20px; opacity: 0.3;"></i>
                <div style="font-size: 18px; font-weight: 500;">${t('trashEmpty')}</div>
                <div style="font-size: 12px; margin-top: 10px;">${t('trashEmptyDesc')}</div>
            </div>
        `);
        return;
    }

    container.html(`
        <div class="finder-layout">
            <div style="padding: 15px; background: rgba(50,50,50,0.3); border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #aaa; font-size: 12px;">${itemCount} ${t('itemsInTrash')}</div>
                <button class="text-tool" onclick="emptyTrash()" style="background: #ff5f56; color: white;">
                    <i class="fas fa-trash"></i> ${t('emptyTrash')}
                </button>
            </div>
            <div class="finder-main">
                <div class="finder-grid" id="trash-grid"></div>
            </div>
        </div>
    `);

    updateTrashGrid();
}

function updateTrashGrid() {
    const grid = $('#trash-grid');
    grid.empty();

    Object.keys(trashItems).forEach(itemName => {
        const item = trashItems[itemName];
        let icon = 'fa-folder folder';
        if(item.data.type === 'text') icon = 'fa-file-alt text';
        if(item.data.type === 'img') icon = 'fa-file-image img';

        const el = $(`
            <div class="file-item">
                <i class="fas ${icon} file-icon"></i>
                <div class="file-name">${itemName}</div>
            </div>
        `);

        el.on('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showTrashContextMenu(e.clientX, e.clientY, itemName);
        });

        el.on('dblclick', () => {
            alert(t('inTrash').replace('{item}', itemName));
        });

        grid.append(el);
    });
}

function showTrashContextMenu(x, y, itemName) {
    const menu = $(`
        <div style="position: absolute; background: rgba(40,40,40,0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 5px 0; width: 180px; z-index: 99999; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;" id="restore-item">
                <i class="fas fa-undo"></i> ${t('restore')}
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer; color: #ff5f56;" id="delete-permanent">
                <i class="fas fa-times"></i> ${t('deletePermanently')}
            </div>
        </div>
    `).css({ top: y + 'px', left: x + 'px' });

    $('body').append(menu);

    menu.find('#restore-item').on('click', () => {
        restoreFromTrash(itemName);
        menu.remove();
    });

    menu.find('#delete-permanent').on('click', () => {
        if(confirm(t('confirmDelete').replace('{item}', itemName))) {
            delete trashItems[itemName];
            renderTrash($('#content-trash'));
            wm.updateTrashIcon();
        }
        menu.remove();
    });

    menu.find('.ctx-item').on('mouseenter', function() {
        $(this).css('background', 'var(--accent)');
    }).on('mouseleave', function() {
        $(this).css('background', 'transparent');
    });

    $(document).one('click', () => menu.remove());
}

window.emptyTrash = function() {
    if(confirm(t('confirmEmptyTrash'))) {
        trashItems = {};
        renderTrash($('#content-trash'));
        wm.updateTrashIcon();
    }
};

window.deleteFile = function(fileName, path) {
    trashItems[fileName] = {
        data: getFileFromPath(path, fileName),
        originalPath: [...path]
    };

    let target = fileSystem;
    path.forEach(p => target = target[p].children);
    delete target[fileName];

    if($('#content-finder').length) {
        updateFinderGrid();
    }
    wm.updateTrashIcon();
};

function restoreFromTrash(itemName) {
    const item = trashItems[itemName];
    if(!item) return;

    let target = fileSystem;
    item.originalPath.forEach(p => {
        if(!target[p]) target[p] = { type: 'folder', children: {} };
        target = target[p].children;
    });

    target[itemName] = item.data;
    delete trashItems[itemName];

    if($('#content-trash').length) {
        renderTrash($('#content-trash'));
    }
    if($('#content-finder').length) {
        updateFinderGrid();
    }
    wm.updateTrashIcon();
}

function getFileFromPath(path, fileName) {
    let target = fileSystem;
    path.forEach(p => target = target[p].children);
    return target[fileName];
}

// PREVIEW APP (Vista Previa)
window.openPreview = function(fileName, fileSrc, fileType) {
    const previewId = 'preview-' + Date.now();

    wm.windows[previewId] = {
        id: previewId,
        name: fileName
    };

    const isMobile = window.innerWidth <= 768;
    let w, h, top, left;

    if (isMobile) {
        // Mobile: responsive sizes
        w = Math.min(window.innerWidth * 0.9, 450);
        h = Math.min(window.innerHeight * 0.75, 650);
        // Center on screen
        top = (window.innerHeight - h) / 2;
        left = (window.innerWidth - w) / 2;
    } else {
        // Desktop: fixed sizes
        w = 600;
        h = 500;
        top = 80 + (Object.keys(wm.windows).length * 20);
        left = 120 + (Object.keys(wm.windows).length * 20);
    }

    const winHTML = `
        <div class="window opening" id="win-${previewId}" style="width:${w}px; height:${h}px; top:${top}px; left:${left}px; z-index:${++wm.zIndexCounter}">
            <div class="window-header">
                <div class="traffic-lights">
                    <div class="t-btn close-btn"><i class="fas fa-times"></i></div>
                    <div class="t-btn min-btn"><i class="fas fa-minus"></i></div>
                    <div class="t-btn max-btn"><i class="fas fa-plus"></i></div>
                </div>
                <div class="window-title">${fileName}</div>
            </div>
            <div class="window-content" id="content-${previewId}"></div>
        </div>
    `;

    $('#windows-container').append(winHTML);
    const $win = $(`#win-${previewId}`);

    // Enable dragging on both desktop and mobile
    $win.draggable({
        handle: '.window-header',
        containment: '#desktop',
        start: () => wm.setActiveWindow(previewId),
        cancel: '.t-btn'
    });

    // Enable resizing with adjusted settings for mobile
    if (isMobile) {
        $win.resizable({
            minHeight: 300,
            minWidth: 280,
            maxHeight: window.innerHeight - 50,
            maxWidth: window.innerWidth - 20
        });
    } else {
        $win.resizable({
            minHeight: 300,
            minWidth: 400
        });
    }

    $win.on('mousedown touchstart', () => wm.setActiveWindow(previewId));

    $win.find('.close-btn').on('click', (e) => {
        e.stopPropagation();
        $win.fadeOut(150, function() { $(this).remove(); });
        delete wm.windows[previewId];
    });
    $win.find('.min-btn').on('click', (e) => { e.stopPropagation(); $win.fadeOut(200); });
    $win.find('.max-btn').on('click', (e) => {
        e.stopPropagation();
        if ($win.hasClass('maximized')) {
            $win.css({ top: $win.data('top'), left: $win.data('left'), width: $win.data('width'), height: $win.data('height') }).removeClass('maximized');
        } else {
            $win.data({ top: $win.css('top'), left: $win.css('left'), width: $win.css('width'), height: $win.css('height') });

            // Maximize with appropriate dimensions for device
            if (isMobile) {
                $win.css({ top: '5px', left: '5px', width: 'calc(100vw - 10px)', height: 'calc(100vh - 100px)' }).addClass('maximized');
            } else {
                $win.css({ top: '30px', left: '0', width: '100%', height: 'calc(100vh - 110px)' }).addClass('maximized');
            }
        }
    });

    setTimeout(() => $win.removeClass('opening'), 200);
    wm.setActiveWindow(previewId);

    const container = $(`#content-${previewId}`);

    if(fileType === 'img') {
        container.html(`
            <div class="preview-app">
                <img src="${fileSrc}" alt="${fileName}">
            </div>
        `);
    } else if(fileType === 'pdf') {
        container.html(`
            <div class="preview-app">
                <iframe src="${fileSrc}"></iframe>
            </div>
        `);
    }
};

// Mobile Touch Enhancements
function setupMobileTouchEnhancements() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Enable smooth scrolling for dock
        const dock = document.getElementById('dock');
        if (dock) {
            let isDown = false;
            let startX;
            let scrollLeft;

            dock.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - dock.offsetLeft;
                scrollLeft = dock.scrollLeft;
            });

            dock.addEventListener('touchend', () => {
                isDown = false;
            });

            dock.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.touches[0].pageX - dock.offsetLeft;
                const walk = (x - startX) * 2;
                dock.scrollLeft = scrollLeft - walk;
            });
        }

        // Prevent zoom on double tap for better UX
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
}

// Initial appearance + wallpaper (must run after window.setAppearance is defined)
setAppearance(currentAppearance);
initWallpaper();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentAppearance === 'auto') setAppearance('auto');
});

// Boot Sequence
$(window).on('load', () => {
    // Detect and set initial language
    currentLang = detectLanguage();
    updateLanguage(currentLang);

    $('.loading-progress').css('width', '100%');
    setTimeout(() => {
        $('#boot-screen').fadeOut(500, function(){ $(this).remove(); });
        // Setup mobile touch enhancements after boot
        setupMobileTouchEnhancements();
        // Auto abrir 'Sobre Mí' (que usa el id 'aboutme')
        setTimeout(() => wm.openApp('aboutme'), 600);
    }, 3200); // 3.2 segundos de arranque
});
