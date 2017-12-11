<template>
  <div id="app">
    <h3>This is vue-webpack-simple</h3>
    {{msg}}
    <br>
    <router-link to="/home">主页</router-link>
    <router-link to='/news'>新闻</router-link>
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'da Xiang is a lucky boy'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

</style>
