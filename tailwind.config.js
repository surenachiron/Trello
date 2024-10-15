/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,tsx}",
    "./src/pages/**/*.{js,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-lime",
    "bg-orange",
    "bg-red",
    "bg-yellow",
    "bg-purple",
    "bg-magenta",
    "bg-teal",
    "bg-green",
    "bg-dark",
  ],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#0079bf",
        lime: "#70b500",
        orange: "#ff9f1a",
        red: "#eb5a46",
        yellow: "#f2d600",
        purple: "#c377e0",
        magenta: "#c377e0",
        teal: "#00c2e0",
        green: "#51e898",
        gray: "#c4c9cc",
        dark: "#101204",
        advent: {
          0: "rgb(var(--advent-0) / <alpha-value>)",
          1: "rgb(var(--advent-1) / <alpha-value>)",
          2: "rgb(var(--advent-2) / <alpha-value>)",
        },
        accent: {
          0: "rgb(var(--accent-0) / <alpha-value>)",
          1: "rgb(var(--accent-1) / <alpha-value>)",
        },
        light: {
          0: "#e6e6e6",
          1: "#b3b3b3",
          muted: "rgb(255 255 255 / 0.2)",
          inactive: "rgb(255 255 255 / 0.3)",
        },
        bg: {
          darker: "#1E2129",
          0: "rgb(var(--bg) / <alpha-value>)",
          1: "rgb(var(--bg-1) / <alpha-value>)",
          muted: "rgb(255 255 255 / 10%)",
        },
        fg: {
          0: "rgb(var(--fg-0) / <alpha-value>)",
          1: "rgb(var(--fg-1) / <alpha-value>)",
          muted: "var(--fg-muted)",
          error: "rgb(255 117 117 / <alpha-value>)",
          success: "rgb(134 239 172 / <alpha-value>)",
        },
      },
      fontSize: {
        xs: "0.5rem",
        sm: "0.8rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "5rem",
      },
      screens: {
        xs: "360px",
        sm: "560px",
        md: "760px",
        lg: "960px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
