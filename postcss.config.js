module.exports = {
  plugins:[
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-sort-media-queries'),
    require('cssnano')
  ]
}