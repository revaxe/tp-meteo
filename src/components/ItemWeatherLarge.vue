<template>
    <div class="today forecast">
        <div class="forecast-header">
            <div class="day">Mercredi</div>
            <div class="date">04 décembre</div>
        </div>
        <div class="forecast-content forecast-content-large">
            <div class="location">Brest</div>
            <div class="degree">
                <div class="num">2<sup>o</sup>C</div>
                <div class="forecast-icon"><img src="images/weather_icons/snowy-3.svg" alt="" width="128"></div>
            </div>
            <span><img src="images/icon-umberella.png" alt="">89%</span>
            <span><img src="images/icon-wind.png" alt="">4km/h</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            weather: Object,
            city: Object
        }
    }
</script>
