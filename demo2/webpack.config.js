const path = require('path')
console.log(path.resolve(__dirname,'dist'))
module.exports = {
  // 入口文件
  entry: './src/index.js',
  output: {
    //输出文件名
    filename: 'bundle.js',
    //输出路径  绝对路径（使用node的path能够获取当前的路径）
    path:path.resolve(__dirname,'dist')
  },
  //打包模式
  mode: 'development',   //开发模式
}