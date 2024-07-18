/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7161ef',
        light: { DEFAULT: '#eff7f6', body: '#edf2fb' },
        dark: '#0A192F',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        display: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
