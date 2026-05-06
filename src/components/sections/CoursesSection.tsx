import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Card, Button } from '../common';
import content from '../../config/content.json';

export const CoursesSection: React.FC<{ className?: string }> = ({ className }) => {
  const { courses } = content;
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Section
      id="courses"
      title="Our Courses"
      subtitle="Comprehensive programs designed for your academic success"
      className={className}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <Card
            key={course.id}
            variant="solid"
            delay={idx * 0.1}
          >
            <motion.div
              className="flex flex-col h-full"
              onHoverStart={() => setHoveredId(course.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative mb-5">
                <img
                  src={course.image?.src}
                  alt={course.image?.alt || course.name}
                  className="w-full h-40 object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wide text-white bg-slate-900/60 px-2 py-1 rounded-full">
                  {course.duration}
                </span>
              </div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {course.description}
                  </p>
                </div>
              </div>

              <motion.div
                className="space-y-3 my-4 flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-11-4v3m6-3v3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                  <span>{course.batches}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Subjects:</div>
                  <div className="flex flex-wrap gap-1">
                    {course.subjects.map((subject) => (
                      <span key={subject} className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {course.price}
                </div>
                <motion.div
                  animate={hoveredId === course.id ? { scale: 1.05 } : { scale: 1 }}
                >
                  <Button variant="primary" size="sm">
                    Enroll Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
