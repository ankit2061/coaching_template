import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Triggers a one-time entrance animation when the element scrolls into view.
 * Returns a callback-ref you pass to the element, and an `isVisible` flag.
 */
export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  // Callback ref — safe to pass directly to JSX `ref={}`.
  const setRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref: setRef, isVisible };
};

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, setIsDark, toggleTheme: () => setIsDark(!isDark) };
};

export const usePrimaryColor = () => {
  const [primaryColor, setPrimaryColor] = useState('#3a7bd5');

  const changePrimaryColor = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--color-primary', color);
    localStorage.setItem('primaryColor', color);
  };

  return { primaryColor, changePrimaryColor };
};
