/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-btn': "linear-gradient(to bottom, rgba(255, 174, 0, 0.29), rgba(255, 174, 0, 0.26))",
        
      },
    }

  },
  extend: {
  },
  plugins: [],
}