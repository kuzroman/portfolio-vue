import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/page/Home.vue'),
    },
    {
      path: '/some',
      name: 'some',
      component: () => import('../components/page/Some.vue'),
    },
  ],
})
