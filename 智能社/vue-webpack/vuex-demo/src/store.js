import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	count:10
}

const mutations={		//处理数据的变化
	increment(state){
		state.count++
	},
	decrement(state){
		state.count--
	}
}

const actions = {    //处理事件，异步请求，判断，流程控制
	increment:({commit})=>{
		// console.log(commit)
		commit('increment')
	},
	decrement:({commit})=>{
		commit('decrement')
	}
}

const getters = {
	count(state){
		return state.count
	}
}

// 导出Store对象
export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters
})