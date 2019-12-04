<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">Dimanche</div>
        </div>
        <div class="forecast-content forecast-content-small">
            <div class="forecast-icon"><img src="images/weather_icons/cloudy.svg" alt="" width="76"></div>
            <div class="degree">5<sup>o</sup>C</div>
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
