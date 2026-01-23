import { useBrand } from '../BrandContext';
import type { LayoutDna } from '../types';

interface SpectrumSliderProps {
  label: string;
  description: string;
  options: readonly [string, string, string];
  value: string;
  onChange: (value: string) => void;
}

function SpectrumSlider({
  label,
  description,
  options,
  value,
  onChange,
}: SpectrumSliderProps) {
  const currentIndex = options.indexOf(value as string);

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium text-[--color-foreground]">
          {label}
        </label>
        <p className="text-xs text-[--color-muted-foreground]">{description}</p>
      </div>

      <div className="relative">
        {/* Track */}
        <div className="h-2 bg-[--color-muted] rounded-full relative">
          {/* Fill */}
          <div
            className="absolute h-full bg-[--color-primary] rounded-full transition-all duration-200"
            style={{ width: `${(currentIndex / 2) * 100}%` }}
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mt-2">
          {options.map((option, index) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                value === option
                  ? 'bg-[--color-primary] text-[--color-primary-foreground] font-medium'
                  : 'text-[--color-muted-foreground] hover:text-[--color-foreground] hover:bg-[--color-muted]'
              }`}
              style={{
                transform: index === 1 ? 'translateX(-50%)' : undefined,
                marginLeft: index === 1 ? '50%' : undefined,
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LayoutDnaPanel() {
  const { state, updateLayoutDna } = useBrand();
  const { layoutDna } = state;

  const handleChange = <K extends keyof LayoutDna>(key: K, value: LayoutDna[K]) => {
    updateLayoutDna({ [key]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2 font-[family-name:var(--font-heading)]">
          Layout DNA
        </h3>
        <p className="text-sm text-[--color-muted-foreground] mb-6">
          Define the visual personality of your layout through these spectrum controls.
          These settings influence spacing, composition, and overall feel.
        </p>
      </div>

      <div className="space-y-8">
        <SpectrumSlider
          label="Contrast"
          description="Visual weight difference between elements"
          options={['low', 'medium', 'high'] as const}
          value={layoutDna.contrastSpectrum}
          onChange={(v) => handleChange('contrastSpectrum', v as LayoutDna['contrastSpectrum'])}
        />

        <SpectrumSlider
          label="Density"
          description="How tightly packed elements are"
          options={['sparse', 'balanced', 'dense'] as const}
          value={layoutDna.densitySpectrum}
          onChange={(v) => handleChange('densitySpectrum', v as LayoutDna['densitySpectrum'])}
        />

        <SpectrumSlider
          label="Text vs Image"
          description="Balance between textual and visual content"
          options={['text-heavy', 'balanced', 'image-heavy'] as const}
          value={layoutDna.textVsImageEmphasis}
          onChange={(v) => handleChange('textVsImageEmphasis', v as LayoutDna['textVsImageEmphasis'])}
        />

        <SpectrumSlider
          label="Complexity"
          description="Level of visual detail and ornamentation"
          options={['minimal', 'moderate', 'elaborate'] as const}
          value={layoutDna.complexitySpectrum}
          onChange={(v) => handleChange('complexitySpectrum', v as LayoutDna['complexitySpectrum'])}
        />

        <SpectrumSlider
          label="Grid Alignment"
          description="How strictly elements follow the grid"
          options={['strict', 'flexible', 'organic'] as const}
          value={layoutDna.gridAlignmentSpectrum}
          onChange={(v) => handleChange('gridAlignmentSpectrum', v as LayoutDna['gridAlignmentSpectrum'])}
        />

        <SpectrumSlider
          label="Negative Space"
          description="Amount of breathing room between elements"
          options={['compact', 'balanced', 'generous'] as const}
          value={layoutDna.negativeSpaceUsage}
          onChange={(v) => handleChange('negativeSpaceUsage', v as LayoutDna['negativeSpaceUsage'])}
        />
      </div>

      {/* Visual Summary */}
      <div className="p-6 rounded-xl bg-[--color-card] border border-[--color-border]">
        <h4 className="font-medium text-sm mb-4">Your Layout Profile</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(layoutDna).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                <span className="text-lg font-medium text-[--color-primary]">
                  {value.charAt(0).toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-[--color-muted-foreground]">
                {key.replace(/Spectrum|Usage|Emphasis/g, '').replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-sm font-medium capitalize">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
        <h4 className="font-medium text-sm mb-2">Layout Recommendations</h4>
        <ul className="text-sm text-[--color-muted-foreground] space-y-1">
          {layoutDna.densitySpectrum === 'sparse' && (
            <li>• Use generous padding (py-16, px-8) for sections</li>
          )}
          {layoutDna.negativeSpaceUsage === 'generous' && (
            <li>• Allow content to breathe with max-w-4xl containers</li>
          )}
          {layoutDna.gridAlignmentSpectrum === 'organic' && (
            <li>• Consider asymmetric layouts and overlapping elements</li>
          )}
          {layoutDna.complexitySpectrum === 'minimal' && (
            <li>• Keep decorative elements subtle and purposeful</li>
          )}
          {layoutDna.contrastSpectrum === 'medium' && (
            <li>• Balance bold headlines with lighter body text</li>
          )}
        </ul>
      </div>
    </div>
  );
}
