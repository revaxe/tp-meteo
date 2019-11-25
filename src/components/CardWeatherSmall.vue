<template>
    <div class="forecast">
        <div class="forecast-header">
            <div class="day">{{prevision.jour}}</div>
        </div>
        <!-- .forecast-header -->
        <div class="forecast-content">
            <div class="forecast-icon">
                <img src="images/icons/icon-5.svg" alt="" width=48>
            </div>
            <div class="degree">{{prevision.temperature}}<sup>o</sup>C</div>
            <small>{{prevision.moyenne}}<sup>o</sup></small>
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
