import { createRouter, createWebHistory } from 'vue-router';
import UserSignup from '../views/UserSignup.vue';
import UserLogin from '@/views/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'UserSignup',
    component: UserSignup
  },

  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
