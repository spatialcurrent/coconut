const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]___[hash:base64:5]',
              modules: true,
            },
          },
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     from: 'images',
    //     to: 'images',
    //   },
    //   {
    //     from: './assets/favicon.png',
    //     to: 'favicon.png'
    //   },
    // ]),
    // new FaviconsWebpackPlugin('./assets/favicon.png'),
    new HtmlWebpackPlugin({
      api_url: process.env.API_URL || 'http://localhost:8080',
      template: 'index.html',
      title: 'Coconut',
    })
  ],
};
