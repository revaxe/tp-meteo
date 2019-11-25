<template>
    <div class="today forecast">
        <div class="forecast-header">
            <div class="day">{{prevision.jour}}</div>
            <div class="date">6 Oct</div>
        </div>
        <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="location">New York</div>
            <div class="degree">
                <div class="num">23<sup>o</sup>C</div>
                <div class="forecast-icon">
                    <img src="images/icons/icon-1.svg" alt="" width=90>
                </div>
            </div>
            <span><img src="images/icon-umberella.png" alt="">20%</span>
            <span><img src="images/icon-wind.png" alt="">18km/h</span>
            <span><img src="images/icon-compass.png" alt="">East</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            prevision: Object
        }
    }
</script>
