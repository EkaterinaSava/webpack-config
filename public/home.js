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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// __чтобы использовать наш "старый" код, мы может сделать следующее:
	//let old = require('old');
	// __используя модуль imports-loader сделаем "доступной" переменную из нашего "old"-кода
	// __например, переменную workSettings со значением delay 500 и вебпак ее создаст, она станет доступной
	//let old = require('imports?workSettings=>{delay:500}!old');


	// __exports позволяет экспортировать из файла одну или несколько переменных
	// __например, мы хотим экспортирвать функцию Work, чтобы она была доступна как экспорт модуля
	// __экспорт должен обязательно идти после импорта
	//let old = require('imports?workSettings=>{delay:500}!exports?Work!old');

	// __вместо того, чтобы использовать imports/exports в вызове require мы можем их вынести
	// __в отдельную секцию конфига, чтобы не перечислять их каждый раз при вызове old
	let old = __webpack_require__(1);

	old();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Work"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var workSettings = {delay:500};

	// __например, у нас есть чужой и старый код, кем-то когда-то собранный и лежащий в dist
	// __вынесем его в отдельную папку /vendor
	// __мы предполагаем, что вся папка /old - не наших рук дело и мы не хотим ничего менять внутри
	function Work() {
	  setTimeout(function() {
	    alert("work complete!")
	  }, workSettings.delay);
	}

	// __так как это глобальная функция, которая использует какие-то глобальные настройки workSettings
	// __то это все криво будет экспортировано вебпаком и не особо юзабельно
	// __для работы с подобными скриптами в у вебпака е сть несколько специальных лоадеров


	/*** EXPORTS FROM exports-loader ***/
	module.exports = Work;


/***/ })
/******/ ]);