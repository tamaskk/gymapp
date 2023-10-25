// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'md': '768px', // Change the medium breakpoint to 768px
        'lg': '1000px', // Change the large breakpoint to 1024px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};