import Vue from 'vue';

Vue.filter('capitalize', val => Vue._.capitalize(val));

Vue.filter('round', val => val ? Math.round(val) : val);