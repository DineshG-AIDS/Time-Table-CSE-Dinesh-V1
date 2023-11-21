/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "50px",
        "5xl": "60px",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        xxs: "375px",
        spx: "320px",
        spx1: "318px",
      },
    },
  },
  plugins: [],
};
