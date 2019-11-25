import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Home from '../pages/Home.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Header, footer: Footer}
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
