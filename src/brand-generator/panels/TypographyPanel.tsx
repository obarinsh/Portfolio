import { useBrand } from '../BrandContext';
import { fontPairings, typeScale } from '../utils/defaults';
import { Check } from 'lucide-react';

export function TypographyPanel() {
  const { state, setFontPairing } = useBrand();
  const { typography } = state;

  const currentPairing = fontPairings.find(
    (p) => p.headingFont === typography.headingFont
  );

  return (
    <div className="space-y-8">
      {/* Font Pairings */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Font Pairings
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {fontPairings.map((pairing) => {
            const isSelected = pairing.headingFont === typography.headingFont;
            return (
              <button
                key={pairing.id}
                onClick={() => setFontPairing(pairing.id)}
                className={`p-6 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-[--color-primary] bg-[--color-primary]/5 ring-2 ring-[--color-primary]/20'
                    : 'border-[--color-border] hover:border-[--color-primary]/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-medium text-sm text-[--color-muted-foreground] mb-1">
                      {pairing.name}
                    </p>
                    <p className="text-xs text-[--color-muted-foreground]">
                      {pairing.vibe}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-[--color-primary] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[--color-primary-foreground]" />
                    </div>
                  )}
                </div>

                {/* Preview */}
                <div className="space-y-2">
                  <p
                    className="text-3xl"
                    style={{ fontFamily: `'${pairing.headingFont}', ${pairing.headingFallback}` }}
                  >
                    The quick brown fox
                  </p>
                  <p
                    className="text-base text-[--color-muted-foreground]"
                    style={{ fontFamily: `'${pairing.bodyFont}', ${pairing.bodyFallback}` }}
                  >
                    Jumps over the lazy dog. Pack my box with five dozen liquor jugs.
                  </p>
                  {pairing.accentFont && (
                    <p
                      className="text-lg text-[--color-accent]"
                      style={{ fontFamily: `'${pairing.accentFont}', ${pairing.accentFallback}` }}
                    >
                      Handwritten accent style
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Type Scale Preview */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Type Scale
        </h3>
        <div className="space-y-4 p-6 rounded-xl border border-[--color-border] bg-[--color-card]">
          {typeScale.map((size) => (
            <div
              key={size.name}
              className="flex items-baseline gap-4 pb-4 border-b border-[--color-border] last:border-0 last:pb-0"
            >
              <span className="text-xs font-mono text-[--color-muted-foreground] w-12 shrink-0">
                {size.name}
              </span>
              <span
                className="font-[family-name:var(--font-heading)]"
                style={{
                  fontSize: size.size,
                  lineHeight: size.lineHeight,
                  letterSpacing: size.letterSpacing,
                  fontWeight: size.fontWeight,
                }}
              >
                {size.name === 'xs' || size.name === 'sm'
                  ? 'Small text for labels and captions'
                  : size.name === 'base' || size.name === 'lg'
                  ? 'Body text for paragraphs'
                  : 'Heading Text'}
              </span>
              <span className="text-xs font-mono text-[--color-muted-foreground] ml-auto shrink-0">
                {size.size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Selection Summary */}
      {currentPairing && (
        <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
          <h4 className="font-medium text-sm mb-3">Current Typography</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-[--color-muted-foreground] text-xs mb-1">Headings</p>
              <p className="font-medium">{currentPairing.headingFont}</p>
            </div>
            <div>
              <p className="text-[--color-muted-foreground] text-xs mb-1">Body</p>
              <p className="font-medium">{currentPairing.bodyFont}</p>
            </div>
            {currentPairing.accentFont && (
              <div>
                <p className="text-[--color-muted-foreground] text-xs mb-1">Accent</p>
                <p className="font-medium">{currentPairing.accentFont}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Typography Guidelines */}
      <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
        <h4 className="font-medium text-sm mb-2">Typography Guidelines</h4>
        <ul className="text-sm text-[--color-muted-foreground] space-y-1">
          <li>• Use heading font for h1-h6 and display text</li>
          <li>• Use body font for paragraphs, labels, and UI text</li>
          <li>• Accent font is optional, for signatures or callouts</li>
          <li>• Maintain consistent line-height for readability</li>
          <li>• Use letter-spacing values from the type scale</li>
        </ul>
      </div>
    </div>
  );
}
