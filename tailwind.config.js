/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    animation: {
      slowspin: "spin 3s linear infinite",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    colors: {
      primary: "#060D1F",
      secondary: "#FF1975",
      info: "#2F80ED",
      success: "#27AE60",
      warning: "#E2B93B",
      error: "#EB5757",
      white: "FFFFFF",
      black: {
        400: "#282828",
        500: "#1D1D1D",
        600: "#000000",
      },
      gray: {
        100: "#AFAFAF",
        200: "#E0E0E0",
        300: "#BDBDBD",
        400: "#828282",
        600: "#4F4F4F",
        700: "#333333",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1" }],
      sm: ["0.875rem", { lineHeight: "1" }],
      base: ["1rem", { lineHeight: "150%" }],
      lg: ["1.125rem", { lineHeight: "150%" }],
      xl: ["1.25rem", { lineHeight: "150%" }],
      "2xl": ["1.5rem", { lineHeight: "1" }],

      "3xl": ["2.25rem", { lineHeight: "1" }],
      "4xl": ["2.5rem", { lineHeight: "110%" }],
      "5xl": ["3rem", { lineHeight: "110%" }],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "800",
    },

    // screens: {
    //   "2xs": "320px",
    //   xs: "420px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1440px",
    //   "3xl": "1536px",
    //   "4xl": "1920px",
    // },
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      "3xl": "24px",
      "4xl": "32px",
      full: "calc(infinity * 1px)",
    },
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
      },

      zIndex: {
        "-1": "-1",
        100: 100,
        1000: 1000,
      },
      spacing: {
        contained: "calc(50vw - 863px)",
        fullheight: "calc(var(--vh, 1vh) * 100)",
        gutter: "5vw",
        13: "3.125rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        25: "6.25rem",
        75: "18.75rem",
        114: "28.5rem",
        125: "31.25rem",
      },
    },
  },
  plugins: [],
});
