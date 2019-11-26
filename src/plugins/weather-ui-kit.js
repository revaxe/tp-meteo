import '@/assets/scss/style.scss';
import globalMixins from './globalMixins';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import VueLazyload from 'vue-lazyload';
import VueLodash from 'vue-lodash'
import VueGeolocation from 'vue-browser-geolocation';

locale.use(lang);

export default {
    install(Vue) {
        Vue.use(globalMixins);
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: 'dist/error.png',
            loading: 'dist/loading.gif',
            attempt: 1,
            observer: true,
            observerOptions: {
                rootMargin: '0px',
                threshold: 0.1
            }
        });
        Vue.use(VueGeolocation);
        Vue.use(VueLodash, {name: 'lodash'});
    }
};
