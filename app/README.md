# Webpack

## What Webpack

> 模块加载兼打包工具

- 支持 AMD/CMD 写法
- 处理依赖关系，然后解析出模块之间的依赖，将代码打包
- 各种**资源**都作为**模块**来使用和处理： 比如：js, css, sass

## 安装 webpack

`# npm install cnpm webpack -g --registry=http://registry.npm.taobao.org`

- 使用命令 `# webpack`
- 项目依赖包安装 : `# cnpm install webpack --save-dev`

## 初始化项目

- 创建项目目录命令并进入项目目录：`# mkdir app && cd app`
- 初始化项目命令：`# npm init`

## 安装 react 模块

``` sh
--save or -S
# cnpm install react@next -S
# cnpm install react-dom@next -S
```

## 创建开发目录和生产目录

`# mkdir {src,build}`

## 项目打包测试

- app/src/index.js
  - document.body.innerHTML = "<div>欢迎来到微明</div>";

- 打包生成: `webpack app/index.js build/build.js`

- app/index.js

``` html
<body>
<sript src="build/build.js"></script>
</body>
```

- 访问浏览器: `http://path/to/app/index.html`

## CMD 引入模块

``` sh
# vim app/index.js
  var str = require('./app.js');
  document.body.innerHTML = '<h1>' + str + '</h1>';
```

## AMD 引入模块

``` sh
# vim  app/index.js
  define(['./app.js'], function(str){
    document.body.innerHTML = '<h1>AMD: ' + str + '</h1>';
  })
```

## 引入 css 文件

- 必须安装 css [模块加载器](https://webpack.js.org/concepts/loaders/)
- webpack 默认安装了 js  模块加载器

- css文件加载器: `# cnpm install css-loader@0.23.1 --save-dev` 
- style 样式表加载器: `# cnpm install style-loader@0.13.0 --save-dev`

- 使用方法
  - `require('style-loader!css-loader!./css/style.css')`
  - style!css! **从右到左解析处理**，先查找所有 css 文件，然后把样式放到 style 标签里面

## 打包

> 把各种资源(脚本文件，样式文件，图片文件等)打包成一个文件，让客户端加载资源文件的时候仅加载这个打包文件。这样做的好处是减少客户端与服务器端交互压力，优化了加载资源过程。缺点是因为是用 JS 解析生成各种内容，因此对于 SEO 优化来说是致命的。

## webpack 配置

- 因为每次打包都需要在命令行上输入 `webpack 源码文件 目标生成文件`，因此可以通过webpack 配置文件来自动打包生成。

1. 在项目目录下创建 `webpack.config.js` 文件

- 文件内容如下：

``` js
var path = require('path');
config = {
  // 打包入口文件 String|Object
  entry: './src/index.js',

  // 配置打包结果 Object
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  // 定义对模块的处理逻辑 Object
  module: {
    // 定义一系列的加载器 Array
    loaders: [
      {
        // 正则，匹配到的文件后缀名
        test: /.css$/,
        // 处理匹配到的文件
        loaders: ["style-loader", "css-loader"],
        // 排除的目录 String|Array
        exclude: '/node_modules/'
        // 包含的目录 String | Array
        // include: Sring|Array,
      }
    ]
  },
  // 解析设置
  resolve: {
    // 引入文件时自动识别一下文件扩展名，即引入时不同带后缀名
    extensions: ['.js', '.css', '.jsx']
  }
}
module.exports = config
```

2. 命令行输入打包命令 `webpack`

## webpack-dev-server 模块

- 轻量级服务器
- **修改文件源码**后，**自动刷新页面**就能把修改页面同步到页面上
- 安装模块

``` sh
# cnpm i webpack-dev-server@3.0.0-alpha6 -g` 全局安装
# cnpm i webpack-dev-server@3.0.0-alpha6 --save-dev` 依赖写入
```

- 使用命令
  - `webpack-dev-server --hot --inline` 自动刷新
  - 出错时：`webpack-dev-server --port 3600`

  - 不能自动更新原因：
    - 因为 webpack-dev-server 启动之后在服务器上运行，修改代码之后打包生成的页面不是原来指向build/build.js 而是在内存中打包生成 build.js 文件，所以在 webpack.config.js 文件的 output 对象配置里加上 `publicPath: 'build'` 配置，这样 index.html 引用的地址 build/build.js 的第一个 build 指的就是 publicPath 指向的内在所在目录，切build.js 文件是内存里打包生成的文件，不是 build/build.js 文件。这个文件不会有打包变化，因为所有修改代码操作打包生成的 js 文件都在内存里生成，并不会保存到这是build/buid.js 文件里保存。这一点请注意。

  - --content-base 可以修改服务器访问根目录位置

## 自动生成html文件

- html-webpack-plugin 插件
- `npm install html-webpack-plugin@2.14.0 --save-dev`

- 配置 webpack.config.js

``` js
var htmlWebpackPlugin = requrie('html-webpack-plugin')
plugins: [
  new htmlWebpackPlugin({
    title: 'title',
    chunks: ['index']
  })
]
```

- 使用命令: `webpack-dev-server --inline --hot --content-base ./build/`