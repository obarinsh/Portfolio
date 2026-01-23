import { useBrand } from '../BrandContext';
import { hexToHsl, getContrastRatio } from '../utils/colorUtils';

export function ColorSwatches() {
  const { state } = useBrand();
  const { colors } = state;

  const colorGroups = [
    {
      name: 'Core',
      colors: [
        { key: 'background', label: 'Background', fg: 'foreground' },
        { key: 'primary', label: 'Primary', fg: 'primaryForeground' },
        { key: 'secondary', label: 'Secondary', fg: 'secondaryForeground' },
        { key: 'accent', label: 'Accent', fg: 'accentForeground' },
      ],
    },
    {
      name: 'Surfaces',
      colors: [
        { key: 'card', label: 'Card', fg: 'cardForeground' },
        { key: 'muted', label: 'Muted', fg: 'mutedForeground' },
      ],
    },
    {
      name: 'Status',
      colors: [
        { key: 'success', label: 'Success', fg: 'successForeground' },
        { key: 'warning', label: 'Warning', fg: 'warningForeground' },
        { key: 'destructive', label: 'Destructive', fg: 'destructiveForeground' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {colorGroups.map((group) => (
        <div key={group.name}>
          <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-3 uppercase tracking-wider">
            {group.name}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {group.colors.map(({ key, label, fg }) => {
              const bgColor = colors[key as keyof typeof colors];
              const fgColor = colors[fg as keyof typeof colors];
              const hsl = hexToHsl(bgColor);
              const contrast = getContrastRatio(fgColor, bgColor).toFixed(1);

              return (
                <div
                  key={key}
                  className="rounded-xl overflow-hidden border border-[--color-border]"
                >
                  <div
                    className="h-20 flex items-center justify-center"
                    style={{ backgroundColor: bgColor }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: fgColor }}
                    >
                      Aa
                    </span>
                  </div>
                  <div className="p-3 bg-[--color-card]">
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-[--color-muted-foreground] font-mono">
                      {bgColor.toUpperCase()}
                    </p>
                    {hsl && (
                      <p className="text-xs text-[--color-muted-foreground]">
                        {hsl.h}° {hsl.s}% {hsl.l}%
                      </p>
                    )}
                    <p className="text-xs text-[--color-muted-foreground] mt-1">
                      Contrast: {contrast}:1
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Full Palette Strip */}
      <div>
        <h4 className="text-sm font-medium text-[--color-muted-foreground] mb-3 uppercase tracking-wider">
          Full Palette
        </h4>
        <div className="flex rounded-xl overflow-hidden border border-[--color-border]">
          {[
            colors.background,
            colors.muted,
            colors.card,
            colors.primary,
            colors.secondary,
            colors.accent,
            colors.success,
            colors.warning,
            colors.destructive,
            colors.foreground,
          ].map((color, index) => (
            <div
              key={index}
              className="flex-1 h-12 transition-all duration-200 hover:flex-[2]"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
