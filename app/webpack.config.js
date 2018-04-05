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
  }
}
module.exports = config