<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">{{forecast.labelDay | capitalize}}</div>
        </div>
        <router-link
            :to="{name: 'hourly', params: {city: cityName, day: forecast.labelDay}}"
            v-slot="{ href, route, navigate, isActive }">
            <div class="forecast-content forecast-content-small link" :active="isActive" @click="navigate">
                <div class="forecast-icon">
                    <img :src="forecast.icon" alt="" width=76>
                </div>
                <div class="degree">{{forecast.temp | round}}<sup>o</sup>C</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            forecast: Object
        },
        computed: {
          cityName: function() {
            return this.$route.params.city
          }
        }
    }
</script>
<style scoped>
.link {
  cursor: pointer;
}
</style>