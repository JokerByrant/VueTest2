<template>
	<div>
		<h2>我是子标题组件</h2>
		<slot :test="msg">
			<h3>我是分发内容</h3>
		</slot>
		<slot :test1="msg1">
			<h1>Are you OK?</h1>
		</slot>
		<slot name="one">张三</slot>
		<button class="btn btn-info" @click="doTest"><slot name="two"></slot></button>
		<div>
			<input type="" v-model="msg" name="">
		</div>
	</div>
</template>

<script type="text/javascript">
import $ from 'jquery'

export default {
	created() {
		console.log($)
	},
	props: {
		msg1: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {
	}
}
</script>