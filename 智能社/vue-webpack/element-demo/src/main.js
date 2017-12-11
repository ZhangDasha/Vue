import Vue from 'vue'
import ElementUI from 'element-ui'
// 添加style-loader
// 对于css加载字体图标报错问题-见webpack.config.js文件的file-loader
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
