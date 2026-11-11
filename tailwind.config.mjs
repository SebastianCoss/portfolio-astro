// @ts-check

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        accent: '#6366f1',
        'slate-950': '#020617',
        'slate-900': '#0f172a',
        'slate-800': '#1e293b'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif']
      }
    }
  }
};
