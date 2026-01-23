import type { BrandGuidelines } from '../types';

export function generateTailwindConfig(guidelines: BrandGuidelines): string {
  const config = {
    theme: {
      extend: {
        colors: guidelines.tailwindConfig.colors,
        fontFamily: guidelines.tailwindConfig.fontFamily,
        borderRadius: guidelines.tailwindConfig.borderRadius,
        boxShadow: guidelines.graphicElements.shadows,
      },
    },
  };

  return `// tailwind.config.js
// Generated from Brand Guidelines v${guidelines.meta.version}
// Brand: ${guidelines.meta.brandName}

/** @type {import('tailwindcss').Config} */
export default ${JSON.stringify(config, null, 2)}
`;
}

export function generateTailwindConfigSnippet(guidelines: BrandGuidelines): string {
  return `// Add to your tailwind.config.js theme.extend:

colors: ${JSON.stringify(guidelines.tailwindConfig.colors, null, 2)},

fontFamily: ${JSON.stringify(guidelines.tailwindConfig.fontFamily, null, 2)},

borderRadius: ${JSON.stringify(guidelines.tailwindConfig.borderRadius, null, 2)},

boxShadow: ${JSON.stringify(guidelines.graphicElements.shadows, null, 2)}
`;
}
