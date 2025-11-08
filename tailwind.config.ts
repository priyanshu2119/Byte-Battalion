import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        elev: 'var(--elev)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        orbit: {
          1: 'var(--orbit-1)',
          2: 'var(--orbit-2)',
          3: 'var(--orbit-3)',
          4: 'var(--orbit-4)',
          5: 'var(--orbit-5)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          contrast: 'var(--primary-contrast)',
        },
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        outline: 'var(--outline)',
      },
      borderRadius: {
        xl: '24px',
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        hard: 'var(--shadow-hard)',
      },
      fontSize: {
        'step--1': 'var(--step--1)',
        'step-0': 'var(--step-0)',
        'step-1': 'var(--step-1)',
        'step-2': 'var(--step-2)',
        'step-3': 'var(--step-3)',
        'step-4': 'var(--step-4)',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
