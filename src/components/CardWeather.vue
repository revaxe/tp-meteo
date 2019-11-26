<template>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <ItemWeatherLarge :prevision="previsions[0]"/>
                <ItemWeatherSmall v-for="(prevision, index) in previsions" :key="index" :prevision="prevision"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemWeatherSmall from '@/components/ItemWeatherSmall.vue'
    import ItemWeatherLarge from '@/components/ItemWeatherLarge.vue'

    export default {
        components: {
            ItemWeatherSmall, ItemWeatherLarge
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
