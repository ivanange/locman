const glob = require("glob-all");
var path = require('path');
const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  purge: glob.sync(`${PATHS.src}/**/*`, {
    nodir: true
  }),
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '9/16': '55%',
        'full': '100%',
      },
      width: {
        '25': '6.5rem',
        'fit-content': 'fit-content'
      },
      maxWidth: {
        '2xs': '15rem',
        '3xs': '10rem',
      },
      minWidth: {
        '3xs': 'max( 200px, 10rem )',
        '2xs': ' 15rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}