<template>
<div class="lottery-wrapper">
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
   <el-table
    ref="singleTable"
    :data="nowTableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%;">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      property="user_name"
      label="姓名"
      width="220">
      <template slot-scope="scope">
        <img :src='tableData.user_head' style="width:45px;height:45px;border-radius:50%;margin-right:10px;"/>
        <span style="position:relative;top: -22px;">{{tableData[scope.$index].user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      property="user_phone"
      label="电话">
    </el-table-column>
    <el-table-column
      property="user_team"
      label="团队">
    </el-table-column>
    <el-table-column
      property="create_time"
      label="参与时间">
    </el-table-column>
  </el-table>

   <el-pagination
  background
  layout="prev, pager, next"
  :page-size="pageSize"
  :current-page.sync="currentPage"
  :total="tableData.length">
  </el-pagination>
</div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        pageSize: 20,
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
        value: '',
        tableData: [{ 
          user_name: '王小虎',
          user_phone: '1',
          user_team: '1',
          create_time: '1'
        }, {
          user_name: '王小虎',
          user_phone: '',
          user_team: '2',
          create_time: ''
        }, {
          user_name: '王小虎',
          user_phone: '',
          iuser_team: '3',
          create_time: ''
        }],
      }
    },
    computed: {
      nowTableData(){
        return this.tableData.slice((this.currentPage - 1)*this.pageSize,this.currentPage*this.pageSize)||[];
      }
    },
    
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
.el-table__body td,.el-table__header th {
       text-align: center;
  }
</style>
