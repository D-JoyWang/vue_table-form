<template functional>
  <el-button v-bind="data.attrs" v-on="listeners">{{props.text}}
  </el-button>
</template>
<script>

export default {
  name: 'FuncBtn',
  props:{
    text:{
      type:String,
      default:'hhhhhh'
    } 
  },
  mounted() {
    console.log(3333333333333333);
  }
}
</script>

  