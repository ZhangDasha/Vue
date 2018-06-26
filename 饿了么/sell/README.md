# Vue高仿饿了么APP---商家模块

使用vue@2.0开发的高仿饿了么APP（用户端） Vue.js高仿饿了么外卖App 2016最火前端框架

## 主要依赖

    基于vue@2.5.2
    使用vue-cli@3.10.10搭建项目框架
    使用vue-router@3.0.1进行页面路由切换
    使用axios@0.17.1进行http请求获取数据
    mock假数据存储在本地
    使用stylus编写样式
    使用eslint进行js代码的规范、
    使用better-scroll进行联动滑动

## 在线预览
[点我在线预览](http://chenyubo.me/vue-eleme-app/dist/index.html)

## 第三方js库better-scroll使用说明
      1.better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。

      2.new BScroll()对象实例化的第一个参数是一个原生的 DOM 对象。当然，如果传递的是一个字符串，better-scroll 内部会尝试调用 querySelector 去获取这个 DOM 对象

      3.获取对象的方法：Vue.js 提供了我们一个获取 DOM 对象的接口—— vm.$refs。 

      4.开发中可以把 this.$nextTick 替换成 setTimeout(fn, 20) 也是可以的

      5.在实际工作中，列表的数据往往都是异步获取的，因此我们初始化 better-scroll 的时机需要在数据获取后

      6.better-scroll常见属性，通过 props 的形式：
          probeType：滚动的时候派发scroll事件，是否截流
          click：点击列表是否派发click事件
          scrollX：是否开启横向滚动
          listenScroll： 是否开启滚动事件
          data： 列表的数据
          pullup：是否派发滚动到底的事件，用于上拉刷新
          pulldown： 是否派发顶部下拉的事件，用于下拉刷新
          beforeScroll： 是否派发列表滚动开始的事件
          refreshDelay： 当数据更新后，刷新scroll的延迟

      7.better-scroll常用方法
          refresh() 重新计算 better-scroll
          scrollTo(x,y,time,easing)  滚动到制定位置
          scrollBy(x,y,time,easing)  相对于当前位置偏移滚动x，y的距离
          scrollToElement(el,time,offsetX,offsetY,easing) 滚动到指定的目标元素
          stop()  立即停止当前运行的滚动动画
          enable()  开启better-scroll，默认是开启
          disable()
          destroy()

## 项目截图
    商品页
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9601_%E5%95%86%E5%93%81%E9%A1%B5.jpg)

    公告和优惠信息   
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9602_%E5%95%86%E5%93%81%E9%A1%B5_%E5%85%AC%E5%91%8A%E5%8F%8A%E4%BC%98%E6%83%A0%E4%BF%A1%E6%81%AF.jpg)

    购物车详情
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9603_%E5%95%86%E5%93%81%E9%A1%B5_%E8%B4%AD%E7%89%A9%E8%BD%A6%E8%AF%A6%E6%83%85.jpg)

    商品详情
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9604_%E5%95%86%E5%93%81%E9%A1%B5%E9%9D%A2_%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85.jpg)

    评价页
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9605_%E8%AF%84%E4%BB%B7%E9%A1%B5.jpg)

    商家页
![](https://github.com/ZhangDasha/Vue/blob/master/%E9%A5%BF%E4%BA%86%E4%B9%88/sell/resource/%E5%A4%96%E5%8D%9606_%E5%95%86%E5%AE%B6%E9%A1%B5.jpg)
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
