<template>
  <div>
    <div class="goods">
      <!-- v-el 获取DOM对象 -->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)" ref="menuList">
            <span class="text border-1px">
              <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li  v-for="food in item.foods" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon" width="57" height="57" @click="selectFood(food,$event)">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span><span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food = "food" @add="addFood"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
    </div>
    <food @add="addFood" :food="selectedFood" ref="food"></food>
  </div>
</template>

<script>

import axios from 'axios'
import BScroll from 'better-scroll'
import shopcart from '../shopcart/shopcart.vue'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import food from '../food/food.vue'

  const ERR_OK = 0
  const debug = process.env.NODE_ENV !== 'production'

  /*
  第三方js库better-scroll使用说明
      1.better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。

      2.new BScroll()对象实例化的第一个参数是一个原生的 DOM 对象。当然，如果传递的是一个字符串，better-scroll 内部会尝试调用 querySelector 去获取这个 DOM 对象

      3.获取对象的方法：Vue.js 提供了我们一个获取 DOM 对象接口 vm.$refs

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

  */

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i)
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      // selectFoods监视food属性的变化实现联动
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          // 如果属性food有count属性，则代表被选中
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    const url = debug ? '/api/goods' : 'http://ustbhuangyi.com/sell/api/goods'
    axios.get(url).then((res) => {
      // console.log(res)
      res = res.data
      if (res.errno === ERR_OK) {
        this.goods = res.data
        // console.log(this.goods[0])
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    })
  },
  methods: {
    selectMenu (index, event) {
      // 获取$event事件，（pc与移动端不兼容）阻止pc端多次执行
      if (!event._constructed) {
        return
      }
      // console.log(index)
      let foodList = this.$refs.foodList
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    selectFood (food, event) {
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      // 获取到组件food的show方法
      this.$refs.food.show()
    },
    addFood (target) {
      this._drop(target)
    },
    _drop (target) {
      // 异步执行下落动画
      this.$nextTick(() => {
        // $refs访问子组件shopcart
        this.$refs.shopcart.drop(target)
      })
      console.log('2')
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        // better-scroll库会阻止默认事件（阻止menu-item点击）
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮 pos.y滚动时是负值）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    },
    // 函数规范：一般以下划线开头的方法，为组件私有方法
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    _followScroll (index) {
      let menuList = this.$refs.menuList
      let el = menuList[index]
      this.menuScroll.scrollToElement(el, 300, 0, -1)
    }
  },
  components: {
    shopcart,
    cartcontrol,
    food
  }
}
</script>

<style lang="stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    width: 100%
    bottom: 46px
    overflow: hidden

    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        width: 56px
        height: 54px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          font-size: 12px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))

    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 8px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7,17,27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147,153,159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240,20,20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147,153,159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px





</style>