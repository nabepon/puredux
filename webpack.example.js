'use strict'
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['redux'],
    bundle: ['./src', './example/src/index.js'],
  },

  output: {
    path: path.join(__dirname, 'example/dist'), // Must be an absolute path
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist/',

  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'example/src'),
      ],
      exclude: [
        /node_modules/,
      ],
    }]
  },

  resolve: {
    modulesDirectories: [
      'example/src',
      'node_modules',
    ]
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: 'example',
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', 1),
  ]
};
