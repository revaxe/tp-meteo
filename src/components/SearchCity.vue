<template>
    <div class="photo" v-lazy:background-image="photo">
        <div class="container">
            <form @submit.prevent="search" method="post" class="find-location">
                <Autocomplete :propositions="cities" :transformText="getLabelCity"
                              @select="selectCity" @cancel="cancelSelection">
                    <template v-slot:input>
                        <input v-model="form.city"
                               placeholder="Trouver votre ville..." type="text">
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
                cities: undefined
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
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : '',
            cancelSelection() {
                this.cities = undefined
            }
        },
        watch: {
            'city': function (newCity) {
                if (newCity)
                    this.form.city = this.getLabelCity(newCity);
            }
        }
    }
</script>
