<template>
  <div id="app">
    <h3>Welcome Vuex</h3>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>

    <div>
      现在的数字为：{{count}}
    </div>
  </div>
</template>

<script>
/*
  vuext：集中式管理数据
  vuex提供了两个靠谱的方法：
    mapActions  管理所有的事件
    mapGetters  获取数据
*/ 
import {mapGetters,mapActions} from 'vuex'

export default {
  
  name: 'app',
  computed:mapGetters([
    'count'
  ]),
  methods:mapActions([
      'increment',
      'decrement'
    ])
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
