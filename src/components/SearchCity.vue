<template>
    <div class="photo" style="background-image: url('images/banner.png')">
        <div class="container">
            <form v-on:submit.prevent="search" method="post" class="find-location" id="recherche">
                <input v-model="form.city" placeholder="Trouver votre ville..." type="text">
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
                console.log(`search ${this.form.city}`);
                if (!this._.isEmpty(this.form.city) && !this._.isEqual(this.form.city, this.getLabelCity(this.city))) {
                    let cities = await LocationService.searchCity(this.form.city);
                    if (cities.length > 1 || !(cities.length === 1 && this.city && cities[0].locationId === this.city.locationId))
                        this.city = cities[0];
                }
            },
            getLabelCity: city => city ? `${city.address.city}, ${city.address.country}` : ''
        }
    }
</script>
