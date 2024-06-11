import { createRouter, createWebHistory } from 'vue-router'
import InitViewVue from '../views/InitView.vue'
import ArtBoxVue from '../views/artbox.vue';
import CoohomeView from '../views/CoohomeView.vue';

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
  },
  {
    path: '/3dviewmodel',
    name: '3dviewmodel',
    component: CoohomeView
  },
  {
    path: '/3dmodels/:pathMatch(.*)*',
    name: 'dynamicView',
    component: CoohomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
