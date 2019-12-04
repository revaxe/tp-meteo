<template>
    <div class="home">

        <div class="photo" style="background-image: url('images/banner.png')">
            <div class="container">
                <form method="post" class="find-location">
                    <input placeholder="Trouver votre ville..." type="text">
                    <input type="submit" value="Rechercher">
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>
