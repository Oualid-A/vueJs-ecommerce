import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import PieChart from '@/views/PieChart.vue';
import BarChart from '@/views/BarChart.vue';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/pie-chart', component: PieChart },
    { path: '/bar-chart', component: BarChart },
    // { path: '/', component: Products },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
