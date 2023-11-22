/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "50px",
        "5xl": "60px",
      },
      boxShadow: {
        custom: "55px 30px 0px rgba(0, 0, 0, 0.25)",
        custom1: "15px 20px 0px rgba(0, 0, 0, 0.25)",
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
