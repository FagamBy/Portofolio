/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "360px",
      ss: "560px",
      sm: "900px",
      md: "1060px",
      lg: "1200px",
      big: "1400px",
      xl: "1500px",
      xxl: "1700px"
    },
  },
  plugins: [],
}

