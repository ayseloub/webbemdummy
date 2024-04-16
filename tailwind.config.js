/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {

      },
      colors:{
        "cust-green": "#208B71",
        "cust-lime": "#BCDB37",
        "cust-blue": "#004159",
        "cust-orange" : "#FE7201",
        "cust-background" : "#FDFADB",
        "cust-white" : "#FFFEFB",
        "cust-gray" : "#929292",
        "cust-artikel" : "#208B71",
      },
    },
  },
  plugins: [],
};
