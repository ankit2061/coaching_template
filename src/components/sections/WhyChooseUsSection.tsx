import React from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '../common';
import content from '../../config/content.json';

const iconMap: Record<string, React.ReactNode> = {
  award: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
  'graduation-cap': <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" /></svg>,
  'chart-up': <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V9.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 8H12z" clipRule="evenodd" /></svg>,
  'book-open': <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 11-2 0V5H5v12h9v-1a1 1 0 112 0v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" clipRule="evenodd" /></svg>,
  monitor: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 11-2 0V5H5v12h9v-1a1 1 0 112 0v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" clipRule="evenodd" /></svg>,
};

export const WhyChooseUsSection: React.FC<{ className?: string }> = ({ className }) => {
  const { whyChooseUs } = content;

  return (
    <Section
      id="why-choose-us"
      title="Why Choose Us"
      subtitle="What makes Elite Academy the preferred choice for students"
      className={className}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUs.map((item, idx) => (
          <Card key={item.title} delay={idx * 0.1}>
            <motion.div className="flex flex-col h-full text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mx-auto mb-4">
                {iconMap[item.icon] || iconMap.award}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 flex-grow">
                {item.description}
              </p>
            </motion.div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
