/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url(/static/school.jpg)",
      },
      colors: {
        primary: {
          teal: colors.teal
        }
      }
    },
  },
}
