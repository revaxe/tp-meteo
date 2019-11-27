<template>
    <div class="home">

        <SearchCity/>

        <CardWeather/>

    </div>
</template>

<script>
    import SearchCity from '@/components/SearchCity.vue'
    import CardWeather from '@/components/CardWeather.vue'

    export default {
        name: 'home',
        components: {
            SearchCity, CardWeather
        },
        async created() {
            let position = await this.$getLocation();
            this.$store.dispatch('updatePosition', position);

        }
    }
</script>
