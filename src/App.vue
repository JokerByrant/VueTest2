<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <welcome></welcome>
    <router-view/>
  </div>
</template>

<script>
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'
// import './styles/icon/iconfont.css'
import welcome from './scripts/welcome'
import './styles/systemManage.css'

export default {
  name: 'App',
  components: {
    welcome
  }
}
</script>

<style>
@font-face {
    font-family: 'iconfont';  /* project id 854277 */
    src: url('//at.alicdn.com/t/font_854277_7g7ht8osq04.eot');
    src: url('//at.alicdn.com/t/font_854277_7g7ht8osq04.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_854277_7g7ht8osq04.woff') format('woff'),
    url('//at.alicdn.com/t/font_854277_7g7ht8osq04.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_854277_7g7ht8osq04.svg#iconfont') format('svg');
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
  margin-top: 17px;
}
</style>
