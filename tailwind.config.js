/** @type {importrgb('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "rgba(198,155,109,0.65)",
        2: "rgba(244,140,186,0.65)",
        3: "rgba(170,211,114,0.65)",
        4: "rgba(255,244,104,0.65)",
        5: "rgba(255,255,255,0.65)",
        6: "rgba(196,30,58,0.65)",
        7: "rgba(0,112,221,0.65)",
        8: "rgba(63,199,235,0.65)",
        9: "rgba(135,136,238,0.65)",
        10: "rgba(0,255,152,0.65)",
        11: "rgba(255,124,10,0.65)",
        12: "rgba(163,48,201,0.65)",
        13: "rgba(51,147,127,0.65)",
      },
    },
  },
  plugins: [],
};
