/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fromTop: "fromTop .25s linear",
      },
      colors: {
        primary: "#ff3300",
      },
    },
  },
  plugins: [],
};
