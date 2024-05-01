// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-green": "#208B71",
        "cust-lime": "#BCDB37",
        "cust-blue": "#004159",
        "cust-orange": "#FE7201",
        "cust-background": "#FDFADB",
        "cust-white": "#FFFEFB",
        "cust-yellow": "#FDFADB",
        "cust-gray": "#929292",
        "cust-artikel": "#208B71",
        "cust-bg-orange": "#FDE6BA",
        'cust-bg-orange2': '#FE7201',
      },
      width:{
        '22vw': '22.2vw',
        '1/12vw': '8.33vw',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
};
