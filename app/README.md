# Webpack
## What Webpack
> `模块加载`兼`打包工具`
- 支持 `AMD/CMD` 写法
- `处理依赖关系`，然后解析出模块之间的依赖，将代码打包
- 各种**资源**都作为**模块**来使用和处理： 比如：js,css,sass

## 安装 webpack
`cnpm install webpack -g`

- 使用命令 `webpack`
- 项目依赖包安装
`cnpm install webpack --save-dev`

## 初始化项目
- 创建项目目录命令并进入项目目录
`mkdir app && cd app`

- 初始化项目命令
`npm init`

## 安装 react 模块
- `cnpm install react@0.14.7 --save` 或 `-S`
- `cnpm install react-dom@0.14.7 --save` 或 `-S`

## 创建开发目录和生产目录
- `mdir {src,build}`

## 项目打包测试
- app/src/index.js
document.body.innerHTML = "<div>欢迎来到微明</div>";

- 打包生成
webpack app/index.js build/build.js

- app/index.js
...
<body>
<sript src="build/build.js"></script>
</body>
...

- 访问浏览器: `http://path/to/app/index.html`

## CMD 引入模块
- app/index.js
`var str = require('./app.js');
document.body.innerHTML = '<h1>' + str + '</h1>';`

## AMD 引入模块
- app/index.js
`define(['./app.js'], function(str){
  document.body.innerHTML = '<h1>AMD: ' + str + '</h1>';
})`

## 引入 css 文件
- 必须安装 css [模块加载器](https://webpack.js.org/concepts/loaders/)
- webpack 默认安装了 js  模块加载器

- css文件加载器
`cnpm install css-loader@0.23.1 --save-dev` 

- style 样式表加载器
`cnpm install style-loader@0.13.0 --save-dev`

- 使用方法
  + `require('style-loader!css-loader!./css/style.css')`
  + style!css! **从右到左解析处理**，先查找所有 css 文件，然后把样式放到 style 标签里面