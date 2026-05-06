import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';

interface CardProps {
  children: React.ReactNode;
  variant?: 'glass' | 'gradient' | 'solid';
  hover?: boolean;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass',
  hover = true,
  className = '',
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollReveal();

  const variants = {
    glass: 'glass rounded-2xl p-6 md:p-8',
    gradient: 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-2xl p-6 md:p-8 border border-white/10 dark:border-primary-500/10',
    solid: 'bg-white dark:bg-dark-card rounded-2xl p-6 md:p-8 shadow-elevation dark:shadow-glass-dark border border-transparent dark:border-primary-900/20'
  };

  return (
    <motion.div
      ref={(node: HTMLDivElement | null) => { ref(node); }}
      className={`${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.01, boxShadow: '0 24px 50px rgba(15, 23, 42, 0.15)' } : {}}
    >
      {children}
    </motion.div>
  );
};
