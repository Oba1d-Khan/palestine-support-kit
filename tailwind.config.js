/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'custom-gradient': 'linear-gradient(175deg, #ff0000, #ffb6b6, #00ff00, #000000)',
      }
    },
  },
  plugins: [],
}