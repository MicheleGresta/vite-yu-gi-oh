import axios from "axios";
import { reactive } from "vue";

export default{
    data(){
        return {           
        }
    }
}

export const fullSet = reactive({
    fullCardsSet: [],

})

export function fetchCharacters(newUrl) {
    const url = newUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

    axios.get(url)
    .then((response) => {
    fullSet.fullCardsSet = response.data.data;
})
}


export const cardsType = reactive({
    cardsTypeList: [],
})

export function fetchArchetype() {
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
    .then((response) => {
        cardsType.cardsTypeList = response.data;
    })
}



export const cardNameFilter = reactive ({
    searchText: "",
})

export const cardArchetypeFilter = reactive ({
    searchText: "",
})