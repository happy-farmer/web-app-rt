var path = require('path')
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
        include: path.join(__dirname, 'src/assets'),
        loader: 'url?limit=25000'
      }
    ]
  },
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
}
