/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customNotebook: "#C1FFFF",
        customBlue: "#BBD5FF",
        customOrange: "#FCBFA3",
        customPurple: "#BEBEFF",
        customGreen: "#B7FFE4",
        customGrey: "#F2F2F2",
      },
      padding: {
        customCardPadding: "1.17rem 1.67rem 4.67rem 1.39rem",
      },
    },
  },
  plugins: [],
};
