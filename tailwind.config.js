/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A9D8F',
        light: '#f4f4f9',
        dark: '#212529',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
