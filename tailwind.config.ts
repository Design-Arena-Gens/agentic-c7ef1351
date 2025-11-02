import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        eth: {
          blue: '#3C97FF',
          purple: '#7C3AED',
          cyan: '#00E5FF',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(1000px 500px at 50% -20%, rgba(124,58,237,0.35), rgba(0,0,0,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(0,229,255,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
