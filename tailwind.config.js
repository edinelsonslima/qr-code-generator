/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AA2930',
        secondary: '#002930',
      },
      animation: {
        'move-b-r-center': 'move-b-r-center .5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
