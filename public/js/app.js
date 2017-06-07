var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// __рассмотрим условный require
	let moduleName = location.pathname.slice(1);

	// __ранее выражение внутри require было известно на этапе сборке, но так бывает не всегда
	// __часто мы хотим, чтобы приложение получало URL и на основе него решало, какой модуль подгрузить

	// __если этой функциональности по какой-то причине не хватает, то можно явно вызвать module context
	// __из документации: require.context(directory, useSubdirectories = false, regExp = /^\.\//)
	// __указывается 1) директория 2) флаг (true/false) - спускаться ли в поддиректории 3) regexp на который проверять

	// __создадим контекст в этой директории,б не будем заходить в поддиректории, и регэксп нам в данном случае не нужен
	// __добавим regexp, чтобы контекст "не путался" и загружал модули по одному разу
	let context = __webpack_require__(6);

	// __добавим keys
	// __для каждого ключа из контекста будет прорекваерен соответствующий модуль и сразу вызван
	context.keys().forEach(function(path) {
	  let module = context(path);
	  module();
	});

	// __добавим try-catch, чтобы отловить ошибки
	// let route;
	// try {
	//   route = context('./' + moduleName);
	// } catch (e) {
	//   alert(e);
	// }
	// if (route) {
	//   route();
	// }


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function() {
	  alert('about module');
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function() {
	  alert('home module');
	}


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./about.js": 2,
		"./home.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ })
/******/ ]);