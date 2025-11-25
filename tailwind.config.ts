import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#23402E',
        leaf: '#5E8A5F',
        beige: '#F5F1E8',
        night: '#111111',
        white: '#FFFFFF'
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
