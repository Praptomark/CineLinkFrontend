/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        intr: 'Inter',
        titilliumweb: 'Titillium Web',
        nunito: 'Nunito',
        opensans: 'Open Sans',
      },
    },
  },
  plugins: []
};