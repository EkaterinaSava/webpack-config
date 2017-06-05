'use strict';

export default function(message) {

  // для отладки в dev-режиме
  if (NODE_ENV == 'development') {
    console.log(message);
  }

  alert(`Welcome ${message}`)
};
