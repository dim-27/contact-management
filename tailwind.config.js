/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html, js}'
  ],
  theme: {
    extend: {},
    screens: {
      '2xs': '370px',
      'xs': '512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

