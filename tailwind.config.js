/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0f766e',
        },
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
        },
        secondary: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0f766e',
        },
        surface: {
          DEFAULT: '#f4f7fb',
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#d5dee9',
          300: '#b8c5d6',
        },
        ink: {
          DEFAULT: '#0f172a',
          soft: '#334155',
          muted: '#94a3b8',
        },
        sticky: {
          teal: '#ccfbf1',
          coral: '#ffedd5',
          sky: '#e0f2fe',
          lemon: '#fef9c3',
          rose: '#ffe4e6',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 10px 34px rgba(13,148,136,0.14)',
        sticky: '0 2px 8px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.04)',
        board: '0 4px 24px rgba(15,23,42,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'sticky-in': 'stickyIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'board-fade': 'boardFade 0.7s ease-out forwards',
        'generate-pulse': 'generatePulse 1.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        stickyIn: {
          '0%': { opacity: 0, transform: 'translateY(16px) rotate(-2deg) scale(0.92)' },
          '100%': { opacity: 1, transform: 'translateY(0) rotate(var(--sticky-rotate, 0deg)) scale(1)' },
        },
        boardFade: {
          '0%': { opacity: 0, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        generatePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(13,148,136,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(13,148,136,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
