/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#1c323b",
        "light": "#ece6c4",
        "accent1": "#f4a261",
        "accent2": "#e76f51",
        "primary": "#4de9d7"
      }
    },
  },
  plugins: [],
}

