import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Badge } from './ui/badge';

export const Skills = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight" data-testid="skills-heading">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-brand-600" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-4"
                data-testid={`skill-category-${categoryIndex}`}
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                      className="font-manrope text-xs px-3 py-1.5 border-border hover:border-brand-600 hover:text-brand-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
