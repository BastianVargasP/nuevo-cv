# Bastián Vargas Parrao — Portafolio & CV

Sitio web personal de **Bastián Vargas Parrao**, Desarrollador Fullstack JavaScript. Funciona como CV interactivo y portafolio de proyectos, con soporte para modo claro/oscuro, formulario de contacto funcional y una sección de portafolio filtrable por tecnología.

🔗 **Demo:** https://bastianvargasp.github.io

## 👤 Sobre mí (resumen del CV)

Desarrollador Fullstack JavaScript comprometido con la excelencia técnica y la colaboración efectiva, enfocado en escribir código limpio, mantenible y escalable, combinando pensamiento analítico con comunicación clara.

**Stack tecnológico:** HTML5 · CSS3 · JavaScript (ES6+) · React · Node.js · Express.js · SQL · Git & GitHub

## 📖 Sobre este proyecto

El sitio está construido como una landing page estática (sin build step ni framework de frontend), pensada para ser rápida, liviana y fácil de desplegar en GitHub Pages. Reutiliza un header y footer compartidos entre páginas mediante partials cargados por JavaScript, y utiliza Tailwind CSS vía CDN junto a variables CSS propias para theming.

### Páginas

| Página | Descripción |
|---|---|
| `index.html` | Página principal: Inicio, Sobre mí, Educación, Experiencia y Contacto |
| `portafolio.html` | Galería de proyectos con filtro por tecnología (React, HTML/CSS, JavaScript) |

### 🎓 Educación

- **Bootcamp Desarrollo Fullstack JavaScript** — Sence (2026)
- **Bootcamp Desarrollo Frontend** — Desafío Latam (2025–2026)
- **Desarrollo de juegos digitales** — Universidad Andrés Bello (2016–2020)

### 💼 Experiencia

**Desarrollador de juegos educativos** — Colegio Aconcagua, Quilpué (2022–2024)
- Desarrollo de más de 20 juegos educativos para estudiantes de educación básica (matemáticas, ciencias, biología, clima, animales, formas y fechas).
- Programación de lógica de juego, comportamientos de objetos y mecánicas educativas alineadas a objetivos de aprendizaje.
- Optimización de rendimiento y tamaño de archivos para mejorar tiempos de carga en dispositivos escolares.
- Pruebas de control de calidad y resolución de errores en colaboración con un equipo multifuncional.

### 🗂️ Proyectos destacados (Portafolio)

- **Explorador de datos** — Consulta de datos actualizados de COVID-19 a nivel mundial, continental y por país, con gráficos interactivos. *(HTML/CSS, JavaScript, Tailwind)*
- **App de clima** — Búsqueda de clima actual, pronóstico por hora y diario para cualquier lugar del mundo, con soporte de unidades métricas/imperiales. *(HTML/CSS, JavaScript, React)*
- **Lista de extensiones** — Gestor de extensiones de navegador: activar, desactivar, filtrar y eliminar. *(HTML/CSS, JavaScript)*

## ✨ Funcionalidades del sitio

- **Modo claro / oscuro** con persistencia en `localStorage` y detección de preferencia del sistema.
- **Header y footer compartidos** cargados dinámicamente vía `assets/js/partials.js` (`partials/header.html` y `partials/footer.html`).
- **Scroll-spy** en la navegación de `index.html`, resaltando la sección visible.
- **Menú móvil** con overlay y bloqueo de scroll mientras está abierto.
- **Formulario de contacto** con validación en el cliente (nombre, correo, mensaje) y envío mediante [FormSubmit](https://formsubmit.co/).
- **Filtro de portafolio** por tecnología (React, HTML/CSS, JavaScript).
- **Descarga de CV** en PDF desde el header.

## 🛠️ Tech stack del sitio

- **Tailwind CSS** (vía CDN, con plugins `forms` y `container-queries`) + configuración personalizada en `assets/js/tailwind-config.js`
- **CSS Variables** para temas claro/oscuro (`assets/css/styles.css`)
- **JavaScript vainilla** (sin frameworks) para theming, formularios, navegación y filtros
- **Google Fonts:** Hanken Grotesk, Inter, JetBrains Mono
- **Material Symbols** para iconografía

## 📁 Estructura del proyecto

```
.
├── index.html                 # Página principal (CV)
├── portafolio.html            # Página de portafolio
├── assets/
│   ├── css/styles.css         # Variables de tema (claro/oscuro) y utilidades
│   ├── js/
│   │   ├── tailwind-config.js # Configuración de Tailwind (colores, tipografía, spacing)
│   │   ├── partials.js        # Carga de header/footer compartidos
│   │   └── scripts.js         # Theme toggle, scroll-spy, formulario, menú móvil, filtros
│   ├── img/                   # Imágenes y favicon
│   └── cv/                    # CV descargable en PDF
└── partials/
    ├── header.html            # Navegación compartida
    └── footer.html            # Footer compartido
```

## 📦 Despliegue

El sitio está desplegado con **GitHub Pages** directamente desde este repositorio.

## 📬 Contacto

- **Email:** bastian.vargas.bv.bv@gmail.com
- **Teléfono:** +56 9 6236 8769
- **Ubicación:** Lo Miranda, Doñihue, Chile (Remoto / Híbrido)
- **LinkedIn:** [bastian-vargas-parrao](https://www.linkedin.com/in/bastian-vargas-parrao/)
- **GitHub:** [BastianVargasP](https://github.com/BastianVargasP)

---

© 2026 Bastián Vargas Parrao. Desarrollador Fullstack JavaScript.
