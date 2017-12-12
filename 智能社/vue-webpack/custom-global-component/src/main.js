import Vue from 'vue'
import App from './App.vue'

// 引入components文件中的index.js文件
import Loading from './components/loading'

Vue.use(Loading)

new Vue({
  el: '#app',
  render: h => h(App)
})
