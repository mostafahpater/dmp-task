/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        'main':'#e89d2d',
        'second':'#011f2a',
        'third': '#ccc',
      },
      backgroundImage: {
        'after-realEstate': "url('https://www.luxuryaqar.com/img/layer1.png')",
        'before-realEstate': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

