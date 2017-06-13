'use strict';

let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    // __это будет наш JS, который связывается с webpack-dev-server (клиентская часть)
    // __получает изменения и обновляет страницу
    // __точка входа (./main) должна быть посдледней, т.к. если будет параметр libraries в output,
    // __то он возьмет только то, что здесь записано последним
    //main: ['webpack-dev-server/client', 'webpack/hot/dev-server', './main']

    // __чтобы не писать эту магию здесь, можно запускать дев-сервер с 2 доп.командами
    // webpack-dev-server --inline --hot (омг! оно наконец-то стало работать нормально!)
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
        loader: 'style!css!stylus?resolve url'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        // __для адекватной работы HMR обязательно должен быть хэш
        // __иначе он не смжет понять, что файл изменился
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],

  // __добавим dev server и его настройки
  devServer: {
    host: 'localhost', //default
    port: 8080, //default
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

    // __включит hot reaload (по умолчанию - false) плюс нам нужен будет плагин (см.выше)
    hot: true
  }

};
