/** @type {import('tailwindcss').Config} */
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
          950: "#052C33",
          900: "#08363E",
          850: "#0B404A",
          800: "#0E4A55",
          750: "#125560",
          700: "#175F6C",
          650: "#1C6977",
          600: "#217482",
          550: "#277E8E",
          500: "#2E8999",
          450: "#3594A4",
          400: "#3D9EB0",
          350: "#45A9BB",
          300: "#4DB4C6",
          250: "#56BFD2",
          200: "#60CADD",
          150: "#6AD5E8",
          100: "#74E1F4",
          50: "#80ECFF",  
        },
        secondary: {
          950: "#072746",
          900: "#0B2E51",
          850: "#0F355B",
          800: "#143D65",
          750: "#1A456F",
          700: "#204D7A",
          650: "#275684",
          600: "#2F5F8E",
          550: "#376898",
          500: "#4172A3",
          450: "#4A7CAD",
          400: "#5586B7",
          350: "#6091C1",
          300: "#6C9CCC",
          250: "#78A7D6",
          200: "#86B3E0",
          150: "#94BFEA",
          100: "#A2CBF5",
          50: "#B1D8FF",
        }
      }
    },
  },
}
