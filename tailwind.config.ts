import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        'primary-pale-blue': 'var(--primary-pale-blue)',
        'primary-bright-blue':'var(--primary-briht-blue)',
        'neutral-pale-blue': 'var(--neutral-pale-blue)',
        'neutral-desaturated-blue': 'var(--neutral-desaturated-blue)',
        'neutral-dark-blue': 'var(--neutral-dark-blue)'
      }
    },
  },
  plugins: [],
};
export default config;
