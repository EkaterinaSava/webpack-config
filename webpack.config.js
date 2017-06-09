'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    main: './main',
    styles: './styles'
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.styl']
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.styl$/,
        // __при наличии цепочки лоадеров, они обрабатываются слева направо с вызовом pitch-функций
        // __если этих функцийнет или они ничего не возвращает, то управление доходит до конца, разворачивается справа налево
        // __и при проходе справа налево вызывается уже основная функция лоадера
        //loader: 'style!css!autoprefixer?browsers=last 2 version!stylus'
        // __посмотрим на работу ExtractTextPlugin
        loader: ExtractTextPlugin.extract('css!stylus?resolve url')
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]

};
