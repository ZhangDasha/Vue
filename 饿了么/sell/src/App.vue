<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" class="link">goods</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" class="link">ratings</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" class="link">seller</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from 'axios'
import header from './components/header/header.vue'

const ERR_OK = 0

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    axios.get('api/seller').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.seller = res.data
        // console.log(this.seller.avatar)
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
