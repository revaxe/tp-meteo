<template>
    <div class="photo" style="background-image: url('images/banner.png')">
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
                cities: undefined
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
        }
    }
</script>
