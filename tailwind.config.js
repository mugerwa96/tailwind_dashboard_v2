/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend:{

      fontFamily:{
         'roboto':['Roboto', 'sans-serif']
        },
        colors:{
          'primary-color':'#0e632d'
        },
    }
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
  }
