<template>
  <div id="app">
    <h3>Welcome Vuex</h3>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="clickOdd">偶数才能点击</button>
    <button @click="clickAsync">异步增加</button>

    <div>
      现在的数字为：{{count}},它现在:{{getOdd}}
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods:mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'
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
