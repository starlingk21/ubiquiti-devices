/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minWidth: {
      '344-px': '344px',
      '256-px': '256px',
    },
    extend: {
      backgroundImage: {
        'u-logo': "url('src/assets/images/Ubiquiti-logo.png')",
        'hover-logo': "url('src/assets/images/Ubiquiti-hover.png')",
        'list-icon': "url('src/assets/icons/icon-list.svg')",
      },
      colors: {
        'header-c': '#F6F6F8',
        'general-gray': '#838691',
        'caret-blue': '#006FFF',
        'table-gray': '#BDBDBD',
        'list-hover': '#FBFBFB',
      },
      padding: {
        '5px': '5px',
        '11px': '11px',
      },
      boxShadow: {
        filters: '0 15px 48px 0 rgba(0, 0, 0, 15%)',
        'grid-card': '0px 4px 4px 0px rgba(0,0,0,0.25)',
      },
      maxHeight: {
        '336px': '336px',
      },
      width: {
        '136px': '136px',
      },
    },
  },
  plugins: [],
};
