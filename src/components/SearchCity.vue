<template>
    <div class="hero" v-lazy:background-image="urlPhoto">
        <div class="container">
            <form @submit="rechercher" method="post" class="find-location">
                <input type="text" v-model="ville" placeholder="Trouver votre ville..." :class="{'error': ville === ''}">
                <input type="submit" value="Rechercher">
            </form>
            <ul class="autocomplete-result-list" role="listbox" id="autocomplete-result-list-1"
                style="position: absolute; z-index: 1; width: 100%; box-sizing: border-box; visibility: visible; pointer-events: auto; top: 100%;">
                <li id="autocomplete-result-0" class="autocomplete-result" data-result-index="0" role="option">France</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {PhotoService} from '@/services'
    import {LocationService} from '@/services'

    export default {
        data() {
            return {
                ville: '',
                photos: undefined
            }
        },
        computed: {
            urlPhoto: function () {
                return this.photos && this.photos.length > 0
                    ? this.photos[Math.floor(Math.random() * this.photos.length)].largeImageURL
                    : 'images/banner.png'
            }
        },
        methods: {
            async rechercher(e) {
                e.preventDefault();
                if (!this._.isEmpty(this.ville)) {
                    console.log(this.ville);
                    let photos = await PhotoService.getPhotosByCity(this.ville);
                    this.photos = photos.hits;

                    let cities = await LocationService.searchCity(this.ville);
                    console.log(cities);
                }
            }
        }
    }
</script>
