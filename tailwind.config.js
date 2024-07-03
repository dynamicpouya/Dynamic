/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Files/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "mainBlue" : "#001B48",
        "containerColor": "#02457A",
      },
    },
  },
  plugins: [],
}

