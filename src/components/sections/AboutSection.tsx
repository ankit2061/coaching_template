import React from 'react';
import { Section, Card } from '../common';
import content from '../../config/content.json';

const iconMap: Record<string, React.ReactNode> = {
  users: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
  book: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.669 0-3.218.51-4.5 1.385A7.968 7.968 0 009 4.804z" /></svg>,
  target: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>,
  zap: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0110 2v5H6a1 1 0 00-.82 1.573l7 10A1 1 0 0016 17v-5h4a1 1 0 00.82-1.573l-7-10a1 1 0 00-1.48 0z" clipRule="evenodd" /></svg>,
};

export const AboutSection: React.FC<{ className?: string }> = ({ className }) => {
  const { about } = content;

  return (
    <Section id="about" title={about.title} className={className}>
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden gradient-border soft-shadow">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="w-full h-[380px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {about.description}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {about.highlights.map((highlight, idx) => (
          <Card key={highlight.title} delay={idx * 0.1}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white mb-4">
                {iconMap[highlight.icon] || iconMap.book}
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {highlight.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
