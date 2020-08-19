<template>
  <transition name="slide-fade">
    <div class="fullwidth-block">
      <div class="container">
        <ul class="arrow-feature">
          <li>
            <div class="col-sm-2">
              <span class="num">02:00</span>
            </div>
            <div class="col-sm-1">
              <div class="forecast-icon">
                <img src="/images/weather_icons/rainy-3.svg" alt="" width=45>
              </div>
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-2">
              <span class="num">15°</span>
            </div>
            <div class="col-sm-2">
              <strong>Intervalles nuageux</strong>
              <span>T. ressentie 15°</span>
            </div>
            <div class="col-sm-2">
              <strong>Sud-est</strong>
              <span>9 - 18 km/h</span>
            </div>
            <div class="col-sm-2">
              <strong>0 Faible</strong>
              <span>FPS: Non</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
