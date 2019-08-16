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
      <span class="text">共参与{{len}}人</span>
  </div>
  <el-table
    ref="singleTable"
    :data="nowTableData"
    highlight-current-row
    v-loading="loading_d"
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
        <img :src='nowTableData[scope.$index].user_head' style="width:45px;height:45px;border-radius:50%;margin-right:10px;"/>
        <span style="position:relative;top: -22px;">{{nowTableData[scope.$index].user_name}}</span>
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
    <el-table-column
      property="manifesto"
      label="宣言">
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
        len:0,
        options: [],
        value: 1,
        tableData: [{ 
          user_name: '',
          user_phone: '',
          user_team: '',
          create_time: '',
          manifesto:''
        }],
        loading_d:true,
        po:[]
      }
    },
    computed: {
      nowTableData(){
        return this.tableData.slice((this.currentPage - 1)*this.pageSize,this.currentPage*this.pageSize)||[];
      }
    },
    created () {
      this.axios.post('/dc/issue/getOrderListByIssueID',{
        issue_id: this.value,
        pagination: 1,
        status: 0
      }).then((res)=>{
          var msg = res.data.msg;
          this.res = res.data.data;
          if(msg === '查询成功') {
               this.tableData = res.data.data.data;
          }                    
          this.loading_d = false;
          });
       this.axios.get('/dc/issue/getIssueIDList').then((resss)=>{
          let msg = resss.data.msg;
          if(msg === "查询成功"){
            this.options=[];
            this.po = resss.data.data;
            this.po.forEach((item,index,array) => {            
                this.options.push({value:array[index].id,lable:array[index].name});   
                });
          }
      });
    },

    watch: {
      value: function(n,o) {
          this.loading_d = true;
          this.axios.post('/dc/issue/getOrderListByIssueID',{
          issue_id: n,
          pagination: 1,
          status: 0
          }).then((res)=>{
            this.len = res.data.data.data.length;
            var msg = res.data.msg;
            if(msg === '查询成功') {
               this.tableData = res.data.data.data;
           }            
            this.loading_d = false;       
        });
        }
      
    },

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
.el-table__body td,.el-table__header th {
       text-align: center;
  }
</style>
