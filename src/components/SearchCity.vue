<template>
    <div class="hero" v-lazy:background-image="urlPhoto">
        <div class="container">
            <form @submit="rechercher" method="post" class="find-location">
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
    import {PhotoService} from '@/services'
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
                photos: undefined
            }
        },
        computed: {
            urlPhoto: function () {
                return this.photos && this.photos.length > 0
                    ? this.photos[Math.floor(Math.random() * this.photos.length)].largeImageURL : 'images/banner.png'
            },
            ...mapState([
                // attacher `this.count` à `store.state.count`
                'city'
            ])
        },
        methods: {
            async rechercher(e) {
                if (e) e.preventDefault();
                if (!this._.isEmpty(this.form.city)) {
                    this.cities = await LocationService.searchCity(this.form.city);
                }
            },
            async selectCity(city) {
                this.cities = undefined;
                this.$store.dispatch('updateCity', city);
                this.photos = await PhotoService.getPhotosByCity(this.city.address.city);
            },
            getLabelCity: function (city) {
                return city ? `${city.address.city}, ${city.address.country}` : ''
            }
        },
        watch: {
            'form.city': function (val) {
                if (val.length > 3 && !this._.isEqual(val, this.getLabelCity(this.city))) {
                    this.rechercher()
                } else if (val.length === 0) {
                    this.cities = undefined;
                }
            },
            'city': function (val) {
                this.form.city = this.getLabelCity(val);
            }
        },
    }
</script>
