<template>
	<div>
		<el-button @click="get" >axios请求数据</el-button>
		<br>
		{{msg}}
	</div>
</template>
<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				msg:'默认数据'
			}
		},
		methods:{
			get(){
				axios.get('a.txt')
				.then(res=>{
					this.msg = res.data;
					console.log(res)
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}
	}
</script>