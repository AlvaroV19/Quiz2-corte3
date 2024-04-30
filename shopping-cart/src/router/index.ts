import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RolPage from '@/views/RolPage.vue';
import ModuloPage from '@/views/ModuloPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/rol',
    name: 'rol',
    component: RolPage
  },
  {
    path: '/modulo',
    name: 'modulo',
    component: ModuloPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
