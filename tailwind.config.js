// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(175deg, #ff0000, #ffb6b6, #00ff00, #000000)',
      }
    },
  },
  plugins: [],
  prefix: 'tw-', 
};
