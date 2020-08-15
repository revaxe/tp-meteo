<template>
    <div class="home">

        <SearchCity/>

        <CardWeather/>

        <router-view></router-view>

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
            let city = this.$route.params.city;
            if (city) {
                let cities = await LocationService.searchCity(city);
                if (cities.length > 0)
                    await this.$store.dispatch('updateCity', cities[0]);
            } else {
                let position = await this.$getLocation();
                if (position)
                    await this.$store.dispatch('updatePosition', position);
            }
        }
    }
</script>
