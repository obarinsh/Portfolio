import { useBrand } from '../BrandContext';
import { colorPresets } from '../utils/defaults';
import {
  getContrastRatio,
  getContrastLevel,
  hexToHsl,
  generateContrastingForeground,
} from '../utils/colorUtils';
import { Check, AlertTriangle } from 'lucide-react';

interface ColorInputProps {
  label: string;
  colorKey: string;
  value: string;
  foregroundKey?: string;
  foregroundValue?: string;
  onChange: (key: string, value: string) => void;
}

function ColorInput({
  label,
  colorKey,
  value,
  foregroundKey,
  foregroundValue,
  onChange,
}: ColorInputProps) {
  const contrastLevel =
    foregroundValue && foregroundKey
      ? getContrastLevel(foregroundValue, value)
      : null;
  const contrastRatio =
    foregroundValue && foregroundKey
      ? getContrastRatio(foregroundValue, value).toFixed(2)
      : null;

  const hsl = hexToHsl(value);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[--color-foreground]">
          {label}
        </label>
        {contrastLevel && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
              contrastLevel === 'fail'
                ? 'bg-red-100 text-red-700'
                : contrastLevel === 'AAA'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {contrastLevel === 'fail' ? (
              <AlertTriangle className="w-3 h-3" />
            ) : (
              <Check className="w-3 h-3" />
            )}
            {contrastRatio}:1
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(colorKey, e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="h-12 rounded-lg border border-[--color-border] flex items-center justify-center transition-shadow hover:shadow-md"
            style={{ backgroundColor: value }}
          >
            <span
              className="text-xs font-mono px-2 py-1 rounded bg-white/80 backdrop-blur-sm"
              style={{ color: '#2C2C2C' }}
            >
              {value.toUpperCase()}
            </span>
          </div>
        </div>

        {foregroundKey && foregroundValue && (
          <div className="relative w-12">
            <input
              type="color"
              value={foregroundValue}
              onChange={(e) => onChange(foregroundKey, e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div
              className="h-12 w-12 rounded-lg border border-[--color-border] flex items-center justify-center text-xs font-bold transition-shadow hover:shadow-md"
              style={{
                backgroundColor: foregroundValue,
                color: generateContrastingForeground(foregroundValue),
              }}
              title="Foreground color"
            >
              Aa
            </div>
          </div>
        )}
      </div>

      {hsl && (
        <p className="text-xs text-[--color-muted-foreground]">
          HSL: {hsl.h}° {hsl.s}% {hsl.l}%
        </p>
      )}
    </div>
  );
}

export function ColorPalettePanel() {
  const { state, updateColors, setColorPreset } = useBrand();
  const { colors } = state;

  const handleColorChange = (key: string, value: string) => {
    updateColors({ [key]: value });
  };

  return (
    <div className="space-y-8">
      {/* Presets */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Color Presets
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(colorPresets).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => setColorPreset(preset.colors)}
              className="p-4 rounded-xl border border-[--color-border] hover:border-[--color-primary] transition-all text-left group"
            >
              <div className="flex gap-1 mb-2">
                {[
                  preset.colors.background,
                  preset.colors.primary,
                  preset.colors.secondary,
                  preset.colors.accent,
                ].map((color, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border border-black/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="font-medium text-sm group-hover:text-[--color-primary] transition-colors">
                {preset.name}
              </p>
              <p className="text-xs text-[--color-muted-foreground]">
                {preset.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Core Colors */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Core Colors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorInput
            label="Background"
            colorKey="background"
            value={colors.background}
            foregroundKey="foreground"
            foregroundValue={colors.foreground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Primary"
            colorKey="primary"
            value={colors.primary}
            foregroundKey="primaryForeground"
            foregroundValue={colors.primaryForeground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Secondary"
            colorKey="secondary"
            value={colors.secondary}
            foregroundKey="secondaryForeground"
            foregroundValue={colors.secondaryForeground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Accent"
            colorKey="accent"
            value={colors.accent}
            foregroundKey="accentForeground"
            foregroundValue={colors.accentForeground}
            onChange={handleColorChange}
          />
        </div>
      </div>

      {/* Surface Colors */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Surface Colors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorInput
            label="Muted"
            colorKey="muted"
            value={colors.muted}
            foregroundKey="mutedForeground"
            foregroundValue={colors.mutedForeground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Card"
            colorKey="card"
            value={colors.card}
            foregroundKey="cardForeground"
            foregroundValue={colors.cardForeground}
            onChange={handleColorChange}
          />
        </div>
      </div>

      {/* UI Colors */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          UI Elements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorInput
            label="Border"
            colorKey="border"
            value={colors.border}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Input"
            colorKey="input"
            value={colors.input}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Focus Ring"
            colorKey="ring"
            value={colors.ring}
            onChange={handleColorChange}
          />
        </div>
      </div>

      {/* Status Colors */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Status Colors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorInput
            label="Destructive"
            colorKey="destructive"
            value={colors.destructive}
            foregroundKey="destructiveForeground"
            foregroundValue={colors.destructiveForeground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Success"
            colorKey="success"
            value={colors.success}
            foregroundKey="successForeground"
            foregroundValue={colors.successForeground}
            onChange={handleColorChange}
          />
          <ColorInput
            label="Warning"
            colorKey="warning"
            value={colors.warning}
            foregroundKey="warningForeground"
            foregroundValue={colors.warningForeground}
            onChange={handleColorChange}
          />
        </div>
      </div>

      {/* Accessibility Note */}
      <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
        <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
          <Check className="w-4 h-4 text-green-600" />
          WCAG Accessibility
        </h4>
        <p className="text-sm text-[--color-muted-foreground]">
          Each color pair is checked for WCAG AA compliance (4.5:1 contrast ratio).
          Green badges indicate AAA level (7:1+), yellow indicates AA level, and red
          indicates insufficient contrast.
        </p>
      </div>
    </div>
  );
}
