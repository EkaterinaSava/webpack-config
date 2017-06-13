'use strict';

let webpack = require('webpack');
// __ExtractTextPlugin не интегрирован с HMR, поэтому, чтобы при изменении CSS не релоадилась вся страница
// __а HMR продолжал адекватно работать, сделаем его работающим только для production-версии
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    // webpack-dev-server --inline --hot
    main: './main.js'
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/frontend',
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true, disable: process.env.NODE_ENV=='develpment'})
  ],

  // __добавим dev server и его настройки
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }

};
