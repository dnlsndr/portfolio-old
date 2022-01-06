const colors = require('tailwindcss/colors')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
          "1000": "#121212"
        }
      },
      fontFamily: {
        "courier": ['Courier Prime', 'monospace'],
        outfit: ["Outfit", "Inter", "ui-sans-serif", "system-ui"]
      },
      // typography: (theme) => ({

      // })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
