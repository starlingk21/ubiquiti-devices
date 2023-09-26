/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'u-logo': "url('src/assets/images/Ubiquiti-logo.png')",
        'hover-logo': "url('src/assets/images/Ubiquiti-hover.png')",
      },
      colors: {
        'header-c': '#F6F6F8',
        'header-title': '#838691',
      },
    },
  },
  plugins: [],
};
