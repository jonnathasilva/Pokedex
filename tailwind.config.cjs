/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        poison: "#3b8753",
        normal: "#000000",
      },
    },
  },
  plugins: [],
}
