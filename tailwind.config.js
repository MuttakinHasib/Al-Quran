module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: 'rgb(9,11,16)',
        body: 'rgb(15,17,26)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
