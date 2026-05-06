import React from 'react';
import { motion } from 'framer-motion';
import { Section, Card } from '../common';
import content from '../../config/content.json';

export const AchievementsSection: React.FC<{ className?: string }> = ({ className }) => {
  const { achievements } = content;

  return (
    <Section
      id="achievements"
      title="Student Success Stories"
      subtitle="Real achievements from our dedicated students"
      className={className}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <Card key={achievement.name} variant="gradient" delay={idx * 0.1}>
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Rank Badge */}
              <div className="absolute top-0 right-0">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="url(#gradient)" opacity="0.9" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3a7bd5" />
                        <stop offset="100%" stopColor="#ff8c42" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm text-center px-2">
                      {achievement.rank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pr-20">
                <h3 className="text-2xl font-bold mb-1">{achievement.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {achievement.exam}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-800 dark:text-slate-200">Score: {achievement.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
