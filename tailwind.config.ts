import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--theme-text)',
        heading: 'var(--theme-heading)',
        hr: 'var(--theme-hr)',
        layer1: 'var(--theme-layer1)',
        layer2: 'var(--theme-layer2)',
        layer3: 'var(--theme-layer3)',
        muted1: 'var(--theme-muted1)',
        muted2: 'var(--theme-muted2)',
        muted3: 'var(--theme-muted3)',
        primary: 'var(--theme-primary)',
        primaryAccent: 'var(--theme-primary-accent)',
        secondary: 'var(--theme-secondary)',
        secondaryAccent: 'var(--theme-secondary-accent)',
        critical: 'var(--theme-critical)',
        criticalAccent: 'var(--theme-critical-accent)',
      },
    },
  },
  plugins: [],
};
export default config;
