module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // darkNav: 'rgb(9,11,16)',
        darkNav: 'rgb(18,22,33)',
        darkNavSearch: 'rgb(20,33,46)',
        // darkBody: 'rgb(24,28,40)',
        darkBody: '#0D1117',
      },
    },
    fontFamily: {
      signika: ['Signika', 'sans-serif'],
      headTitle: ['Julius Sans One', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
