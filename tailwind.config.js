/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        concert: "ConcertOne",
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
