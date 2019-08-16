<template>
<div class="wrapper">
  <div class="title">
        <h3 class="r">新增中奖人员</h3>
    </div>
   <el-input
        placeholder="请输入姓名或电话"
        v-model="search"
        style="width:300px;">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
   </el-input>
    <el-button type="primary" @click="Search">搜索</el-button>

       <el-table
        ref="multipleTable"
        :data="searchData"
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        @selection-change="handleSelectionChange" class="table" v-if="searchData.length>0">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          property="user_name"
          label="姓名"
          width="220">
          <template slot-scope="scope">
            <img :src='searchData[scope.$index].user_head' style="width:45px;height:45px;border-radius:50%;margin-right:10px;"/>
            <span style="position:relative;top: -22px;">{{searchData[scope.$index].user_name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="user_phone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="user_team"
          label="团队">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="参与时间"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>

    <el-table
    ref="multipleTable"
    :data="popData"
    tooltip-effect="dark"
    style="width: 100%"
    v-loading="loading"
    @selection-change="handleSelectionChange" class="table" v-else>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      property="user_name"
      label="姓名"
      width="220">
      <template slot-scope="scope">
        <img :src='popData[scope.$index].user_head' style="width:45px;height:45px;border-radius:50%;margin-right:10px;"/>
        <span style="position:relative;top: -22px;">{{popData[scope.$index].user_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="user_phone"
      label="电话">
    </el-table-column>
    <el-table-column
      prop="user_team"
      label="团队">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="参与时间"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>


    <div class="tow-bt">
    <el-button type="success" style="width:300px;" @click="sure">确定</el-button>
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
        multipleSelection: [],
        dataa: [],
        searchData: [],
        search: '',
        str: ''
      }
  },

  props: ['popData','loading','value'],

  watch: {
    search: function(n,o) {
      if(n.length===0) {
        this.searchData = '';
        console.log(n);
      }
      console.log(n);
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
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      sonhandelclick() {
        this.$emit('cancle');
      },
      Search() {
      // search 是 v-model="search" 的 search
      var search = this.search;
      if (search) {
        this.searchData = this.popData.filter(function(product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            // console.log(key)
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
      }
      },
      sure() {
        this.dataa = [];
        this.multipleSelection.forEach((item,index,array)=>{
           this.dataa.push(array[index].order_id);
           this.str = this.dataa.toString();
        });
        this.$emit('handelclick');
        this.$emit('kison');
        this.axios({
          method: 'post',
          url: '/dc/order/setWinOrder',
          headers: {
              'Content-Type': 'application/json'
          },
          data: {
              'order_id_list': this.str,
              'order_issue_id': this.value
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
    /* margin-top: 60px; */
    background-color: whitesmoke;
}

.wrapper .table .el-table__header th, .table .el-table__header tr {
    background-color: whitesmoke;
}

.wrapper .table .el-table__body tr,.table .el-table__body td {
    background-color: whitesmoke;
}
.el-table__body td,.el-table__header th {
       text-align: center;
  }
</style>