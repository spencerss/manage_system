<template>
    <el-aside width="200px">
        <router-link to="/Lottery" tag="li" class="text ">抽奖人员名单<i class="iconfont icon-gengduo"></i></router-link>
        <router-link to="/Winning" tag="li" class="text">中奖人员名单<i class="iconfont icon-gengduo"></i></router-link>
        <router-link to="/System" tag="li" class="text">系统设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-gengduo"></i></router-link>
    </el-aside>
</template>

<script>
export default {
   name: 'Aside'
}
</script>

<style>
   .el-aside {
    background-color: powderblue;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-aside .text {
    color: black;
    text-decoration: none;
    list-style: none;
    height: 10%;
  }
  .el-aside .text i{
    font-size: 14px;
  }
  .el-aside .router-link-active {
    color: #f5f5f5;
  }
</style>
