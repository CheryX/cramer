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
        primary: {
          50: "#F9F9FF",
          100: "#EBEDFF",
          200: "#C7CAE3",
          300: "#A2A4BB",
          400: "#7c7e93",
          500: "#44475d",
          600: "#282b42",
          700: "#1a1d35",
          800: "#13162e",
          900: "#0c0f27"
        }
      }
    },
  },
  plugins: [],
}
