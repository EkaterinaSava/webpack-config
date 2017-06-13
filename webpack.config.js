'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    main: './main'
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
        loader: 'style!css!stylus?resolve url'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },

  // __добавим dev server и его настройки
  devServer: {
    host: 'localhost', //default
    port: 8080 //default
    //contentBase: __dirname + '/backend'

    // __добавим proxy: мы хотим, чтобы все пути не найденные у нас, отправлялись на localhost:4000
    // __т.к. там у нас имитация бэкэнда (файл backend/server.js)
    // __можно записать как объект, тогда путем должна быть строка
    // proxy: {
    //   '*': 'http://localhost:4000'
    // }
    // __а можно как массив, тогда мы можем использовать а) регулярки б) несколько путей
    // proxy: [{
    //   path: /.*/,
    //   target: 'http://localhost:4000'
    // }]
  }

};
