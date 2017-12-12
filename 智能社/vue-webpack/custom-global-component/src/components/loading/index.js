import LoadingComponent from './Loading.vue'

const Loading={
	// 若想要使用Vue.use()，就必须使用install定义函数
	install:function(Vue){
		Vue.component('Loading',LoadingComponent)
	}
}

// 导出Loading对象
export default Loading