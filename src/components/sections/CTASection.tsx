import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common';
import content from '../../config/content.json';

export const CTASection: React.FC<{ className?: string }> = ({ className }) => {
  const { cta } = content;

  return (
    <section className={`relative w-full py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 dark:from-primary-950 dark:via-primary-900 dark:to-secondary-900`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/40 dark:bg-primary-400/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/40 dark:bg-secondary-400/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {cta.title}
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-lg px-10 py-4"
          >
            {cta.button}
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: '🎓', title: 'Expert Mentors', desc: 'Learn from the best educators in the field' },
            { icon: '📚', title: 'Smart Materials', desc: 'Comprehensive, up-to-date study resources' },
            { icon: '⭐', title: 'Proven Results', desc: 'Consistent top ranks in all major exams' }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="glass dark:glass-dark rounded-2xl p-6 border-white/20 dark:border-white/10"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
