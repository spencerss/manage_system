<template>
    <el-container>
        <el-header>
          抽奖后台管理系统
          <el-button type="danger" class="bt" style="width:120px;">退出系统</el-button>
        </el-header>
        <el-container>
          <Aside></Aside>
          <Main></Main>
        </el-container>
</el-container>
</template>

<script>
import Main from '@/components/Main'
import Aside from '@/components/Aside'
export default {
  components: {
    Main,
    Aside
  }
}
</script>

<style> 
  .el-header {
    background-color: powderblue;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: relative;
  }

  .el-header .bt{
    position:absolute;
    right:0;
    bottom:0;
  }
  
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  
  
</style>
