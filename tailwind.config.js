/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        'half-r': '0.375rem 1000px 1000px 0.375rem',
      },
      backgroundImage: {
        "testeImagem": 'url("assets/bubbles-logo-glass.png")',
      }
    },
  },
  plugins: [],
};
