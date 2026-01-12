import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { resumeData } from '../data/resume';

export const Hero = () => {
  const { personal } = resumeData;

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <img
          src="/images/BACk.png"
          alt="Circuit board background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400"
              >
                Hello, I'm
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-ibm font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight"
                data-testid="hero-name"
              >
                {personal.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-ibm font-semibold text-2xl sm:text-3xl lg:text-4xl text-brand-600 dark:text-brand-400"
                data-testid="hero-title"
              >
                {personal.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-manrope text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
              data-testid="hero-summary"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                data-testid="download-resume-btn"
                className="bg-brand-600 hover:bg-brand-700 text-white font-mono text-xs uppercase tracking-wider"
              >
                <a href="/PDF/Parthiban_N_Embedded_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-testid="view-projects-btn"
                className="font-mono text-xs uppercase tracking-wider"
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-xs text-muted-foreground overflow-hidden">
                  <code>{`// Embedded Systems Engineer
const engineer = {
  name: "${personal.name}",
  role: "${personal.title}",
  expertise: [
    "Embedded C",
    "FreeRTOS",
    "IoT Systems",
    "Hardware Interfacing"
  ],
  passion: "Building innovative\n           embedded solutions"
};`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};
