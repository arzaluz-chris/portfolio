/* ==========================================================================
   features.js — desktop features layered on top of script.js
   (menu bar menus, Spotlight, notifications, About This Mac, shortcuts,
   and Xcode).

   Relies on globals from script.js: wm, apps, projects, PROJECT_ORDER,
   LATEST_PROJECT, orderedProjects, projectShots, translations, t,
   currentLang, appDisplayName, wallpapers, applyWallpaper, setAppearance.
   ========================================================================== */
(function () {
    'use strict';

    // --- Strings ----------------------------------------------------------
    Object.assign(translations.es, {
        menuHelp: 'Ayuda',
        mAboutMac: 'Acerca de esta Mac',
        mSystemSettings: 'Configuración del Sistema…',
        mDownloadCV: 'Descargar CV',
        mRestart: 'Reiniciar…',
        mHide: 'Ocultar',
        mQuit: 'Salir',
        mNewFinder: 'Nueva ventana de Finder',
        mOpenTerminal: 'Abrir Terminal',
        mOpenXcode: 'Abrir Xcode',
        mCloseWindow: 'Cerrar ventana',
        mUndo: 'Deshacer',
        mRedo: 'Rehacer',
        mCopyLink: 'Copiar enlace del portafolio',
        mSpotlight: 'Buscar con Spotlight',
        mLightMode: 'Usar apariencia clara',
        mDarkMode: 'Usar apariencia oscura',
        mNextWallpaper: 'Siguiente fondo de pantalla',
        mMinimize: 'Minimizar',
        mZoom: 'Zoom',
        mCycle: 'Cambiar de ventana',
        mNoWindows: 'No hay ventanas abiertas',
        mShortcuts: 'Atajos de teclado',
        mAppsPage: 'Ver todas mis apps',
        mLinkCopied: 'Enlace copiado',
        spotlightPlaceholder: 'Búsqueda de Spotlight',
        spotApps: 'Mis apps',
        spotSystem: 'Aplicaciones',
        spotActions: 'Acciones',
        spotSuggestions: 'Sugerencias',
        spotNoResults: 'Sin resultados para',
        spotUses: 'Usa',
        spotHint: '↑↓ para moverte · ↩ para abrir · esc para cerrar',
        notifNow: 'ahora',
        notifLatestBody: 'Ya está disponible en el App Store. Prepara el ENARM con casos clínicos, repaso espaciado y simuladores.',
        notifShortcutsTitle: 'Atajos de teclado',
        notifShortcutsBody: '⌘K o / Spotlight · ⌥W cerrar ventana · ⌥M minimizar · ⌥` cambiar de ventana. (⌘W y ⌘Q los reserva tu navegador.)',
        aboutThisMac: 'Acerca de esta Mac',
        amSubtitle: 'Desarrollador iOS · Médico general',
        amChip: 'Chip',
        amChipValue: 'Medicina + Ingeniería en Sistemas',
        amApps: 'Apps publicadas',
        amAppsValue: 'en el App Store',
        amLatest: 'Último lanzamiento',
        amStack: 'Especialidad',
        amLocation: 'Ubicación',
        amLocationValue: 'México',
        amSeeApps: 'Ver mis apps'
    });
    Object.assign(translations.en, {
        menuHelp: 'Help',
        mAboutMac: 'About This Mac',
        mSystemSettings: 'System Settings…',
        mDownloadCV: 'Download CV',
        mRestart: 'Restart…',
        mHide: 'Hide',
        mQuit: 'Quit',
        mNewFinder: 'New Finder Window',
        mOpenTerminal: 'Open Terminal',
        mOpenXcode: 'Open Xcode',
        mCloseWindow: 'Close Window',
        mUndo: 'Undo',
        mRedo: 'Redo',
        mCopyLink: 'Copy Portfolio Link',
        mSpotlight: 'Search with Spotlight',
        mLightMode: 'Use Light Appearance',
        mDarkMode: 'Use Dark Appearance',
        mNextWallpaper: 'Next Wallpaper',
        mMinimize: 'Minimize',
        mZoom: 'Zoom',
        mCycle: 'Cycle Through Windows',
        mNoWindows: 'No open windows',
        mShortcuts: 'Keyboard Shortcuts',
        mAppsPage: 'See All My Apps',
        mLinkCopied: 'Link copied',
        spotlightPlaceholder: 'Spotlight Search',
        spotApps: 'My Apps',
        spotSystem: 'Applications',
        spotActions: 'Actions',
        spotSuggestions: 'Suggestions',
        spotNoResults: 'No results for',
        spotUses: 'Uses',
        spotHint: '↑↓ to move · ↩ to open · esc to close',
        notifNow: 'now',
        notifLatestBody: 'Now available on the App Store. Prepare for the ENARM with clinical cases, spaced repetition, and mock exams.',
        notifShortcutsTitle: 'Keyboard Shortcuts',
        notifShortcutsBody: '⌘K or / Spotlight · ⌥W close window · ⌥M minimize · ⌥` switch windows. (Your browser reserves ⌘W and ⌘Q.)',
        aboutThisMac: 'About This Mac',
        amSubtitle: 'iOS Developer · General Physician',
        amChip: 'Chip',
        amChipValue: 'Medicine + Computer Systems Engineering',
        amApps: 'Published apps',
        amAppsValue: 'on the App Store',
        amLatest: 'Latest release',
        amStack: 'Specialty',
        amLocation: 'Location',
        amLocationValue: 'Mexico',
        amSeeApps: 'See my apps'
    });

    // --- Helpers ----------------------------------------------------------
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const fold = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const isPhone = () => window.innerWidth <= 768;
    const isTyping = el => el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
    const CV_URL = 'assets/cv.pdf';
    const APPS_PAGE_URL = 'portfolio/';

    function activeWindowId() {
        const $w = $('.window:visible').not('.inactive').first();
        return $w.length ? $w.attr('id').replace(/^win-/, '') : null;
    }

    // Open (or focus) a window whose content is rendered here, not in script.js.
    function openSystemWindow(id, opts) {
        if (wm.windows[id]) {
            if ($(`#win-${id}`).is(':hidden')) wm.restoreWindow(id); else wm.setActiveWindow(id);
            return;
        }
        wm.createWindow(id, { id, name: t(opts.titleKey), titleKey: opts.titleKey, render: opts.render, size: opts.size });
    }
    window.openSystemWindow = openSystemWindow;

    function downloadCV() {
        const a = document.createElement('a');
        a.href = CV_URL; a.download = 'Christian-Arzaluz-CV.pdf';
        document.body.appendChild(a); a.click(); a.remove();
    }

    // --- Notifications ----------------------------------------------------
    function notify({ icon, app, title, body, onClick, timeout = 9000 }) {
        let $stack = $('#notif-stack');
        if (!$stack.length) $stack = $('<div id="notif-stack" aria-live="polite"></div>').appendTo('body');
        const $n = $(`
            <div class="mac-notif" role="status" tabindex="0">
                <button class="mn-close" aria-label="${esc(t('close'))}"><i class="fas fa-times"></i></button>
                <img class="mn-icon" src="${esc(icon)}" alt="">
                <div class="mn-text">
                    <div class="mn-head"><span>${esc(app)}</span><span>${esc(t('notifNow'))}</span></div>
                    <div class="mn-title">${esc(title)}</div>
                    <div class="mn-body">${esc(body)}</div>
                </div>
            </div>`).appendTo($stack);
        const dismiss = () => { $n.addClass('leaving'); setTimeout(() => $n.remove(), 250); };
        $n.find('.mn-close').on('click', e => { e.stopPropagation(); dismiss(); });
        $n.on('click keydown', e => {
            if (e.type === 'keydown' && e.key !== 'Enter') return;
            if (onClick) onClick();
            dismiss();
        });
        if (timeout) setTimeout(dismiss, timeout);
        return dismiss;
    }
    window.macNotify = notify;

    function announceLatestRelease() {
        try { if (sessionStorage.getItem('latestNotified')) return; sessionStorage.setItem('latestNotified', '1'); } catch (e) { /* private mode */ }
        const p = projects[LATEST_PROJECT];
        notify({
            icon: p.dockIcon,
            app: 'App Store',
            title: `${p.name} — ${t('latestRelease')}`,
            body: t('notifLatestBody'),
            onClick: () => wm.openApp(LATEST_PROJECT)
        });
    }

    // --- About This Mac ---------------------------------------------------
    function renderAboutMac(container) {
        const latest = projects[LATEST_PROJECT];
        container.html(`
            <div class="about-mac">
                <img class="am-photo" src="assets/avatar.jpg" alt="Christian Arzaluz" width="120" height="120">
                <h1>Christian Arzaluz</h1>
                <p class="am-sub">${esc(t('amSubtitle'))}</p>
                <dl class="am-specs">
                    <dt>${esc(t('amChip'))}</dt><dd>${esc(t('amChipValue'))}</dd>
                    <dt>${esc(t('amApps'))}</dt><dd>${PROJECT_ORDER.length} ${esc(t('amAppsValue'))}</dd>
                    <dt>${esc(t('amLatest'))}</dt><dd>${esc(latest.name)}</dd>
                    <dt>${esc(t('amStack'))}</dt><dd>Swift 6 · SwiftUI · AI · Supabase</dd>
                    <dt>${esc(t('amLocation'))}</dt><dd>${esc(t('amLocationValue'))}</dd>
                </dl>
                <div class="am-actions">
                    <button class="am-btn" data-act="cv"><i class="fas fa-file-arrow-down"></i> ${esc(t('mDownloadCV'))}</button>
                    <button class="am-btn am-secondary" data-act="apps">${esc(t('amSeeApps'))}</button>
                </div>
                <p class="am-foot">™ &amp; © ${new Date().getFullYear()} Christian Arzaluz</p>
            </div>`);
        container.find('[data-act="cv"]').on('click', downloadCV);
        container.find('[data-act="apps"]').on('click', () => wm.openApp(LATEST_PROJECT));
    }
    const openAboutMac = () => openSystemWindow('aboutmac', { titleKey: 'aboutThisMac', render: renderAboutMac, size: { w: 380, h: 520 } });
    window.openAboutMac = openAboutMac;

    // --- Window actions (menus + shortcuts) -------------------------------
    function closeActive() { const id = activeWindowId(); if (id) wm.closeWindow(id); }
    function minimizeActive() { const id = activeWindowId(); if (id) wm.minimizeWindow(id); }
    function zoomActive() { const id = activeWindowId(); if (id) wm.maximizeWindow(id); }
    function cycleWindows() {
        const ids = Object.keys(wm.windows).filter(id => $(`#win-${id}`).is(':visible'));
        if (!ids.length) return;
        const current = activeWindowId();
        const next = ids[(ids.indexOf(current) + 1) % ids.length];
        wm.setActiveWindow(next);
    }
    function toggleAppearance() {
        const isLight = typeof getEffectiveAppearance === 'function' && getEffectiveAppearance() === 'light';
        setAppearance(isLight ? 'dark' : 'light');
    }
    function nextWallpaper() {
        const i = wallpapers.findIndex(w => w.id === currentWallpaperId);
        applyWallpaper(wallpapers[(i + 1) % wallpapers.length].id, true);
    }
    function copyPortfolioLink() {
        const url = 'https://chrisarzaluz.dev/';
        const done = () => notify({ icon: 'assets/dock-icons/processed/finder.png', app: 'Finder', title: t('mLinkCopied'), body: url, timeout: 3500 });
        if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done();
    }
    function showShortcuts() {
        notify({ icon: 'assets/dock-icons/processed/settings.png', app: 'macOS', title: t('notifShortcutsTitle'), body: t('notifShortcutsBody'), timeout: 12000 });
    }

    // --- Menu bar menus ---------------------------------------------------
    const SEP = { sep: true };
    const MENUS = {
        apple: () => [
            { label: t('mAboutMac'), action: openAboutMac },
            SEP,
            { label: t('mSystemSettings'), action: () => wm.openApp('settings') },
            { label: t('mDownloadCV'), action: downloadCV },
            SEP,
            { label: t('mRestart'), action: () => location.reload() }
        ],
        app: () => {
            const hasWin = !!activeWindowId();
            return [
                { label: `${t('mHide')} ${wm.activeApp || 'Finder'}`, shortcut: '⌥M', action: minimizeActive, disabled: !hasWin },
                { label: `${t('mQuit')} ${wm.activeApp || 'Finder'}`, shortcut: '⌥W', action: closeActive, disabled: !hasWin }
            ];
        },
        file: () => [
            { label: t('mNewFinder'), action: () => wm.openApp('finder') },
            { label: t('mOpenTerminal'), action: () => wm.openApp('terminal') },
            { label: t('mOpenXcode'), action: () => window.openXcode && window.openXcode(), hidden: !window.openXcode },
            SEP,
            { label: t('mCloseWindow'), shortcut: '⌥W', action: closeActive, disabled: !activeWindowId() }
        ],
        edit: () => [
            { label: t('mUndo'), shortcut: '⌘Z', disabled: true },
            { label: t('mRedo'), shortcut: '⇧⌘Z', disabled: true },
            SEP,
            { label: t('mCopyLink'), action: copyPortfolioLink }
        ],
        view: () => {
            const isLight = typeof getEffectiveAppearance === 'function' && getEffectiveAppearance() === 'light';
            return [
                { label: t('mSpotlight'), shortcut: '⌘K', action: openSpotlight },
                SEP,
                { label: isLight ? t('mDarkMode') : t('mLightMode'), action: toggleAppearance },
                { label: t('mNextWallpaper'), action: nextWallpaper }
            ];
        },
        window: () => {
            const ids = Object.keys(wm.windows);
            const current = activeWindowId();
            return [
                { label: t('mMinimize'), shortcut: '⌥M', action: minimizeActive, disabled: !current },
                { label: t('mZoom'), action: zoomActive, disabled: !current },
                { label: t('mCycle'), shortcut: '⌥`', action: cycleWindows, disabled: ids.length < 2 },
                SEP,
                ...(ids.length
                    ? ids.map(id => ({ label: wm.windows[id].name, checked: id === current, action: () => ($(`#win-${id}`).is(':hidden') ? wm.restoreWindow(id) : wm.setActiveWindow(id)) }))
                    : [{ label: t('mNoWindows'), disabled: true }])
            ];
        },
        help: () => [
            { label: t('mShortcuts'), action: showShortcuts },
            { label: t('mAppsPage'), action: () => window.open(APPS_PAGE_URL, '_blank', 'noopener') },
            SEP,
            { label: 'GitHub', action: () => window.open('https://github.com/arzaluz-chris', '_blank', 'noopener') },
            { label: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/christian-arzaluz', '_blank', 'noopener') }
        ]
    };

    let openMenuKey = null;
    function closeMenu() {
        $('#menu-dropdown').remove();
        $('#menubar .menu-item').removeClass('menu-open');
        openMenuKey = null;
    }
    function openMenu($item) {
        const key = $item.data('menu');
        closeMenu();
        openMenuKey = key;
        $item.addClass('menu-open');
        const items = MENUS[key]().filter(i => !i.hidden);
        const $dd = $('<div id="menu-dropdown" class="menu-dropdown" role="menu"></div>');
        items.forEach(item => {
            if (item.sep) { $dd.append('<div class="md-sep" role="separator"></div>'); return; }
            const $row = $(`
                <button class="md-item" role="menuitem" ${item.disabled ? 'disabled' : ''}>
                    <span class="md-check">${item.checked ? '✓' : ''}</span>
                    <span class="md-label">${esc(item.label)}</span>
                    <span class="md-shortcut">${esc(item.shortcut || '')}</span>
                </button>`);
            if (!item.disabled && item.action) $row.on('click', e => { e.stopPropagation(); closeMenu(); item.action(); });
            $dd.append($row);
        });
        const rect = $item[0].getBoundingClientRect();
        $dd.css({ left: Math.min(rect.left, window.innerWidth - 260), top: rect.bottom + 2 }).appendTo('body');
    }
    $(document).on('click', '#menubar .menu-item[data-menu]', function (e) {
        e.stopPropagation();
        if (openMenuKey === $(this).data('menu')) closeMenu(); else openMenu($(this));
    });
    $(document).on('mouseenter', '#menubar .menu-item[data-menu]', function () {
        if (openMenuKey && openMenuKey !== $(this).data('menu')) openMenu($(this));
    });
    $(document).on('click', e => { if (!$(e.target).closest('#menu-dropdown').length) closeMenu(); });

    // --- Spotlight --------------------------------------------------------
    function spotlightIndex() {
        const lang = currentLang;
        const projectItems = orderedProjects().map(p => ({
            group: 'spotApps',
            title: p.name,
            subtitle: p.tagline[lang],
            icon: p.dockIcon,
            stack: p.stack,
            haystack: fold([p.name, p.tagline.es, p.tagline.en, p.description.es, p.description.en, p.stack.join(' '), (p.features.es || []).join(' '), (p.features.en || []).join(' ')].join(' ')),
            action: () => wm.openApp(p.id)
        }));
        const systemItems = apps
            .filter(a => !projects[a.id] && a.id !== 'trash')
            .map(a => ({ group: 'spotSystem', title: appDisplayName(a), icon: a.icon, haystack: fold(appDisplayName(a) + ' ' + a.id), action: () => wm.openApp(a.id) }));
        const actionItems = [
            { title: t('mAboutMac'), icon: 'assets/avatar.jpg', round: true, keys: 'about mac acerca christian contacto contact', action: openAboutMac },
            { title: t('mDownloadCV'), subtitle: 'CV.pdf', icon: 'assets/dock-icons/processed/textedit.png', keys: 'cv resume curriculum pdf', action: downloadCV },
            { title: t('mAppsPage'), subtitle: 'chrisarzaluz.dev/portfolio', icon: 'assets/dock-icons/processed/safari.png', keys: 'portfolio apps app store', action: () => window.open(APPS_PAGE_URL, '_blank', 'noopener') },
            { title: t('mOpenXcode'), icon: 'assets/dock-icons/processed/xcode.png', keys: 'xcode code codigo swift', action: () => window.openXcode && window.openXcode(), hidden: !window.openXcode },
            { title: t('mNextWallpaper'), icon: 'assets/dock-icons/processed/settings.png', keys: 'wallpaper fondo', action: nextWallpaper },
            { title: getEffectiveAppearance() === 'light' ? t('mDarkMode') : t('mLightMode'), icon: 'assets/dock-icons/processed/settings.png', keys: 'dark light oscuro claro apariencia appearance', action: toggleAppearance },
            { title: 'LinkedIn', icon: 'assets/dock-icons/processed/safari.png', keys: 'linkedin', action: () => window.open('https://www.linkedin.com/in/christian-arzaluz', '_blank', 'noopener') },
            { title: 'GitHub', icon: 'assets/dock-icons/processed/safari.png', keys: 'github code', action: () => window.open('https://github.com/arzaluz-chris', '_blank', 'noopener') }
        ].filter(a => !a.hidden).map(a => ({ ...a, group: 'spotActions', haystack: fold(a.title + ' ' + a.keys) }));
        return [...projectItems, ...systemItems, ...actionItems];
    }

    function spotlightSearch(query) {
        const q = fold(query.trim());
        const index = spotlightIndex();
        if (!q) {
            const latest = index.find(i => i.title === projects[LATEST_PROJECT].name);
            return [latest, ...index.filter(i => i.group === 'spotActions').slice(0, 3)].map(i => ({ ...i, group: 'spotSuggestions' }));
        }
        return index
            .map(item => {
                const title = fold(item.title);
                let score = 0;
                if (title.startsWith(q)) score = 100;
                else if (title.includes(q)) score = 60;
                else if (item.haystack.includes(q)) score = 30;
                if (!score) return null;
                // Explain technology matches: "Uses HealthKit".
                const tech = item.stack && item.stack.find(s => fold(s).includes(q));
                return { ...item, score, subtitle: tech && score < 60 ? `${t('spotUses')} ${tech}` : item.subtitle };
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score);
    }

    let spotResults = [];
    let spotSelected = 0;
    function renderSpotlight(query) {
        spotResults = spotlightSearch(query);
        spotSelected = 0;
        const $list = $('#spotlight .sp-results').empty();
        if (!spotResults.length) {
            $list.append(`<div class="sp-empty">${esc(t('spotNoResults'))} “${esc(query)}”</div>`);
            return;
        }
        let lastGroup = null;
        spotResults.forEach((r, i) => {
            if (r.group !== lastGroup) { $list.append(`<div class="sp-group">${esc(t(r.group))}</div>`); lastGroup = r.group; }
            const $row = $(`
                <div class="sp-row" role="option" data-i="${i}">
                    <img src="${esc(r.icon)}" alt="" class="${r.round ? 'round' : ''}">
                    <div><div class="sp-title">${esc(r.title)}</div>${r.subtitle ? `<div class="sp-sub">${esc(r.subtitle)}</div>` : ''}</div>
                </div>`);
            $row.on('mouseenter', () => selectSpot(i)).on('click', () => runSpot(i));
            $list.append($row);
        });
        selectSpot(0);
    }
    function selectSpot(i) {
        spotSelected = Math.max(0, Math.min(i, spotResults.length - 1));
        const $rows = $('#spotlight .sp-row').removeClass('selected').attr('aria-selected', 'false');
        const $sel = $rows.eq(spotSelected).addClass('selected').attr('aria-selected', 'true');
        if ($sel[0]) $sel[0].scrollIntoView({ block: 'nearest' });
    }
    function runSpot(i) {
        const r = spotResults[i];
        closeSpotlight();
        if (r) r.action();
    }
    function openSpotlight() {
        closeMenu();
        if ($('#spotlight').length) { $('#spotlight input').trigger('focus').trigger('select'); return; }
        const $sp = $(`
            <div id="spotlight-backdrop">
                <div id="spotlight" role="dialog" aria-label="Spotlight">
                    <div class="sp-bar"><i class="fas fa-magnifying-glass"></i><input type="text" role="combobox" aria-expanded="true" placeholder="${esc(t('spotlightPlaceholder'))}" autocomplete="off" spellcheck="false"></div>
                    <div class="sp-results" role="listbox"></div>
                    <div class="sp-hint">${esc(t('spotHint'))}</div>
                </div>
            </div>`).appendTo('body');
        const $input = $sp.find('input');
        $input.on('input', () => renderSpotlight($input.val()));
        $input.on('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); selectSpot(spotSelected + 1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); selectSpot(spotSelected - 1); }
            else if (e.key === 'Enter') { e.preventDefault(); runSpot(spotSelected); }
            else if (e.key === 'Escape') { e.preventDefault(); closeSpotlight(); }
        });
        $sp.on('mousedown', e => { if (e.target === $sp[0]) closeSpotlight(); });
        renderSpotlight('');
        setTimeout(() => $input.trigger('focus'), 0);
    }
    function closeSpotlight() { $('#spotlight-backdrop').remove(); }
    window.openSpotlight = openSpotlight;
    $(document).on('click', '#spotlight-btn', e => { e.stopPropagation(); openSpotlight(); });

    // --- Keyboard shortcuts -----------------------------------------------
    // ⌘W/⌘Q/⌘Tab belong to the browser and the OS, so window actions use ⌥.
    document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if ($('#spotlight').length) closeSpotlight(); else openSpotlight();
            return;
        }
        if (isTyping(e.target) || $('#quicklook').length) return;
        if (e.key === '/' && !e.metaKey && !e.ctrlKey) { e.preventDefault(); openSpotlight(); return; }
        if (e.key === 'Escape') { closeMenu(); return; }
        if (e.altKey && !e.metaKey && !e.ctrlKey) {
            if (e.code === 'KeyW') { e.preventDefault(); closeActive(); }
            else if (e.code === 'KeyM') { e.preventDefault(); minimizeActive(); }
            else if (e.code === 'Backquote') { e.preventDefault(); cycleWindows(); }
        }
    });

    // --- Strings for the Terminal, Safari, Mail and Xcode ------------------
    Object.assign(translations.es, {
        shHelp: 'Comandos:',
        shHelpRows: [
            ['ls [carpeta]', 'lista archivos'], ['cd <carpeta>', 'cambia de carpeta'], ['cat <archivo>', 'muestra un archivo'],
            ['open <app|archivo>', 'abre una app o archivo'], ['apps', 'mis apps publicadas'], ['neofetch', 'resumen del sistema'],
            ['xcode', 'abre Xcode con código real'], ['cv', 'descarga mi CV'], ['whoami · date · echo', ''], ['linkedin · github · mail', 'contacto'],
            ['clear · exit', '']
        ],
        shHelpTip: 'Tip: Tab autocompleta y ↑/↓ recorren el historial.',
        shNoSuchDir: 'no existe la carpeta',
        shNoSuchFile: 'no existe el archivo',
        shIsDir: 'es una carpeta',
        shBinary: 'es un archivo binario; prueba con',
        shOpenUsage: 'uso: open <app|archivo>',
        shSudo: 'guest no está en el archivo sudoers. Este incidente será reportado.',
        shRmRoot: 'rm: /: Operación no permitida. (Buen intento.)',
        shApps: 'Apps publicadas',
        sadMacTitle: 'Tu Mac se reinició por un problema.',
        sadMacBody: 'Alguien ejecutó sudo rm -rf / en el portafolio. Haz clic para continuar.',
        sfFavorites: 'Favoritos',
        sfSearch: 'Buscar o escribir un sitio',
        sfMail: 'Correo',
        sfMyApps: 'Mis apps',
        sfBlockedTitle: 'Este sitio no se puede mostrar aquí',
        sfBlockedBody: 'muchos sitios no permiten abrirse dentro de otra página.',
        sfOpenTab: 'Abrir en una pestaña nueva',
        mailTo: 'Para',
        mailSubject: 'Asunto',
        mailSubjectPh: 'Oportunidad / colaboración',
        mailBodyPh: 'Hola Christian,',
        mailSend: 'Enviar',
        mailCopy: 'Copiar dirección',
        mailCopied: 'Dirección copiada',
        mailHint: 'Se abrirá tu app de correo con el mensaje listo.',
        xcRun: 'Ejecutar',
        xcStop: 'Detener',
        xcReady: 'Listo',
        xcBuilding: 'Compilando',
        xcSucceeded: 'Compilación exitosa',
        xcExcerpt: 'Fragmento',
        xcNote: 'Código real de mis apps, sin modificar.',
        xcLaunching: 'Abriendo'
    });
    Object.assign(translations.en, {
        shHelp: 'Commands:',
        shHelpRows: [
            ['ls [folder]', 'list files'], ['cd <folder>', 'change folder'], ['cat <file>', 'print a file'],
            ['open <app|file>', 'open an app or file'], ['apps', 'my published apps'], ['neofetch', 'system summary'],
            ['xcode', 'open Xcode with real code'], ['cv', 'download my CV'], ['whoami · date · echo', ''], ['linkedin · github · mail', 'contact'],
            ['clear · exit', '']
        ],
        shHelpTip: 'Tip: Tab completes and ↑/↓ walk the history.',
        shNoSuchDir: 'no such folder',
        shNoSuchFile: 'no such file',
        shIsDir: 'is a folder',
        shBinary: 'is a binary file; try',
        shOpenUsage: 'usage: open <app|file>',
        shSudo: 'guest is not in the sudoers file. This incident will be reported.',
        shRmRoot: 'rm: /: Operation not permitted. (Nice try.)',
        shApps: 'Published apps',
        sadMacTitle: 'Your Mac restarted because of a problem.',
        sadMacBody: 'Someone ran sudo rm -rf / on the portfolio. Click to continue.',
        sfFavorites: 'Favorites',
        sfSearch: 'Search or enter website name',
        sfMail: 'Email',
        sfMyApps: 'My apps',
        sfBlockedTitle: 'This site can’t be shown here',
        sfBlockedBody: 'many sites don’t allow being embedded in another page.',
        sfOpenTab: 'Open in a new tab',
        mailTo: 'To',
        mailSubject: 'Subject',
        mailSubjectPh: 'Opportunity / collaboration',
        mailBodyPh: 'Hi Christian,',
        mailSend: 'Send',
        mailCopy: 'Copy address',
        mailCopied: 'Address copied',
        mailHint: 'Your mail app will open with the message ready.',
        xcRun: 'Run',
        xcStop: 'Stop',
        xcReady: 'Ready',
        xcBuilding: 'Building',
        xcSucceeded: 'Build Succeeded',
        xcExcerpt: 'Excerpt',
        xcNote: 'Real code from my apps, unmodified.',
        xcLaunching: 'Launching'
    });

    // --- Easter egg: Sad Mac --------------------------------------------------
    function sadMac() {
        $('#sad-mac').remove();
        $(`<div id="sad-mac" role="alertdialog" tabindex="0">
              <img src="assets/sad_mac.png" alt="">
              <p class="sm-title">${esc(t('sadMacTitle'))}</p>
              <p class="sm-body">${esc(t('sadMacBody'))}</p>
           </div>`)
            .appendTo('body')
            .on('click keydown', function () { $(this).fadeOut(400, function () { $(this).remove(); }); })
            .trigger('focus');
    }
    window.sadMac = sadMac;

    // --- Terminal shell ---------------------------------------------------
    // Returned object is used by renderTerminal() in script.js.
    window.createTerminalShell = function () {
        let cwd = [];
        const root = () => ({ type: 'folder', children: fileSystem });
        const findKey = (children, name) => Object.keys(children || {}).find(k => k.toLowerCase() === String(name).toLowerCase());
        const nodeAt = segs => {
            let node = root();
            for (const s of segs) {
                const k = findKey(node.children, s);
                if (!k || node.children[k].type !== 'folder') return null;
                node = node.children[k];
            }
            return node;
        };
        const resolve = arg => {
            let segs = arg.startsWith('/') || arg.startsWith('~') ? [] : [...cwd];
            arg.replace(/^~\/?|^\//, '').split('/').filter(Boolean).forEach(p => {
                if (p === '..') segs.pop();
                else if (p !== '.') {
                    const parent = nodeAt(segs);
                    segs.push((parent && findKey(parent.children, p)) || p);
                }
            });
            return segs;
        };
        const lookup = arg => {
            const segs = resolve(arg);
            const name = segs.pop();
            const parent = nodeAt(segs);
            if (name === undefined) return { node: root(), name: '~' };
            const key = parent && findKey(parent.children, name);
            return key ? { node: parent.children[key], name: key, parentSegs: segs } : null;
        };
        const prompt = () => `guest@portfolio ${cwd.length ? cwd[cwd.length - 1] : '~'} %`;
        const findApp = name => {
            const q = String(name).toLowerCase().replace(/\.app$/, '');
            return apps.find(a => a.id === q || appDisplayName(a).toLowerCase() === q);
        };
        const COMMANDS = ['help', 'ls', 'cd', 'pwd', 'cat', 'open', 'apps', 'neofetch', 'xcode', 'cv', 'whoami', 'date', 'echo', 'linkedin', 'github', 'mail', 'clear', 'exit', 'sudo'];

        function openNode(found) {
            const { node, name } = found;
            if (node.type === 'folder') { wm.openApp('finder'); return; }
            if (node.type === 'text') {
                wm.openApp('textedit');
                setTimeout(() => $('#text-area').val(localized(node.content)), 200);
            } else if (typeof openPreview === 'function') {
                openPreview(name, node.src, node.type);
            }
        }

        function run(line, io) {
            const parts = line.trim().split(/\s+/);
            const cmd = (parts[0] || '').toLowerCase();
            const arg = parts.slice(1).join(' ');
            const e = io.escape;
            switch (cmd) {
                case 'help': {
                    const rows = t('shHelpRows').map(([c, d]) => `  <span class="term-cmd">${e(c.padEnd(22, ' '))}</span>${e(d)}`).join('\n');
                    io.print(`<pre class="term-pre">${e(t('shHelp'))}\n${rows}\n\n${e(t('shHelpTip'))}</pre>`);
                    return true;
                }
                case 'pwd':
                    io.print(e('/Users/guest' + (cwd.length ? '/' + cwd.join('/') : '')));
                    return true;
                case 'ls': {
                    const target = arg ? lookup(arg) : { node: nodeAt(cwd) };
                    if (!target || !target.node) { io.print(`ls: ${e(arg)}: ${e(t('shNoSuchDir'))}`); return true; }
                    if (target.node.type !== 'folder') { io.print(e(target.name)); return true; }
                    const items = Object.entries(target.node.children).map(([k, v]) =>
                        v.type === 'folder' ? `<span class="term-dir">${e(k)}/</span>` : `<span class="term-file">${e(k)}</span>`);
                    io.print(items.join('&nbsp;&nbsp;&nbsp;'));
                    return true;
                }
                case 'cd': {
                    if (!arg || arg === '~') { cwd = []; io.setPrompt(prompt()); return true; }
                    const segs = resolve(arg);
                    if (!nodeAt(segs)) { io.print(`cd: ${e(arg)}: ${e(t('shNoSuchDir'))}`); return true; }
                    cwd = segs;
                    io.setPrompt(prompt());
                    return true;
                }
                case 'cat': {
                    const found = arg && lookup(arg);
                    if (!found) { io.print(`cat: ${e(arg)}: ${e(t('shNoSuchFile'))}`); return true; }
                    if (found.node.type === 'folder') { io.print(`cat: ${e(arg)}: ${e(t('shIsDir'))}`); return true; }
                    if (found.node.type !== 'text') { io.print(`cat: ${e(found.name)} ${e(t('shBinary'))} <span class="term-cmd">open ${e(found.name)}</span>`); return true; }
                    io.print(`<pre class="term-pre">${e(localized(found.node.content))}</pre>`);
                    return true;
                }
                case 'open': {
                    if (!arg) { io.print(e(t('shOpenUsage'))); return true; }
                    if (/^https?:\/\//i.test(arg)) { window.open(arg, '_blank', 'noopener'); return true; }
                    if (arg === '.') { wm.openApp('finder'); return true; }
                    const appFound = findApp(arg.replace(/^-a\s+/, ''));
                    if (appFound) { wm.openApp(appFound.id); return true; }
                    const found = lookup(arg);
                    if (!found) { io.print(`open: ${e(arg)}: ${e(t('shNoSuchFile'))}`); return true; }
                    openNode(found);
                    return true;
                }
                case 'apps': {
                    const rows = orderedProjects().map(p => `  <span class="term-cmd">${e(p.name.padEnd(13, ' '))}</span>${e(p.tagline[currentLang])}`).join('\n');
                    io.print(`<pre class="term-pre">${e(t('shApps'))} (${PROJECT_ORDER.length}):\n${rows}\n\n→ open ${e(projects[LATEST_PROJECT].name.toLowerCase())}</pre>`);
                    return true;
                }
                case 'neofetch': {
                    const logo = ['        .:\'', '    __ :\'__', ' .\'`__`-\'__``.', ':__________.-\'', ':_________:', ' :_________`-;', '  `.__.-.__.\''];
                    const info = [
                        '<b>guest</b>@<b>chrisarzaluz.dev</b>', '-------------------------',
                        `<b>OS</b>: Portfolio OS 2026 (macOS-like, vanilla JS)`,
                        `<b>Host</b>: Christian Arzaluz — ${e(t('amSubtitle'))}`,
                        `<b>Apps</b>: ${PROJECT_ORDER.length} ${e(t('amAppsValue'))}`,
                        `<b>Latest</b>: ${e(projects[LATEST_PROJECT].name)}`,
                        '<b>Languages</b>: Swift 6, TypeScript, Kotlin, SQL',
                        '<b>UI</b>: SwiftUI, UIKit, React, Jetpack Compose',
                        '<b>Backend</b>: Supabase, PostgreSQL, Edge Functions',
                        '<b>AI</b>: Apple Intelligence, Gemini'
                    ];
                    const out = info.map((l, i) => `<span class="term-logo">${e((logo[i] || '').padEnd(17, ' '))}</span>${l}`).join('\n');
                    io.print(`<pre class="term-pre">${out}</pre>`);
                    return true;
                }
                case 'xcode': case 'xed':
                    window.openXcode();
                    return true;
                case 'cv':
                    downloadCV();
                    return true;
                case 'github':
                    window.open('https://github.com/arzaluz-chris', '_blank', 'noopener');
                    io.print('github.com/arzaluz-chris');
                    return true;
                case 'swift':
                    io.print(e('Swift version 6 · target: arm64-apple-portfolio'));
                    return true;
                case 'exit':
                    if (wm.windows.terminal) wm.closeWindow('terminal');
                    return true;
                case 'sudo':
                    if (/^rm\s+-rf\s+\/\s*$/.test(arg)) { io.print(e('Deleting /System… /Users… /Portfolio…')); setTimeout(sadMac, 900); return true; }
                    io.print(e(t('shSudo')));
                    return true;
                case 'rm':
                    if (/^-rf\s+\/\s*$/.test(arg)) { io.print(e(t('shRmRoot'))); return true; }
                    io.print(`rm: ${e(arg || '')}: Permission denied`);
                    return true;
                case '':
                    io.setPrompt(prompt());
                    return true;
                default:
                    return false; // whoami, date, echo, linkedin, mail, clear → script.js
            }
        }

        function complete(text) {
            const parts = text.replace(/ /g, ' ').split(' ');
            const last = parts[parts.length - 1];
            let pool;
            if (parts.length === 1) {
                pool = COMMANDS;
            } else {
                const slash = last.lastIndexOf('/');
                const dir = slash >= 0 ? last.slice(0, slash + 1) : '';
                const node = nodeAt(resolve(dir || '.'));
                const files = node ? Object.entries(node.children).map(([k, v]) => dir + k + (v.type === 'folder' ? '/' : '')) : [];
                const appNames = parts[0] === 'open' && !dir ? apps.map(a => appDisplayName(a)) : [];
                pool = [...files, ...appNames];
            }
            const options = [...new Set(pool.filter(o => o.toLowerCase().startsWith(last.toLowerCase())))];
            if (!options.length) return { value: text, options };
            let common = options[0];
            options.forEach(o => { while (!o.toLowerCase().startsWith(common.toLowerCase())) common = common.slice(0, -1); });
            const completed = options.length === 1 ? options[0] + (options[0].endsWith('/') ? '' : ' ') : (common.length > last.length ? common : last);
            parts[parts.length - 1] = completed;
            return { value: parts.join(' '), options: options.length > 1 ? options : [] };
        }

        return { run, complete };
    };

    // --- Safari: Favorites start page -------------------------------------
    const EMBEDDABLE_HOSTS = [location.host, 'chrisarzaluz.dev', 'www.chrisarzaluz.dev', 'en.wikipedia.org', 'es.wikipedia.org'];
    const wikiHome = () => `https://${currentLang === 'en' ? 'en' : 'es'}.wikipedia.org/wiki/MacOS`;
    const LINKEDIN_URL = 'https://www.linkedin.com/in/christian-arzaluz';
    const GITHUB_URL = 'https://github.com/arzaluz-chris';

    // Bookmarks bar under the address field: my profiles first.
    function safariBookmarks() {
        return [
            { title: 'LinkedIn', url: LINKEDIN_URL, fa: 'fab fa-linkedin', color: '#0a66c2' },
            { title: 'GitHub', url: GITHUB_URL, fa: 'fab fa-github', color: 'currentColor' },
            { title: t('sfMail'), action: () => wm.openApp('mail'), fa: 'fas fa-envelope', color: '#1e88e5' },
            { title: 'CV', action: downloadCV, fa: 'fas fa-file-arrow-down', color: '#d93025' },
            { title: t('sfMyApps'), url: APPS_PAGE_URL, fa: 'fas fa-mobile-screen', color: '#0071e3' },
            { title: 'MemoMed', url: 'https://memomed.mx', img: 'assets/dock-icons/processed/memomed.png' },
            { title: 'Wikipedia', url: wikiHome(), fa: 'fab fa-wikipedia-w', color: 'currentColor' }
        ];
    }

    function safariFavorites() {
        const own = orderedProjects()
            .filter(p => p.websiteUrl)
            .map(p => ({ title: p.name, url: p.websiteUrl.replace(/^\//, ''), icon: p.dockIcon }));
        return [
            { title: t('sfMyApps'), url: APPS_PAGE_URL, icon: 'assets/dock-icons/processed/apps.png' },
            ...own,
            { title: 'LinkedIn', url: LINKEDIN_URL, fa: 'fab fa-linkedin-in', color: '#0a66c2' },
            { title: 'GitHub', url: GITHUB_URL, fa: 'fab fa-github', color: '#24292f' },
            { title: 'Wikipedia', url: wikiHome(), fa: 'fab fa-wikipedia-w', color: '#555' }
        ];
    }
    window.renderSafari = function (container) {
        const favs = safariFavorites();
        const marks = safariBookmarks();
        container.html(`
            <div class="safari-app">
                <div class="safari-bar">
                    <button class="sf-btn sf-back" aria-label="Back"><i class="fas fa-chevron-left"></i></button>
                    <button class="sf-btn sf-fwd" aria-label="Forward"><i class="fas fa-chevron-right"></i></button>
                    <button class="sf-btn sf-home" aria-label="${esc(t('sfFavorites'))}"><i class="fas fa-table-cells-large"></i></button>
                    <input type="text" class="url-bar" id="safari-url" placeholder="${esc(t('sfSearch'))}" spellcheck="false" autocomplete="off">
                    <button class="sf-btn sf-ext" aria-label="${esc(t('sfOpenTab'))}"><i class="fas fa-arrow-up-right-from-square"></i></button>
                </div>
                <nav class="sf-favbar" aria-label="${esc(t('sfFavorites'))}">
                    ${marks.map((m, i) => `
                        <button class="sf-mark" data-i="${i}" title="${esc(m.url || m.title)}">
                            ${m.img ? `<img src="${esc(m.img)}" alt="">` : `<i class="${m.fa}" style="color:${m.color}"></i>`}
                            <span>${esc(m.title)}</span>
                        </button>`).join('')}
                </nav>
                <div class="safari-view">
                    <div class="sf-start">
                        <h2>${esc(t('sfFavorites'))}</h2>
                        <div class="sf-grid">
                            ${favs.map((f, i) => `
                                <button class="sf-fav" data-i="${i}">
                                    ${f.icon ? `<img src="${esc(f.icon)}" alt="">` : `<span class="sf-fa" style="background:${f.color}"><i class="${f.fa}"></i></span>`}
                                    <span>${esc(f.title)}</span>
                                </button>`).join('')}
                        </div>
                    </div>
                    <div class="sf-blocked" hidden>
                        <i class="fas fa-shield-halved"></i>
                        <h3>${esc(t('sfBlockedTitle'))}</h3>
                        <p><span class="sf-host"></span> — ${esc(t('sfBlockedBody'))}</p>
                        <button class="am-btn sf-open-tab">${esc(t('sfOpenTab'))}</button>
                    </div>
                    <iframe class="safari-frame" id="safari-frame" hidden title="Safari" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe>
                </div>
            </div>`);

        const $url = container.find('#safari-url');
        const $frame = container.find('#safari-frame');
        const $start = container.find('.sf-start');
        const $blocked = container.find('.sf-blocked');
        const stack = [wikiHome()];
        let pos = 0;

        function show(url) {
            $start.prop('hidden', !!url);
            $frame.prop('hidden', true);
            $blocked.prop('hidden', true);
            $url.val(url ? new URL(url, location.href).href : '');
            if (!url) return;
            const abs = new URL(url, location.href);
            if (EMBEDDABLE_HOSTS.includes(abs.host)) {
                $frame.attr('src', abs.href).prop('hidden', false);
            } else {
                $blocked.find('.sf-host').text(abs.host);
                $blocked.prop('hidden', false);
            }
        }
        function go(url) {
            stack.splice(pos + 1);
            stack.push(url);
            pos = stack.length - 1;
            show(url);
        }
        // Sites that refuse to be framed (LinkedIn, GitHub, ...) open in a new tab.
        function openItem(item) {
            if (item.action) { item.action(); return; }
            if (/^https?:/.test(item.url) && !EMBEDDABLE_HOSTS.includes(new URL(item.url).host)) window.open(item.url, '_blank', 'noopener');
            else go(item.url);
        }
        container.find('.sf-fav').on('click', function () { openItem(favs[+this.dataset.i]); });
        container.find('.sf-mark').on('click', function () { openItem(marks[+this.dataset.i]); });
        container.find('.sf-back').on('click', () => { if (pos > 0) show(stack[--pos]); });
        container.find('.sf-fwd').on('click', () => { if (pos < stack.length - 1) show(stack[++pos]); });
        container.find('.sf-home').on('click', () => go(null));
        container.find('.sf-ext, .sf-open-tab').on('click', () => { if (stack[pos]) window.open(new URL(stack[pos], location.href).href, '_blank', 'noopener'); });
        $url.on('keydown', e => {
            if (e.key !== 'Enter') return;
            let v = $url.val().trim();
            if (!v) return;
            if (!/^https?:\/\//i.test(v)) v = /\s/.test(v) || !v.includes('.') ? `${wikiHome().replace('/wiki/MacOS', '')}/wiki/Special:Search?search=${encodeURIComponent(v)}` : `https://${v}`;
            go(v);
        });
        show(stack[0]);
    };

    // --- Mail: compose form -----------------------------------------------
    window.renderMail = function (container) {
        container.html(`
            <form class="mail-app" novalidate>
                <div class="mail-row"><label>${esc(t('mailTo'))}:</label><span class="mail-chip">Christian Arzaluz &lt;${esc(CONTACT_EMAIL)}&gt;</span></div>
                <div class="mail-row"><label for="mail-subject">${esc(t('mailSubject'))}:</label><input id="mail-subject" type="text" placeholder="${esc(t('mailSubjectPh'))}"></div>
                <textarea id="mail-body" placeholder="${esc(t('mailBodyPh'))}"></textarea>
                <div class="mail-actions">
                    <span class="mail-hint">${esc(t('mailHint'))}</span>
                    <button type="button" class="am-btn am-secondary mail-copy"><i class="far fa-copy"></i> ${esc(t('mailCopy'))}</button>
                    <button type="submit" class="am-btn"><i class="fas fa-paper-plane"></i> ${esc(t('mailSend'))}</button>
                </div>
            </form>`);
        container.find('form').on('submit', e => {
            e.preventDefault();
            const subject = container.find('#mail-subject').val();
            const body = container.find('#mail-body').val();
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
        container.find('.mail-copy').on('click', () => {
            const done = () => notify({ icon: 'assets/dock-icons/processed/mail.png', app: 'Mail', title: t('mailCopied'), body: CONTACT_EMAIL, timeout: 3500 });
            if (navigator.clipboard) navigator.clipboard.writeText(CONTACT_EMAIL).then(done, done); else done();
        });
    };

    // --- Xcode --------------------------------------------------------------
    const SWIFT_KEYWORDS = new Set(('import public private fileprivate internal open static final class struct enum protocol extension func var let init deinit ' +
        'return if else guard switch case default for in while repeat break continue throw throws rethrows try async await some any where self Self nil true false ' +
        'inout typealias associatedtype nonisolated isolated mutating override convenience required lazy weak unowned defer do catch as is get set').split(' '));
    function highlightSwift(code) {
        const re = /(\/\/[^\n]*)|("(?:\\.|[^"\\\n])*")|(@\w+)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_]\w*\b)|([\s\S])/g;
        let out = '', m;
        while ((m = re.exec(code))) {
            const [tok, com, str, attr, num, ident] = m;
            if (com) out += `<span class="sw-c">${esc(com)}</span>`;
            else if (str) out += `<span class="sw-s">${esc(str)}</span>`;
            else if (attr) out += `<span class="sw-a">${esc(attr)}</span>`;
            else if (num) out += `<span class="sw-n">${esc(num)}</span>`;
            else if (ident) out += SWIFT_KEYWORDS.has(ident) ? `<span class="sw-k">${ident}</span>` : /^[A-Z]/.test(ident) ? `<span class="sw-t">${ident}</span>` : ident;
            else out += esc(tok);
        }
        return out;
    }

    let xcodeData = null;
    function renderXcode(container) {
        container.html(`<div class="xcode-app"><div class="xc-loading"><i class="fas fa-spinner fa-spin"></i></div></div>`);
        const load = xcodeData ? Promise.resolve(xcodeData) : fetch('assets/xcode/snippets.json').then(r => r.json()).then(d => (xcodeData = d));
        load.then(data => {
            const files = data.projects.flatMap(p => p.files.map(f => ({ ...f, app: p.app, project: p.name })));
            let current = 0;
            container.html(`
                <div class="xcode-app">
                    <div class="xc-toolbar">
                        <button class="xc-run" title="${esc(t('xcRun'))}" aria-label="${esc(t('xcRun'))}"><i class="fas fa-play"></i></button>
                        <button class="xc-stop" title="${esc(t('xcStop'))}" aria-label="${esc(t('xcStop'))}" disabled><i class="fas fa-stop"></i></button>
                        <div class="xc-scheme"><span class="xc-scheme-app"></span> <i class="fas fa-chevron-right"></i> iPhone 17 Pro</div>
                        <div class="xc-status">${esc(t('xcReady'))}</div>
                    </div>
                    <div class="xc-body">
                        <nav class="xc-nav" aria-label="Project navigator">
                            ${data.projects.map(p => `
                                <div class="xc-proj"><i class="fas fa-folder"></i> ${esc(p.name)}</div>
                                ${p.files.map(f => {
                                    const i = files.findIndex(x => x.path === f.path);
                                    return `<button class="xc-file" data-i="${i}"><i class="fab fa-swift"></i> ${esc(f.path.split('/').pop())}</button>`;
                                }).join('')}`).join('')}
                            <p class="xc-note">${esc(t('xcNote'))}</p>
                        </nav>
                        <div class="xc-main">
                            <div class="xc-tab"><i class="fab fa-swift"></i> <span class="xc-path"></span></div>
                            <div class="xc-editor" tabindex="0"><div class="xc-gutter"></div><pre class="xc-code"></pre></div>
                            <div class="xc-console" hidden></div>
                        </div>
                    </div>
                </div>`);

            const $status = container.find('.xc-status');
            const $console = container.find('.xc-console');
            let timers = [];
            const stop = () => { timers.forEach(clearTimeout); timers = []; container.find('.xc-run').prop('disabled', false); container.find('.xc-stop').prop('disabled', true); };

            function openFile(i) {
                current = i;
                const f = files[i];
                const lines = highlightSwift(f.code).split('\n');
                container.find('.xc-file').removeClass('active').filter(`[data-i="${i}"]`).addClass('active');
                container.find('.xc-path').text(`${f.project} › ${f.path}${f.excerpt ? ` (${t('xcExcerpt')})` : ''}`);
                container.find('.xc-scheme-app').text(f.project);
                container.find('.xc-gutter').html(lines.map((_, n) => n + 1).join('\n'));
                container.find('.xc-code').html(lines.join('\n'));
            }
            function runBuild() {
                const f = files[current];
                const p = projects[f.app];
                stop();
                container.find('.xc-run').prop('disabled', true);
                container.find('.xc-stop').prop('disabled', false);
                $console.prop('hidden', false).empty();
                const steps = [
                    `${t('xcBuilding')} ${f.project} (Debug, iPhone 17 Pro)…`,
                    `CompileSwift ${f.path.split('/').pop()}`,
                    'CompileSwiftSources normal arm64',
                    `Ld ${f.project}.app/${f.project}`,
                    `CodeSign ${f.project}.app`,
                    `** ${t('xcSucceeded').toUpperCase()} **`
                ];
                $status.text(`${t('xcBuilding')} ${f.project}…`);
                steps.forEach((s, n) => timers.push(setTimeout(() => {
                    $console.append(`<div class="${n === steps.length - 1 ? 'xc-ok' : ''}">${esc(s)}</div>`);
                    $console.scrollTop($console[0].scrollHeight);
                }, 250 + n * 320)));
                timers.push(setTimeout(() => {
                    $status.html(`<i class="fas fa-circle-check"></i> ${esc(t('xcSucceeded'))}`);
                    $console.append(`<div>${esc(t('xcLaunching'))} ${esc(p ? p.name : f.project)}…</div>`);
                }, 250 + steps.length * 320));
                timers.push(setTimeout(() => { stop(); if (p) wm.openApp(f.app); }, 900 + steps.length * 320));
            }

            container.find('.xc-file').on('click', function () { openFile(+this.dataset.i); });
            container.find('.xc-run').on('click', runBuild);
            container.find('.xc-stop').on('click', () => { stop(); $status.text(t('xcReady')); });
            openFile(0);
        }).catch(() => container.find('.xc-loading').text('Could not load the code samples.'));
    }
    const xcodeApp = apps.find(a => a.id === 'xcode');
    if (xcodeApp) Object.assign(xcodeApp, { render: renderXcode, size: { w: 1000, h: 640 } });
    window.openXcode = () => wm.openApp('xcode');

    // --- Boot hooks -------------------------------------------------------
    document.addEventListener('desktop:ready', () => {
        if (!isPhone()) setTimeout(announceLatestRelease, 2500);
    });
})();
