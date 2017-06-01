'use strict';

// модуль home, который подключает модуль welcome
let welcome = require('./welcome');

welcome("home");

// экспортируем welcome "во вне"
exports.welcome = welcome;
