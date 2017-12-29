<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" class="link">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" class="link">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" class="link">商家</router-link>
      </div>
    </div>
    <!-- keep-alive 实现组件切换，状态保留的功能 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from 'axios'
import {urlParse} from './common/js/util.js'
import header from './components/header/header.vue'

const ERR_OK = 0
const debug = process.env.NODE_ENV !== 'production'

export default {
  name: 'app',
  props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
    }
  },
  components: {
    'v-header': header
  },
  created () {
    const url = debug ? '/api/seller' : 'http://ustbhuangyi.com/sell/api/seller'
    // axios.get('api/seller').then((res) => {
    axios.get(url + '?id=' + this.seller.id).then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        // this.seller = res.data
        this.seller = Object.assign({}, this.seller, res.data)
        // console.log(this.seller.avatar)
        // 获取id号
        // console.log(this.seller.id)
      }
    })
  }
}
</script>

<style scoped lang="stylus">
  @import "./common/stylus/mixin.styl"
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-1px(rgba(7,17,27,0.1));
  }
  #app .tab-item{
    flex: 1;
    text-align: center;
  }
  .link{
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .router-link-active{
    color: rgb(240,20,20);
  }
</style>
