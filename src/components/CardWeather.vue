<template>
    <transition name="slide-fade">
        <div class="forecast-table" v-if="weatherCurrent && weatherForcasts">
            <div class="container">
                <div class="forecast-container">
                    <ItemWeatherLarge v-if="weatherCurrent" :weather="weatherCurrent" :city="city"/>
                    <ItemWeatherSmall v-for="(forecast, index) in weatherForcasts" :key="index" :forecast="forecast"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import ItemWeatherSmall from '@/components/ItemWeatherSmall.vue'
    import ItemWeatherLarge from '@/components/ItemWeatherLarge.vue'
    import {mapState} from "vuex";

    export default {
        components: {
            ItemWeatherSmall, ItemWeatherLarge
        },
        computed: mapState(['weatherCurrent', 'weatherForcasts', 'city'])
    }
</script>
