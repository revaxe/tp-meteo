<template>
    <div class="today forecast">
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
</template>

<script>
    export default {
        props: {
            weather: Object,
            city: Object
        }
    }
</script>
