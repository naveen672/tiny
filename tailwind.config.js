/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5E6E8',
          100: '#d5d7da',
          200: '#82ABD5',
          300: '#6b9bcc',
          400: '#274E84',
          500: '#224D7F',
          600: '#1d4270',
          700: '#183761',
          800: '#002A48',
          900: '#001c30',
        },
        brand: {
          lightGrey: '#E5E6E8',
          lightBlue: '#82ABD5',
          darkBlue: '#274E84',
          navyBlue: '#224D7F',
          deepNavy: '#002A48',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
