//const plugin = require('tailwindcss/plugin');
module.exports = {
  // mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  //darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        bounceInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(2000px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateX(-30px)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        bounceInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-2000px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateX(30px)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInUp: {
          from: {
            transform: "translateY(200px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out both",
        bounceInRight: "bounceInRight 3s ease-in-out both",
        bounceInLeft: "bounceInLeft 3s ease-in-out both",
        fadeInUp: "fadeInUp 3s ease-in-out both",
      },
      backgroundImage: {
        bgMenuFood: "url(/public/bgMenuFood.webp)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "1px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        green: {
          1000: "var(--green-1000)",
          base: "var(--green-base)",
          input: "var(--green-input)",
        },
        brown: {
          100: "var(--brown-100)",
          200: "var(--brown-200)",
        },
        yellow: {
          base: "var(--yellow)",
        },
        blue: {
          blue: "#2B3990",
        },
        red: {
          redd: "#ff514e",
        },
        bg: "#f5f5f5",
      },
      height: {
        200: "200px",
        101: "101px",
      },
      width: {
        100: "100px",
        140: "140px",
        200: "200px",
        250: "250px",
        300: "300px",
      },
      zIndex: {
        60: "60",
      },
      screens: {
        xs: "430px",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
