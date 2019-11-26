const appID = 'NvXnFM5rtMYYabvfuGnp';
const appCode = 'sz2hO38kwyuakw8nienYiQ';
const urlApiAutoComplete = 'http://autocomplete.geocoder.api.here.com/6.2';
const urlApiReverse = 'https://reverse.geocoder.api.here.com/6.2';

export const LocationService = {
    searchCity: ville => {
        return fetch(`${urlApiAutoComplete}/suggest.json?app_id=${appID}&app_code=${appCode}&query=${ville}`)
            .then(response => response.json())
    },
    getLocationFromPosition: position => {
        return fetch(`${urlApiReverse}/reversegeocode.json?app_id=${appID}&app_code=${appCode}&prox=${position.lat},${position.lng}&mode=retrieveAddresses&maxresults=1`)
            .then(response => response.json())
    }
};