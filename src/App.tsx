import { useEffect, useState } from 'react';
import { useTheme } from './hooks';
import content from './config/content.json';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  HeroSection,
  AboutSection,
  CoursesSection,
  WhyChooseUsSection,
  AchievementsSection,
  FacultySection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  BranchesSection,
  CTASection,
} from './components/sections';
import './App.css';

function App() {
  const { isDark, toggleTheme } = useTheme();
  useEffect(() => {
    // Theme is handled by useTheme hook
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-warm-100 dark:bg-dark-base text-slate-900 dark:text-slate-100 min-h-screen">
        <Header
          isDark={isDark}
          onThemeToggle={toggleTheme}
          siteName={content.site.name}
        />

        <main>
          <HeroSection />
          <AboutSection className="bg-warm-100 dark:bg-dark-surface" />
          <CoursesSection className="bg-warm-50 dark:bg-dark-base" />
          <WhyChooseUsSection className="bg-warm-100 dark:bg-dark-surface" />
          <AchievementsSection className="bg-warm-50 dark:bg-dark-base" />
          <FacultySection className="bg-warm-100 dark:bg-dark-surface" />
          <TestimonialsSection className="bg-warm-50 dark:bg-dark-base" />
          <CTASection />
          <BranchesSection className="bg-warm-50 dark:bg-dark-base" />
          <FAQSection className="bg-warm-100 dark:bg-dark-surface" />
          <ContactSection className="bg-warm-50 dark:bg-dark-base" />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

