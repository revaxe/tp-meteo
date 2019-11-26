<template>
    <div class="home">

        <SearchCity/>

        <CardWeather/>

    </div>
</template>

<script>
    import SearchCity from '@/components/SearchCity.vue'
    import CardWeather from '@/components/CardWeather.vue'
    import {LocationService} from '@/services'

    export default {
        name: 'home',
        components: {
            SearchCity, CardWeather
        },
        async created() {
            let position = await this.$getLocation();
            let proposition = await LocationService.getLocationFromPosition(position);

            let result = await LocationService.searchCity(proposition.Address.City);
            this.$store.dispatch('updateCity', result[0]);
        }
    }
</script>
