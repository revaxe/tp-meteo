<template>
    <div class="photo" v-lazy:background-image="photo">
        <div class="container">
            <form @submit.prevent="search" method="post" class="find-location">
                <Autocomplete :propositions="cities" :transformText="getLabelCity"
                              @select="selectCity" @cancel="cancelSelection">
                    <template v-slot:input>
                        <input v-model="form.city"
                               placeholder="Trouver votre ville..." type="text" v-focus
                               :class="{'error': form.city === '' && city !== undefined}">
                    </template>
                </Autocomplete>
                <input type="submit" value="Rechercher" :disabled="isDisabled">
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
        computed: {
            ...mapState(['city', 'photo']),
            isDisabled: function () {
                return this.form.city === undefined || this.form.city === ''
            }
        },
        methods: {
            async search() {
                if (!this._.isEmpty(this.form.city) && !this._.isEqual(this.form.city, this.getLabelCity(this.city))) {
                    let cities = await LocationService.searchCity(this.form.city);
                    if (cities.length > 1 || !(cities.length === 1 && this.city && cities[0].locationId === this.city.locationId))
                        this.cities = cities;
                }
            },
            selectCity(city) {
                this.cities = undefined;
                this.$store.dispatch('updateCity', city);
                this.$router.push({name: 'home', params: {city: `${city.address.city},${city.address.country}`}});
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : '',
            cancelSelection() {
                this.cities = undefined
            }
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
            this.debouncedSearchCity = this._.debounce(this.search, 400)
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
