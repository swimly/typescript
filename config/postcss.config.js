import functions from '../src/utils/postcss.function'
import mixins from '../src/mixins/index'
import pkg from '../package.json'
import postcssMixins from 'postcss-mixins'
import prependImport from 'postcss-prepend-imports'
import postcssModule from 'postcss-modules'
import postcssImport from 'postcss-import'
import nested from 'postcss-nested'
import pxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
import postcssFunction from 'postcss-functions'
import vars from 'postcss-simple-vars'
import cssnano from 'cssnano'
import colorFunction from 'postcss-color-mod-function'

export default (isModule, isDev) => {
  return {
    plugins: [
      postcssMixins({
        mixins
      }),
      prependImport({
        path: `./src/themes/${pkg.theme}`,
        files: ['variable.css']
      }),
      postcssModule({
        generateScopedName: pkg.cssmodule ? pkg.prefix + "[local]_[hash:base64:5]" : pkg.prefix + "[local]"
      }),
      postcssImport(),
      nested(),
      pxtorem({
        rootValue: 20,
        propList: ['*', '!border'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: /node_modules/i
      }),
      colorFunction(),
      autoprefixer({
        overrideBrowserslist: [
          "last 2 version",
          ">1%",
          "ios 7"
        ]
      }),
      postcssFunction({
        functions
      }),
      vars(),
      !isDev && cssnano()
    ]
  }
}