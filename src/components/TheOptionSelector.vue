<script>

import { cardsType } from "../FullCardsSet.js";

export default {

    data(){
        return {
            cardsType,
            formData: {},
            // sono rimasto che ho messo formData in tutti e 3 i file e non funziona
        }
    },
    methods: {
        onFormSubmit() {
            console.log("ciao", this.formData);
        }
    }
}
</script>

<template>
    <form @submit.prevent="onFormSubmit">
        <input list="card-type-list" name="card-type-list" v-model="formData"
        >
        <datalist id="card-type-list" >
            <option :value="singleArchetype.archetype_name"
            v-for=" singleArchetype in cardsType.cardsTypeList"
            
            ></option>
        </datalist>
        <input type="submit">
    </form>
</template>

<style scoped lang="scss">

form{
    display: flex;
    justify-content: center;
    padding: 2rem 0;
}


</style>