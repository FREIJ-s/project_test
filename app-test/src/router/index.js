import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CalendarView from '@/views/CalendarView.vue';
import ProgressView from '@/views/ProgressView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
  },
  {
    path: '/progress',
    name: 'progress',
    component: ProgressView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
