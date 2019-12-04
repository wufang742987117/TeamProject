import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'
import News from '@/components/page/News'
import NewsDetails from '@/components/page/NewsDetails'
import Notice from '@/components/page/Notice'
import NoticeDetails from '@/components/page/NoticeDetails'
import Trade from '@/components/page/Trade'

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
    /* 交易专区 */
    {
      path: '/trade',
      name: 'Trade',
      component: Trade
    },
    /* 新闻 */
    {
      path: '/news',
      name: 'News',
      component: News
    },
    /* 新闻详情 */
    {
      path: '/newsDetails',
      name: 'NewsDetails',
      component: NewsDetails
    },
    /* 公告 */
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    /* 公告详情 */
    {
      path: '/noticeDetails',
      name: 'NoticeDetails',
      component: NoticeDetails
    },
  ]
})
