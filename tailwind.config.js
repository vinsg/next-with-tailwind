const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
  },
  purge: [],
  theme: {
    extend: {
      opacity: {
        10: '0.1',
        12: '0.12',
        20: '0.2',
        30: '0.3',
        40: '0.4',
      },
    },
  },
  variants: {},
  plugins: [],
}
