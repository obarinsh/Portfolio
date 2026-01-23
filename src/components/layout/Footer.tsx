import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/projects';

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: socialLinks.email, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-heading text-lg mb-1">Olga</p>
            <p className="text-sm text-muted-foreground">
              Product Engineer bridging design and code
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Olga. Built with care using React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
