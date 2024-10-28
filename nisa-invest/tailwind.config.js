/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // includes all JS, JSX, TS, and TSX files in src
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#512294",
        accent: {
          "light-purple": "#DBCCE1",
          "light-yellow": "#FFDC73",
          "grey": "#36454F",
        },
      },
      fontFamily: {
        heading: ["playfair-display", "system-ui", "sans-serif"],
        button: ["Oswald", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
