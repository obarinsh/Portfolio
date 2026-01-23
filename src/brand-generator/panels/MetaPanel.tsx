import { useBrand } from '../BrandContext';

export function MetaPanel() {
  const { state, updateMeta, updateDesignSummary, updateToneOfVoice, updateDesignStyle } = useBrand();
  const { meta, designSummary, toneOfVoice, designStyle } = state;

  return (
    <div className="space-y-8">
      {/* Brand Identity */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Brand Identity
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Brand Name</label>
            <input
              type="text"
              value={meta.brandName}
              onChange={(e) => updateMeta({ brandName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow"
              placeholder="Your name or brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tagline</label>
            <input
              type="text"
              value={meta.tagline}
              onChange={(e) => updateMeta({ tagline: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow"
              placeholder="A short description of what you do"
            />
          </div>
        </div>
      </div>

      {/* Design Summary */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Design Philosophy
        </h3>
        <div>
          <label className="block text-sm font-medium mb-2">Design Summary</label>
          <textarea
            value={designSummary}
            onChange={(e) => updateDesignSummary(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow resize-none"
            placeholder="Describe your design aesthetic in 2-3 sentences"
          />
        </div>
      </div>

      {/* Design Style */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Style Descriptors
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Styles</label>
            <input
              type="text"
              value={designStyle.primaryStyle.join(', ')}
              onChange={(e) =>
                updateDesignStyle({
                  primaryStyle: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow"
              placeholder="e.g., Elegant Organic, Modern Aristocratic"
            />
            <p className="text-xs text-[--color-muted-foreground] mt-1">
              Separate multiple styles with commas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Supporting Styles</label>
            <input
              type="text"
              value={designStyle.supportingStyles.join(', ')}
              onChange={(e) =>
                updateDesignStyle({
                  supportingStyles: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow"
              placeholder="e.g., Editorial, Human-centered"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mood Keywords</label>
            <input
              type="text"
              value={designStyle.moodKeywords.join(', ')}
              onChange={(e) =>
                updateDesignStyle({
                  moodKeywords: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                })
              }
              className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow"
              placeholder="e.g., elegant, warm, refined, approachable"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {designStyle.moodKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-[--color-primary]/10 text-[--color-primary]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tone of Voice */}
      <div>
        <h3 className="text-lg font-medium mb-4 font-[family-name:var(--font-heading)]">
          Tone of Voice
        </h3>
        <div>
          <label className="block text-sm font-medium mb-2">Communication Style</label>
          <textarea
            value={toneOfVoice}
            onChange={(e) => updateToneOfVoice(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-[--color-border] bg-[--color-card] focus:outline-none focus:ring-2 focus:ring-[--color-ring] transition-shadow resize-none"
            placeholder="Describe how you want to communicate with your audience"
          />
        </div>
      </div>

      {/* Preview Card */}
      <div className="p-6 rounded-xl bg-[--color-card] border border-[--color-border]">
        <p className="text-xs uppercase tracking-wider text-[--color-muted-foreground] mb-2">
          Brand Preview
        </p>
        <h2
          className="text-3xl mb-2 font-[family-name:var(--font-heading)]"
          style={{ color: 'var(--color-foreground)' }}
        >
          {meta.brandName || 'Your Name'}
        </h2>
        <p className="text-[--color-muted-foreground]">
          {meta.tagline || 'Your tagline goes here'}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {designStyle.primaryStyle.slice(0, 2).map((style, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full border border-[--color-border]"
            >
              {style}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
