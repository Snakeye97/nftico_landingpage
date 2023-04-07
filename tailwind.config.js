/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#04011C",
        whiteText: "#ffffff",
        pinkHover: "#E01E5A",
        mainBg: "#09090A",
        cardBg: "#1E1B33",
        bgGradient: "linear-gradient(89.62deg, #0500FA 7.09%, #E01E5A 92.23%)",
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

