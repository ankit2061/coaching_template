import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common';
import content from '../../config/content.json';

export const FAQSection: React.FC<{ className?: string }> = ({ className }) => {
  const { faq } = content;
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our programs"
      className={className}
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((item, idx) => (
          <motion.div
            key={item.id}
            className="glass rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <motion.button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              whileHover={{ paddingRight: 24 }}
            >
              <h3 className="text-lg font-semibold text-left">{item.question}</h3>
              <motion.svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-white/20 dark:border-white/10">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
