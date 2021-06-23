module.exports = {
  plugins: [
    require('postcss-prepend-imports')({
      path: `./src/themes/default`,
      files: ['variable.css']
    }),
    require('postcss-import')(),
    // require('postcss-modules')(),
    require('postcss-nested')(),
    require('postcss-pxtorem')({
      rootValue: 20,
      propList: ['*', '!border'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    }),
    require('postcss-simple-vars')(),
    require('postcss-functions')({
      functions: {

      }
    })
  ]
}