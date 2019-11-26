import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeatherUiKit from './plugins/weather-ui-kit';
import VueLodash from 'vue-lodash'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});

Vue.use(VueLodash, { name: 'lodash' });
Vue.use(WeatherUiKit);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
