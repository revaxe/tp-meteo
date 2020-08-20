import Vue from 'vue';

Vue.filter('capitalize', val => Vue._.capitalize(val));
Vue.filter('round', val => val ? Math.round(val) : val);

export const icon = iconId => {
    let url = '/images/weather_icons/';
    switch (iconId) {
        case '01d':
            return url + 'day.svg';
        case '02d':
            return url + 'cloudy-day-3.svg';
        case '03d':
            return url + 'cloudy.svg';
        case '04d':
            return url + 'cloudy.svg';
        case '09d':
            return url + 'rainy-5.svg';
        case '10d':
            return url + 'rainy-3.svg';
        case '11d':
            return url + 'thunder.svg';
        case '13d':
            return url + 'snowy-3.svg';
        case '50d':
            return url + 'cloudy.svg';
    }
    return url + 'day.svg';
};
Vue.filter('icon', icon);

Vue.filter('windDirection', function (d) {
    let directions = ['Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Ouest', 'Ouest', 'Nord-Ouest'];
    return `${directions[parseInt((d < 0 ? 360 - Math.abs(d) % 360 : d % 360) / 45)]}`;
})