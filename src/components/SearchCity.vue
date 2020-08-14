<template>
    <div class="photo" style="background-image: url('images/banner.png')">
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
    import {LocationService} from '@/services'
    import Autocomplete from '@/components/Autocomplete.vue'

    export default {
        components: {Autocomplete},
        data() {
            return {
                form: {
                    city: ''
                },
                city: undefined,
                cities: undefined,
                debouncedSearchCity: undefined
            }
        },
        computed: {
            isDisabled: function () {
                return this.form.city === undefined || this.form.city === ''
            }
        },
        methods: {
            async search() {
                if (!this._.isEmpty(this.form.city) && !this._.isEqual(this.form.city, this.getLabelCity(this.city))) {
                    let cities = await LocationService.searchCity(this.form.city);
                    if (cities.length > 1 || !(cities.length === 1 && this.city && cities[0].locationId === this.city.locationId)) {
                        this.cities = cities;
                        console.log(`search `, this.form.city);
                    }
                }
            },
            selectCity(city) {
                this.cities = undefined;
                this.city = city;
                this.form.city = this.getLabelCity(this.city);
                console.log(`select city `, this.form.city);
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : '',
            cancelSelection() {
                this.cities = undefined
            }
        },
        watch: {
            'form.city': function (newCityName) {
                if (newCityName && !this._.isEqual(newCityName, this.getLabelCity(this.city))) {
                    this.debouncedSearchCity();
                } else if (newCityName.length === 0) {
                    this.cities = undefined;
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
