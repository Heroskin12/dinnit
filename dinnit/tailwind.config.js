/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'header': '62px',
        'profilepic': '45px',
      },
      colors: {
        primary: "#FF4C4C",
        secondary: {
          DEFAULT: "#475569",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        satisfy: ["Satisfy_400Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
