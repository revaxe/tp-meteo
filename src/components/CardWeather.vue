<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <ItemWeatherLarge/>
                <ItemWeatherSmall/>
                <ItemWeatherSmall/>
                <ItemWeatherSmall/>
                <ItemWeatherSmall/>
                <ItemWeatherSmall/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemWeatherSmall from '@/components/ItemWeatherSmall.vue'
    import ItemWeatherLarge from '@/components/ItemWeatherLarge.vue'

    export default {
        components: {
            ItemWeatherSmall, ItemWeatherLarge
        }
    }
</script>
