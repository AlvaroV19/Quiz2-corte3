import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RolPage from '@/views/RolPage.vue';
import ModuloPage from '@/views/ModuloPage.vue';
import ClientePage from '@/views/ClientePage.vue';
import DasboardPage from '@/views/DasboardPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dasboard'
  },
  {
    path: '/rol',
    name: 'Rol',
    component: RolPage
  },
  {
    path: '/modulo',
    name: 'Modulo',
    component: ModuloPage
  },
  {
    path: '/dasboard',
    name: 'Dasboard',
    component: DasboardPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
