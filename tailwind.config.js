/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#29702A',
          '50': '#E7F1E7',
          '100': '#C3DDBA',
          '200': '#9FCAA5',
          '300': '#7BB781',
          '400': '#56A45D',
          '500': '#29702A',
          '600': '#225621',
          '700': '#1B4118',
          '800': '#132C0F',
          '900': '#0B1707',
        },
        'secondary': {
          DEFAULT: '#F7921E',
          '50': '#FEF2E4',
          '100': '#FCDFBD',
          '200': '#FACC95',
          '300': '#F9B86E',
          '400': '#F7A547',
          '500': '#F7921E',
          '600': '#E68117',
          '700': '#B36512',
          '800': '#81490D',
          '900': '#4E2C08',
        },
        'accent': {
          DEFAULT: '#B5231D',
          '50': '#F8E5E4',
          '100': '#F0BFBD',
          '200': '#E79995',
          '300': '#DE736E',
          '400': '#D54D47',
          '500': '#B5231D',
          '600': '#8E1C17',
          '700': '#681412',
          '800': '#420D0C',
          '900': '#1C0605',
        },
      },
    },
  },
  plugins: [],
};