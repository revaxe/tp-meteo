<template>
    <router-link
      :to="{name: 'hourly', params: {city: cityName, day: weather.labelDay}}"
      v-slot="{ href, route, navigate, isActive }">
        <div class="today forecast link" :class="{'active': isActive}" @click="navigate">
            <div class="forecast-header">
                <div class="day">{{weather.labelDay | capitalize}}</div>
                <div class="date">{{weather.date | moment("DD MMMM")}}</div>
            </div>
            <!-- .forecast-header -->
            <div class="forecast-content forecast-content-large">
                <div class="location">{{city.address.city}}</div>
                <div class="degree">
                    <div class="num">{{weather.temp | round}}<sup>o</sup>C</div>
                    <div class="forecast-icon">
                        <img :src="weather.icon" alt="" width="128">
                    </div>
                </div>
                <span><img src="images/icon-umberella.png" alt="">{{weather.humidity}}%</span>
                <span><img src="images/icon-wind.png" alt="">{{weather.wind}}km/h</span>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            weather: Object,
            city: Object
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