// Todo el código depende de elementos del header/footer compartidos,
// así que se inicializa recién cuando partials.js confirma que ya están en el DOM.
document.addEventListener('partials:loaded', () => {
    initScrollSpy();
    initThemeToggle();
    initContactForm();
    initMobileMenu();
    initPortfolioFilter();
});

// Resalta el enlace de nav correspondiente a la sección visible (solo en index.html)
function initScrollSpy() {
    if (document.body.dataset.page !== 'index') return;

    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('[data-nav]');
    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const isMobile = link.classList.contains('mobile-link');
            link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-secondary', 'pb-1');
            link.classList.add('text-on-surface-variant');
            if (link.dataset.nav === current) {
                link.classList.remove('text-on-surface-variant');
                link.classList.add('text-primary', 'font-bold');
                if (!isMobile) link.classList.add('border-b-2', 'border-secondary', 'pb-1');
            }
        });
    });
}

// Alterna modo claro/oscuro y persiste la preferencia en localStorage
function initThemeToggle() {
    const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
    const themeToggleDarkIcons = [document.getElementById('theme-toggle-dark-icon'), document.getElementById('theme-toggle-dark-icon-mobile')];
    const themeToggleLightIcons = [document.getElementById('theme-toggle-light-icon'), document.getElementById('theme-toggle-light-icon-mobile')];
    const htmlElement = document.documentElement;

    function applyStoredTheme() {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
            themeToggleLightIcons.forEach(icon => icon && icon.classList.remove('hidden'));
            themeToggleDarkIcons.forEach(icon => icon && icon.classList.add('hidden'));
        } else {
            htmlElement.classList.remove('dark');
            themeToggleLightIcons.forEach(icon => icon && icon.classList.add('hidden'));
            themeToggleDarkIcons.forEach(icon => icon && icon.classList.remove('hidden'));
        }
    }

    applyStoredTheme();

    themeToggleBtns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', function () {
            themeToggleDarkIcons.forEach(icon => icon && icon.classList.toggle('hidden'));
            themeToggleLightIcons.forEach(icon => icon && icon.classList.toggle('hidden'));

            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    });
}

// Validación del formulario de contacto (solo existe en index.html)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const fields = ['name', 'email', 'message'].map(id => ({
        input: document.getElementById(id),
        error: document.getElementById(`${id}-error`)
    }));

    const errorBorderClasses = ['border-error', 'focus:border-error', 'focus:ring-error'];

    function setFieldError(field, message) {
        field.input.classList.add(...errorBorderClasses);
        field.error.textContent = message;
        field.error.classList.remove('hidden');
    }

    function clearFieldError(field) {
        field.input.classList.remove(...errorBorderClasses);
        field.error.classList.add('hidden');
    }

    function validateField(field) {
        const value = field.input.value.trim();

        if (value === '') {
            setFieldError(field, field.error.dataset.defaultMessage || field.error.textContent);
            return false;
        }

        if (field.input.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setFieldError(field, 'Por favor ingresa un correo electrónico válido.');
                return false;
            }
        }

        clearFieldError(field);
        return true;
    }

    // Guarda el mensaje de error por defecto de cada campo antes de cualquier edición
    fields.forEach(field => {
        field.error.dataset.defaultMessage = field.error.textContent;
    });

    // Valida al salir de un campo, y re-valida en vivo una vez que hay un error visible
    fields.forEach(field => {
        field.input.addEventListener('blur', () => validateField(field));
        field.input.addEventListener('input', () => {
            if (!field.input.classList.contains('border-error')) return;
            validateField(field);
        });
    });

    contactForm.addEventListener('submit', (event) => {
        let isValid = true;
        let firstInvalidField = null;

        fields.forEach(field => {
            const fieldIsValid = validateField(field);
            if (!fieldIsValid) {
                isValid = false;
                if (!firstInvalidField) firstInvalidField = field.input;
            }
        });

        if (!isValid) {
            event.preventDefault();
            firstInvalidField.focus();
        }
    });
}

// Apertura/cierre del menú móvil
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    let isMenuOpen = false;

    if (!mobileMenuBtn || !mobileMenu || !mobileMenuIcon) return;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.add('open');
            mobileMenu.classList.remove('pointer-events-none');
            mobileMenuIcon.innerText = 'close';
            document.body.style.overflow = 'hidden'; // Evita el scroll con el menú abierto
        } else {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('pointer-events-none');
            mobileMenuIcon.innerText = 'menu';
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
}

// Filtra las tarjetas del portafolio por tecnología (solo existe en portafolio.html)
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('#portfolio-filters .filter-btn');
    const projects = document.querySelectorAll('#portfolio-grid [data-tech]');
    if (!filterButtons.length || !projects.length) return;

    const activeClasses = ['bg-primary', 'text-on-primary'];
    const inactiveClasses = ['bg-surface-container-lowest', 'text-on-surface-variant', 'border', 'border-outline-variant/40'];

    function setActiveButton(activeBtn) {
        filterButtons.forEach(btn => {
            btn.classList.remove(...activeClasses);
            btn.classList.add(...inactiveClasses);
        });
        activeBtn.classList.remove(...inactiveClasses);
        activeBtn.classList.add(...activeClasses);
    }

    function applyFilter(filter) {
        projects.forEach(project => {
            const techs = project.dataset.tech.split(' ');
            const matches = filter === 'all' || techs.includes(filter);
            project.classList.toggle('hidden', !matches);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveButton(btn);
            applyFilter(btn.dataset.filter);
        });
    });
}
