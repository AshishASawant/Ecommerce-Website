/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary':'#131921',
        'bg-secondary':'#131921',
        'text-primary':'white',
        'text-secondary':' #B4CCDE',
        'border-primary':'#3b4149',
        'bg-dull':'#f5f5f7'
      },
      gridTemplateColumns:{
        'two-row':'10rem 1fr'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}