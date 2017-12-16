<template>
  <div id="app">
    <v-header></v-header>
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
    <div class="content">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>

import header from './components/header/header.vue'

export default {
  name: 'app',
  components: {
    'v-header': header
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
