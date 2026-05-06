import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common';
import content from '../../config/content.json';

export const HeroSection: React.FC<{ className?: string }> = ({ className }) => {
  const { hero } = content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-warm-50 dark:bg-dark-base ${className || ''}`}>
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300/25 dark:bg-primary-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-300/25 dark:bg-secondary-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-secondary-200/20 dark:bg-primary-400/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-cyan-600 dark:from-primary-400 dark:via-secondary-400 dark:to-cyan-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
              >
                {hero.cta1.text}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.scrollTo({ top: document.getElementById('courses')?.offsetTop || 0, behavior: 'smooth' })}
              >
                {hero.cta2.text}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {hero.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="glass gradient-border rounded-2xl p-4 md:p-5"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative rounded-3xl overflow-hidden gradient-border soft-shadow">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Live Doubt Rooms</div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">24x7 Mentor Help</div>
            </div>

            <div className="absolute -top-6 right-6 glass rounded-2xl px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300">Weekly Tests</div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Personal Analytics</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
