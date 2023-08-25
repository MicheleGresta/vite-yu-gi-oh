<script>
export default {
    props: {
        singleCardStats: {
            type: Object,
        },
    },
    data() {
        return {};
    },
}
</script>

<template>
    <div class="card card-settings">
        <img :src="singleCardStats.card_images[0].image_url" alt="" class="single-card-img">
        <div class="card-body d-flex flex-column text-center">
            <h5 class="card-title">
                {{ singleCardStats.name }}
            </h5>
            <span class="card-type">
                {{ singleCardStats.archetype }}
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">

@use "../styles/partials/Variables" as *;
.card-settings{
    border: 0;
    background-color: $main-bg;
    border-radius: 0;
    height: 100%;

    .card-type{
        margin: auto;
    }
}


</style>