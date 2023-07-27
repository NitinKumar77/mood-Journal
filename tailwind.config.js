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
      },
    },
  },
  plugins: [],
};
