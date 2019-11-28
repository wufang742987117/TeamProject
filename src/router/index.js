import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Register from '@/components/page/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /* 注册*/
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
