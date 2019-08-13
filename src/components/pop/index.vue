<template>
<div class="wrapper">
  <div class="title">
        <h3 class="r">新增中奖人员</h3>
    </div>
   <el-input
        placeholder="请输入姓名或电话"
        v-model="input4"
        style="width:300px;">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
   </el-input>
    <el-button type="primary">搜索</el-button>

    <el-table
    ref="multipleTable"
    :data="popData"
    tooltip-effect="dark"
    style="width: 100%"
    v-loading="loading"
    @selection-change="handleSelectionChange" class="table">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      property="user_name"
      label="姓名"
      width="220">
      <template slot-scope="scope">
        <img :src='tableData.user_head' style="width:45px;height:45px;border-radius:50%;margin-right:10px;"/>
        <span style="position:relative;top: -22px;">{{popData[scope.$index].user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="user_phone"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user_team"
      label="团队"
      width="120">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="参与时间"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>


    <div class="tow-bt">
    <el-button type="success" style="width:300px;">确定</el-button>
    <el-button type="danger" style="width:300px;" @click="sonhandelclick">取消</el-button>
    </div>
</div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
      return {
        tableData: [{ 
          user_name: '',
          user_phone: '',
          user_team: '',
          create_time: ''
        }],
        input4:'',
      }
  },

  props: ['popData','loading'],

   methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      sonhandelclick() {
        this.$emit('cancle');
      }
    },
    created () {
       this.axios({
          method: 'post',
          url: '/dc/order/setWinOrder',
          headers: {
              'Content-type': 'application/json'
          },
          data: {
              order_id_list: qs.stringify([2],{indices:false})
          }
       }).then((res) => {
              console.log(res);
          })
          .catch((error) => {
              console.log(error);
          }
      );
    }
}
</script>

<style>
.wrapper {
    width: 100%;
    height: 100%;
}
.wrapper .title {
    height: 60px;
}

.wrapper .tow-bt {
    margin-top: 60px;
    background-color: whitesmoke;
}

.wrapper .table .el-table__header th, .table .el-table__header tr {
    background-color: whitesmoke;
}

.wrapper .table .el-table__body tr,.table .el-table__body td {
    background-color: whitesmoke;
}
</style>