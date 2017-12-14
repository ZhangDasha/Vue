import { INCREMENT,DECREMENT  } from './types.js'
import getters from './getters.js'

const state = {
	count:20
};
/*每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
	这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

	使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。
	这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然
*/ 
const mutations = {
	[INCREMENT](state){
		state.count++
	},
	[DECREMENT](state){
		state.count--
	}
};

export default {
	getters,
	state,
	mutations
}