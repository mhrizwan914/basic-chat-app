/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": { "max": "576px" },
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "0.5rem",
      },
      fontFamily: {
        "sans": ["Oswald", "sans-serif"]
      },
      colors: {
        "primary": { 100: "#012e43" },
        "secondary": { 100: "#fc0a7a" }
      }
    },
  },
  plugins: [],
}