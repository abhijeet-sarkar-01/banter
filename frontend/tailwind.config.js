
/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './pages/**/*.{html,jsx}',
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all relevant files in your src directory
    './public/index.html', // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
