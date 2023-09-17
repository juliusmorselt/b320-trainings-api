/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          container: {
              center: true,
              padding: 20,
          },
          fontSize: {
              h1: "50px",
              h2: "40px",
              h3: "30px",
          },
      },
  },
  plugins: [],
}
