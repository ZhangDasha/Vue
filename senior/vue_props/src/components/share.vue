<template>
  <div>
    <button class="btn btn-primary" @click="share">分享到微信</button>
  </div>
</template>
<script type="text/javascript">
  /*
    组件通信---子对父
      通过触发自定义事件
        this.$emit()的第一个参数是父组件的自定义事件，第二个参数是绑定事件函数的事件源对象内容
    1. 子组件绑定正常事件
    2. 在子组件事件函数中使用 this.$emit("父组件自定义事件") 
    3. 父组件利用自定义事件，执行父组件中定义的事件函数。 
  */
  export default {
    methods:{
      share(){
        this.$emit("shared",{
          name:"事件源对象"
        })
      }
    }
  }
</script>