var path = require('path')
var autoprefixer = require('autoprefixer')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'app.conf.json': path.join(__dirname, 'src/app.dev.conf.json')
    }
  },
  entry: './src',
  output: {
    path: './develop',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/,
        loader: 'json-loader'
      },
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
        test: /.(ico|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url?limit=50000'
      },
      {
        test: /\.s?css$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/]
    })
  ]
}
