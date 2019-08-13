<template>
    <el-aside width="200px">
      <el-menu default-active="2">
        <router-link to="/Lottery" tag="el-menu-item"  index="1">
          <i class="el-icon-menu"></i>
          <span>抽奖人员名单</span>
        </router-link>
        <router-link to="/Winning" tag="el-menu-item" index="2">
          <i class="el-icon-document"></i>
          <span>中奖人员名单</span>
        </router-link>
        <router-link to="/System" tag="el-menu-item" index="3">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </router-link>
    </el-menu>
        <!-- <router-link to="/Lottery" tag="li" class="text ">抽奖人员名单<i class="iconfont icon-gengduo"></i></router-link>
        <router-link to="/Winning" tag="li" class="text">中奖人员名单<i class="iconfont icon-gengduo"></i></router-link>
        <router-link to="/System" tag="li" class="text">系统设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-gengduo"></i></router-link> -->
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
    width: 150px!important;
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
    color:honeydew;
  }
  .el-aside .el-menu {
    background-color: powderblue;
  }
  .el-aside .el-menu-item {
    height: 80px;
    line-height: 80px;
  }
  .el-aside .el-menu-item span {
    font-size: 15px;
  }
</style>
