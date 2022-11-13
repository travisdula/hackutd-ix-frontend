/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-blue': '#D3DBE9',
        'dark-wave-blue': '#2E3440',
        'med-wave-blue': '#626E87',
        'light-wave-blue': '8393CD',
      },
      fontFamily: {
        'sans': ["Inter"],
      },
    },
  },
  plugins: [],
}
