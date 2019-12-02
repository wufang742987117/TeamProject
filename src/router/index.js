import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'
import NewsNotice from '@/components/page/NewsNotice'

Vue.use(Router)

export default new Router({
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /* 登录 */
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    /* 注册 */
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    /* 新闻&公告 */
    {
      path: '/newsNotice',
      name: 'NewsNotice',
      component: NewsNotice
    }
  ]
})
