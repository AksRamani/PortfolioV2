/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#111111",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #000)",
        designColor: "#00FF00",
      },
      keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }, 
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
      marquee: 'marquee 15s linear infinite',
      marquee2: 'marquee2 15s linear infinite',
  },
      boxShadow: {
        shadowOne: "10px 10px 19px #030712, -10px -10px 19px #00000",
      },
    },
  },
  plugins: [],
}
