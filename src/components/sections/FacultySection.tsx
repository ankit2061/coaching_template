import React from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '../common';
import content from '../../config/content.json';

export const FacultySection: React.FC<{ className?: string }> = ({ className }) => {
  const { faculty } = content;

  return (
    <Section
      id="faculty"
      title="Our Expert Faculty"
      subtitle="Learn from the best educators in the industry"
      className={className}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member, idx) => (
          <Card key={member.id} variant="solid" delay={idx * 0.1}>
            <motion.div
              className="flex flex-col h-full"
              whileHover={{ y: -8 }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-2xl font-bold">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    member.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-dark-elevated text-xs font-semibold px-2 py-1 rounded-full shadow dark:shadow-black/30 dark:text-slate-200">
                  {member.experience}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-center mb-3">
                {member.subject}
              </p>

              <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {member.bio}
                </p>
              </div>

              <div className="flex-grow space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.488 5.951 1.488a1 1 0 001.169-1.409l-7-14z" />
                  </svg>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{member.qualification}</span>
                </div>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
