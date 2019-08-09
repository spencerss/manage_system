<template>
<div class="lottery-wrapper">

  <!-- <el-row class="top" type="flex">
    <el-col :span="1"><span class="word">第</span></el-col>
    <el-col :span="2">
      <el-select v-model="value" placeholder="1" style="width:55px; height:25px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
    <el-col :span="1"><span class="word">期</span></el-col>
    <el-col :span="2"><span class="text">共参与200人</span></el-col>
  </el-row> -->
  <div class="top">
      <span class="word">第</span>
      <el-select v-model="value" placeholder="1" style="width:55px; height:25px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="word">期</span>
      <span class="text">共参与200人</span>
  </div>
  <Table/>

  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
  </el-pagination>
</div>
</template>

<script>
import Table from '@/components/Table'
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2'
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }],
        value: ''
      }
    },
    components: {
      Table
    }
  }
</script>

<style>
.lottery-wrapper {
  height: 100%;
  background-color: white;
}
.lottery-wrapper .word {
  font-size: 23px;
  font-weight: light;
}
.lottery-wrapper .text {
  margin-left: 15px;
  font-size: 10px;
}

.lottery-wrapper .top {
    display: flex;
    justify-content: flex-start;
} 
.lottery-wrapper .el-select {
  margin:0px 4px;
}
.lottery-wrapper .el-pagination {
  margin-top: 100px;
}
</style>
