/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors:{
        PRIMARY_BLACK:"#000000",
        SECONDARY_BLACK: "#191919",
        PRIMARY_WHITE:"#ffffff",
        SECONDARY_WHITE: "#f0f3f5",
      }
    },
  },
  plugins: [],
};
