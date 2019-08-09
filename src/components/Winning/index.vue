<template>
<div class="lottery-wrapper">
  <div class="top">
      <span class="word">第</span>
      <el-select v-model="value" placeholder="1" style="width:55px; height:30px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="word">期</span>
      <span class="text">中奖15人</span>
      <el-button type="success" style="width:150px;" class="bt" @click="handelclick">
          <i class="iconfont icon-tianjia"></i>
          <span class="bt-text">新增中奖人员</span>
      </el-button>
  </div>
  <Table/>

  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
  </el-pagination>

  <el-button type="success" style="width:300px;">
      一键通知该期全部用户
  </el-button>  
  <el-button type="primary" style="width:300px;">
      一键通知该期中奖人员
  </el-button>
  <div class="pop" v-if="flag">
    <div class="title">
        <h3 class="r">新增中奖人员</h3>
    </div>
   <el-input
        placeholder="请输入内容"
        v-model="input4"
        style="width:300px;">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
   </el-input>
    <el-button type="primary">搜索</el-button>
    <Table></Table>
    <div class="tow-bt">
    <el-button type="success" style="width:300px;">确定</el-button>
    <el-button type="danger" style="width:300px;" @click="handelclick">取消</el-button>
    </div>
  </div>
</div>

</template>

<script>
import Table from '@/components/Table'
  export default {
    data() {
      return {
        flag:false,
        options: [{
          value: '选项1',
          label: '2'
        }, {
          value: '选项2',
          label: '3'
        }, {
          value: '选项3',
          label: '4'
        }, {
          value: '选项4',
          label: '5'
        }, {
          value: '选项5',
          label: '6'
        }],
        value: ''
      }
    },
    components: {
      Table
    },
    methods: {
        handelclick() {
            this.flag = !this.flag;
        }
    }
  }
</script>
</script>

<style>
.lottery-wrapper {
  height: 100%;
  position:relative;
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
  margin-top: 30px;
  line-height: 60px;
}
.lottery-wrapper .bt{
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
}
.lottery-wrapper .bt .bt-text{
    display: inline-block;
    transform: translateY(-4px);
}
.wrapper {
    position:relative;
}
.pop {
    width: 950px;
    height: 600px;
    background-color:whitesmoke;
    position: absolute;
    top: 0px;
    left: 50px;
    z-index: 100;
}
.pop .title {
    height: 60px;
}

.pop .tow-bt {
    margin-top: 60px;
}
</style>
