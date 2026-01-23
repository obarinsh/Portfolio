import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
