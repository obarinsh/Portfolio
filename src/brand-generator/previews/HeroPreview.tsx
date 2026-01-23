import { useBrand } from '../BrandContext';
import { ArrowRight } from 'lucide-react';

export function HeroPreview() {
  const { state } = useBrand();
  const { meta, colors, typography, designStyle } = state;

  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
      }}
    >
      {/* Mini Navigation */}
      <div
        className="px-6 py-4 border-b flex items-center justify-between"
        style={{ borderColor: colors.border }}
      >
        <span
          className="text-lg font-medium"
          style={{
            fontFamily: `'${typography.headingFont}', serif`,
            color: colors.foreground,
          }}
        >
          {meta.brandName}
        </span>
        <div className="flex gap-4">
          {['Projects', 'About', 'Contact'].map((item) => (
            <span
              key={item}
              className="text-sm"
              style={{ color: colors.mutedForeground }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="p-8 md:p-12">
        {/* Label */}
        <p
          className="text-xs uppercase tracking-[0.2em] mb-4"
          style={{ color: colors.primary }}
        >
          Product Engineer
        </p>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl mb-6 leading-tight"
          style={{
            fontFamily: `'${typography.headingFont}', serif`,
            color: colors.foreground,
          }}
        >
          {meta.brandName ? `Hi, I'm ${meta.brandName}` : "Hi, I'm Olga"}
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl mb-8 max-w-lg"
          style={{ color: colors.mutedForeground }}
        >
          {meta.tagline || 'Product Engineer bridging design and code'}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-8">
          {designStyle.moodKeywords.slice(0, 4).map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full border"
              style={{
                borderColor: colors.border,
                color: colors.mutedForeground,
              }}
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            className="px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]"
            style={{
              backgroundColor: colors.primary,
              color: colors.primaryForeground,
            }}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            className="px-6 py-3 rounded-xl font-medium border transition-all duration-200 hover:scale-[1.02]"
            style={{
              borderColor: colors.border,
              color: colors.foreground,
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Decorative Element - Organic Shape */}
      <div className="relative h-24 overflow-hidden">
        <svg
          viewBox="0 0 400 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z"
            fill={colors.muted}
            opacity="0.5"
          />
          <path
            d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z"
            fill={colors.primary}
            opacity="0.1"
          />
        </svg>
      </div>
    </div>
  );
}
