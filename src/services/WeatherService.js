import Vue from 'vue';

const keyApi = 'ffa95bb17d5cc1e050abbdc3295128d7';
const urlApi = 'https://api.openweathermap.org/data/2.5';

// Doc API : https://openweathermap.org/api

export const WeatherService = {
    getCurrent: (city, countryCode) => {
        return fetch(`${urlApi}/weather?APPID=${keyApi}&q=${city},${countryCode}&units=metric`)
            .then(response => response.json())
            .then(data => {
                return {
                    date: data.dt,
                    labelDay : Vue.moment.unix(data.dt).format('dddd'),
                    temp: data.main.temp,
                    weather: data.weather[0].main,
                    iconId: data.weather[0].icon.substring(0, 2) + 'd',
                    wind: data.wind.speed,
                    humidity: data.main.humidity
                }
            })
    },
    getForcast: (city, countryCode) => {
        return fetch(`${urlApi}/forecast?APPID=${keyApi}&q=${city},${countryCode}&units=metric`)
            .then(response => response.json())
            .then(data => {
                let forecasts = [];
                let now = Vue.moment();

                let dataFiltered = Vue._.filter(data.list, item => {
                    let dateItem = Vue.moment.unix(item.dt);
                    return Vue._.inRange(Vue.moment.unix(item.dt).format('HH'), 12, 15) && dateItem.isAfter(now, 'day');
                });

                Vue._.each(dataFiltered, item => {
                    forecasts.push({
                        date: item.dt,
                        labelDay : Vue.moment.unix(item.dt).format('dddd'),
                        temp: item.main.temp,
                        weather: item.weather[0].main,
                        iconId: item.weather[0].icon.substring(0, 2) + 'd'
                    })
                });
                return forecasts
            })
    }
};