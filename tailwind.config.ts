import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'orangeToYellow-gradient':
          'linear-gradient(90deg, #FF5029 0%, #E6B80B 100%)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        bodyText: 'var(--body-text-color)',
        background: 'var(--background)',
        titleText: 'var(--title-text-color)',
      },
    },
  },
  plugins: [],
};
export default config;
