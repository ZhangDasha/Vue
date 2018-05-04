<template>
  <div>
    <p>Written By {{articleName}}</p>
  </div>
</template>
<script type="text/javascript">
  export default{
    // 规范接受到的属性内容
    /*
      props:["articlename"]
    */
    /*props:{
      articlename:String
    }*/
    props:{
      articleName:{
        type:String,
        default:"daSha"
      }
    }
  }
</script>