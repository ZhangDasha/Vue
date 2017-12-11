import Home from './component/Home.vue'
import News from './component/News.vue'

export default{
	routes:[
		{path:'*',redirect:'/home'},
		{path:'/home',component:Home},
		{path:'/news',component:News}
	]
}