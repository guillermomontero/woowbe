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
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/business/:id',
    name: 'business-id',
    component: () => import('../views/BusinessIDView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('../views/OffersView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/offers/:id',
    name: 'offers-id',
    component: () => import('../views/OffersIDView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/points-of-sales',
    name: 'points-of-sales',
    component: () => import('../views/PointsOfSalesView.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/points-of-sales/:id',
    name: 'points-of-sales-id',
    component: () => import('../views/PointsOfSalesIDView.vue'),
    beforeEnter: requireAuth,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;