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
  //loader的配置
  module: {
    //对某个格式的文件进行转换处理
    rules: [
      {
        test: /\.css$/,   //以.css结尾的文件
        use: [
            //uer数组里的loader的顺序，是从下到上
            //将js的样式内容插入到style标签里
            "style-loader",
            //将css文件转换为js
            'css-loader'
        ]
        // use: 'raw-loader'
      }
  ]
  }
}