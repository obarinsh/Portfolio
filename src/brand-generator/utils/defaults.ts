import type { BrandGeneratorState, FontPairing } from '../types';

// Default brand state based on the refined design direction
export const defaultBrandState: BrandGeneratorState = {
  meta: {
    brandName: 'Olga',
    tagline: 'Product Engineer bridging design and code',
    version: '1.0.0',
  },
  designSummary:
    'Elegant but fresh, modern and aristocratic. A soft organic aesthetic with warm approachability, combining editorial refinement with personal warmth.',
  designStyle: {
    primaryStyle: ['Elegant Organic', 'Modern Aristocratic'],
    supportingStyles: ['Editorial', 'Human-centered', 'Refined'],
    moodKeywords: [
      'elegant',
      'fresh',
      'warm',
      'refined',
      'approachable',
      'crafted',
      'thoughtful',
    ],
  },
  toneOfVoice:
    'Friendly, conversational, confident without being boastful. Personal and warm while maintaining sophistication.',
  colors: {
    // Warm cream background
    background: '#F5F2EB',
    foreground: '#2C2C2C',
    // Sage green primary
    primary: '#7A8B7A',
    primaryForeground: '#F5F2EB',
    // Dusty blue secondary
    secondary: '#8B9BA3',
    secondaryForeground: '#2C2C2C',
    // Warm gold accent
    accent: '#C4A35A',
    accentForeground: '#2C2C2C',
    // Muted tones
    muted: '#E8E4DC',
    mutedForeground: '#666666',
    // Card surfaces
    card: '#FAF8F5',
    cardForeground: '#2C2C2C',
    // UI elements
    border: '#DDD8CE',
    input: '#DDD8CE',
    ring: '#7A8B7A',
    // Status colors
    destructive: '#C45A5A',
    destructiveForeground: '#FFFFFF',
    success: '#5A8B5A',
    successForeground: '#FFFFFF',
    warning: '#C4A35A',
    warningForeground: '#2C2C2C',
  },
  typography: {
    headingFont: 'Cormorant Garamond',
    bodyFont: 'DM Sans',
    accentFont: 'Caveat',
  },
  layoutDna: {
    contrastSpectrum: 'medium',
    densitySpectrum: 'sparse',
    textVsImageEmphasis: 'balanced',
    complexitySpectrum: 'minimal',
    gridAlignmentSpectrum: 'organic',
    negativeSpaceUsage: 'generous',
  },
  motion: {
    philosophy:
      'Smooth, natural movements that feel organic and unhurried. Animations should enhance the elegant, refined feel without being flashy.',
    speed: 'normal',
  },
};

// Curated font pairings for the soft organic aesthetic
export const fontPairings: FontPairing[] = [
  {
    id: 'cormorant-dm',
    name: 'Cormorant + DM Sans',
    headingFont: 'Cormorant Garamond',
    headingFallback: 'Georgia, serif',
    bodyFont: 'DM Sans',
    bodyFallback: 'system-ui, sans-serif',
    accentFont: 'Caveat',
    accentFallback: 'cursive',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Caveat:wght@400;500;600;700&display=swap',
    vibe: 'Aristocratic elegance meets modern clarity',
  },
  {
    id: 'playfair-lato',
    name: 'Playfair Display + Lato',
    headingFont: 'Playfair Display',
    headingFallback: 'Georgia, serif',
    bodyFont: 'Lato',
    bodyFallback: 'system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap',
    vibe: 'Classic editorial sophistication',
  },
  {
    id: 'fraunces-source',
    name: 'Fraunces + Source Sans 3',
    headingFont: 'Fraunces',
    headingFallback: 'Georgia, serif',
    bodyFont: 'Source Sans 3',
    bodyFallback: 'system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap',
    vibe: 'Warm, friendly editorial',
  },
  {
    id: 'dm-serif-dm-sans',
    name: 'DM Serif Display + DM Sans',
    headingFont: 'DM Serif Display',
    headingFallback: 'Georgia, serif',
    bodyFont: 'DM Sans',
    bodyFallback: 'system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
    vibe: 'Modern organic harmony',
  },
  {
    id: 'newsreader-inter',
    name: 'Newsreader + Inter',
    headingFont: 'Newsreader',
    headingFallback: 'Georgia, serif',
    bodyFont: 'Inter',
    bodyFallback: 'system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Inter:wght@300;400;500;600;700&display=swap',
    vibe: 'Clean editorial professionalism',
  },
  {
    id: 'libre-baskerville-nunito',
    name: 'Libre Baskerville + Nunito',
    headingFont: 'Libre Baskerville',
    headingFallback: 'Georgia, serif',
    bodyFont: 'Nunito',
    bodyFallback: 'system-ui, sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap',
    vibe: 'Timeless warmth',
  },
];

// Color palette presets
export const colorPresets = {
  'elegant-organic': {
    name: 'Elegant Organic',
    description: 'Warm cream, sage, and gold - aristocratic yet fresh',
    colors: defaultBrandState.colors,
  },
  'dusty-blue': {
    name: 'Dusty Blue',
    description: 'Sophisticated blue-gray tones with warm accents',
    colors: {
      ...defaultBrandState.colors,
      background: '#F5F7F9',
      primary: '#8B9BA3',
      primaryForeground: '#FFFFFF',
      secondary: '#7A8B7A',
      accent: '#C4A35A',
      muted: '#E4E8EB',
      card: '#FAFBFC',
      border: '#D4D9DE',
      ring: '#8B9BA3',
    },
  },
  'warm-terracotta': {
    name: 'Warm Terracotta',
    description: 'Earthy terracotta with cream and sage',
    colors: {
      ...defaultBrandState.colors,
      background: '#FAF7F4',
      primary: '#C49A7A',
      primaryForeground: '#FFFFFF',
      secondary: '#7A8B7A',
      accent: '#8B7A5A',
      muted: '#F0EBE5',
      card: '#FFFCF9',
      border: '#E5DDD4',
      ring: '#C49A7A',
    },
  },
  'soft-rose': {
    name: 'Soft Rose',
    description: 'Dusty rose with cream and sage accents',
    colors: {
      ...defaultBrandState.colors,
      background: '#FAF7F7',
      primary: '#C4A3A3',
      primaryForeground: '#2C2C2C',
      secondary: '#7A8B7A',
      accent: '#C4A35A',
      muted: '#F0EBEB',
      card: '#FFFCFC',
      border: '#E5DCDC',
      ring: '#C4A3A3',
    },
  },
};

// Type scale (matches the plan)
export const typeScale = [
  { name: 'xs', size: '0.75rem', lineHeight: '1rem', letterSpacing: '0.01em', fontWeight: '400' },
  { name: 'sm', size: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0', fontWeight: '400' },
  { name: 'base', size: '1rem', lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '400' },
  { name: 'lg', size: '1.125rem', lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '400' },
  { name: 'xl', size: '1.25rem', lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '500' },
  { name: '2xl', size: '1.5rem', lineHeight: '2rem', letterSpacing: '-0.02em', fontWeight: '600' },
  { name: '3xl', size: '1.875rem', lineHeight: '2.25rem', letterSpacing: '-0.02em', fontWeight: '600' },
  { name: '4xl', size: '2.25rem', lineHeight: '2.5rem', letterSpacing: '-0.02em', fontWeight: '700' },
  { name: '5xl', size: '3rem', lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' },
  { name: '6xl', size: '3.75rem', lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' },
];
