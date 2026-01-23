import { useBrand } from '../BrandContext';
import { ExternalLink, Github } from 'lucide-react';

export function CardPreview() {
  const { state } = useBrand();
  const { colors, typography } = state;

  const sampleProjects = [
    {
      title: 'Design System',
      description: 'A comprehensive component library built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind', 'TypeScript'],
      featured: true,
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack marketplace with real-time inventory management.',
      tags: ['Next.js', 'Prisma', 'Stripe'],
      featured: false,
    },
    {
      title: 'AI Writing Assistant',
      description: 'Smart writing tool powered by GPT-4 with collaborative features.',
      tags: ['AI', 'React', 'Node.js'],
      featured: false,
    },
  ];

  return (
    <div className="space-y-6">
      <h4 className="text-sm font-medium text-[--color-muted-foreground] uppercase tracking-wider">
        Project Cards
      </h4>

      <div className="grid grid-cols-1 gap-6">
        {sampleProjects.map((project, index) => (
          <div
            key={index}
            className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              project.featured ? 'md:flex' : ''
            }`}
            style={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            {/* Image Placeholder */}
            <div
              className={`${
                project.featured ? 'md:w-2/5' : 'h-48'
              } bg-gradient-to-br relative overflow-hidden`}
              style={{
                background: `linear-gradient(135deg, ${colors.muted} 0%, ${colors.primary}20 100%)`,
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-30"
                style={{ backgroundColor: colors.primary }}
              />
              <div
                className="absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: colors.accent }}
              />

              {/* Number indicator */}
              <span
                className="absolute bottom-4 left-4 text-6xl font-bold opacity-10"
                style={{
                  fontFamily: `'${typography.headingFont}', serif`,
                  color: colors.foreground,
                }}
              >
                0{index + 1}
              </span>
            </div>

            {/* Content */}
            <div className={`p-6 ${project.featured ? 'md:w-3/5 md:p-8' : ''}`}>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 text-xs rounded-md"
                    style={{
                      backgroundColor: colors.muted,
                      color: colors.mutedForeground,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className={`${project.featured ? 'text-2xl' : 'text-xl'} mb-2`}
                style={{
                  fontFamily: `'${typography.headingFont}', serif`,
                  color: colors.cardForeground,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm mb-4"
                style={{ color: colors.mutedForeground }}
              >
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                  style={{ color: colors.primary }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm transition-colors duration-200"
                  style={{ color: colors.mutedForeground }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
