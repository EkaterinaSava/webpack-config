// __например, мы хоти использовать фреймворк angular
'use strict';

module.exports = {
  context: __dirname + '/frontend',
  entry: './app',

  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },

  module: {

    loaders: [{
      test: /\.js$/,
      // __полностью исключим папку node_modules из обработки лоадерами
      //exclude: /\/node_modules\//,
      // __вместо exclude гораздо удобнее использовать include
      // __в котором мы укажем директорию (или массив с директориями), к которой надо применять лоадеры
      // __это чаще всего именно то, что нам и нужно
      include: __dirname + '/frontend',
      loader: 'babel'
    }]

    // __а можно исключить эту библиотек из парсинга
    // __noParse может содержать однр регурное выражение, их массив, строка или массив строк
    //noParse: /angular\/angular.js/

  }
};
