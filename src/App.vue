<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import TheNavBar from "./components/TheNavBar.vue"
import TheOptionSelector from "./components/TheOptionSelector.vue"


export default {
  components: {
    TheHeader,
    TheMain,
    TheNavBar,
    TheOptionSelector,
  }
}
</script>

<template>
  <TheHeader />
  <div class="container">
    <TheOptionSelector />
    <TheNavBar />
    <TheMain />
  </div>
</template>

<style lang="scss">
@use "./styles/partials/Variables" as *;
  .container{
    background-color: $main-bg;
    min-height: 100px;
  }

</style>
