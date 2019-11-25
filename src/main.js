import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeatherUiKit from './plugins/weather-ui-kit';
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false;

Vue.use(VueLodash, { name: 'lodash' });
Vue.use(WeatherUiKit);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
