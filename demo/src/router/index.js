import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
