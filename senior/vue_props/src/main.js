import Vue from 'vue'
import App from './App.vue'
import Announcement from './components/Announcement.vue'
import Article from './components/article.vue'

Vue.component("app-annoucement", Announcement)
Vue.component('app-article', Article)

new Vue({
  el: '#app',
  render: h => h(App)
})
