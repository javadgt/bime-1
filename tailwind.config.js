/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors : {
        "primary" : "#003399"
      },
      backgroundImage: {
        'section': "url('../assets/img/gradinet.png')",
        'services': "url('../assets/img/Services.jpg')",
        'form': "url('../assets/img/blog.png')",
      },
      backgroundColor :{
        "primary" : "#003399;"
      },

      screens : {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}