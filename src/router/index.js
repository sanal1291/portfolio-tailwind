import { createRouter, createWebHistory } from 'vue-router'
import InitViewVue from '../views/InitView.vue'
import ArtBoxVue from '../views/artbox.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: InitViewVue
  },
  {
    path: '/3dview',
    name: '3dview',
    component: ArtBoxVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
