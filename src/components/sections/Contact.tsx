import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/projects';
import { Button } from '@/components/ui/Button';

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">
            03. Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach
            out!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="primary"
            size="lg"
            icon={<Mail className="w-5 h-5" />}
            iconPosition="left"
            onClick={() => window.location.href = socialLinks.email}
          >
            Say Hello
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="mt-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
          </div>
          <p className="relative text-4xl sm:text-6xl md:text-8xl font-heading text-muted/50">
            Thank you
          </p>
        </motion.div>
      </div>
    </section>
  );
}
