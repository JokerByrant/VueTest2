<template>
<div class="login">
	<div class="form-group">
		<div class="col-sm-10">
			<img :src="userUrl">
			<input type="text" class="form-control" v-model="username" placeholder="用户名"><br>	
		</div>
		
	</div>
	<div class="form-group">
		<div class="col-sm-10">
			<img :src="pwdUrl">
			<input type="password" class="form-control" v-model="password" username="password" placeholder="密码">	<br>
		</div>
	</div>
	<div class="verification">
		<input type="text" placeholder="请输入验证码" id="verificationCode" v-model="loginIficationCode" class="login-verify">
	</div>
	<div class="btnList">
		<button class="btn btn-info" @click="login()">登录</button>
		<button class="btn btn-default" @click="close()">取消</button>
	</div>
</div>
</template>

<style type="text/css">
	.login{
		padding-left: 5%;
	}
	.login input{
		background: #eceff4;
		padding-left: 30px;
	}
	.login .verification{
		margin-left: 5%;
	}
	.login .verification .login-verify {
	    height: 34px;
	    width: 40%;
	    padding: 6px 12px;
	    font-size: 14px;
	    line-height: 1.42857143;
	    color: #555;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #ccc;
	    border-radius: 4px;
	    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
	    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	  }
	.login img{
	 	width:20px;
    	height:20px;
    	top: 8px;
    	left: 15px;
    	position: absolute;
	}
	.login .btnList{
		margin-left: 25%;
		margin-top: 5%;
	}
	h1{
		text-align: center;
		margin-top: 50px;
		color: red;
	}
</style>

<script type="text/javascript">
import $ from 'jquery'
import config from '../common/config.js'
import userImage from '../assets/user.png'
import pwdImage from '../assets/password.png'
var layer = require('layui-layer')
var verificationCodeUrl = config.SRV_URL


export default {
	data () {
		return {
			userUrl: userImage,
			pwdUrl: pwdImage,
			username: '',
			password: '',
			loginIficationCode: '',	//验证码
		}
	},
	methods: {
		close: function () {
			this.$emit('close-me')
		},
		login: function () {
			if($.isEmptyObject(this.username)) {
				config.showInfo('用户名不能为空哦~')
				return
			}
			if($.isEmptyObject(this.password)) {
				config.showInfo('您的密码忘记填啦~')
				return
			}
			if($.isEmptyObject(this.loginIficationCode)) {
				config.showInfo('验证码也别忘记哦~')
				return
			}
		},
		// 获取验证码
	    queryVerificationCode: function () {
	      var rad = Math.floor(Math.random() * Math.pow(10, 8))
	      // uuuy是随便写的一个参数名称，后端不会做处理，作用是避免浏览器读取缓存的链接
	      $('#randCodeImage').attr('src', config.SRV_URL + 'auth/code?uuuy=' + rad)
	    },
	}	
}
</script>