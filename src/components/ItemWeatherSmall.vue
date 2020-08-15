<template>
  <router-link
      :to="{name: 'hourly', params: {city: cityName, day: forecast.labelDay}}"
      v-slot="{ href, route, navigate, isActive }">
    <div class="forecast link" :class="{'active': isActive}" @click="navigate">
        <div class="forecast-header">
            <div class="day">{{forecast.labelDay | capitalize}}</div>
        </div>
        <div class="forecast-content forecast-content-small">
            <div class="forecast-icon">
                <img :src="forecast.icon" alt="" width=76>
            </div>
            <div class="degree">{{forecast.temp | round}}<sup>o</sup>C</div>
        </div>
    </div>
  </router-link>
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