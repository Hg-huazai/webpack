# webpack
webpack使用笔记
安装node.js最好是最新版本，不要低于10

入口文件；

出口文件；

开发模式：mode= development；

生产模式： mode = production；

npm 是翻墙外网下载， 会因为网络原因，使依赖下载失败

## demo1

#### 第一步：   全局安装（新建一个webpack文件夹）

```js
cnpm install webpack webpack-cli -g
```

#### 第二部：npm init 初始化（新建一个demo1文件夹   新建文件夹命令mkdir demo1  ） 此处会有一个packge.json文件生成

npm init -y  是快速初始化（会有一个默认的配置）

```js
npm init -y
```

#### 第三步：进入demo1，进行本地安装webpack webpack-cli  的依赖

```js
cd demo1
cnpm install webpack webpack-cli --save-dev
```

#### 第四步：打包

第一个路径是入口文件

“-o”是指定输出文件

第二个路径是出口文件

webpack默认可以处理js文件、json文件。

生产环境下比开发环境多了压缩代码和代码混淆。

```
//开发环境打包
webpack ./src/index.js -o ./dist/bundle --mode=development
//生成环境打包
webpack ./src/index.js -o ./dist/bundle --mode=production
```

#### 第五步：引入打包文件使用

```html
<script src="./dist/bundle.js"></script>
```



## demo2(使用配置完成打包)

看文档（https://www.webpackjs.com/concepts/）

#### 第一步：新建webpack.config.js文件配置

整个的webpack是用node来做的

node有一个path模块，能够获取到当前的文件目录是什么

resolve()是node.js 的path的一个方法，拼接路径

__dirname: 当前的具体目录

```js
let path = require('path')
module.exports = {
    //入口文件
    entry:"./src/index.js",
    output: {
        //输出文件名
        filename:"bundle.js",
        //输出的路径
        //绝对路径
        path：path.resolve(__dirname,'dist')
    },
    //打包模式
    mode: 'development'   //开发模式
}
```

#### 第二部： 直接运行webpack命令打包即可（不用初始化什么的）

```
webpack
```



打包后的目录结构   （打包前是没有dist文件夹的）

![image-20200915221947547](C:\Users\Hg-huazai\AppData\Roaming\Typora\typora-user-images\image-20200915221947547.png)



## demo3（配置loader完成样式打包）

#### 第一步：新建css文件， 引入index.js文件中（打包入口文件）

webpack默认是不支持打包css的  所以借助loader的配置

可看文档

```
import './style.css';
```

```js
let path = require('path')
module.exports = {
    //入口文件
    entry:"./src/index.js",
    output: {
        //输出文件名
        filename:"bundle.js",
        //输出的路径
        //绝对路径
        path：path.resolve(__dirname,'dist')
    },
    //打包模式
    mode: 'development',   //开发模式
	//loader的配置
	module:{
        //对某个格式的文件进行转换处理
        rules: [
            {
                test:/\.css$/,   //以.css结尾的文件
                use: [
                    //uer数组里的loader的顺序，是从下到上
                    //将js的样式内容插入到style标签里
                    "style-loader",
                    //将css文件转换为js
                    "css-loader"
                ]
            }
        ]
    }
}
```

#### 第二部：安装依赖  'style-loader' 和 css-loader

```
cnpm install style-loader css-loader --save-dev
```

#### 第三部：webpack打包

```
webpack
```


