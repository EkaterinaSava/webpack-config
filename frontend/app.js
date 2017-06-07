'use strict';

// __допустим мы хотим использовать сторонний модуль moment, который мы установили в /node_modules
// __в стороннем коде мы не можем руками разрулить проблемы с context
let moment = require('moment');

let today = moment(new Date()).locale('ja');

alert(today.format('DD MMM YYYY'));

// __при этом наша сборка в public/app.js весит аж 510 Кб(!) и 118 модулей в придачу
