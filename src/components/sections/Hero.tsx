import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto h-full">
        {/* Two containers - stack on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Container 1 - Introduction */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Label */}
              <motion.p
                className="text-xs uppercase tracking-[0.2em] text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Product Engineer
              </motion.p>

              {/* Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I'm{' '}
                <span className="text-primary">Olga</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I bridge{' '}
                <span className="text-foreground font-medium">design</span> and{' '}
                <span className="text-foreground font-medium">code</span>, solving
                user problems with AI-native tools and vibe coding.
              </motion.p>

              {/* Keywords */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {['User-Obsessed', 'AI-Native', 'Design Systems', 'Full-Stack'].map(
                  (keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 text-sm rounded-full border border-border text-muted-foreground"
                    >
                      {keyword}
                    </span>
                  )
                )}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Container 2 - Phone Mockup */}
          <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0 scale-90 sm:scale-100">
            <PhoneMockup />
          </div>
          
        </div>
      </div>
    </section>
  );
}
