<template>
  <div>
    <button class="btn btn-primary" @click="share">分享到微信</button>
  </div>
</template>
<script type="text/javascript">
  /*
    组件通信---子对父
      通过触发自定义事件
      this.$emit()
  */
  export default {
    methods:{
      share(){
        this.$emit("shared")
      }
    }
  }
</script>