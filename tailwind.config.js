/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    'src/app/*.tsx',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontFamily: {
        'monument': ['Monument Extended', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
