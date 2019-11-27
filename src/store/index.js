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
        async GET_POSITION(state, position) {
            let proposition = await LocationService.getLocationFromPosition(position);
            let result = await LocationService.searchCity(proposition.Address.City);
            this.dispatch('updateCity', result[0]);
        },
        async UPDATE_WEATHER(state) {
            WeatherService.getCurrent(state.city.address.city, state.city.countryCode)
                .then(data => state.weatherCurrent = data);
            WeatherService.getForcast(state.city.address.city, state.city.countryCode)
                .then(data => state.weatherForcasts = data);
        },
        UPDATE_CITY(state, city) {
            state.city = city;
            state.weatherCurrent = undefined;
            state.weatherForcasts = undefined;
        },
        async UPDATE_PHOTO(state) {
            let photos = await PhotoService.getPhotosByCity(state.city.address.city);
            state.photo = photos && photos.length > 0 ? photos[Math.floor(Math.random() * photos.length)].largeImageURL : 'images/banner.png';
        }
    },
    actions: {
        updatePosition(context, position) {
            context.commit('GET_POSITION', position);
        },
        updateWeather(context) {
            context.commit('UPDATE_WEATHER');
        },
        updateCity(context, city) {
            context.commit('UPDATE_CITY', city);
            context.commit('UPDATE_PHOTO');
            context.commit('UPDATE_WEATHER')
        }
    },
    modules: {}
})