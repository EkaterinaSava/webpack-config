'use strict';

let webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend',

  entry: './main',

  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.css$/,
        // __при наличии цепочки лоадеров, они обрабатываются слева направо с вызовом pitch-функций
        // __если этих функцийнет или они ничего не возвращает, то управление доходит до конца, разворачивается справа налево
        // __и при проходе справа налево вызывается уже основная функция лоадера
        loader: 'ctyle!css!autoprefixer?browsers=last 2 version'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }

};
