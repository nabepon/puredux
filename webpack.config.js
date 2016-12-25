var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['redux'],
    bundle: ['./src/index.js'],
  },

  output: {
    path: path.join(__dirname, 'dist/assets'), // Must be an absolute path
    filename: '[name].js',
    publicPath: '/assets'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.join(__dirname, 'src'),
      ],
      exclude: [
        /node_modules/,
      ],
    }]
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'dist',
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', 2),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
