import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/principal-home.vue'
import ItemDetail from '@/views/itemDetail.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail,
    props: true
  }
  // Añade aquí más rutas según sea necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
