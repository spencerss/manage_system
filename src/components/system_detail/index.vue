<template>
    <div class="System-Wrapper">
        <el-row type="flex" justify="start">
            <el-col :span="4"><div>当前抽奖期号:</div></el-col>
        </el-row>

        <el-row  class="dangqi">
            <el-col :span="4"><el-button type="primary" plain>第一期</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain>第二期</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain>第三期</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain>第四期</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain>第五期</el-button></el-col>
            <el-col :span="4"><el-button type="primary" plain>新建一期</el-button></el-col>
        </el-row>
        
        <el-row type="flex" justify="start" class="time-wrapper">
            <el-col :span="11">
                <div>
                    <span class="time">截止时间: 2018-08-08 22:42:00</span> 
                    <a href="#" class="rechose">重选时间</a>
                 </div>
            </el-col>
        </el-row>

        <el-row type="flex" justify="start" class="bt">
            <el-col :span="19"><el-button type="primary">设置选中期号为当前抽奖期号</el-button></el-col>
        </el-row>
        <!-- <div>
            截止时间: 
            <span class="time">2018-08-08 22:42:00</span> 
            <a>重选时间</a>
        </div>
        <el-button type="primary">设置选中期号为当前抽奖期号</el-button> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.System-Wrapper .dangqi {
    width: 510px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
</style>
