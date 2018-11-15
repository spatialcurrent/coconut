const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const shared = require('./webpack.shared.js');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prod = {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(`${__dirname}/..`, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        include: /src/,
        loader: 'eslint-loader',
        test: /\.js$/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      dry: false,
      root: `${__dirname}/..`,
      verbose: true,
    })
  ],
};

module.exports = merge(shared, prod);
