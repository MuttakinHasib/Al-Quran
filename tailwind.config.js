module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueDark: '#0B132A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
