/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
       shadowcust1: '0 25px 50px -6px rgb(0 0 0 / 0.25)'
      },
    },
  },
  plugins: [],
}