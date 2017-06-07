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
  entry: {
    app:  "./app"
  },
  // __output - куда будем выводить
  output: {
    // __добавим указание директории (через указание абсолютного пути к директории сборки)
    path: __dirname + '/public/js',
    // __publicPath указывает как "из интернета" получить наш файл
    // __webpack должен "знать" этот путь, чтобы подгружать скрипты динамически (обязателен последний слэш!)
    publicPath: '/js/',
    // __заменим название конкретного файла на шаблон, который будет подставлять название из параметров entry
    filename: "[name].js",
    // __добавим новую настройку library - в эту переменную home будут помещены все 'exports' после сборки
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

  // __добавим плагины
  plugins: [
    // __добавим плагин, который заменит нам контекст стороннего модуля (moment) на необходимый нам, чтобы не утяжелять сборку
    //new webpack.ContextReplacementPlugin( /node_modules\/moment\/locale/, /ru|en-gb/)

    // __заменим ContextReplacementPlugin на IgnorePlugin
    // __например, уберем китайский язык из сборки
    //new webpack.IgnorePlugin(/zh-/)
    // __но наша цель была не в этом, а чтобы исключить все, кроме, например двух языков
    // __с его помощью можно отключить все языки и потом прирекваэрить нужные, но этот плагин ведет себя неочевидным образом
    // __лучше не использовать (!)
    new webpack.IgnorePlugin(/\.\/locale/)
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
