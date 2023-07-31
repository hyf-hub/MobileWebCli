import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'main',
  },
  {
    path: 'main',
    component: () => import('@/views/index.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: 'main' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
