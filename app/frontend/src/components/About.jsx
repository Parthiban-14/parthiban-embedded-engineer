import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { MapPin, Mail, Phone } from 'lucide-react';

export const About = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight" data-testid="about-heading">
              About Me
            </h2>
            <div className="h-1 w-20 bg-brand-600" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-manrope text-base text-muted-foreground leading-relaxed">
                {personal.summary}
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm" data-testid="about-location">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span className="font-manrope text-muted-foreground">{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm" data-testid="about-email">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <a href={`mailto:${personal.email}`} className="font-manrope text-muted-foreground hover:text-brand-600 transition-colors">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm" data-testid="about-phone">
                  <Phone className="w-4 h-4 text-brand-600" />
                  <a href={`tel:${personal.phone}`} className="font-manrope text-muted-foreground hover:text-brand-600 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-ibm font-semibold text-xl" data-testid="achievements-heading">Achievements</h3>
              <ul className="space-y-4">
                {resumeData.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                    data-testid={`achievement-${index}`}
                  >
                    <span className="text-brand-600 mt-1">▸</span>
                    <span className="font-manrope text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
