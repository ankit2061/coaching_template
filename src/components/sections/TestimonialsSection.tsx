import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, Card } from '../common';
import content from '../../config/content.json';

export const TestimonialsSection: React.FC<{ className?: string }> = ({ className }) => {
  const { testimonials } = content;
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [currentIdx];
    if (testimonials.length > 1) {
      visible.push((currentIdx + 1) % testimonials.length);
    }
    if (testimonials.length > 2) {
      visible.push((currentIdx + 2) % testimonials.length);
    }
    return visible;
  };

  return (
    <Section
      id="testimonials"
      title="What Our Students Say"
      subtitle="Hear from our successful students about their experience"
      className={className}
    >
      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((idx, position) => (
              <motion.div
                key={`${currentIdx}-${idx}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: position * 0.1 }}
                className={position > 0 ? 'hidden lg:block' : position > 0 && testimonials.length > 2 ? 'hidden md:block' : ''}
              >
                <Card variant="solid">
                  <motion.div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                        {testimonials[idx].avatar ? (
                          <img
                            src={testimonials[idx].avatar}
                            alt={testimonials[idx].name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <div>
                        <p className="font-semibold leading-tight">{testimonials[idx].name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{testimonials[idx].exam}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[idx].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 dark:text-slate-300 flex-grow mb-4 italic">
                      "{testimonials[idx].message}"
                    </p>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                      <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Verified Student Review
                      </span>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIdx ? 'bg-primary-600 w-8' : 'bg-slate-300 dark:bg-slate-600'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </Section>
  );
};
