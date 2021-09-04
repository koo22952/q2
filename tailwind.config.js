module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {},
      width: {
        400: '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
