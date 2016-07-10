var path = require('path')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './src',
  output: {
    path: './develop',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.(jpe?g|png)$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url?limit=25000'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  },
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
}
