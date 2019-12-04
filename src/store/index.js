import Vue from 'vue'
import Vuex from 'vuex'
import {LocationService} from '@/services'
import {PhotoService} from '@/services'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: undefined,
        photo: 'images/banner.png'
    },
    mutations: {
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
        },
        clearCity(context) {
            context.commit('UPDATE_CITY');
            context.commit('UPDATE_PHOTO');
        }
    },
    modules: {}
})