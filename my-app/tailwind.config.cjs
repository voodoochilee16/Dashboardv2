/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      boxShadow: {
        colored: "0px 7px 16px rgba(229, 110, 72, 0.002)",
        coloredHover: "0px 16px 25px rgba(229, 110, 72, 0.3)",
      },

      colors:{
        neutralbg: "#E4D8B4",
        neutralnav: "#D2C59D",
        softgreen: "#DAD392",
        bluehighlight: "#A4CBB4",
        myorange: "#e56e48"
      },

      zIndex: {
        navBarToggle: 91,
        navBar: 90,
      },

    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", {
      retro: {
        ...require("daisyui/src/colors/themes")["[data-theme=retro]"],
        primary: "#00735D",
      },
    }],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
