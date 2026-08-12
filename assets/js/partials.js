// Carga el header y footer compartidos en cualquier vista que los incluya
// mediante <div id="site-header"></div> y <div id="site-footer"></div>.
(function () {
    const path = window.location.pathname;
    const isIndexPage = path.endsWith('index.html') || path.endsWith('/');

    // Cuando estamos parados en index.html, los enlaces de sección no necesitan
    // el prefijo "index.html" (evita una recarga completa de la página).
    function fixSectionLinks() {
        if (!isIndexPage) return;
        document.querySelectorAll('a[href^="index.html#"]').forEach(a => {
            a.setAttribute('href', a.getAttribute('href').replace('index.html', ''));
        });
    }

    // Marca como activo el enlace de nav que corresponde a la página actual
    // (usado en páginas sin scroll-spy, como portafolio.html).
    function setActiveNavForPage(page) {
        document.querySelectorAll('[data-nav]').forEach(link => {
            const isMobile = link.classList.contains('mobile-link');
            link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-secondary', 'pb-1');
            link.classList.add('text-on-surface-variant');
            if (link.dataset.nav === page) {
                link.classList.remove('text-on-surface-variant');
                link.classList.add('text-primary', 'font-bold');
                if (!isMobile) link.classList.add('border-b-2', 'border-secondary', 'pb-1');
            }
        });
    }

    async function loadPartial(url, targetId) {
        const el = document.getElementById(targetId);
        if (!el) return;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            el.innerHTML = await res.text();
        } catch (err) {
            console.error(`No se pudo cargar el parcial "${url}":`, err);
        }
    }

    async function init() {
        await Promise.all([
            loadPartial('partials/header.html', 'site-header'),
            loadPartial('partials/footer.html', 'site-footer')
        ]);

        fixSectionLinks();

        const currentPage = document.body.dataset.page;
        if (currentPage && currentPage !== 'index') {
            setActiveNavForPage(currentPage);
        }

        // Avisa al resto de los scripts que el header/footer ya están en el DOM
        document.dispatchEvent(new CustomEvent('partials:loaded'));
    }

    document.addEventListener('DOMContentLoaded', init);
})();
