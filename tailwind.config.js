module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('./images/florian-olivo-Mf23RF8xArY-unsplash.jpg')"
      }),
      animation: {
        'pulse-slow': 'pulse 4s infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}