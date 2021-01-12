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
      gridTemplateRows: {
        // Simple 8 row grid

        38: 'repeat(38, minmax(0, 1fr))',
        57: 'repeat(57, minmax(0, 1fr))',
        76: 'repeat(76, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      signika: ['Ubuntu', 'sans-serif'],
      headTitle: ['Julius Sans One', 'sans-serif'],
      noorehuda: ['noorehuda'],
      solaimanLipi: ['SolaimanLipi'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
