// Brand Guidelines Types - Full Schema

export interface BrandMeta {
  brandName: string;
  tagline: string;
  version: string;
}

export interface DesignStyle {
  primaryStyle: string[];
  supportingStyles: string[];
  moodKeywords: string[];
}

export interface ColorToken {
  hex: string;
  hsl: string;
}

export interface ColorPalette {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    input: string;
    ring: string;
    destructive: string;
    destructiveForeground: string;
    success: string;
    successForeground: string;
    warning: string;
    warningForeground: string;
  };
  paletteUsageGuide: string;
  paletteAccessibilityNotes: string;
}

export interface FontConfig {
  fontFamily: string;
  fallbackStack: string;
  googleFontsUrl: string;
  usageGuide: string;
  accessibilityNotes: string;
}

export interface FontSize {
  name: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
}

export interface Typography {
  headings: FontConfig;
  paragraphs: FontConfig;
  accent?: FontConfig;
  fontSizes: FontSize[];
}

export interface LayoutDna {
  contrastSpectrum: 'low' | 'medium' | 'high';
  densitySpectrum: 'sparse' | 'balanced' | 'dense';
  textVsImageEmphasis: 'text-heavy' | 'balanced' | 'image-heavy';
  complexitySpectrum: 'minimal' | 'moderate' | 'elaborate';
  gridAlignmentSpectrum: 'strict' | 'flexible' | 'organic';
  negativeSpaceUsage: 'generous' | 'balanced' | 'compact';
}

export interface Layout {
  grid: {
    margins: string;
    padding: string;
    gaps: string;
    compositionApproach: string;
  };
  layoutDna: LayoutDna;
  heroSectionLayout: string;
}

export interface Components {
  buttons: string;
  cards: string;
  inputs: string;
  navigation: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface GraphicElements {
  icons: string;
  borderRadius: BorderRadius;
  shadows: Shadows;
}

export interface MotionDurations {
  fast: string;
  normal: string;
  slow: string;
}

export interface MotionEasings {
  default: string;
  bounce: string;
}

export interface Motion {
  philosophy: string;
  durations: MotionDurations;
  easings: MotionEasings;
}

export interface TailwindConfig {
  colors: Record<string, string | Record<string, string>>;
  fontFamily: Record<string, string[]>;
  borderRadius: Record<string, string>;
}

export interface CssVariables {
  light: string;
  dark?: string;
}

export interface BrandGuidelines {
  meta: BrandMeta;
  designSummary: string;
  designStyle: DesignStyle;
  toneOfVoice: string;
  palette: ColorPalette;
  typography: Typography;
  layout: Layout;
  components: Components;
  graphicElements: GraphicElements;
  motion: Motion;
  tailwindConfig: TailwindConfig;
  cssVariables: CssVariables;
}

// Form state for the generator
export interface BrandGeneratorState {
  meta: BrandMeta;
  designSummary: string;
  designStyle: DesignStyle;
  toneOfVoice: string;
  colors: ColorPalette['colors'];
  typography: {
    headingFont: string;
    bodyFont: string;
    accentFont?: string;
  };
  layoutDna: LayoutDna;
  motion: {
    philosophy: string;
    speed: 'slow' | 'normal' | 'fast';
  };
}

// Font pairing presets
export interface FontPairing {
  id: string;
  name: string;
  headingFont: string;
  headingFallback: string;
  bodyFont: string;
  bodyFallback: string;
  accentFont?: string;
  accentFallback?: string;
  googleFontsUrl: string;
  vibe: string;
}
