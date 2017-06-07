'use strict';

// __рассмотрим условный require
let moduleName = location.pathname.slice(1);

// __ранее выражение внутри require было известно на этапе сборке, но так бывает не всегда
// __часто мы хотим, чтобы приложение получало URL и на основе него решало, какой модуль подгрузить
let route = require('./routes/' + moduleName);
route();
