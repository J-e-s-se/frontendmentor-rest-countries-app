/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme") 

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      }, 
      colors: {
        'light-gray': 'hsl(0, 0%, 98%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'vdarkbluet': 'hsl(200, 15%, 8%)',
        'verydarkbluebg': 'hsl(207, 26%, 17%)',
        'dark-blue': 'hsl(209, 23%, 22%)'
      },
      boxShadow: {
        'bottom': '0 7px 5px -5px rgb(0 0 0 / 0.1)'
      }
    },

    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        xs: '2rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
