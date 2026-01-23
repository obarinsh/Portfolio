import type { BrandGeneratorState, BrandGuidelines } from '../types';
import { fontPairings, typeScale } from '../utils/defaults';
import { hexToHslString } from '../utils/colorUtils';

export function generateBrandGuidelines(state: BrandGeneratorState): BrandGuidelines {
  const fontPairing = fontPairings.find(
    (p) => p.headingFont === state.typography.headingFont
  ) || fontPairings[0];

  return {
    meta: {
      ...state.meta,
      version: '1.0.0',
    },
    designSummary: state.designSummary,
    designStyle: state.designStyle,
    toneOfVoice: state.toneOfVoice,
    palette: {
      colors: state.colors,
      paletteUsageGuide: `
        - Primary: Use for main CTAs, links, and brand emphasis
        - Secondary: Supporting actions and UI elements
        - Accent: Highlights, decorative elements, special callouts
        - Background/Foreground: Main page colors
        - Muted: Subtle backgrounds, disabled states
        - Card: Elevated surfaces, modal backgrounds
        - Destructive: Errors, delete actions, warnings
        - Success: Positive feedback, completed states
        - Warning: Caution states, important notices
      `.trim(),
      paletteAccessibilityNotes: `
        All color pairs are designed to meet WCAG AA standards (4.5:1 contrast ratio).
        Primary, secondary, and accent colors have been paired with appropriate foreground colors.
        Always use the designated foreground color when placing text on colored backgrounds.
      `.trim(),
    },
    typography: {
      headings: {
        fontFamily: fontPairing.headingFont,
        fallbackStack: fontPairing.headingFallback,
        googleFontsUrl: fontPairing.googleFontsUrl,
        usageGuide: 'Use for h1-h6 elements, display text, and brand moments',
        accessibilityNotes: 'Ensure sufficient size (16px minimum for body, 24px+ for headings)',
      },
      paragraphs: {
        fontFamily: fontPairing.bodyFont,
        fallbackStack: fontPairing.bodyFallback,
        googleFontsUrl: fontPairing.googleFontsUrl,
        usageGuide: 'Use for body text, labels, buttons, and UI elements',
        accessibilityNotes: 'Maintain 1.5 line-height for readability, avoid text smaller than 14px',
      },
      ...(fontPairing.accentFont && {
        accent: {
          fontFamily: fontPairing.accentFont,
          fallbackStack: fontPairing.accentFallback || 'cursive',
          googleFontsUrl: fontPairing.googleFontsUrl,
          usageGuide: 'Use sparingly for signatures, callouts, or decorative text',
          accessibilityNotes: 'Ensure legibility at all sizes, avoid for critical information',
        },
      }),
      fontSizes: typeScale,
    },
    layout: {
      grid: {
        margins: 'mx-4 md:mx-8 lg:mx-16',
        padding: 'py-12 md:py-16 lg:py-24',
        gaps: 'gap-4 md:gap-6 lg:gap-8',
        compositionApproach: state.layoutDna.gridAlignmentSpectrum === 'organic'
          ? 'Asymmetric layouts with overlapping elements and dynamic positioning'
          : state.layoutDna.gridAlignmentSpectrum === 'flexible'
          ? 'Balanced grid with occasional breaks for visual interest'
          : 'Strict 12-column grid with consistent alignment',
      },
      layoutDna: state.layoutDna,
      heroSectionLayout: `
        Split layout with generous whitespace.
        Text on one side, optional imagery or decorative elements on the other.
        Use numbered sections (01., 02.) for editorial feel.
        Include spaced uppercase labels above headings.
      `.trim(),
    },
    components: {
      buttons: `
        Rounded corners (rounded-xl for standard, rounded-full for pills).
        Subtle hover scale (1.02) with shadow lift.
        Primary uses brand primary color, ghost uses transparent with hover background.
        Include focus ring using the ring color token.
      `.trim(),
      cards: `
        Rounded corners (rounded-2xl) with soft shadows.
        Hover state lifts card (-translate-y-1) with increased shadow.
        Use card background color with border.
        Support for featured/highlighted variants using primary background.
      `.trim(),
      inputs: `
        Rounded corners (rounded-xl) matching button style.
        Border uses input color token, focus ring uses ring color.
        Support for icons on left side with proper padding.
        Consistent height with buttons for alignment.
      `.trim(),
      navigation: `
        Minimal, sticky header with brand name on left.
        Navigation links with subtle hover states.
        Consider pill-shaped nav items for active states.
        Mobile: hamburger menu with slide-in drawer.
      `.trim(),
    },
    graphicElements: {
      icons: 'Lucide icons with 1.5px stroke weight, matching the organic aesthetic',
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
      },
    },
    motion: {
      philosophy: state.motion.philosophy,
      durations: {
        fast: state.motion.speed === 'fast' ? '100ms' : '150ms',
        normal: state.motion.speed === 'fast' ? '150ms' : state.motion.speed === 'slow' ? '250ms' : '200ms',
        slow: state.motion.speed === 'fast' ? '200ms' : state.motion.speed === 'slow' ? '400ms' : '300ms',
      },
      easings: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
    tailwindConfig: {
      colors: {
        background: state.colors.background,
        foreground: state.colors.foreground,
        primary: {
          DEFAULT: state.colors.primary,
          foreground: state.colors.primaryForeground,
        },
        secondary: {
          DEFAULT: state.colors.secondary,
          foreground: state.colors.secondaryForeground,
        },
        accent: {
          DEFAULT: state.colors.accent,
          foreground: state.colors.accentForeground,
        },
        muted: {
          DEFAULT: state.colors.muted,
          foreground: state.colors.mutedForeground,
        },
        card: {
          DEFAULT: state.colors.card,
          foreground: state.colors.cardForeground,
        },
        destructive: {
          DEFAULT: state.colors.destructive,
          foreground: state.colors.destructiveForeground,
        },
        success: {
          DEFAULT: state.colors.success,
          foreground: state.colors.successForeground,
        },
        warning: {
          DEFAULT: state.colors.warning,
          foreground: state.colors.warningForeground,
        },
        border: state.colors.border,
        input: state.colors.input,
        ring: state.colors.ring,
      },
      fontFamily: {
        heading: [fontPairing.headingFont, ...fontPairing.headingFallback.split(', ')],
        body: [fontPairing.bodyFont, ...fontPairing.bodyFallback.split(', ')],
        ...(fontPairing.accentFont && {
          accent: [fontPairing.accentFont, fontPairing.accentFallback || 'cursive'],
        }),
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
    cssVariables: {
      light: generateCssVariablesString(state.colors),
    },
  };
}

function generateCssVariablesString(colors: BrandGeneratorState['colors']): string {
  const variables = [
    `--background: ${hexToHslString(colors.background)};`,
    `--foreground: ${hexToHslString(colors.foreground)};`,
    `--primary: ${hexToHslString(colors.primary)};`,
    `--primary-foreground: ${hexToHslString(colors.primaryForeground)};`,
    `--secondary: ${hexToHslString(colors.secondary)};`,
    `--secondary-foreground: ${hexToHslString(colors.secondaryForeground)};`,
    `--accent: ${hexToHslString(colors.accent)};`,
    `--accent-foreground: ${hexToHslString(colors.accentForeground)};`,
    `--muted: ${hexToHslString(colors.muted)};`,
    `--muted-foreground: ${hexToHslString(colors.mutedForeground)};`,
    `--card: ${hexToHslString(colors.card)};`,
    `--card-foreground: ${hexToHslString(colors.cardForeground)};`,
    `--destructive: ${hexToHslString(colors.destructive)};`,
    `--destructive-foreground: ${hexToHslString(colors.destructiveForeground)};`,
    `--success: ${hexToHslString(colors.success)};`,
    `--success-foreground: ${hexToHslString(colors.successForeground)};`,
    `--warning: ${hexToHslString(colors.warning)};`,
    `--warning-foreground: ${hexToHslString(colors.warningForeground)};`,
    `--border: ${hexToHslString(colors.border)};`,
    `--input: ${hexToHslString(colors.input)};`,
    `--ring: ${hexToHslString(colors.ring)};`,
  ];

  return variables.join('\n    ');
}
