const functions = require('../src/utils/postcss.function.js')
const pkg = require('../package.json')

module.exports = (isModule, isDev) => {
  return {
    plugins: [
      require('postcss-prepend-imports')({
        path: `./src/themes/${pkg.theme}`,
        files: ['variable.css']
      }),
      isModule && require('postcss-modules')({
        generateScopedName: pkg.cssmodule ? pkg.prefix + "[local]_[hash:base64:5]" : pkg.prefix + "[local]"
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
      require('postcss-color-mod-function')(),
      require('autoprefixer')({
        overrideBrowserslist: [
          "last 2 version",
          ">1%",
          "ios 7"
        ]
      }),
      require('postcss-functions')({
        functions
      }),
      require('postcss-simple-vars')(),
      !isDev && require('cssnano')
    ]
  }
}