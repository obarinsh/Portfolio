import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import type { BrandGeneratorState, ColorPalette } from './types';
import { defaultBrandState, fontPairings } from './utils/defaults';
import { loadGoogleFonts } from './utils/fontLoader';

interface BrandContextType {
  state: BrandGeneratorState;
  updateMeta: (meta: Partial<BrandGeneratorState['meta']>) => void;
  updateDesignSummary: (summary: string) => void;
  updateDesignStyle: (style: Partial<BrandGeneratorState['designStyle']>) => void;
  updateToneOfVoice: (tone: string) => void;
  updateColors: (colors: Partial<ColorPalette['colors']>) => void;
  updateTypography: (typography: Partial<BrandGeneratorState['typography']>) => void;
  updateLayoutDna: (layoutDna: Partial<BrandGeneratorState['layoutDna']>) => void;
  updateMotion: (motion: Partial<BrandGeneratorState['motion']>) => void;
  setColorPreset: (presetColors: ColorPalette['colors']) => void;
  setFontPairing: (pairingId: string) => void;
  resetToDefaults: () => void;
}

const BrandContext = createContext<BrandContextType | null>(null);

export function BrandProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BrandGeneratorState>(defaultBrandState);

  // Load fonts when typography changes
  useEffect(() => {
    const pairing = fontPairings.find(
      (p) => p.headingFont === state.typography.headingFont
    );
    if (pairing) {
      loadGoogleFonts(pairing.googleFontsUrl).catch(console.error);
    }
  }, [state.typography.headingFont]);

  // Apply CSS variables when colors change
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(state.colors).forEach(([key, value]) => {
      // Convert camelCase to kebab-case for CSS
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(`--color-${cssKey}`, value);
    });
  }, [state.colors]);

  const updateMeta = useCallback((meta: Partial<BrandGeneratorState['meta']>) => {
    setState((prev) => ({
      ...prev,
      meta: { ...prev.meta, ...meta },
    }));
  }, []);

  const updateDesignSummary = useCallback((summary: string) => {
    setState((prev) => ({
      ...prev,
      designSummary: summary,
    }));
  }, []);

  const updateDesignStyle = useCallback(
    (style: Partial<BrandGeneratorState['designStyle']>) => {
      setState((prev) => ({
        ...prev,
        designStyle: { ...prev.designStyle, ...style },
      }));
    },
    []
  );

  const updateToneOfVoice = useCallback((tone: string) => {
    setState((prev) => ({
      ...prev,
      toneOfVoice: tone,
    }));
  }, []);

  const updateColors = useCallback((colors: Partial<ColorPalette['colors']>) => {
    setState((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...colors },
    }));
  }, []);

  const updateTypography = useCallback(
    (typography: Partial<BrandGeneratorState['typography']>) => {
      setState((prev) => ({
        ...prev,
        typography: { ...prev.typography, ...typography },
      }));
    },
    []
  );

  const updateLayoutDna = useCallback(
    (layoutDna: Partial<BrandGeneratorState['layoutDna']>) => {
      setState((prev) => ({
        ...prev,
        layoutDna: { ...prev.layoutDna, ...layoutDna },
      }));
    },
    []
  );

  const updateMotion = useCallback(
    (motion: Partial<BrandGeneratorState['motion']>) => {
      setState((prev) => ({
        ...prev,
        motion: { ...prev.motion, ...motion },
      }));
    },
    []
  );

  const setColorPreset = useCallback((presetColors: ColorPalette['colors']) => {
    setState((prev) => ({
      ...prev,
      colors: presetColors,
    }));
  }, []);

  const setFontPairing = useCallback((pairingId: string) => {
    const pairing = fontPairings.find((p) => p.id === pairingId);
    if (pairing) {
      setState((prev) => ({
        ...prev,
        typography: {
          headingFont: pairing.headingFont,
          bodyFont: pairing.bodyFont,
          accentFont: pairing.accentFont,
        },
      }));
    }
  }, []);

  const resetToDefaults = useCallback(() => {
    setState(defaultBrandState);
  }, []);

  return (
    <BrandContext.Provider
      value={{
        state,
        updateMeta,
        updateDesignSummary,
        updateDesignStyle,
        updateToneOfVoice,
        updateColors,
        updateTypography,
        updateLayoutDna,
        updateMotion,
        setColorPreset,
        setFontPairing,
        resetToDefaults,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
