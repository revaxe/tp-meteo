import Vue from 'vue'
import Vuex from 'vuex'
import {LocationService} from '@/services'
import {PhotoService} from '@/services'
import {WeatherService} from '@/services'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: undefined,
        photo: 'images/banner.png',
        weatherCurrent: undefined,
        weatherForcasts: undefined
    },
    mutations: {
        UPDATE_WEATHER(state, weather) {
            state.weatherCurrent = weather.weatherCurrent;
            state.weatherForcasts = weather.weatherForcasts;
        },
        UPDATE_CITY(state, city) {
            state.city = city;
            state.weatherCurrent = undefined;
            state.weatherForcasts = undefined;
        },
        UPDATE_PHOTO(state, photos) {
            state.photo = photos && photos.length > 0 ? photos[Math.floor(Math.random() * photos.length)].largeImageURL : 'images/banner.png';
        }
    },
    actions: {
        async updatePosition(context, position) {
            let proposition = await LocationService.getLocationFromPosition(position);
            let result = await LocationService.searchCity(proposition.Address.City);
            context.dispatch('updateCity', result[0]);
        },
        async updateCity(context, city) {
            // update city
            context.commit('UPDATE_CITY', city);

            // update photo
            let photos = await PhotoService.getPhotosByCity(city.address.city);
            context.commit('UPDATE_PHOTO', photos);

            // update weather
            context.dispatch('updateWeather');
        },
        async updateWeather(context) {
            let results = await Promise.all([
                WeatherService.getCurrent(context.state.city.address.city, context.state.city.countryCode),
                WeatherService.getForcast(context.state.city.address.city, context.state.city.countryCode)
            ]);
            context.commit('UPDATE_WEATHER',  {
                weatherCurrent: results[0],
                weatherForcasts: results[1]
            });
        }
    },
    modules: {}
})