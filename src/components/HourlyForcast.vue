<template>
  <div class="fullwidth-block">
    <div class="container">
      <transition-group name="list" tag="ul" class="arrow-feature">
        <li v-for="(forcast, index) in forcastDay" :key="day + index">
          <div class="col-sm-2">
            <span class="num">{{ forcast.date | hours }}</span>
          </div>
          <div class="col-sm-1">
            <div class="forecast-icon">
              <img :src="forcast.icon" alt="" width=45>
            </div>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-1">
            <span class="num">{{ forcast.temp | round }}°</span>
          </div>
          <div class="col-sm-3">
            <strong>{{ forcast.weatherDescription }}</strong>
            <span>T. ressentie {{ forcast.feelsLike | round }}°</span>
          </div>
          <div class="col-sm-2">
            <strong>{{ forcast.windDegree | windDirection }}</strong>
            <span>{{ forcast.wind | round }} km/h</span>
          </div>
          <div class="col-sm-2">
            <strong>0 Faible</strong>
            <span>FPS: Non</span>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from "vuex";
import {icon} from "@/filters";

export default {
  computed: {
    ...mapState(['city', 'forcasts']),
    day() {
      return this.$route.params.day
    },
    forcastDay() {
      return this._.filter(this.forcasts, forcast => Vue.moment.unix(forcast.dt).format('dddd') === this.day)
          .map(function (data) {
            return {
              date: data.dt,
              labelDay: Vue.moment.unix(data.dt).format('dddd'),
              temp: data.main.temp,
              feelsLike: data.main.feels_like,
              weather: data.weather[0].main,
              weatherDescription: data.weather[0].description,
              icon: icon(data.weather[0].icon.substring(0, 2) + 'd'),
              wind: data.wind.speed,
              windDegree: data.wind.deg,
              humidity: data.main.humidity
            }
          })
    }
  },
  filters: {
    hours(unix) {
      return Vue.moment.unix(unix).format('HH:mm')
    }
  }
}
</script>
