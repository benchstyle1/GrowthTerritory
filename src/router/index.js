import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'Main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    meta: {layout: 'Main'},
    component: () => import('../views/SearchForm.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
