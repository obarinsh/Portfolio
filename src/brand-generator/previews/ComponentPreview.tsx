import { useBrand } from '../BrandContext';
import { ArrowRight, Heart, Star, Mail, ExternalLink } from 'lucide-react';

export function ComponentPreview() {
  const { state } = useBrand();
  const { colors, typography } = state;

  return (
    <div className="space-y-8">
      {/* Buttons */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-4 uppercase tracking-wider">
          Buttons
        </h4>
        <div className="flex flex-wrap gap-4">
          {/* Primary Button */}
          <button
            className="px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            style={{
              backgroundColor: colors.primary,
              color: colors.primaryForeground,
            }}
          >
            Primary Button
          </button>

          {/* Secondary Button */}
          <button
            className="px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: colors.secondary,
              color: colors.secondaryForeground,
            }}
          >
            Secondary
          </button>

          {/* Outline Button */}
          <button
            className="px-6 py-3 rounded-xl font-medium border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              borderColor: colors.primary,
              color: colors.primary,
              backgroundColor: 'transparent',
            }}
          >
            Outline
          </button>

          {/* Ghost Button */}
          <button
            className="px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-[--color-muted] active:scale-[0.98]"
            style={{ color: colors.foreground }}
          >
            Ghost Button
          </button>

          {/* Icon Button */}
          <button
            className="p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: colors.accent,
              color: colors.accentForeground,
            }}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-4 uppercase tracking-wider">
          Cards
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Card */}
          <div
            className="p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
              style={{ backgroundColor: colors.primary + '20' }}
            >
              <Star className="w-5 h-5" style={{ color: colors.primary }} />
            </div>
            <h3
              className="text-xl mb-2"
              style={{
                fontFamily: `'${typography.headingFont}', serif`,
                color: colors.cardForeground,
              }}
            >
              Card Title
            </h3>
            <p style={{ color: colors.mutedForeground }} className="text-sm">
              This is a sample card component with your brand colors applied.
            </p>
          </div>

          {/* Featured Card */}
          <div
            className="p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            style={{
              backgroundColor: colors.primary,
              color: colors.primaryForeground,
            }}
          >
            <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-white/20">
              <Heart className="w-5 h-5" />
            </div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: `'${typography.headingFont}', serif` }}
            >
              Featured Card
            </h3>
            <p className="text-sm opacity-90">
              A highlighted card using the primary color as background.
            </p>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-4 uppercase tracking-wider">
          Form Inputs
        </h4>
        <div className="space-y-4 max-w-md">
          {/* Text Input */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: colors.foreground }}
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: colors.mutedForeground }}
              />
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: colors.card,
                  borderColor: colors.input,
                  color: colors.foreground,
                  // @ts-expect-error CSS custom property
                  '--tw-ring-color': colors.ring,
                }}
              />
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: colors.foreground }}
            >
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
              style={{
                backgroundColor: colors.card,
                borderColor: colors.input,
                color: colors.foreground,
              }}
            />
          </div>
        </div>
      </div>

      {/* Badges & Tags */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-4 uppercase tracking-wider">
          Badges & Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.primary,
              color: colors.primaryForeground,
            }}
          >
            Primary
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.secondary,
              color: colors.secondaryForeground,
            }}
          >
            Secondary
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.accent,
              color: colors.accentForeground,
            }}
          >
            Accent
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.muted,
              color: colors.mutedForeground,
            }}
          >
            Muted
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.success,
              color: colors.successForeground,
            }}
          >
            Success
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.warning,
              color: colors.warningForeground,
            }}
          >
            Warning
          </span>
          <span
            className="px-3 py-1 text-sm rounded-full"
            style={{
              backgroundColor: colors.destructive,
              color: colors.destructiveForeground,
            }}
          >
            Destructive
          </span>
        </div>
      </div>

      {/* Links */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-4 uppercase tracking-wider">
          Links
        </h4>
        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium transition-colors duration-200 hover:underline underline-offset-4"
            style={{ color: colors.primary }}
          >
            Primary Link
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium transition-colors duration-200 hover:underline underline-offset-4"
            style={{ color: colors.accent }}
          >
            Accent Link
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:underline underline-offset-4"
            style={{ color: colors.mutedForeground }}
          >
            Muted Link
          </a>
        </div>
      </div>
    </div>
  );
}
