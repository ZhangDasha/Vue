<template>
  <div class="container">
    <h1>{{title}}</h1>
    <p>分享次数：{{shareTime}}</p>
    <p>发表于{{date | moment}}</p>
    <p class="lead">
      {{content}}
    </p>
    <!-- 
      父对子传值：
        绑定一个自定义属性，用于接受父组件的传值 
    -->
    <app-author :articleName = "name"></app-author>

    <!-- 
      子改变父变量值：
        触发一个自定义事件，
     -->
    <app-share @shared="fooShare"></app-share>
  </div>
</template>
<script >
import moment from "moment"
import Author from "./author.vue"
import Share from "./share.vue"
  export default {
    data(){
      return{
        title:"震惊",
        date:new Date(),
        content:"为何找工作这么难！！！",
        name:"Zhang daXiang | aaa",
        shareTime:0
      }
    },
    filters:{
      moment:function(val){
        return moment(val).format("MMMM Do")
      }
    },
    /*
      局部注册组件
    */
    components:{
      "app-author":Author,
      "app-share":Share
    },
    methods:{
      fooShare(){
        this.shareTime++;
      }
    }
  }
</script>