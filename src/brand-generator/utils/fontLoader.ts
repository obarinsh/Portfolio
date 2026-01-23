// Google Fonts dynamic loader

/**
 * Load Google Fonts dynamically
 */
export function loadGoogleFonts(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    const existingLink = document.querySelector(`link[href="${url}"]`);
    if (existingLink) {
      resolve();
      return;
    }

    // Create preconnect links
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';

    // Create font link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load font: ${url}`));

    document.head.appendChild(preconnectGoogle);
    document.head.appendChild(preconnectGstatic);
    document.head.appendChild(link);
  });
}

/**
 * Build Google Fonts URL from font names
 */
export function buildGoogleFontsUrl(fonts: string[]): string {
  const fontParams = fonts
    .map((font) => {
      const familyName = font.replace(/\s+/g, '+');
      // Include common weights
      return `family=${familyName}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400`;
    })
    .join('&');

  return `https://fonts.googleapis.com/css2?${fontParams}&display=swap`;
}

/**
 * Get font CSS for preview
 */
export function getFontFamilyCSS(fontName: string, fallback: string): string {
  return `'${fontName}', ${fallback}`;
}

// Common font fallbacks
export const fontFallbacks = {
  serif: 'Georgia, "Times New Roman", Times, serif',
  sansSerif: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  monospace: '"SF Mono", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  cursive: 'cursive',
};
