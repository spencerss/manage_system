<template>
    <div>
		<div class="box">
			<h2>抽奖后台管理系统</h2>
				<h3><i class="iconfont icon-yonghu"></i><input type="text" v-model="username"/></h3>
				<h3><i class="iconfont icon-mima"></i><input type="password" v-model="password"/></h3>
				<input type="submit" class="submit" value="登录" @click="handelToClick"/>
		</div>
    </div>
</template>

<script>
export default {
	data () {
		return {
			username: '',
			password: ''
		}
	},
   methods: {
	   handelToClick() {
		   this.axios.post('/dc/login/login',{
			user_name: this.username,
			password: this.password
		    }).then((res)=>{
				let code = res.data.code;
				if(code==10000) {
					this.$router.push('/Lottery');
				}
		    });
	   }
   }
}
</script>
<style>
/* body {
	overflow: hidden; 
} */
        
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
           
