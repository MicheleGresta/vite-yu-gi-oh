<script>
import TheCard from "../components/TheCard.vue"
import { fullSet, formData} from "../FullCardsSet.js";
export default {
    components: {
    TheCard,
  },
  data() {
    return {
        fullSet,
        formData,
    }
  },
    mounted(){
        console.log(formData);
  },

}
</script>

<template>
    <div class="container-lg">

        <div class="box-container">
            <div class="finder-container">
                <h4>Found X cards</h4>
            </div>
            <div class="cards-container">
                <div class="row row-cols-5 gy-4">
                    <div class="col "
                    v-for="singleCard in fullSet.fullCardsSet"
                    :key="singleCard.id"
                    >
                        <TheCard :singleCardStats="singleCard"/>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.container {

    padding-top: 1px;

    .box-container {
        border: 2rem solid white;
        background-color: white;
        margin: auto 4rem;
    }

    .finder-container {
        background-color: #212529;

        h4 {
            padding: 1.2rem 1rem;
            color: white;
            margin: 0;

        }
    }
}
</style>