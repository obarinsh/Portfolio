import type { BrandGuidelines } from '../types';

export function generateCssVariables(guidelines: BrandGuidelines): string {
  const { typography, graphicElements, motion } = guidelines;

  return `/* CSS Variables - Generated from Brand Guidelines */
/* Brand: ${guidelines.meta.brandName} */
/* Version: ${guidelines.meta.version} */

@layer base {
  :root {
    /* Colors */
    ${guidelines.cssVariables.light}

    /* Border Radius */
    --radius-sm: ${graphicElements.borderRadius.sm};
    --radius-md: ${graphicElements.borderRadius.md};
    --radius-lg: ${graphicElements.borderRadius.lg};
    --radius-xl: ${graphicElements.borderRadius.xl};
    --radius-2xl: ${graphicElements.borderRadius['2xl']};
    --radius-full: ${graphicElements.borderRadius.full};

    /* Shadows */
    --shadow-sm: ${graphicElements.shadows.sm};
    --shadow-md: ${graphicElements.shadows.md};
    --shadow-lg: ${graphicElements.shadows.lg};
    --shadow-xl: ${graphicElements.shadows.xl};

    /* Motion */
    --duration-fast: ${motion.durations.fast};
    --duration-normal: ${motion.durations.normal};
    --duration-slow: ${motion.durations.slow};
    --ease-default: ${motion.easings.default};
    --ease-bounce: ${motion.easings.bounce};

    /* Typography */
    --font-heading: '${typography.headings.fontFamily}', ${typography.headings.fallbackStack};
    --font-body: '${typography.paragraphs.fontFamily}', ${typography.paragraphs.fallbackStack};
    ${typography.accent ? `--font-accent: '${typography.accent.fontFamily}', ${typography.accent.fallbackStack};` : ''}
  }
}

/* Base Styles */
* {
  border-color: hsl(var(--border));
}

body {
  font-family: var(--font-body);
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
`;
}

export function generateGoogleFontsLink(guidelines: BrandGuidelines): string {
  return guidelines.typography.headings.googleFontsUrl;
}
