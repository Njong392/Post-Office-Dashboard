import formsPlugin from '@tailwindcss/forms'
import  flowBite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      blue: "#0a5592",
      yellow: "#fbd404",
      white: "#ffffff",
      "deep-gray": "#2A3439",
      "army-green": "#4a683a",
      "light-green": "#99a64d",
      "lighter-green": "#aebe79",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [formsPlugin, flowBite],
};

