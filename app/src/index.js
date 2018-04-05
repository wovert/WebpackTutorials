// CMD
// var str = require('./app.js');
// document.body.innerHTML = '<h1>' + str + '</h1>';

// ADM
define(['./app.js'], function(str){
  document.body.innerHTML = '<h1>AMD: ' + str + '</h1>';
})

