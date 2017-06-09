webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	import './menu.css';

	import template from './menu.pug';

	export default class Menu {
	  constructor(options) {
	    this.elem = document.createElement('div');
	    this.elem.className = 'menu';

	    this.elem.innerHTML = template(options);

	    thid.titleElem = this.elem.querySelector('.title');

	    this.titleElem.onclick = () => this.elem.classList.toggle('open');

	    this.titleElem.onmousedown = () => false;
	  }
	}

/***/ })
]);