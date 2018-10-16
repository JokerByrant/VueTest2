var env = {}
env.development = 'http://' // 本地联调
var url = env[process.env.NODE_ENV]

var layer = require('layui-layer')
var $ = require('jquery')
let loadingMsg

export default {

	showError: function (msg, time, callback) {	//msg：提示信息  time：延迟时间  callback:回调方法
	    this.finishLoading()
	    msg = msg || '系统异常'
	    time = time || 2000
	    layer.msg("<a style='color:black'>"+msg+"</a>", {icon: 2, time: time})	//icon是layer内置的图标 0:！  1:√  2：×  3：?  4：锁  5：哭脸  6：笑脸
	    if (callback) {
	      setTimeout(callback, time)
	  	}
	},
	showInfo: function (msg, time, callback) {
	    this.finishLoading()
	    msg = msg || '提示信息'
	    time = time || 2000		//这里的表示，如果c的值不为空则c = c，如果c的值为空则c = 2000
	    layer.msg("<a style='color:black'>"+msg+"</a>", {icon: 0, time: time})	//这是一个提示框
	    if (callback) {
	      setTimeout(callback, time)
	  	}
	},
	shwoSuccess: function (msg, time, callback) {
		this.finishLoading()
		msg = msg || '操作成功'
		time = time || 2000
		layer.msg("<a style='color:black'>"+msg+"</a>", {icon: 1, time: time})
		if (callback) {
	      setTimeout(callback, time)
	    }
	},
	showConfirm: function (confirmFunction, cancelFunction, confirmText, closeBtn, confirmBtn, cancelBtn, titleText) {
	    var confirmObj
	    confirmText = confirmText || '请确认操作'
	    let btnList = []
	    if (confirmBtn !== -1) {
	      confirmBtn = confirmBtn || '确定'
	      btnList.push(confirmBtn)
	      if (cancelBtn !== -1) {
	        cancelBtn = cancelBtn || '取消'
	        btnList.push(cancelBtn)
	      }
	    }
	    titleText = titleText || null
	    layer.confirm(confirmText, {	// 询问框
	      closeBtn: closeBtn || true,
	      title: titleText || null,
	      btn: btnList
	    }, function () {
	      layer.close(confirmObj)
	      if (confirmFunction) {
	        confirmFunction()
	      }
	    }, function () {
	      layer.close(confirmObj)
	      if (cancelFunction) {
	        cancelFunction()
	      }
	    })
  	},

	finishLoading: function () {
	    layer.closeAll('loading')	//关闭所有加载层
	    layer.close(loadingMsg)		//关闭特定层,这里的loadingMsg可以看做一个作用范围为全局的变量
    },
}