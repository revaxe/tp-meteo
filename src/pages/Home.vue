<template>
    <div class="home">

        <SearchCity/>

        <CardsWeather/>

    </div>
</template>

<script>
    import SearchCity from '@/components/SearchCity.vue'
    import CardsWeather from '@/components/CardsWeather.vue'

    export default {
        name: 'home',
        components: {
            SearchCity, CardsWeather
        }
    }
</script>
