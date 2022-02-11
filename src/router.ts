import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/MyList.vue')
  },
  {
    path: '/RandomSelect',
    component: () => import('@/views/RandomSelect.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
