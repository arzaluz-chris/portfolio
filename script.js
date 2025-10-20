/**
 * macOS Portfolio - Main JavaScript
 * Christian Arzaluz - iOS Developer
 * Interactive macOS-style portfolio simulator
 */

// --- System Config & State ---

// DATOS DE TUS PROYECTOS (Extraídos del video y tus links)
const projects = {
    'pomo': {
        name: 'Pomo',
        icon: 'f2f2',
        description: 'Una aplicación minimalista de temporizador Pomodoro diseñada para aumentar tu productividad a través de sesiones estructuradas de trabajo y descanso. Pomo te ayuda a mantener el enfoque y gestionar tu tiempo de manera efectiva con una interfaz elegante y funcional.',
        features: [
            'Temporizadores personalizables (10-60 min para trabajo, 3-15 min para descansos)',
            'Flujo automático entre sesiones de trabajo y descanso',
            'Soporte para temporizador en segundo plano',
            'Notificaciones push y alertas de sonido',
            'Seguimiento de productividad diario y semanal con gráficas',
            'Contador de rachas para mantener la motivación',
            'Modo claro y oscuro automático',
            'Soporte para español e inglés'
        ],
        stack: ['Swift 5.0', 'SwiftUI', 'MVVM', 'SwiftData', 'Combine', 'UserNotifications', 'AVFoundation', 'Charts'],
        url: 'https://github.com/arzaluz-chris/Pomo'
    },
    'waldenvibes': {
        name: 'WaldenVibes',
        icon: 'f06c',
        description: 'Una aplicación minimalista desarrollada con SwiftUI que combina meditación y seguimiento emocional. WaldenVibes te ayuda a mantener un equilibrio mental y emocional a través de prácticas de mindfulness y registro de estados de ánimo.',
        features: [
            'Interfaz minimalista y zen con SwiftUI',
            'Seguimiento de emociones y estados de ánimo',
            'Ejercicios de meditación guiada',
            'Registro diario de bienestar personal',
            'Diseño enfocado en el bienestar mental',
            'Experiencia de usuario serena y relajante'
        ],
        stack: ['Swift', 'SwiftUI', 'iOS', 'Xcode'],
        url: 'https://github.com/arzaluz-chris/WaldenVibes'
    },
    'bishoptest': {
        name: 'BishopTest',
        icon: 'f0fa',
        description: 'Aplicación médica para iOS diseñada para profesionales de obstetricia que permite calcular e interpretar la Puntuación de Bishop, una herramienta clínica que ayuda a predecir la probabilidad de éxito en la inducción del parto.',
        features: [
            'Cálculo de puntuación Bishop basado en parámetros cervicales',
            'Modificadores clínicos de puntuación',
            'Recomendaciones médicas personalizadas',
            'Seguimiento del historial de pacientes',
            'Referencia de métodos de inducción del parto'
        ],
        stack: ['Swift', 'SwiftUI', 'MVVM', 'FileManager', 'iOS 17.0+', 'Xcode 15+'],
        url: 'https://github.com/arzaluz-chris/BishopTest'
    }
};

// APPS DEL DOCK (como en tu video)
const apps = [
    { id: 'finder', name: 'Finder', iconClass: 'icon-finder' },
    { id: 'aboutme', name: 'Sobre Mí', iconClass: 'icon-aboutme' },
    { id: 'safari', name: 'Safari', iconClass: 'icon-safari' },
    { id: 'terminal', name: 'Terminal', iconClass: 'icon-terminal' },
    { id: 'textedit', name: 'TextEdit', iconClass: 'icon-text' },
    { id: 'paint', name: 'Sketch', iconClass: 'icon-paint' },
    { id: 'calculator', name: 'Calculator', iconClass: 'icon-calc', htmlIcon: '<div></div><div></div><div></div><div></div>' },
    { id: 'settings', name: 'Settings', iconClass: 'icon-settings' },
    { id: 'pomo', name: 'Pomo', iconClass: 'icon-pomo' },
    { id: 'waldenvibes', name: 'WaldenVibes', iconClass: 'icon-walden' },
    { id: 'bishoptest', name: 'BishopTest', iconClass: 'icon-bishop' },
    { id: 'mail', name: 'Mail', iconClass: 'icon-mail' },
    { id: 'trash', name: 'Bin', iconClass: 'icon-trash', separator: true }
];

