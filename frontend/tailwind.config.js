/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '884px',

      }
    },
    extend: {
      fontFamily: {
        playball: ['Playball', 'sans-serif'],
        staatliches: ['Staatliches', 'sans-serif'],
      },
    },

  },
  plugins: [],
}