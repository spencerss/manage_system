<template>
    <div class="System-Wrapper">
        <el-row type="flex" justify="start">
            <el-col :span="4"><div>当前抽奖期号:</div></el-col>
        </el-row>

        <el-row  class="dangqi">
            <el-col :span="4" v-for="item in data" :key="item.id"><el-button type="primary" plain  @click="changePitch(item.id,item.end_time)">{{item.name}}</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain @click="isShow" class="rebuild">新建一期</el-button></el-col>
            <el-col>
                <div class="block dat" v-show="flag">
                    <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    align="right"
                    start-placeholder="请选择期号开始时间"
                    end-placeholder="请选择期号结束时间"
                    @change="chooseTime"
                    format="yyyy-MM-dd HH:mm:ss"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        
        <el-row type="flex" justify="start" class="time-wrapper">
            <el-col :span="11"> 
               <span class="time">截止时间:<span v-if="pre_end_time">{{pre_end_time}}</span><span v-else>{{end_time}}</span></span>
            </el-col>
            <el-col>
                <div>
                    <div class="block select_time">
                        <el-date-picker
                        v-model="value1"
                        type="datetime"
                        @change="rechooseTime"
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="重选时间"
                        style="width:140px;">
                        </el-date-picker>
                    </div>
                 </div>
            </el-col>
            
        </el-row>

        <el-row type="flex" justify="start" class="bt">
            <el-col :span="19"><el-button type="primary" @click="setIssueId">设置选中期号为当前抽奖期号</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
     data () {
         return {
             data:[],
             end_time:'',
             value4: '',
             issue_id: 1,
             flag:false,
             pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
             },
             value1: '',
             pre_end_time:''
        };
     },
     created () {
      this.axios.post('/dc/issue/getIssueList',{
          status:0,
          pagination:1
      }).then((res)=>{
          let msg = res.data.msg;
          if(msg === "查询成功"){
            this.data = res.data.data.data;
            this.pre_end_time = this.data[0].end_time;
          }
      });
    },

    methods: {
        changePitch(issue_id,end_time){
            this.issue_id = issue_id;
            this.end_time = end_time;
            this.pre_end_time = '';
        },

        setIssueId() {
            this.axios.post('/dc/issue/setIssuePitch',{
            id: this.issue_id
            }).then((res)=>{
            });
        },

        chooseTime() {
            this.axios.post('/dc/issue/addIssue',{
            begin_time: this.value4[0],
            end_time: this.value4[1]
            }).then((res)=>{
            });

            this.axios.post('/dc/issue/getIssueList',{
                status:0,
                pagination:1
            }).then((res)=>{
                let msg = res.data.msg;
                if(msg === "查询成功"){
                    this.data = res.data.data.data;
                }
            });
        },

        isShow() {
            this.flag = !this.flag;
        },

        rechooseTime() {
            console.log(this.value1);
        }
    }
}
</script>

<style>
.System-Wrapper .dangqi {
    width: 510px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
}
.System-Wrapper .dangqi .el-button{
    width: 120px;
}
.System-Wrapper .dangqi .el-col-4{
    width: 120px;
}
.System-Wrapper .time-wrapper .time{
    font-size: 20px;
    font-weight: bold;
}
.System-Wrapper .time-wrapper .rechose {
    font-size: 6px;
    margin-left: 15px;
    text-decoration: none;
}
.System-Wrapper .dangqi .dat {
    position:absolute;
    top:0px;
    left: 600px;
}
.System-Wrapper .select_time {
    position:absolute;
    top:0px;
    left: 360px;
    width:60px;
}
</style>
