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
            let city = await LocationService.getLocationFromPosition(position);
            console.log(city);
        }
    }
</script>
