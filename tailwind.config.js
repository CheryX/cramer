/** @type {import('tailwindcss').Config} */
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
          '900': '#0c0f27',
          '800': '#1e1e41',
          '600': '#595989',
          '500': '#A8A8DF',
          '200': '#B9B9E9',
          '100': '#ebedff'
        }
      }
    },
  },
  plugins: [],
}
