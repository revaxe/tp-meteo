<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <transition name="fade">
                    <ItemWeatherLarge v-if="weatherCurrent" :weather="weatherCurrent" :city="city"/>
                </transition>
                <transition-group name="fade" tag="div">
                    <template v-if="weatherForcasts">
                        <ItemWeatherSmall v-for="(forecast, index) in weatherForcasts" :key="index" :forecast="forecast"/>
                    </template>
                </transition-group>

            </div>
        </div>
    </div>
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
