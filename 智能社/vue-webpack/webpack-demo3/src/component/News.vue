<template>
	<div>
		<h3>我是新闻</h3>
		<ul>
			<li v-for="val in news">{{val}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return{
				news:['11111','22222','333333','444444']
			}
		}
	}
</script>
<style>
	ul li{
		list-style-type:none;
	}
</style>