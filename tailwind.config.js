// @type {import('tailwindcss').Config}

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // important: "#root",
  theme: {
    extend: {
      colors: {
        'orange-color': '#D45B2B',
        'magenta-color': '#6625BF',
        'black-color': '#1E1E1E',
      },
    },
  },
  darkMode: 'media',
  plugins: [nextui()],
}