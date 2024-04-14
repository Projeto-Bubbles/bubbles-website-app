/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        'half-r': '0.375rem 1000px 1000px 0.375rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Habilitar overflow-y para poder utilizá-lo na configuração
    overflowY: false,
  },
};
