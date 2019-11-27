<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">{{forecast.labelDay | capitalize}}</div>
        </div>
        <div class="forecast-content">
            <div class="forecast-icon">
                <img v-lazy="'http://openweathermap.org/img/wn/' + forecast.iconId + '@2x.png'" alt="" width=72>
            </div>
            <div class="degree">{{forecast.temp | round}}<sup>o</sup>C</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            forecast: Object
        }
    }
</script>
