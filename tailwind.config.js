/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      white: '#FFF',
      grey: '#515051',
      darkGrey: '#2B2A2B',
      black: '#1F1815',
      taupe: '#E3DED7',
      green: '#2A5B45'
    },
    extend: {
      boxShadow:{
        normal : '0px 5px 5px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
