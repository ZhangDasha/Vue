<template>
	<div>
		<div>
			<h3>按钮</h3>
			<el-button type="primary" icon="el-icon-circle-close-outline">主要按钮</el-button>
	    <el-button type="danger" icon="el-icon-loading">主要按钮</el-button>
	    <el-button type="info" icon="el-icon-edit">主要按钮</el-button>
	    <el-button type="success" icon="el-icon-search" @click="get">点击事件</el-button>
		</div>
		<div>
			<h3>日历</h3>
			<el-date-picker
	      v-model="value1"
	      type="date"
	      placeholder="选择日期">
	    </el-date-picker>
		</div>
		<div>
			<h3>评分</h3>
			<el-rate v-model="value2"></el-rate>
			<el-rate
		    v-model="value3"
		    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		  </el-rate>
		</div>
		<div>
			<h3>Tabs选项卡</h3>
			<el-tabs v-model="activeName">
		    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		  </el-tabs>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				value1:'',
				value2:3,
				value3:1,
				activeName: 'first'
			} 
		},
		methods:{
			get(){
				alert(1)
			}
		}
	}
</script>