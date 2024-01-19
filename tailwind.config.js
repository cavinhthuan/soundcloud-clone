/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3300"
      },
      animation: {
        fromTop: "fromTop .25s linear"
      },
    },
  },
  plugins: []
};
