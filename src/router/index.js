import Vue from 'vue'
import Router from 'vue-router'
import index from '@/scripts/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
