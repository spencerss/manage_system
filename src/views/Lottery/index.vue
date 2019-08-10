<template>
    <el-container>
        <el-header>
          抽奖后台管理系统
          <el-button type="danger" class="bt" style="width:120px;">退出系统</el-button>
        </el-header>
        <el-container>
          <Aside></Aside>
          <el-main>
            <lottery_detail></lottery_detail>
          </el-main>
        </el-container>
   </el-container>
</template>

<script>
import Aside from '@/components/Aside'
import lottery_detail from '@/components/lottery_detail'
export default {
   components: {
       Aside,
       lottery_detail
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
.el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 80px;
    padding: 15px;
  }

 body > .el-container {
    margin-bottom: 40px;
  }
</style>
