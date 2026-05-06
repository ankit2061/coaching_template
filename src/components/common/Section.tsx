import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  id,
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id={id}
      ref={(node) => { ref(node); }}
      className={`w-full py-16 md:py-24 px-4 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400 bg-clip-text text-transparent mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
