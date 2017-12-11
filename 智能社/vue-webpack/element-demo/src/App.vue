<template>
  <div id="app">
    {{msg}}
    <br>
    <Date></Date>
    <hr>
    <div>
      <myButton></myButton>
    </div>
  </div>
</template>

<script>
/*
  webpack使用组件的步骤是：
  1.定义一个组件
  2.在App.vue文件中使用 import xx from ‘xxxxx’ 导入组件
  3.在App.vue文件的components中声明组件
  4.在App.vue文件的template模块中使用组件
*/
import Date from './assets/components/Date.vue'
import myButton from './assets/components/Button.vue'

export default {
  name: 'app',
  data () { 
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{
    Date,
    myButton
  }
}
</script>

<!-- <style scoped> 只有本作用域能用 -->
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
