'use strict';

// __рассмотрим условный require
let moduleName = location.pathname.slice(1);

// __вернемся к первоначальной задаче: грузить определенный бандл при переходе на определенную страницу (роутинг)
// __добавим с помощью bundle-loader'а возможность собирать каждый модуль в бандл
// __наш код становится асинхронным
// require('bundle!./routes/' + moduleName)(function(route){
//   route();
// });


// __такой код не дает нам "отлавливать" ошибки, исправим:
let handler;

try {
  handler = require('bundle!./routes/' + moduleName);
} catch (e) {
  alert("такого модуля нет")
}

if (handler) {
  handler(function(route){
    route();
  });
}
