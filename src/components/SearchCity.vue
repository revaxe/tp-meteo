<template>
    <div class="hero" v-lazy:background-image="urlPhoto">
        <div class="container">
            <form @submit="rechercher" method="post" class="find-location">
                <input type="text" v-model="ville" placeholder="Trouver votre ville..." :class="{'error': ville === ''}">
                <input type="submit" value="Rechercher">
            </form>
        </div>
    </div>
</template>

<script>
    import {PhotoService} from '@/services'

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

                }
            }
        }
    }
</script>
