var path = require('path')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './src',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    }]
  },
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
}
