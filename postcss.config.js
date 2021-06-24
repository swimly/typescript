const functions = require('./src/utils/postcss.function.js')
const pkg = require('./package.json')
module.exports = {
  plugins: [
    require('postcss-functions')({
      functions
    }),
    require('autoprefixer')({
      overrideBrowserslist: pkg.browserslist
    }),
    require('postcss-prepend-imports')({
      path: `./src/themes/default`,
      files: ['variable.css']
    }),
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-pxtorem')({
      rootValue: 20,
      propList: ['*', '!border'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    }),
    require('postcss-simple-vars')()
  ]
}