module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {},
      width: {
        510: '510px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
