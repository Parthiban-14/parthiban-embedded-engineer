import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

export const Experience = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
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
            <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight" data-testid="experience-heading">
              Experience
            </h2>
            <div className="h-1 w-20 bg-brand-600" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-12`}
                  data-testid={`experience-${index}`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-brand-600 bg-background z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  } pl-8 md:pl-0`}>
                    <div className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-brand-600 transition-colors">
                      <div className="space-y-1">
                        <h3 className="font-ibm font-semibold text-lg" data-testid={`experience-title-${index}`}>
                          {exp.title}
                        </h3>
                        <div className="font-manrope text-sm text-brand-600 dark:text-brand-400" data-testid={`experience-company-${index}`}>
                          {exp.company}
                        </div>
                        <div className="font-mono text-xs text-muted-foreground" data-testid={`experience-duration-${index}`}>
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className={`font-manrope text-sm text-muted-foreground flex gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                            }`}
                            data-testid={`experience-${index}-desc-${descIndex}`}
                          >
                            <span className="text-brand-600 mt-0.5">▸</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
