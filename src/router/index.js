import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/page/Home.vue'),
    },
    {
      name: 'page-1',
      path: '/page-1',
      component: () => import('../components/page/Page-1.vue'),
    },
  ],
})
