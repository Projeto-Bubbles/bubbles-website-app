/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      bar: 'bg-slate-700 w-0 h-[3px] transition-all duration-200 ease-in group-hover:w-full',
    },
  },
  plugins: [],
};
