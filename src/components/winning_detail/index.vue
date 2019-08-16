<template>
<div class="lottery-wrapper">
  <div class="top">
      <span class="word">第</span>
      <el-select v-model="value" placeholder="1" style="width:55px; height:30px">
        <el-option-group>
          <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
        </el-option-group>
      </el-select>
      <span class="word">期</span>
      <span class="text">中奖{{res.total}}人</span>
      <el-button type="success" style="width:150px;" class="bt" @click="handelclick">
          <i class="iconfont icon-tianjia"></i>
          <span class="bt-text">新增中奖人员</span>
      </el-button>
  </div>
  <!-- 表格 -->
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
        <span style="position:relative;top: -22px;">中奖啦!</span>
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

  <el-button type="success" style="width:300px;" v-if="false">
      一键通知该期全部用户
  </el-button>  
  <el-button type="primary" style="width:300px;" v-if="false">
      一键通知该期中奖人员
  </el-button>
  <transition name="fade">
  <div class="pop" v-show="flag">
    <pop :popData="popData" :value="value" :loading="loading" @cancle="cancle"  @handelclick="handelclick" @kison="kison"/>
  </div>
  </transition>
</div>

</template>

<script>
import pop from '@/components/pop'
  export default {
    data() {
      return {
        flag:false,
        input4: '',
        currentPage: 1,
        pageSize: 20,
        checkList: [''],
        res: {},
        options: [],
        value: 1,
        tableData: [{ 
          user_name: '',
          user_phone: '',
          user_team: '',
          create_time: ''
        }],
        popData:[],
        currentRow: null,
        multipleSelection: [],
        loading: true,
        loading_d: true,
        data:[],
      }
    },
  
    components: {
      pop
    },
    methods: {
        handelclick() {
          this.flag = !this.flag;
          this.axios.post('/dc/issue/getOrderListByIssueID',{
            issue_id: this.value,
            pagination: 1,
            status: 0
          }).then((ress)=>{
            this.ress = ress.data.data;
            var msg = ress.data.msg;
            if(msg === '查询成功') {
                // this.popData = [];
                ress.data.data.data.forEach((item,index,array) => {
                  console.log(array);
                  if(array[index].status === 0){
                  this.data.push(array[index]);
                  this.popData = this.data;
                  }            
                });
                  this.data = [];
              }
            this.loading = false;
          });
        },
        cancle() {
          this.flag = !this.flag;
        },
        checkBoxChange(val){
          if(this.checkList.indexof(val) > -1){
            this.checkList = [];
            this.checkList.push(val);
          }
        },

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

          kison() {
             this.loading_d = true;
             this.axios.post('/dc/issue/getOrderListByIssueID',{
                issue_id: this.value,
                pagination: 1,
                status: 1
                }).then((res)=>{
                  this.res = res.data.data;
                  var msg = res.data.msg;
                  if(msg === '查询成功') {
                  this.tableData = res.data.data.data;
                  }                
                  this.loading_d = false;
              });
          }
        
    },

    computed: {
      nowTableData(){
        return this.tableData.slice((this.currentPage - 1)*this.pageSize,this.currentPage*this.pageSize)||[];
      }
    },



    watch: {
      value: function(n,o) {
          this.loading = true;
          this.loading_d = true;
          this.axios.post('/dc/issue/getOrderListByIssueID',{
          issue_id: n,
          pagination: 1,
          status: 1
          }).then((res)=>{
            this.res = res.data.data;
            var msg = res.data.msg;
            if(msg === '查询成功') {
               this.tableData = res.data.data.data;
           }            
            this.loading_d = false;
            
        });
        }
      
    },

    created () {
      this.axios.post('/dc/issue/getOrderListByIssueID',{
        issue_id: this.value,
        pagination: 1,
        status: 1
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
  margin-top: 15px;
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
}
.wrapper {
    position:relative;
}
.lottery-wrapper .pop {
    width: 90%;
    height: 130%;
    background-color:whitesmoke;
    position: absolute;
    top: 0px;
    left: 50px;
    z-index: 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity ease .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.el-table__body td,.el-table__header th {
       text-align: center;
  }
</style>
