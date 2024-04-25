/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.theme.mjs" // <-- add your theme file
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

