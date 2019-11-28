<template>
    <div class="site-header">
        <div class="container">
            <a href="/" class="branding">
                <img src="images/weather_icons/cloudy.svg" alt="" class="logo">
                <div class="logo-type">
                    <h1 class="site-title">TP Meteo</h1>
                    <small class="site-description">Découverte de VueJS</small>
                </div>
            </a>

            <div class="main-navigation">
                <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
                <ul class="menu">
<!--                    <li class="menu-item current-menu-item"><a href="/">Home</a></li>-->
                </ul>
            </div>

            <div class="mobile-navigation"></div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
