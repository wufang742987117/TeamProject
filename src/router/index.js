import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/public/Head'
import Home from '@/components/page/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
