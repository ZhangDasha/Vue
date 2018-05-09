<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- 属于全局的播放器组件 -->
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab.vue'
import Player from 'components/player/player.vue'

export default {
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style lang="stylus">
  
</style>
