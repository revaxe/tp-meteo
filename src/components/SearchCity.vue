<template>
    <div class="photo" style="background-image: url('images/banner.png')">
        <div class="container">
            <form v-on:submit.prevent="search" method="post" class="find-location" id="recherche">
                <div data-position="below" class="autocomplete">
                    <input v-model="form.city" placeholder="Trouver votre ville..." type="text">
                    <ul role="listbox" id="autocomplete-result-list-1" class="autocomplete-result-list">
                        <li id="autocomplete-result-0" data-result-index="0" role="option" class="autocomplete-result"> Bruges,
                            Belgique
                        </li>
                        <li id="autocomplete-result-1" data-result-index="1" role="option" class="autocomplete-result"> Brugg,
                            Suisse
                        </li>
                    </ul>
                </div>
                <input type="submit" value="Rechercher" :disabled="isDisabled">
            </form>
        </div>
    </div>
</template>

<script>
    import {LocationService} from '@/services'

    export default {
        data() {
            return {
                form: {
                    city: ''
                },
                city: undefined
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
                        this.city = cities[0];
                        console.log(`search `, this.city);
                        this.form.city = this.getLabelCity(this.city)
                    }
                }
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : ''
        }
    }
</script>
