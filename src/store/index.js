import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: undefined
    },
    mutations: {
        UPDATE_WEATHER(state) {
            console.log(state)
            /*service
                .getWeather() // call the function from service.js that returns the data from API
                .then(response => { // if the response was get
                  state.weather = response.data.data[0]; // set weather obj in state to real weather obj
                  state.dataIsRecived = true; // mark that data was recived
                  console.log(response); // and log it
                })
                .catch(error => { // if there was an error
                  console.log("There was an error:", error.response); // log it
                  state.dataIsRecived = false; // and mark that data wasn't recived
                });
            */
        },
        UPDATE_CITY(state, city) {
            state.city = city;
        }
    },
    actions: {
        updateWeather(context) {
            context.commit('UPDATE_WEATHER');
        },
        updateCity(context, city) {
            context.commit('UPDATE_CITY', city);
        }
    },
    modules: {}
})