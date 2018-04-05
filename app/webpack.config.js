var path = require('path');
var htmlWebpacPlugin = require('html-webpack-plugin')

config = {
  // 打包入口文件 String|Object
  entry: './src/index.js',

  // 配置打包结果 Object
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
    //publicPath: 'build'
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
  },

  // webpack-dev-server 配置
  devServer: {
    // 热加载，命令行必须输入--hot
    // hot: true,
    // inline: true
  },
  plugins: [
    new htmlWebpacPlugin({
      title: 'welcome to my homepage',
      //chunks: ['index']
    })
  ]
}
module.exports = config