const keyApi = 'ffa95bb17d5cc1e050abbdc3295128d7';
const urlApi = 'https://api.openweathermap.org/data/2.5';

// Doc API : https://openweathermap.org/api

export const MeteoService = {
    getCurrent: city => {
        return fetch(`${urlApi}/weather?APPID=${keyApi}&q=${city}&units=metric`)
            .then(response => response.json())
    },
    get5DayForcast: city => {
        return fetch(`${urlApi}/forecast?APPID=${keyApi}&q=${city}&units=metric`)
            .then(response => response.json())
    }
};