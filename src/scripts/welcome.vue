<template>
	<div>
		<nav class="navbar navbar-fixed-top navbar-inverse navbar-ad" role="navigation" style="-webkit-transform:scale(0.9);-webkit-transform-origin:0 0;width:111%;">
			<div class="container-fluid" style="padding-right:0px">
				<div class="navbar-header">
					<a class="navbar-brand" href="./"><strong>JOKER</strong></a>
				</div>
				<div id="navbar" class="collapse navbar-collapse" style="margin-right:2%">
					<ul class="nav navbar-nav navbar-right" id="ad-nav-menu">
						<!-- navbar-nav将导航栏变为横向，nav消除ul影响 -->
						<li><a href="#" @click="showLogin = true"><i class="iconfont">&#xe600;</i>登录</a></li>
						<li><a href="#" @click="showRegist = true"><i class="iconfont">&#xe683;</i>注册</a></li>
					</ul>
				</div>
			</div>
		</nav>

		<transition name="expand" v-if="showLogin">
			<div id="tenants" class="tenants-add-group-member expand-transition">
				<div class="layer-wrapper">
					<div class="layer-container" style="width:21.6%;background:white">
						<div class="layer-header">
							<!-- glyphicon glyphicon-remove这个是bootstrap内置的字体图标库
								详情可见http://www.runoob.com/bootstrap/bootstrap-glyphicons.html -->
							登录<span class="btn" @click="showLogin = false"><i
							class="glyphicon glyphicon-remove pull-right"></i></span>
						</div>
						<div class="layer-body" style="max-height: 500px;overflow-y: auto;border-bottom-left-radius:0px;border-bottom-right-radius:0px">
							<div class="from-adcloud newenv-horizontal">
								<login v-if="showLogin" @close-me="showLogin = false"></login>
							</div>
						</div>

					</div>
				</div>
			</div>
		</transition>

		<!-- <login v-if="showLogin" @close-me="showLogin = false"></login> -->
		<regist v-if="showRegist"></regist>
	</div>
</template>

<script type="text/javascript">
import login from './login'
import regist from './regist'

export default {
	components: {
		'login': login,
		'regist': regist
	},
	data () {
		return {
			showLogin: false,
			showRegist: false
		}
	},
	methods: {
		
	}
}

</script>

<style type="text/css">
	div{
		color: #ffffff;
		font-size: 17px;
	}
	nav{
		line-height: 300%;
	}
  	
</style>