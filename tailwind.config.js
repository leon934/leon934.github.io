/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        lg: '5px 10px 15px -3px rgb(0 0 0 / 0.1), 5px 4px 6px -4px rgb(0 0 0 / 0.1)', // Your custom shadow
      }
    },
  },
  plugins: [],
}