import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export const Education = () => {
  const { education, certifications } = resumeData;
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Education */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight flex items-center gap-3" data-testid="education-heading">
                <GraduationCap className="w-10 h-10 text-brand-600" />
                Education
              </h2>
              <div className="h-1 w-20 bg-brand-600" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-brand-600 transition-colors"
                  data-testid={`education-${index}`}
                >
                  <h3 className="font-ibm font-semibold text-base" data-testid={`education-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="font-manrope text-sm text-muted-foreground" data-testid={`education-institution-${index}`}>
                    {edu.institution}
                  </p>
                  <p className="font-mono text-xs text-brand-600 dark:text-brand-400" data-testid={`education-years-${index}`}>
                    {edu.years}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-ibm font-semibold text-4xl sm:text-5xl tracking-tight flex items-center gap-3" data-testid="certifications-heading">
                <Award className="w-10 h-10 text-brand-600" />
                Certifications
              </h2>
              <div className="h-1 w-20 bg-brand-600" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  data-testid={`certification-${index}`}
                  onClick={() => setSelectedCertification(cert)}
                >
                  <Badge
                    variant="outline"
                    className="w-full h-full font-manrope text-xs px-4 py-3 border-border hover:border-brand-600 hover:text-brand-600 transition-colors text-center justify-center cursor-pointer"
                  >
                    {typeof cert === 'string' ? cert : cert.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertification} onOpenChange={() => setSelectedCertification(null)}>
        <DialogContent className="max-w-2xl" data-testid="certificate-modal">
          {selectedCertification && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="font-ibm font-semibold text-xl" data-testid="certificate-modal-title">
                  {typeof selectedCertification === 'string' ? selectedCertification : selectedCertification.name}
                </DialogTitle>
              </DialogHeader>

              {selectedCertification?.image && (
                <div className="w-full rounded-lg overflow-hidden bg-muted">
                  <img
                    src={selectedCertification.image}
                    alt={typeof selectedCertification === 'string' ? selectedCertification : selectedCertification.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              {selectedCertification?.issuer && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Issued By
                  </h4>
                  <p className="font-manrope text-sm text-muted-foreground">
                    {selectedCertification.issuer}
                  </p>
                </div>
              )}

              {selectedCertification?.date && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Date Received
                  </h4>
                  <p className="font-manrope text-sm text-muted-foreground">
                    {selectedCertification.date}
                  </p>
                </div>
              )}

              {selectedCertification?.credentialId && (
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Credential ID
                  </h4>
                  <p className="font-manrope text-sm text-muted-foreground font-mono">
                    {selectedCertification.credentialId}
                  </p>
                </div>
              )}

              {selectedCertification?.credentialUrl && (
                <div className="pt-2">
                  <a
                    href={selectedCertification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors text-sm font-manrope"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
