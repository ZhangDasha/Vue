<template id="home"> 
  <!-- 这里放置HTML代码 -->
  <div>
    <ul @click="change()">
      <li>111</li>
      <li>222</li>
      <li>{{msg}}</li>
    </ul>
    <hr>
    <router-link to="/Menu.vue">Menu</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 这里放置js代码
export default {

  id:'#home',
  data() { 
    return{
      msg:"这是组件数据"
    }
  },
  methods:{
    change(){
      console.log('This is vue use webpack');
    }
  }

}
</script>

<style>
/*这里放置css代码*/
  body{
    font-size: 20px;
    color: red;
  }
</style>
