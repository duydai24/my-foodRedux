//const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  //darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bgMenuFood: "url(/public/bgMenuFood.jpg)",
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
          redd: "#ff514e"
        }
      },
      height: {
        200: "200px",
        101: "101px",
      },
      width: {
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
