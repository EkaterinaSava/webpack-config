'use strict';

module.exports = {
  // entry - какой модуль собирать
  entry: "./home",
  // output - куда будем выводить
  output: {
    filename: "build.js",
    // добавим новую настройку library - в эту переменную home будут помещены все 'exports' после сборки
    // (см. файл home, там 'exports' welcome)
    library: "home"
  },

  // добавим вотчер, чтобы не перезапускать сборку после каждого изменения
  watch: true,
  // ускорим сборку - добавим опцию, которая холдит сборку после изменения на 100 милисекунд (по умолч. 300)
  // т.к. редактор может не успеть сохранить, а вебпак уже запутсит сборку
  watchOptions: {
    aggregateTimeout: 100
  },

  // добавим source maps для нашего кода, чтобы удобно отлаживать
  devtool: "cheap-inline-source-map"
}
