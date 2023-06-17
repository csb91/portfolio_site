/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purple-blur': '12px 12px 10px 1px rgba(117, 106, 255, .8)',
        'purple-blur-2': '6px 6px 10px 1px rgba(117, 106, 255, .8)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
