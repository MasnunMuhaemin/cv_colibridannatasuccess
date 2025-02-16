/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors: {
        primary: "#B7B7B7",
        secondary: "#2E5077"
    }},
  },
  plugins: [],
};
