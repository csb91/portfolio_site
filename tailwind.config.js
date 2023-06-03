/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'test': '12px 12px 0 1px rgba(0, 0, 255, .2)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
