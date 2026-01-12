import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const { personal } = resumeData;

  return (
    <footer id="contact" className="py-16 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-ibm font-semibold text-2xl" data-testid="contact-heading">
              Get In Touch
            </h3>
            <p className="font-manrope text-sm text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                data-testid="contact-email"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand-600 transition-colors group"
              >
                <div className="p-2 rounded-lg border border-border group-hover:border-brand-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-manrope">{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone}`}
                data-testid="contact-phone"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand-600 transition-colors group"
              >
                <div className="p-2 rounded-lg border border-border group-hover:border-brand-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-manrope">{personal.phone}</span>
              </a>
              <div
                data-testid="contact-location"
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <div className="p-2 rounded-lg border border-border">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-manrope">{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-6">
            <h3 className="font-ibm font-semibold text-2xl">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Parthiban-14"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-github"
                className="p-3 rounded-lg border border-border hover:border-brand-600 hover:text-brand-600 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/parthiban-n-2005-04-01-np"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="p-3 rounded-lg border border-border hover:border-brand-600 hover:text-brand-600 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="pt-4">
              <a
                href="/PDF/Parthiban_N_Embedded_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-resume-link"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors"
              >
                Download Resume
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. Built with passion for embedded systems.
          </p>
        </div>
      </div>
    </footer>
  );
};
