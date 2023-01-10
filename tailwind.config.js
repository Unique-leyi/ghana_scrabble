/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    screens:{
      'sm': '576px', 
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      // => @media (min-width: 960px) { ... }
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },


    colors: {
      siteyellow: "#FFD100", /* (255,209,0) */ 
      sitered: "#EF3340", /* (239,51,64) */
      black: "#000",
      lightblack: "rgba(0,0,0,0.98)",
      white: "#fff",
      ash: "#f2f2f2",
    },
    
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    
  },
  plugins: [],
}
