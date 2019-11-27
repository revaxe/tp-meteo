<template>
    <div class="hero" v-lazy:background-image="photo">
        <div class="container">
            <form @submit="search" method="post" class="find-location">
                <Autocomplete :propositions="cities" :select="selectCity" :transformText="getLabelCity">
                    <input slot="input" v-model="form.city"
                           placeholder="Trouver votre ville..." type="text"
                           :class="{'error': form.city === '' && city !== undefined}">
                </Autocomplete>
                <input type="submit" value="Rechercher">
            </form>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {LocationService} from '@/services'
    import Autocomplete from '@/components/Autocomplete.vue'

    export default {
        components: {Autocomplete},
        data() {
            return {
                form: {
                    city: ''
                },
                cities: undefined
            }
        },
        computed: mapState(['city', 'photo']),
        methods: {
            async search(e) {
                if (e) e.preventDefault();
                if (!this._.isEmpty(this.form.city)) {
                    let cities = await LocationService.searchCity(this.form.city);
                    if (cities.length > 1 || !(cities.length === 1 && this.city && cities[0].locationId === this.city.locationId)) {
                        this.cities = cities;
                    }
                }
            },
            selectCity(city) {
                this.cities = undefined;
                this.$store.dispatch('updateCity', city);
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : ''
        },
        watch: {
            'form.city': function (newCityName) {
                if (newCityName.length > 3 && !this._.isEqual(newCityName, this.getLabelCity(this.city)))
                    this.search();
                else if (newCityName.length === 0)
                    this.cities = undefined;
            },
            'city': function (newCity) {
                this.form.city = this.getLabelCity(newCity);
            }
        }
    }
</script>
