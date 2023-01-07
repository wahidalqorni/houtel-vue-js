import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'
import PemesananView from '../views/PemesananView.vue'
import SuksesView from '../views/SuksesView.vue'
import LatihanView from '../views/LatihanView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'LandingView',
    component: LandingView
  },
  {
    path: '/LatihanView',
    name: 'LatihanView',
    component: LatihanView
  },
  {
    path: '/PemesananView',
    name: 'PemesananView',
    component: PemesananView
  },
  {
    path: '/SuksesView',
    name: 'SuksesView',
    component: SuksesView
  },
  {
    path: '/ListView',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/DetailView',
    name: 'DetailView',
    component: DetailView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
