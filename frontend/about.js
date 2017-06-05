'use strict';

// модуль home, который подключает модуль welcome
import welcome from './welcome';

welcome("about");

// экспортируем welcome "во вне"
exports.welcome = welcome;
