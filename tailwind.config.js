/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-', // Add this line to set a unique prefix
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColorDark: '#cc3333',
        primaryColorLight: '#ffdfdf',
        secondaryColor1: '#fff8ee'
      }
    }
  },
  plugins: []
}
