/* ==========================================================================
   features.js — desktop features layered on top of script.js
   (menu bar menus, Spotlight, notifications, About This Mac, shortcuts,
   Xcode, and the iOS home screen on phones).

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

    // --- Boot hooks -------------------------------------------------------
    document.addEventListener('desktop:ready', () => {
        if (!isPhone()) setTimeout(announceLatestRelease, 2500);
    });
})();
