/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#09090A",
        whiteText: "#ffffff",
        Pink: "#E01E5A",
        mainBg: "#09090A",
        cardBg: "#1E1B33",
        bgGradient: "#D71D6199",
        purpleText: "#7040F2"
      },
      fontFamily: {
        Outfit: ["Outfit"]
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

