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
            }
        }
    }
</script>
