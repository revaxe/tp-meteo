const keyApi = 'ffa95bb17d5cc1e050abbdc3295128d7';
const urlApi = 'https://api.openweathermap.org/data/2.5';

// Doc API : https://openweathermap.org/api

export const MeteoService = {
    getCurrent: ville => {
        return fetch(`${urlApi}/weather?APPID=${keyApi}&q=${ville}`)
            .then(response => response.json())
    },
    get5DayForcast: ville => {
        return fetch(`${urlApi}/forecast?APPID=${keyApi}&q=${ville}`)
            .then(response => response.json())
    }
};