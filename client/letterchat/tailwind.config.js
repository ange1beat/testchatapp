/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blackBg': '3px 3px 0px 0px black'
      },
      'animation': {
        'bg':'bg 5s ease infinite',
    },
    'keyframes': {
        'bg': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      }
  },
  },
  plugins: [],
}
