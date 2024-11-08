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
    },
  },
  darkMode: 'media',
  plugins: [nextui()]
}