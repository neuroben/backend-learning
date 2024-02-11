/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: ['jit'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        szin:{
          dark: "#1F1300",
          tgreen: "#DEF2C8",
          fgreen: "#506C64",
          agray: "#BCD0C7"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        'inconsolata': ['Inconsolata', 'monospace'],
      }
    },
  },
  plugins: [],
}