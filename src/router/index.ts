import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const requireAuth = (to, from, next) => {
  const authStore = useAuthStore();
  const isLogged = authStore.isLogged;

  if (isLogged) next();
  else next('/login')
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/business/:id',
    name: 'business',
    component: () => import('../views/BusinessView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;