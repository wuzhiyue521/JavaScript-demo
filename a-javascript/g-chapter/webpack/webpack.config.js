var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 输出的文件目录
    filename: 'bundle.js' // 输出的文件名
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin() // 代码压缩
  ]
}