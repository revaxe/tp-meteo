<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <CardWeatherLarge :prevision="previsions[0]"/>
                <CardWeatherSmall v-for="prevision in previsions" :key="prevision.jour" :prevision="prevision"/>
            </div>
        </div>
    </div>
</template>

<script>
    import CardWeatherSmall from '@/components/CardWeatherSmall.vue'
    import CardWeatherLarge from '@/components/CardWeatherLarge.vue'

    export default {
        components: {
            CardWeatherSmall, CardWeatherLarge
        },
        data() {
            return {
                previsions: []
            }
        },
        created() {
            this.previsions.push({
                jour: 'Lundi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Mardi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Mercredi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Jeudi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Vendredi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Samedi',
                temperature: 20,
                moyenne: 15
            });
            this.previsions.push({
                jour: 'Dimanche',
                temperature: 20,
                moyenne: 15
            });
        }
    }
</script>
