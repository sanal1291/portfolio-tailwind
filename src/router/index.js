import { createRouter, createWebHistory } from 'vue-router'
import InitViewVue from '../views/InitView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: InitViewVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
