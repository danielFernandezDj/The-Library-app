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
      width: {
        '90p': '90%', // Custom utility for 88% width
      },
    },
  },
  darkMode: 'media',
  plugins: [nextui()],
}