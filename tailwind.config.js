/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'space-sky': "url('../src/images/Landingpage_starBG.jpg')",
      }
    },
  },
  plugins: [],
}