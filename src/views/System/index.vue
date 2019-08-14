<template>
    <el-container>
        <el-header>
          <span style="font-size:20px;font-weight:bold;">抽奖后台管理系统</span>
          <el-button type="danger" class="bt" style="width:120px;" @click="exitSystem">退出系统</el-button>
        </el-header>
        <el-container>
          <Aside></Aside>
          <el-main>
            <system_detail></system_detail>
          </el-main>
        </el-container>
   </el-container>
</template>

<script>
import Aside from '@/components/Aside'
import system_detail from '@/components/system_detail'
export default {
   components: {
       Aside,
       system_detail
   },
   methods: {
     exitSystem: function() {
       this.$router.push('/login');
     }
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
    height: 65px!important;
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
