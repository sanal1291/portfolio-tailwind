import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Init from '../views/Init.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Init,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
