import { motion } from 'framer-motion';
import { Code2, Palette, Users, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'React, PostgreSQL, Node.js, and modern web technologies.',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Creating cohesive, scalable component libraries and design tokens.',
  },
  {
    icon: Users,
    title: 'User-Centered',
    description: 'Obsessed with understanding and solving real user problems.',
  },
  {
    icon: Sparkles,
    title: 'AI-Native',
    description: 'Embracing coding, vibe coding and AI tools to ship faster and better.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
              02. About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Product Engineer
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Product Engineer who believes the best products come from
                understanding users deeply and having the technical skills to bring
                solutions to life quickly.
              </p>
              <p>
                My approach combines design thinking with engineering pragmatism. I
                don't just write code—I solve problems. Whether it's crafting a
                design system, building an AI-powered feature, or optimizing a user
                flow, I focus on impact.
              </p>
              <p>
                I embrace AI-native workflows and "vibe coding" because they let me
                move faster from idea to implementation. The future of product
                development is about leveraging every tool available to create
                better experiences.
              </p>
            </div>

            {/* Handwritten accent */}
            <motion.p
              className="mt-8 text-2xl font-accent text-accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "Elegant but fresh, modern and refined"
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
