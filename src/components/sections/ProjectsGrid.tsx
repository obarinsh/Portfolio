import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProjectsGrid() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            01. Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects where I've bridged design and development to
            solve real user problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-5 lg:p-8 rounded-2xl lg:rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image / Placeholder */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  {project.image || project.gif ? (
                    /* Project Image with browser window frame */
                    <div className="rounded-xl lg:rounded-2xl border border-border bg-card overflow-hidden shadow-lg w-full">
                      {/* Browser window header */}
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-muted/50 border-b border-border">
                        <div className="flex gap-1 sm:gap-1.5 shrink-0">
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-destructive/60"></span>
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-warning/60"></span>
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-success/60"></span>
                        </div>
                        <div className="flex-1 min-w-0 mx-1 sm:mx-4">
                          <div className="h-5 sm:h-6 bg-background/80 rounded-md border border-border/50 flex items-center px-2 overflow-hidden">
                            <span className="text-[9px] sm:text-xs text-muted-foreground truncate">{project.liveUrl || project.title}</span>
                          </div>
                        </div>
                      </div>
                      {/* Image content */}
                      <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-gradient-to-br from-muted to-primary/10">
                        <img
                          src={project.image || project.gif}
                          alt={project.title}
                          className={`w-full h-full object-cover object-left-top ${project.gif ? 'group-hover:opacity-0' : ''} transition-opacity duration-300`}
                        />
                        {project.gif && (
                          <img
                            src={project.gif}
                            alt={`${project.title} preview`}
                            className="absolute inset-0 w-full h-full object-cover object-left-top opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Decorative placeholder */
                    <div className="aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-primary/10 flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          className="w-32 h-32 rounded-full bg-primary/10"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-5xl font-heading text-primary/30">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <div className="text-muted-foreground mb-6 space-y-3">
                    <p>{project.description}</p>
                    {project.longDescription && (
                      <p className="text-sm">{project.longDescription.trim()}</p>
                    )}
                  </div>

                  {/* Problem & Outcome */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        The Problem
                      </p>
                      <p className="text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        The Outcome
                      </p>
                      <p className="text-sm text-primary">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading mb-6 text-muted-foreground">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h4 className="text-lg font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-sm text-primary hover:underline"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
