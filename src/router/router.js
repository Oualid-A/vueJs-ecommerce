import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from "@/views/LandingPage.vue";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
// Importez vos autres composants de vue et configurez les routes

const routes = [
    { path: '/', component: LandingPage },
    { path: '/about', component: AboutView },
    { path: '/home', component: HomeView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
