var path = require('path')
var autoprefixer = require('autoprefixer')
var StatsPlugin = require('stats-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
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
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png)$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?limit=25000'
      },
      {
        test: /.(ico|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=50000'
      },
      {
        test: /\.s?css$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: './src',
        postcss: [
          autoprefixer
        ]
      }
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\/]react/]
    })
  ]
}
