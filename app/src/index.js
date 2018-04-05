// CMD
var str = require('./app.js');
document.body.innerHTML = '<h1>' + str + '</h1>';
require('style-loader!css-loader!./css/style.css');


// ADM
// define(['./app.js'], function(str){
//   document.body.innerHTML = '<h1>AMD: ' + str + '</h1>';
// })

