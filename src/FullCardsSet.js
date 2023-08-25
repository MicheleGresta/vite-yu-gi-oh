import axios from "axios";
import { reactive } from "vue";
import {formData} from "./components/TheOptionSelector.vue"

export default{
    data(){
        return {
            formData,
        }
    }
}

export const fullSet = reactive({
    fullCardsSet: [],

})


axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
    .then((response) => {
    fullSet.fullCardsSet = response.data.data;
})

export const cardsType = reactive({
    cardsTypeList: [],
})

axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
    .then((response) => {
        cardsType.cardsTypeList = response.data;
        console.log(cardsType);
    })