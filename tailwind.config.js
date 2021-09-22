const colors = require('tailwindcss/colors')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        gray: colors.gray
      },
      fontFamily: {
        "courier": ['Courier Prime', 'monospace']
      },
      // typography: (theme) => ({

      // })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.ts',
      './src/**/*.js',
      './src/**/*.html',
      './public/**/*.html'
    ]
  }
}
