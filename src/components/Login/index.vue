<template>
    <div>
		<div class="box">
			<h2>抽奖后台管理系统</h2>
			<form action="" method="post">
				<h3><i class="iconfont icon-yonghu"></i><input type="text" /></h3>
				<h3><i class="iconfont icon-mima"></i><input type="password" /></h3>
				<input type="submit" class="submit" value="登录" />
			</form>
		</div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
        
			.box{
				width: 310px;
				margin: 200px auto 0;
				text-align: center;
				color: black;
			}
			.box h2{
				color: orange;
			}
			.box h3{
				line-height: 50px;
				font-weight: normal;
				font-size: 16px;
			}
			.box h3 input{
				background-color: transparent;
				border: none;
				outline: none;
				padding-left: 10px;
				font-size: 16px;
			}
			.submit{
				width: 224px;
				height: 42px;
				font-size: 14px;
				border: none;
				outline: none;
				cursor: pointer;
				background-color: #ccc;
				margin-top: 20px;
			}
</style>
           
