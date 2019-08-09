<template>
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>

</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
 .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 80px;
    padding: 0px;
  }
</style>
