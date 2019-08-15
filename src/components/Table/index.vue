<template>
    <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%;">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="phone"
      label="电话">
    </el-table-column>
    <el-table-column
      property="id"
      label="微信id">
    </el-table-column>
    <el-table-column
      property="date"
      label="参与时间">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{ 
          name: '王小虎',
          phone: '15011124567',
          id: '154825fa2545184aaf5',
          date: '2019-08-08 19:01:01'
        }, {
          name: '王小虎',
          phone: '15011124567',
          id: '154825fa2545184aaf5',
          date: '2019-08-08 19:01:01'
        }, {
          name: '王小虎',
          phone: '15011124567',
          id: '154825fa2545184aaf5',
          date: '2019-08-08 19:01:01'
        }, {
          name: '王小虎',
          phone: '15011124567',
          id: '154825fa2545184aaf5',
          date: '2019-08-08 19:01:01'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>

<style>
  .el-table__body td,.el-table__header th {
       text-align: center;
  }
  .el-table__header td,el-table__header th {
    padding: 6px 0px;
  }

  .el-table__body td, .el-table__body th {
      padding: 9px;
  }
</style>
