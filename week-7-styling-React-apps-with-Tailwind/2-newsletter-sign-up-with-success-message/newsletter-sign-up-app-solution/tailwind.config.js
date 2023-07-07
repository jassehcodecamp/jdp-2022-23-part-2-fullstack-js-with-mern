/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-slate-gray": "hsl(234, 29%, 20%)",
        "charcoal-gray": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        tomato: "hsl(4, 100%, 67%)",
        primary: "#FF6A3A",
        pinky: "#FF527B",
      },
      width: {
        "9/20": "45%",
        "11/20": "55%",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
}

