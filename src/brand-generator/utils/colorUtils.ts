// Color utility functions for palette generation and WCAG checks

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

/**
 * Convert hex to HSL
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

/**
 * Convert HSL to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return rgbToHex(
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255)
  );
}

/**
 * Format HSL for CSS variables (Tailwind/shadcn format)
 */
export function hexToHslString(hex: string): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return '0 0% 0%';
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
}

/**
 * Calculate relative luminance for WCAG
 */
export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast meets WCAG AA standard (4.5:1 for normal text)
 */
export function meetsWcagAA(foreground: string, background: string): boolean {
  return getContrastRatio(foreground, background) >= 4.5;
}

/**
 * Check if contrast meets WCAG AAA standard (7:1 for normal text)
 */
export function meetsWcagAAA(foreground: string, background: string): boolean {
  return getContrastRatio(foreground, background) >= 7;
}

/**
 * Get contrast level label
 */
export function getContrastLevel(
  foreground: string,
  background: string
): 'fail' | 'AA' | 'AAA' {
  const ratio = getContrastRatio(foreground, background);
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  return 'fail';
}

/**
 * Generate a foreground color that contrasts well with the background
 */
export function generateContrastingForeground(
  background: string,
  preferLight = false
): string {
  const luminance = getLuminance(background);

  // If background is dark, use light foreground
  if (luminance < 0.5) {
    return preferLight ? '#FFFFFF' : '#F5F2EB';
  }

  // If background is light, use dark foreground
  return '#2C2C2C';
}

/**
 * Lighten a color by a percentage
 */
export function lighten(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const newL = Math.min(100, hsl.l + percent);
  return hslToHex(hsl.h, hsl.s, newL);
}

/**
 * Darken a color by a percentage
 */
export function darken(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const newL = Math.max(0, hsl.l - percent);
  return hslToHex(hsl.h, hsl.s, newL);
}

/**
 * Adjust saturation of a color
 */
export function adjustSaturation(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const newS = Math.max(0, Math.min(100, hsl.s + percent));
  return hslToHex(hsl.h, newS, hsl.l);
}

/**
 * Generate complementary color
 */
export function getComplementary(hex: string): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const newH = (hsl.h + 180) % 360;
  return hslToHex(newH, hsl.s, hsl.l);
}

/**
 * Generate analogous colors (30 degrees apart)
 */
export function getAnalogous(hex: string): [string, string] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex, hex];
  const h1 = (hsl.h + 30) % 360;
  const h2 = (hsl.h - 30 + 360) % 360;
  return [hslToHex(h1, hsl.s, hsl.l), hslToHex(h2, hsl.s, hsl.l)];
}

/**
 * Generate triadic colors (120 degrees apart)
 */
export function getTriadic(hex: string): [string, string] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex, hex];
  const h1 = (hsl.h + 120) % 360;
  const h2 = (hsl.h + 240) % 360;
  return [hslToHex(h1, hsl.s, hsl.l), hslToHex(h2, hsl.s, hsl.l)];
}

/**
 * Generate a muted version of a color (for backgrounds)
 */
export function getMuted(hex: string): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  // Reduce saturation and increase lightness
  return hslToHex(hsl.h, Math.max(10, hsl.s - 30), Math.min(95, hsl.l + 30));
}

/**
 * Check if a color is considered "light"
 */
export function isLightColor(hex: string): boolean {
  return getLuminance(hex) > 0.5;
}
