import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import WeatherUiKit from './plugins/weather-ui-kit';

Vue.config.productionTip = false;

Vue.use(WeatherUiKit);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');