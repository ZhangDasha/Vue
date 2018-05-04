<template>
  <div class="alert alert-info">
    <slot name="one">{{msg}}</slot>
    <slot name="two">{{msg}}</slot>
  </div>
</template>
<script>
  /*
    插槽的使用:父组件向子组件传DOM节点
      在自定义标签內嵌套html子标签，子标签就会自动放入slot內
  */
  export default {
    data(){
      return{
        msg:"这是一个页面"
      }
    }
  }
</script>