// __сделаем очень просто, базовый конфиг
'use strict';

const webpack = require('webpack');

module.exports = {
  context: './frontend',
  entry: './app',

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'app.js'
  },

  // __объект, где ключами служат названия модулей, а значениями - глобальные переменные
  externals: {
    lodash: '_'
  }
};
