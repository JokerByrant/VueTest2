<template>
  <div class="hello">
    <button class="btn btn-info" @click="flag=!flag">切换</button>
    <div v-if="!flag">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
          >
            Core Docs
          </a>
        </li>
        <li>
          <a
            href="https://forum.vuejs.org"
            target="_blank"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="https://chat.vuejs.org"
            target="_blank"
          >
            Community Chat
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vuejs"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
          >
            Docs for This Template
          </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
          >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
          >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
          >
            awesome-vue
          </a>
        </li>
      </ul>
    </div>

    <div v-if="flag">
      <first :msg1="msg1">
        <!-- 下面的语句 -->
        <template scope="props">{{props.test}} +++++ {{props.test1}}</template>

        <!-- 在子组件中只有一个插槽slot时 -->
        <!-- <span>放入子组件</span> -->

        <!-- 在子组件中有多个插槽slot时，下面的语句会将子组件first中名为one的slot标签内容替换掉 -->
        <div slot="one">
          <span>皮皮皮皮皮</span>
        </div>


        <div slot="two">按钮1</div>

        <!-- 下面这种方式不起作用 -->
        <!-- <slot name="one">
          <span>ssss</span>
        </slot> -->
     </first>
    </div>
    
  </div>

</template>

<script>
import first from './first'

export default {
  name: 'HelloWorld',
  components: {
    first
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: 'this is a test msg',
      flag: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
