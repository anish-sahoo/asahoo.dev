/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/@heroui/theme/dist/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui(), require('@tailwindcss/typography')],
};
