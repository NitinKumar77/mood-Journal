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
        customTableBLue: "rgb(240,248,248)",
        customTableOrange: "rgba(254, 248, 230, 1)",
        customSad: "rgba(253, 244, 240, 1)",
        defaultGreen: "rgba(70, 163, 154, 1)",
        spinnerLight: "rgba(85, 189, 179, 1)",
        spinnerdark: "rgba(85, 189, 179, 0.5)",
      },
      padding: {
        customCardPadding: "1.17rem 1.67rem 4.67rem 1.39rem",
      },
    },
  },
  plugins: [],
};
