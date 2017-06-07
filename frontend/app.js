'use strict';

document.getElementById('loginButton').onclick = function() {

  // __2 способа динамической подгрузки скриптов "по мере необходимости"
  // __здесь - при клике на кнопку должен подгрузиться скрипт login

  // #1: require.ensure (функция webpack'а)
  // __получает массив ['...', '...'] с одним или несколькими модулями
  // __из которых webpack сгенерирует отдельный модуль/бандл
  // __который будет вызван через коллбэк function(require) и динамически подгружен
  require.ensure(['./login'], function(require) {
    let login = require('./login');

    login();
  });

  // #2: AMD-syntax
  // __тоже получает массив с модулями и вторым аргументом - коллбэк
  // __хоть так и короче запись, но уступает способу #1
  
  // require(['./login'], function(login) {
  //   login();
  // });

}
