/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'test': '12px 12px 0 1px rgba(117, 106, 255, .8)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
