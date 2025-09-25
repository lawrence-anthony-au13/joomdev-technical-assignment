/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <-- important!
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // set default font to Montserrat
      },
    },
  },
  plugins: [],
};
