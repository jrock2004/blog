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
        text: 'rgb(var(--color-text) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
        hr: 'rgb(var(--color-hr) / <alpha-value>)',
        layer1: 'rgb(var(--color-layer-1) / <alpha-value>)',
        layer2: 'rgb(var(--color-layer-2) / <alpha-value>)',
        layer3: 'rgb(var(--color-layer-3) / <alpha-value>)',
        muted1: 'rgb(var(--color-muted-1) / <alpha-value>)',
        muted2: 'rgb(var(--color-muted-2) / <alpha-value>)',
        muted3: 'rgb(var(--color-muted-3) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primaryAccent: 'rgb(var(--color-primary-accent) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        secondaryAccent: 'rgb(var(--color-secondary-accent) / <alpha-value>)',
        critical: 'rgb(var(--color-critical) / <alpha-value>)',
        criticalAccent: 'rgb(var(--color-critical-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-children'),
  ],
};
export default config;
