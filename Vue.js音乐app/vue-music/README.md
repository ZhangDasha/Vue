# vue-music

> 音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 版本信息
    better-scroll此版本为0.1.15,最新版本写法有改动
    视频中的vue-cli webpack 模板为1.2.4之前的配置方法，现最新版本配置有改动。见webpack-dev-server.js文件
    
    
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



小记：
	1. css预编译：stylus方式
	2. 接口的获取：
		1. 进入手机版模式，m.y.qq.com
	        2. 原接口在network的js中，以jsonp的形式；现在XHR中以ajax通信
			    
	3.common/js/jsonp.js	jsonp的封装用于将jsonp请求转换为promise
	4.ref被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。在标签中定义ref属性，相当于给该标签标注一个锚点，在js代码中，通过 this.$ref+'ref属性值' 对象来获得该标签
    	例：
      		<p ref="p">hello</p>
          	this.$ref.p  ===  节点p








