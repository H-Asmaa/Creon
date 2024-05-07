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
      // screens: {
      //   'xs': '480px',
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
      //   '2xl': '1536px',
      // },
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
