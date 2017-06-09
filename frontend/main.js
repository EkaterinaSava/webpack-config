'use strict';


let Menu = require.ensure([], function(require) {

  let Menu = require('./menu');
  
  let pandamanu = new Menu({
    title: 'Меню Панды',
    items: [
      {
        text: 'Яйца',
        href: '#eggs'
      },
      {
        text: 'Мясо',
        href: '#meat'
      },
      {
        text: '99% еды – бамбук!',
        href: '#bamboo'
      }
    ]
  });

  document.body.appendChild(pandamenu.elem);

});
