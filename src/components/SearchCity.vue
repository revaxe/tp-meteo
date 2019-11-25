<template>
    <div class="hero" style="background-image: url('images/banner.png')">
        <div class="container">
            <form @submit="rechercher" method="POST" class="find-location">
                <input type="text" v-model="ville" placeholder="Trouver votre ville..." :class="{'error': ville === ''}">
                <input type="submit" value="Rechercher">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchCity',
        data() {
            return {
                ville: ''
            }
        },
        methods: {
            rechercher(e) {
                if (!this._.isEmpty(this.ville)) {
                    console.log(this.ville);
                }
                e.preventDefault();
            }
        }
    }
</script>
