<template>
    <div class="home">

        <div class="photo" style="background-image: url('images/banner.png')">
            <div class="container">
                <form v-on:submit.prevent="search" method="post" class="find-location" id="recherche">
                    <input v-model="form.city" placeholder="Trouver votre ville..." type="text">
                    <input type="submit" value="Rechercher" :disabled="isDisabled">
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home',
        data: function() {
            return {
                form: {
                    city: undefined
                }
            }
        },
        computed: {
            isDisabled() {
                return this.form.city === undefined || this.form.city === '';
            }
        },
        methods: {
            search() {
                console.log('search');
                console.log(this.form.city)
            }
        }
    }
</script>
