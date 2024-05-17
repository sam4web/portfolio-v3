/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A9D8F',
        light: { DEFAULT: '#f4f4f9', body: '#edf6f9' },
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
