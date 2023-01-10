/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundPosition: {
        y: "background-position-y",
        x: "background-position-x",
      },
    },
  },
  plugins: [],
};
