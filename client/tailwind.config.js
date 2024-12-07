/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F1211",
        primary: "#00D1FF",
        secondary: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
