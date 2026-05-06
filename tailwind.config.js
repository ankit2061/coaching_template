/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4fc',
          100: '#d9e7f9',
          200: '#b5cff3',
          300: '#8ab1ea',
          400: '#5f93e1',
          500: '#3a7bd5',
          600: '#2f66b6',
          700: '#275391',
          800: '#20406d',
          900: '#1b3558',
        },
        secondary: {
          50: '#fff4ec',
          100: '#ffe6d6',
          200: '#ffcbae',
          300: '#ffb082',
          400: '#ff9a5e',
          500: '#ff8c42',
          600: '#e6762e',
          700: '#c25f24',
          800: '#9c4a1e',
          900: '#7b3a19',
        },
        warm: {
          50: '#fff7ed',
          100: '#f8fafc',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #3a7bd5 0%, #ff8c42 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #5f93e1 0%, #ff9a5e 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        'elevation': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'elevation-lg': '0 30px 60px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '10px',
        lg: '15px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.dark .glass': {
          background: 'rgba(15, 23, 42, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-sm': {
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.dark .glass-sm': {
          background: 'rgba(15, 23, 42, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
        '.glass-lg': {
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.dark .glass-lg': {
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        },
      });
    },
  ],
}
