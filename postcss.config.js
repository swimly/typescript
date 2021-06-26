const functions = require('./src/utils/postcss.function.js')
const pkg = require('./package.json')
module.exports = () => {
  return {
    plugins: [
      require('postcss-prepend-imports')({
        path: `./src/themes/default`,
        files: ['variable.css']
      }),
      require('postcss-modules')({
        generateScopedName: "[local]_[hash:base64:5]"
      }),
      require('postcss-import')(),
      require('postcss-nested')(),
      pkg.px2rem && require('postcss-pxtorem')({
        rootValue: 20,
        propList: ['*', '!border'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: /node_modules/i
      }),
      require('postcss-color-mod-function')(),
      require('autoprefixer')({
        overrideBrowserslist: pkg.browserslist
      }),
      require('postcss-functions')({
        functions
      }),
      require('postcss-simple-vars')()
    ]
  }
}