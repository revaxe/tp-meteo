<template>
    <div class="home">

        <SearchCity/>

        <div class="forecast-table">
            <div class="container">
                <div class="forecast-container">
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
                    <div class="forecast">
                        <div class="forecast-header">
                            <div class="day">Jeudi</div>
                        </div>
                        <div class="forecast-content forecast-content-small">
                            <div class="forecast-icon"><img src="images/weather_icons/day.svg" alt="" width="76"></div>
                            <div class="degree">2<sup>o</sup>C</div>
                        </div>
                    </div>
                    <div class="forecast">
                        <div class="forecast-header">
                            <div class="day">Vendredi</div>
                        </div>
                        <div class="forecast-content forecast-content-small">
                            <div class="forecast-icon"><img src="images/weather_icons/day.svg" alt="" width="76"></div>
                            <div class="degree">2<sup>o</sup>C</div>
                        </div>
                    </div>
                    <div class="forecast">
                        <div class="forecast-header">
                            <div class="day">Samedi</div>
                        </div>
                        <div class="forecast-content forecast-content-small">
                            <div class="forecast-icon"><img src="images/weather_icons/cloudy.svg" alt="" width="76"></div>
                            <div class="degree">3<sup>o</sup>C</div>
                        </div>
                    </div>
                    <div class="forecast">
                        <div class="forecast-header">
                            <div class="day">Dimanche</div>
                        </div>
                        <div class="forecast-content forecast-content-small">
                            <div class="forecast-icon"><img src="images/weather_icons/cloudy.svg" alt="" width="76"></div>
                            <div class="degree">5<sup>o</sup>C</div>
                        </div>
                    </div>
                    <div class="forecast">
                        <div class="forecast-header">
                            <div class="day">Lundi</div>
                        </div>
                        <div class="forecast-content forecast-content-small">
                            <div class="forecast-icon"><img src="images/weather_icons/rainy-3.svg" alt="" width="76"></div>
                            <div class="degree">7<sup>o</sup>C</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import SearchCity from "@/components/SearchCity";

    export default {
        name: 'home',
        components: {SearchCity}
    }
</script>
