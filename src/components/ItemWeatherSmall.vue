<template>
    <div class="forecast">
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
</template>

<script>
    export default {
        props: {
            forecast: Object
        }
    }
</script>