// Simulated File System
const fileSystem = {
    'Desktop': { type: 'folder', children: {
        'Welcome.txt': { type: 'text', content: 'Bienvenido a mi portafolio!\nEsta es una simulación de macOS construida con HTML, CSS y JavaScript.'},
        'Projects': { type: 'folder', children: {} },
        'MyPhoto.jpg': { type: 'img', src: 'assets/profile.png'}
    }},
    'Documents': { type: 'folder', children: {
        'CV.pdf': { type: 'pdf', src: 'assets/cv.pdf'},
        'Notes.txt': { type: 'text', content: 'Ideas para nuevos proyectos:\n- App de salud\n- Calculadora científica\n- Rastreador de hábitos'}
    }},
    'Downloads': { type: 'folder', children: {
        'README.txt': { type: 'text', content: 'Archivos descargados aparecerán aquí'},
        'Screenshot.jpg': { type: 'img', src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%235dade2" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="12"%3EScreenshot%3C/text%3E%3C/svg%3E'}
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
        this.setupDesktop();
    }

    initDock() {
        const dock = $('#dock');
        apps.forEach(app => {
            if(app.separator) dock.append('<div style="width:1px; height:40px; background:rgba(255,255,255,0.2); margin: 0 5px;"></div>');

            let iconHtml = app.htmlIcon ? app.htmlIcon : '';
            let el = $(`
                <div class="dock-item" id="dock-${app.id}" title="${app.name}">
                    <div class="dock-icon-svg ${app.iconClass}">${iconHtml}</div>
                    <div class="dock-dot"></div>
                </div>
            `);
            el.on('click', () => this.openApp(app.id));
            dock.append(el);
        });
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

        let windowId = appId;
        let config = appConfig;

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

        // Default dimensions based on app type
        let w = 640, h = 440; // Tamaño para 'Sobre Mí'
        if(id === 'calculator') { w = 250; h = 350; }
        if(id === 'terminal') { w = 500; h = 300; }
        if(id === 'safari') { w = 800; h = 600; }
        if(config.isProject) { w = 600; h = 500; } // Tamaño para ventanas de proyecto


        // Random position placement
        const top = 60 + (Object.keys(this.windows).length * 20);
        const left = 100 + (Object.keys(this.windows).length * 20);

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

        // Make interactive
        $win.draggable({ handle: '.window-header', containment: '#desktop', start: () => this.setActiveWindow(id) })
            .resizable({ minHeight: 200, minWidth: 250 })
            .on('mousedown', () => this.setActiveWindow(id));

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
        if ($win.hasClass('maximized')) {
            $win.css({ top: $win.data('top'), left: $win.data('left'), width: $win.data('width'), height: $win.data('height') }).removeClass('maximized');
        } else {
            $win.data({ top: $win.css('top'), left: $win.css('left'), width: $win.css('width'), height: $win.css('height') });
            $win.css({ top: '30px', left: '0', width: '100%', height: 'calc(100vh - 110px)' }).addClass('maximized');
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
            case 'mail': container.html('<div style="padding:20px; text-align:center; color:#aaa; font-size: 14px;">Contacto: <br><b style="color:white; font-size: 16px;">christian.arzaluz@gmail.com</b></div>'); break;
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
                    <h2>iOS Developer | Computer Science Student | General Physician</h2>
                </div>
            </div>
            <div class="profile-body">
                <p>¡Hola! Soy un desarrollador iOS apasionado por crear aplicaciones móviles que mejoran la vida de las personas. Actualmente estudio Ingeniería en Ciencias de la Computación en México y me especializo en desarrollo móvil con Swift y SwiftUI.</p>
                <p>Como médico general, combino mi experiencia clínica con el desarrollo de software para crear aplicaciones que resuelven problemas reales en salud y bienestar. Me encanta construir apps minimalistas, funcionales y con excelente experiencia de usuario.</p>

                <h3><i class="fas fa-code"></i> Lenguajes & Frameworks</h3>
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

                <h3><i class="fas fa-sitemap"></i> Arquitectura & Patrones</h3>
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

    container.html(`
        <div class="project-app">
            <h2><i class="fas fa-${project.icon}" style="color: var(--accent);"></i> ${project.name}</h2>
            <p>${project.description}</p>

            <h3><i class="fas fa-star"></i> Características Principales</h3>
            <ul>
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <h3><i class="fas fa-microchip"></i> Stack Tecnológico</h3>
            <ul class="tech-stack">
                ${project.stack.map(t => `<li>${t}</li>`).join('')}
            </ul>

            <a href="${project.url}" target="_blank" class="github-link">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        </div>
    `);
}

// 3. TERMINAL (Modificado como en tu video)
function renderTerminal(container) {
    container.html(`
        <div class="terminal-app" id="term-output">
            <div class="term-line">Last login: ${new Date().toLocaleString('en-US', {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'})} on ttys000</div>
            <div class="term-line">macOS Portfolio Edition [Version 1.0]</div>
            <br>
            <div id="term-history"></div>
            <div class="term-input-line">
                <span class="term-prompt">guest@portfolio ~ %</span>
                <input type="text" id="term-input" autocomplete="off" autofocus>
            </div>
        </div>
    `);

    const history = $('#term-history');
    const input = $('#term-input');
    const output = $('#term-output');

    container.on('click', () => input.focus());

    input.on('keydown', function(e) {
        if(e.key === 'Enter') {
            const cmd = this.value.trim();
            history.append(`<div class="term-line"><span class="term-prompt">guest@portfolio ~ %</span> ${cmd}</div>`);
            this.value = '';
            processCommand(cmd);
            output.scrollTop(output[0].scrollHeight);
        }
    });

    function processCommand(cmd) {
        const args = cmd.split(' ');
        let response = '';
        switch(args[0].toLowerCase()) {
            case 'help': response = 'Comandos disponibles: help, clear, ls, whoami, date, echo, linkedin, mail'; break;
            case 'clear': history.empty(); return;
            case 'ls': response = 'Pomo<span class="Apple-converted-space">  </span>WaldenVibes<span class="Apple-converted-space">  </span>BishopTest'; break;
            case 'whoami': response = 'Christian Arzaluz - iOS Developer'; break;
            case 'date': response = new Date().toString(); break;
            case 'echo': response = args.slice(1).join(' '); break;
            case 'linkedin':
                response = 'Abriendo LinkedIn...';
                window.open('https://www.linkedin.com/in/christian-arzaluz/', '_blank');
                break;
            case 'mail': response = 'christian.arzaluz@gmail.com'; break;
            case '': return;
            default: response = `zsh: command not found: ${args[0]}`;
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

let calcCur = '0', calcPrev = null, calcOper = null, newNum = true;
const updateDisp = () => {
    // Formatear la salida
    let parts = calcCur.split('.');
    parts[0] = parseFloat(parts[0]).toLocaleString();
    $('#calc-display').val(parts.join('.'));
};
window.calcNum = (num) => {
    if (num === '.' && calcCur.includes('.')) return;
    if(newNum) { calcCur = num.toString(); newNum = false; } else { calcCur = calcCur === '0' ? num.toString() : calcCur + num; }
    // Limitar longitud para que no se desborde
    if (calcCur.length > 15) calcCur = calcCur.substring(0, 15);
    updateDisp();
};
window.calcOp = (op) => {
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
window.calcClear = () => { calcCur='0'; calcPrev=null; calcOper=null; newNum=true; updateDisp(); };
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
    const dateStr = now.toLocaleDateString('es-MX', { weekday: 'short', month: 'short', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('es-MX', { hour: 'numeric', minute: '2-digit', hour12: true });
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
                <div style="font-size:10px; color:#888; padding-left:10px; margin-top:10px;">Favoritos</div>
                <div class="sidebar-item" onclick="navFinder(['Desktop'])"><i class="fas fa-desktop"></i> Desktop</div>
                <div class="sidebar-item" onclick="navFinder(['Documents'])"><i class="fas fa-file-alt"></i> Documents</div>
                <div class="sidebar-item" onclick="navFinder(['Downloads'])"><i class="fas fa-download"></i> Downloads</div>
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
                            <i class="fas fa-folder-plus"></i> Nueva Carpeta
                        </button>
                        <button class="text-tool" onclick="createNewFile()" style="font-size: 11px; padding: 3px 8px;">
                            <i class="fas fa-file-plus"></i> Nuevo Archivo
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
            <div class="file-item">
                <i class="fas ${icon} file-icon"></i>
                <div class="file-name">${key}</div>
            </div>
        `);

        el.on('dblclick', () => {
            if(item.type === 'folder') {
                currentPath.push(key);
                renderFinder($('#content-finder'));
            } else if (item.type === 'text') {
                wm.openApp('textedit');
                setTimeout(() => $('#text-area').val(item.content), 200);
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
                <i class="fas fa-folder-open"></i> Abrir
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;">
                <i class="fas fa-edit"></i> Renombrar
            </div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;">
                <i class="fas fa-copy"></i> Duplicar
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer; color: #ff5f56;">
                <i class="fas fa-trash"></i> Mover a Papelera
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
            setTimeout(() => $('#text-area').val(item.content), 200);
        }
        menu.remove();
    });

    menu.find('.ctx-item:eq(1)').on('click', () => {
        const newName = prompt('Nuevo nombre:', fileName);
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
    const folderName = prompt('Nombre de la carpeta:');
    if(!folderName) return;

    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    if(target[folderName]) {
        alert('Ya existe una carpeta con este nombre.');
        return;
    }

    target[folderName] = { type: 'folder', children: {} };
    updateFinderGrid();
};

window.createNewFile = function() {
    const fileName = prompt('Nombre del archivo (con extensión):');
    if(!fileName) return;

    let target = fileSystem;
    currentPath.forEach(p => target = target[p].children);

    if(target[fileName]) {
        alert('Ya existe un archivo con este nombre.');
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
        alert('Ya existe un archivo con este nombre.');
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
            copyName = parts.join('.') + ' copia' + (counter > 1 ? ' ' + counter : '') + '.' + ext;
        } else {
            copyName = fileName + ' copia' + (counter > 1 ? ' ' + counter : '');
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
                <button class="text-tool" id="btn-save"><i class="fas fa-save"></i> Guardar</button>
                <button class="text-tool" id="btn-new"><i class="fas fa-file"></i> Nuevo</button>
            </div>
            <textarea id="text-area" placeholder="Comienza a escribir..." style="font-family: Inter; font-size: 14px;"></textarea>
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
        if(confirm('¿Crear nuevo documento? Los cambios no guardados se perderán.')) {
            $('#text-area').val('');
        }
    });

    $('#btn-save').on('click', function() {
        const content = $('#text-area').val();
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documento.txt';
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
                    Tamaño: <span id="size-label">5</span>px
                    <input type="range" id="p-size" min="1" max="50" value="5" style="width:80px;">
                </label>
                <button class="text-tool" id="p-brush"><i class="fas fa-paintbrush"></i> Pincel</button>
                <button class="text-tool" id="p-eraser"><i class="fas fa-eraser"></i> Borrador</button>
                <span style="border-left: 1px solid #ccc; height: 20px; margin: 0 5px;"></span>
                <button class="text-tool" id="p-rectangle"><i class="fas fa-square"></i> Rectángulo</button>
                <button class="text-tool" id="p-circle"><i class="fas fa-circle"></i> Círculo</button>
                <button class="text-tool" id="p-line"><i class="fas fa-minus"></i> Línea</button>
                <span style="border-left: 1px solid #ccc; height: 20px; margin: 0 5px;"></span>
                <button class="text-tool" onclick="clearCanvas()"><i class="fas fa-trash"></i> Limpiar</button>
                <button class="text-tool" id="p-download"><i class="fas fa-download"></i> Guardar</button>
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

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', finishedPosition);
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
                <div><div style="font-weight:600; font-size:16px;">Christian Arzaluz</div><div style="font-size:12px; color:#aaa;">iOS Developer</div></div>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">Fondos de Pantalla</div>
            <div class="wall-grid" style="margin-bottom: 20px;">
                <div class="wall-thumb selected" style="background: linear-gradient(200deg, #a729f5, #5823d6, #092775, #1d6f9c);" onclick="changeWall(this)"></div>
                <div class="wall-thumb" style="background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);" onclick="changeWall(this)"></div>
                <div class="wall-thumb" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" onclick="changeWall(this)"></div>
                <div class="wall-thumb" style="background: linear-gradient(to right, #243949 0%, #517fa4 100%);" onclick="changeWall(this)"></div>
                <div class="wall-thumb" style="background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);" onclick="changeWall(this)"></div>
                <div class="wall-thumb" style="background: #000;" onclick="changeWall(this)"></div>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">Apariencia</div>
            <div style="width: 100%; display: flex; gap: 10px; margin-bottom: 20px;">
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('light')"><i class="fas fa-sun"></i> Claro</button>
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('dark')"><i class="fas fa-moon"></i> Oscuro</button>
                <button class="text-tool" style="flex: 1;" onclick="setAppearance('auto')"><i class="fas fa-adjust"></i> Auto</button>
            </div>

            <div style="align-self:flex-start; font-weight:600; margin-bottom: 10px;">Información del Sistema</div>
            <div style="width: 100%; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; font-size: 12px; color: #aaa;">
                <div style="margin-bottom: 8px;"><strong>Versión macOS:</strong> Portfolio Edition 1.0</div>
                <div style="margin-bottom: 8px;"><strong>Navegador:</strong> <span id="browser-info"></span></div>
                <div style="margin-bottom: 8px;"><strong>Resolución:</strong> <span id="screen-info"></span></div>
                <div><strong>Memoria:</strong> <span id="memory-info">Desconocida</span></div>
            </div>
        </div>
    `);

    $('#browser-info').text(navigator.userAgent.split(' ').slice(-1)[0]);
    $('#screen-info').text(`${window.screen.width} × ${window.screen.height}`);

    if(navigator.deviceMemory) {
        $('#memory-info').text(`${navigator.deviceMemory} GB`);
    }
}

window.changeWall = function(el) {
    $('.wall-thumb').removeClass('selected');
    $(el).addClass('selected');
    $('body').css('background', $(el).css('background'));
};

window.setAppearance = function(mode) {
    if(mode === 'light') {
        $(':root').css({
            '--window-bg': 'rgba(240, 240, 245, 0.85)',
            '--window-header': '#f0f0f5',
            '--text-color': '#000000'
        });
    } else if(mode === 'dark') {
        $(':root').css({
            '--window-bg': 'rgba(30, 30, 32, 0.85)',
            '--window-header': '#2d2d2d',
            '--text-color': '#ffffff'
        });
    } else {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setAppearance(darkMode ? 'dark' : 'light');
    }
};

// TRASH APP
function renderTrash(container) {
    const itemCount = Object.keys(trashItems).length;

    if(itemCount === 0) {
        container.html(`
            <div style="padding: 40px; text-align: center; color: #aaa;">
                <i class="fas fa-trash fa-4x" style="margin-bottom: 20px; opacity: 0.3;"></i>
                <div style="font-size: 18px; font-weight: 500;">La Papelera está Vacía</div>
                <div style="font-size: 12px; margin-top: 10px;">Los archivos eliminados aparecerán aquí</div>
            </div>
        `);
        return;
    }

    container.html(`
        <div class="finder-layout">
            <div style="padding: 15px; background: rgba(50,50,50,0.3); border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #aaa; font-size: 12px;">${itemCount} elemento(s) en la Papelera</div>
                <button class="text-tool" onclick="emptyTrash()" style="background: #ff5f56; color: white;">
                    <i class="fas fa-trash"></i> Vaciar Papelera
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
            alert(`"${itemName}" está en la Papelera. Restáuralo para abrirlo.`);
        });

        grid.append(el);
    });
}

function showTrashContextMenu(x, y, itemName) {
    const menu = $(`
        <div style="position: absolute; background: rgba(40,40,40,0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 5px 0; width: 180px; z-index: 99999; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer;" id="restore-item">
                <i class="fas fa-undo"></i> Restaurar
            </div>
            <div class="ctx-hr" style="border-top: 1px solid rgba(255,255,255,0.1); margin: 4px 0;"></div>
            <div class="ctx-item" style="padding: 6px 15px; font-size: 13px; cursor: pointer; color: #ff5f56;" id="delete-permanent">
                <i class="fas fa-times"></i> Eliminar Permanentemente
            </div>
        </div>
    `).css({ top: y + 'px', left: x + 'px' });

    $('body').append(menu);

    menu.find('#restore-item').on('click', () => {
        restoreFromTrash(itemName);
        menu.remove();
    });

    menu.find('#delete-permanent').on('click', () => {
        if(confirm(`¿Eliminar permanentemente "${itemName}"? Esta acción no se puede deshacer.`)) {
            delete trashItems[itemName];
            renderTrash($('#content-trash'));
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
    if(confirm('¿Vaciar la Papelera? Esto eliminará permanentemente todos los elementos.')) {
        trashItems = {};
        renderTrash($('#content-trash'));
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

    let w = 600, h = 500;
    const top = 80 + (Object.keys(wm.windows).length * 20);
    const left = 120 + (Object.keys(wm.windows).length * 20);

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

    $win.draggable({ handle: '.window-header', containment: '#desktop', start: () => wm.setActiveWindow(previewId) })
        .resizable({ minHeight: 300, minWidth: 400 })
        .on('mousedown', () => wm.setActiveWindow(previewId));

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
            $win.css({ top: '30px', left: '0', width: '100%', height: 'calc(100vh - 110px)' }).addClass('maximized');
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

// Boot Sequence
$(window).on('load', () => {
    $('.loading-progress').css('width', '100%');
    setTimeout(() => {
        $('#boot-screen').fadeOut(500, function(){ $(this).remove(); });
        // Auto abrir 'Sobre Mí' (que usa el id 'aboutme')
        setTimeout(() => wm.openApp('aboutme'), 600);
    }, 3200); // 3.2 segundos de arranque
});
