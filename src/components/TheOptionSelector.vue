<script>

import { cardsType, cardNameFilter, cardArchetypeFilter, fetchCharacters } from "../FullCardsSet.js";

export default {

    data(){
        return {
            cardsType,
            cardNameFilter,
            cardArchetypeFilter,
        }
    },
    methods:{
        fetchCharacters,
    },
}
</script>

<template>
    <form @submit.prevent="onFormSubmit">
        Filtro per Archetipo
        <input list="card-type-list" name="card-type-list" 
        v-model="cardArchetypeFilter.searchText"
        >
        <datalist id="card-type-list" >
            <option :value="singleArchetype.archetype_name"
            v-for=" singleArchetype in cardsType.cardsTypeList"
            
            ></option>
        </datalist>
        <input type="reset">
    </form>


    <form @submit.prevent="onFormSubmit">
        Filtro per Nome
        <input v-model="cardNameFilter.searchText">
        <input type="reset">
    </form>
</template>

<style scoped lang="scss">

form{
    display: flex;
    justify-content: center;
    padding: 2rem 0;
}


</style>