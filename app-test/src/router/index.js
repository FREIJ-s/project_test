import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CalendarView from '@/views/CalendarView.vue';
import ProgressView from '@/views/ProgressView.vue';
import LoginView from '@/views/LoginView.vue'; // Importer le LoginView

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/CalendarView',
        name: 'Calendar',
        component: CalendarView,
    },
    {
        path: '/ProgressView',
        name: 'progress',
        component: ProgressView,
    },
    {
        path: '/LoginView',
        name: 'Login',
        component: LoginView, // Ajouter la route pour LoginView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
