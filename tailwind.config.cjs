/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#09090B",
        "dark-secondary": "#111827",
        primary: "#0ea5e9",
        secondary: "#14b8a6",
        accent: "#22d3ee",
        "legacy-primary": "#00040f",
        "legacy-secondary": "#22d3ee",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(14, 165, 233, 0.15)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backdropFilter: {
        glass: "blur(20px)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 165, 233, 0.25)",
        "glow-pink": "0 0 30px rgba(16, 185, 129, 0.25)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #22d3ee, #06b6d4, #14b8a6)",
        "gradient-dark": "linear-gradient(135deg, #111827, #1f2937)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
