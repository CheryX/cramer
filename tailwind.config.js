/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px'
      },
      colors: {
        primary: colors.slate
      }
    },
  },
  plugins: [],
}
