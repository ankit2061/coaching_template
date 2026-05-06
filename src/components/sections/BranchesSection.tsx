import React from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '../common';
import content from '../../config/content.json';

export const BranchesSection: React.FC<{ className?: string }> = ({ className }) => {
  const { branches } = content;

  return (
    <Section
      id="branches"
      title="Our Locations"
      subtitle="Visit us at any of our premium campuses across the city"
      className={className}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {branches.map((branch, idx) => (
          <Card key={branch.id} delay={idx * 0.1}>
            <motion.div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">{branch.name}</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.84 1.682 2.319 3.288 4.169 4.038l.774-1.549a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a href={`tel:${branch.phone}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <a href={`mailto:${branch.email}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm break-all">
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Timing</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{branch.timing}</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full mt-4 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </Card>
        ))}
      </div>

      {/* Map Placeholder */}
      <Card variant="gradient">
        <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-primary-600 dark:text-primary-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.553-.894L15 11" />
            </svg>
            <p className="text-slate-600 dark:text-slate-400">Interactive map coming soon</p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
