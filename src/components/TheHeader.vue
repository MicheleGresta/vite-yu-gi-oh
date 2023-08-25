<script>
export default {

}
</script>

<template>
<div class="head-container">
    <img src="../assets/img/pngegg.png" alt="" class="title-img">
    <h1>Yu-Gi-Oh Api</h1>
</div>


</template>

<style scoped lang="scss">
@use "../styles/partials/Variables" as *;
.head-container {
    display: flex;
    height: 100px;
    align-items: center;
    background-color: $header-bg;
    .title-img{
    height: 100px;
    padding: 1rem;
    }

    h1{
        font-size: 3rem;
    }
}
</style>