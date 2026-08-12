// Configuración de Tailwind compartida por todas las vistas
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "outline-variant": "var(--color-outline-variant)",
                "primary": "var(--color-primary)",
                "surface-container-highest": "var(--color-surface-container-highest)",
                "surface-variant": "var(--color-surface-variant)",
                "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
                "on-tertiary": "var(--color-on-tertiary)",
                "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
                "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
                "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
                "inverse-primary": "var(--color-inverse-primary)",
                "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
                "secondary-container": "var(--color-secondary-container)",
                "tertiary": "var(--color-tertiary)",
                "surface-tint": "var(--color-surface-tint)",
                "surface-container-lowest": "var(--color-surface-container-lowest)",
                "on-secondary-fixed": "var(--color-on-secondary-fixed)",
                "on-error": "var(--color-on-error)",
                "surface-bright": "var(--color-surface-bright)",
                "surface-container-low": "var(--color-surface-container-low)",
                "on-surface": "var(--color-on-surface)",
                "primary-fixed-dim": "var(--color-primary-fixed-dim)",
                "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
                "primary-container": "var(--color-primary-container)",
                "inverse-on-surface": "var(--color-inverse-on-surface)",
                "error-container": "var(--color-error-container)",
                "tertiary-fixed": "var(--color-tertiary-fixed)",
                "on-surface-variant": "var(--color-on-surface-variant)",
                "surface-container-high": "var(--color-surface-container-high)",
                "inverse-surface": "var(--color-inverse-surface)",
                "on-tertiary-container": "var(--color-on-tertiary-container)",
                "primary-fixed": "var(--color-primary-fixed)",
                "on-error-container": "var(--color-on-error-container)",
                "on-primary-fixed": "var(--color-on-primary-fixed)",
                "on-background": "var(--color-on-background)",
                "background": "var(--color-background)",
                "surface-dim": "var(--color-surface-dim)",
                "error": "var(--color-error)",
                "secondary-fixed": "var(--color-secondary-fixed)",
                "on-primary": "var(--color-on-primary)",
                "on-secondary": "var(--color-on-secondary)",
                "on-secondary-container": "var(--color-on-secondary-container)",
                "outline": "var(--color-outline)",
                "surface-container": "var(--color-surface-container)",
                "tertiary-container": "var(--color-tertiary-container)",
                "secondary": "var(--color-secondary)",
                "on-primary-container": "var(--color-on-primary-container)",
                "surface": "var(--color-surface)"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "margin-desktop": "48px",
                "margin-mobile": "16px",
                "unit": "4px",
                "max-width": "1120px",
                "gutter": "24px",
                "section-gap": "80px"
            },
            "fontFamily": {
                "body-md": ["Inter"],
                "body-sm": ["Inter"],
                "headline-lg-mobile": ["Hanken Grotesk"],
                "headline-xl": ["Hanken Grotesk"],
                "headline-lg": ["Hanken Grotesk"],
                "label-md": ["JetBrains Mono"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }]
            }
        }
    }
};
