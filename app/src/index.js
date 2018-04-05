// CMD
var str = require('./app.js');
document.body.innerHTML = '<h1>' + str + '</h1>';

// reset.css 在 style.css 通过import导入在这里不同导入
// require('style-loader!css-loader!./css/reset.css');
// require('style-loader!css-loader!./css/style.css');

// 使用 webpac.config.js 配置文件打包，因为不需要说明引入加载器
require('./css/style.css');


// ADM
// define(['./app.js'], function(str){
//   document.body.innerHTML = '<h1>AMD: ' + str + '</h1>';
// })

