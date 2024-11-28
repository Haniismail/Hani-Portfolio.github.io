/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#121212',
          800: '#1f1f1f',
          700: '#2e2e2e',
        },
      },
    },
    fontFamily: {
      fancy: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
};
