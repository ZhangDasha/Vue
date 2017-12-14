import * as types from './types.js'

export default{
	increment:({commit})=>{
		// Action 函数接受一个与 store 实例具有相同方法和属性的对象
		// 调用一个commit提交一个mutations触发改变
		// 再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。
		commit(types.INCREMENT)
	},
	decrement:({commit})=>{
		commit(types.DECREMENT)
	},
	clickOdd:({commit,state})=>{
		// count保存在state的mutations内
		console.log(state.mutations);
		if(state.mutations.count%2==0){
			commit(types.INCREMENT)
		}
	},
	clickAsync:({commit})=>{
		new Promise((res)=>{
			setTimeout(function(){
				commit(types.INCREMENT)
				console.log('一秒后才增加')
			},1000);
		})
	}
}