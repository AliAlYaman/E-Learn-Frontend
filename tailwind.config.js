/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DFDCDC',
        secondary: '#49BBBD',
        background: '#252641',
        text: '#2F327D',
        styling: '#F48C06',

      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #00CBB8, #252641)'
      }
    },
  },
  plugins: [],
}
