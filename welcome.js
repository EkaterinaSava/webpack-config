'use strict';

module.exports = function(message) {

  // для отладки в dev-режиме
  if (NODE_ENV == 'development') {
    console.log(message);
  }

  alert(`Welcome ${message}`)
};
