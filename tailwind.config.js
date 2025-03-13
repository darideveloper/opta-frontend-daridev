/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7D3C98",
        grey: {
          light: "#F9F9F9",
        }
      },
    }
  },
  plugins: [],
}

