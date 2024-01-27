'use strict';

const path = require('path');
const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    compress: true,
    hot: true,
    liveReload: true,
  },
  plugins: [new MiniCssExtractPlugin()],
});
