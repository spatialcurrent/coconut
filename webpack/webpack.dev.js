const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const shared = require('./webpack.shared');

const dev = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'docs'),
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = merge(shared, dev);
