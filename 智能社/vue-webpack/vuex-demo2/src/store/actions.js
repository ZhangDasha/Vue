import * as types from './types.js'

export default{
	increment:({commit})=>{
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