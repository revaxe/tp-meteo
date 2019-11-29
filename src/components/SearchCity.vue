<template>
    <div class="photo" v-lazy:background-image="photo">
        <div class="container">
            <form @submit="searchCity" method="post" class="find-location">
                <Autocomplete :propositions="cities" :select="selectCity" :transformText="getLabelCity">
                    <input slot="input" v-model="form.city"
                           placeholder="Trouver votre ville..." type="text" v-focus
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
                cities: undefined,
                debouncedSearchCity: undefined
            }
        },
        computed: mapState(['city', 'photo']),
        methods: {
            async searchCity(e) {
                if (e) e.preventDefault();
                if (!this._.isEmpty(this.form.city) && !this._.isEqual(this.form.city, this.getLabelCity(this.city))) {
                    let cities = await LocationService.searchCity(this.form.city);
                    if (cities.length > 1 || !(cities.length === 1 && this.city && cities[0].locationId === this.city.locationId))
                        this.cities = cities;
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
                if (newCityName && !this._.isEqual(newCityName, this.getLabelCity(this.city))) {
                    this.$store.dispatch('clearCity');
                    this.debouncedSearchCity();
                } else if (newCityName.length === 0) {
                    this.cities = undefined;
                    this.$store.dispatch('clearCity');
                }
            },
            'city': function (newCity) {
                if (newCity)
                    this.form.city = this.getLabelCity(newCity);
            }
        },
        created: function () {
            // _.debounce est une fonction fournie par lodash pour limiter la fréquence
            // d'exécution d'une opération particulièrement couteuse.
            this.debouncedSearchCity = this._.debounce(this.searchCity, 400)
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        }
    }
</script>
