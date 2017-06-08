// __например, мы хоти использовать фреймворк angular
'use strict';

module.exports = {
  context: __dirname + '/frontend',
  entry: './home',

  output: {
    path: __dirname + '/public',
    filename: 'home.js'
  },

  // __вместо того, чтобы использовать imports/exports в вызове require (как в home.js) мы можем их вынести
  // __в отдельную секцию конфига, чтобы не перечислять их каждый раз при вызове old
  module: {
    loaders: [{
      test: /old.js$/,
      loader: 'imports?workSettings=>{delay:500}!exports?Work'
    }]
  },

  resolve: {
    // __root - это дополнительный каталог, типа node_modules, в котором будут искаться модули
    root: __dirname + '/vendor',
    // __создадим короткий алиас, чтобы не писать в модуле - require('old/dist/old'), а коротко - require('old')
    alias: {
      old: 'old/dist/old'
    }
  }
};
