import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/layout/Header.vue'
import HourlyForcast from './components/HourlyForcast.vue'
import Home from './pages/Home.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/:city?',
        name: 'home',
        components: {default: Home, header: Header},
        children: [
            {
                name: 'hourly',
                path: ':day/heure-par-heure',
                component: HourlyForcast,
                props: true
            }
        ]
    },
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
