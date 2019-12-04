<template>
    <div class="home">

        <div class="photo" style="background-image: 'images/banner.png'">
            <div class="container">
                <form method="post" class="find-location">
                    <input v-model="form.city" placeholder="Trouver votre ville..." type="text">
                    <input type="submit" value="Rechercher">
                </form>
            </div>
        </div>

        <div class="forecast-table">
            <div class="container">
                <div class="forecast-container">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home',
        data: function () {
            return {
                form: {
                    city: ''
                }
            }
        }
    }
</script>
