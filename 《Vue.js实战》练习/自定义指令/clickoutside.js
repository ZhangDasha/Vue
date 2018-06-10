/*
  自定义指令 v-clickoutside 绑定了一个函数 handleClose，用于关闭菜单
*/
Vue.directive('clickoutside', {
  bind(el, binding, vnode) {
    /*
      documentHandler()的作用：
        1. 判断点击的区域是否是指令所在元素内部
        2. 判断当前指令 v-clickoutside 有没有写表达式
    */
    function documentHandler(e) {
      if (el.contains(e.target)) {
        /*
          A.contains(B)用来判断A是否包含B
        */
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el._vueClickOutside_ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind(el, binding) {
    document.removeEventListener('click', el._vueClickOutside_);
    delete el._vueClickOutside_
  }
})