// Simple active state observer for navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav .hidden a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-secondary', 'pb-1');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href').includes(current)) {
            link.classList.remove('text-on-surface-variant');
            link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-secondary', 'pb-1');
        }
    });
});

// Theme Toggle Functionality
const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
const themeToggleDarkIcons = [document.getElementById('theme-toggle-dark-icon'), document.getElementById('theme-toggle-dark-icon-mobile')];
const themeToggleLightIcons = [document.getElementById('theme-toggle-light-icon'), document.getElementById('theme-toggle-light-icon-mobile')];
const htmlElement = document.documentElement;

// Initialize theme from local storage or system preference
function initTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        themeToggleLightIcons.forEach(icon => icon.classList.remove('hidden'));
        themeToggleDarkIcons.forEach(icon => icon.classList.add('hidden'));
    } else {
        htmlElement.classList.remove('dark');
        themeToggleLightIcons.forEach(icon => icon.classList.add('hidden'));
        themeToggleDarkIcons.forEach(icon => icon.classList.remove('hidden'));
    }
}

initTheme();

themeToggleBtns.forEach(btn => {
    if(btn) {
        btn.addEventListener('click', function() {
            // toggle icons
            themeToggleDarkIcons.forEach(icon => icon.classList.toggle('hidden'));
            themeToggleLightIcons.forEach(icon => icon.classList.toggle('hidden'));

            // toggle dark class
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.add('open');
        mobileMenu.classList.remove('pointer-events-none');
        mobileMenuIcon.innerText = 'close';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('pointer-events-none');
        mobileMenuIcon.innerText = 'menu';
        document.body.style.overflow = '';
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});