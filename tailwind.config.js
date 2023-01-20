/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/index.css"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467S",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
        success: {
          50: "#ECFDF3",
          700: "#027A48",
          500: "#12B76A",
        },
      },
    },
  },
  plugins: [],
};
