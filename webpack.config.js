'use strict';

// __создадим переменную окружения и положим в константу
// __если ее нет - то будем считать, что у нас develpment-сборка
const NODE_ENV = process.env.NODE_ENV || 'development';
// __добавим вебпак, чтобы импортировать из него модули и иcпользовать как плагины в секции plugins
const webpack = require('webpack');

module.exports = {
  // __чтобы не дублировать постоянно для entry папку /frontend, добавим contex, где укажем, откуда начинать "вход"
  context: __dirname + '/frontend',
  // __entry - какой модуль собирать
  //entry: "./home",
  // __заменим одну точку входа на несколько, будет собирать 2 разных бандла для home и для about
  entry: {
    home:  "./home",
    about: "./about"
  },
  // __output - куда будем выводить
  output: {
    // __добавим указание директории (через указание абсолютного пути к директории сборки)
    path: __dirname + '/public',
    //filename: "build.js",
    // __заменим название конкретного файла на шаблон, который будет подставлять название из параметров entry
    filename: "[name].js",
    // __добавим новую настройку library - в эту переменную home будут помещены все 'exports' после сборки
    // __(см. файл home, там 'exports' welcome)
    //library: "home"
    // __тоже заменим имя глобальной переменной на шаблон
    library: "[name]"
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
    // __добавим плагин, который не даст собрать бандлы, если есть ошибки (по дефолту - он соберет даже с ощибками)
    new webpack.NoErrorsPlugin(),

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

  // __эти 2 настройки 'resolve' описывают как вебпак ищет модули
  // __resolve про модули вообще:
  resolve: {
    // __в каких директориях искать, если не указан путь
    modulesDirectories: ['node_modules'],
    // __с какими расширениями искать модули
    extensions: ['', '.js']
  },
  // __resolveLoader именно для лоадеров:
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    // __искать вот такой модуль:
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

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

// __особые настройки production-версии
if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    // __добавим минификацию с помощью 'Uglify Js'
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // __варнинги не показывать, консоль-логи убрать, можно использовать небезопасные штуки
        warnings:     false,
        drop_console: true,
        unsafe:       true
      }
    })
  );
}
