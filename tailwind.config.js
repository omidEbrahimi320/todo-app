/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      'xs' : '0px',
      'sm' : '425px',
      'md' : '640px',
      'lg' : '768px',
      'xl' : '1024px',
    }
  },
  plugins: [],
}

