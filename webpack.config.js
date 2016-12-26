'use strict'

var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
  output: {
    library: 'Puredux',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [
        /node_modules/,
      ],
    }]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false
      }
    })
  )
}

if(env === 'development') {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
  config.devtool = 'inline-source-map';
}

module.exports = config;
