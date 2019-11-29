import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/layout/Header.vue'
import Home from './pages/Home.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        components: {default: Home, header: Header}
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
