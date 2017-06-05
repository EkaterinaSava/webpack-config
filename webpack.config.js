'use strict';

// __создадим переменную окружения и положим в константу
// __если ее нет - то будем считать, что у нас develpment-сборка
const NODE_ENV = process.env.NODE_ENV || 'development';
// __добавим вебпак, чтобы импортировать из него модули и иcпользовать как плагины в секции plugins
const webpack = require('webpack');

module.exports = {
  // __entry - какой модуль собирать
  entry: "./home",
  // __output - куда будем выводить
  output: {
    filename: "build.js",
    // __добавим новую настройку library - в эту переменную home будут помещены все 'exports' после сборки
    // __(см. файл home, там 'exports' welcome)
    library: "home"
  },

  // __добавим вотчер, чтобы не перезапускать сборку после каждого изменения
  // __заменим значение true на новое - включать вотчер, только при develppment-сборке
  //watch: true,
  watch: NODE_ENV == 'development',
  // __ускорим сборку - добавим опцию, которая холдит сборку после изменения на 100 милисекунд (по умолч. 300)
  // __т.к. редактор может не успеть сохранить, а вебпак уже запутсит сборку
  watchOptions: {
    aggregateTimeout: 100
  },

  // __добавим source maps для нашего кода, чтобы удобно отлаживать
  // __заменим работу девтулзов по умолчанию на работу, только когда у нас dev-сборка
  // __иначе - отключаем вообще source maps
  //devtool: "cheap-inline-module-source-map",
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  // __добавим плагины
  plugins: [
    // __передаем те ключи окружения, которые хочется сделать доступными клиенту
    //new webpack.EnvironmentPlugin('NODE_ENV')

    // __чтобы передавать клиенту переменную NODE_ENV заменим плагин на другой
    // __т.к. EnvironmentPlugin внутри себя использует DefinePlugin
    // __который занимается тем, что может произвольные значения из сборки передавать в клиент
    // __а EnvironmentPlugin просто обертка над ним, передающая свойсва process.env
    new webpack.DefinePlugin({
      // __т.е. NODE_ENV мы хотим передавать как есть
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    })

  ],

  // __добавим лоадеры, т.е. модули
  module: {
  // __loaders - это массив, у элементов которого есть ряд свойств (test, exclude, include, loader, loaders)
    loaders: [{
      // test: A condition that must be met
      // __к файлам, которые заканчиваются на .js
      test: /\.js$/,
      // loader: A string of “!” separated loaders
      // loaders: An array of loaders as string
      // __надо применить лоадер babel
      // __через '?' можно дописать различные доп.опции
      // __runtime позволяет вынести общий вспомогательный функционал бабеля, а не дублировать в каждом модуле
      loader: 'babel?optional[]=runtime'
    }]
  }
};
