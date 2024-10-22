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
        "secondary-green": "#3A4f41",
        accent: {
          'light-purple': "#DBCC1E1",
          'light-green': "#DBf9B8",
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

