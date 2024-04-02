import formsPlugin from '@tailwindcss/forms'
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    extend: {},
  },
  plugins: [formsPlugin],
};

