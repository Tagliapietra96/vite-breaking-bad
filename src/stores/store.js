import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    charactersList: [],
    fetchError: false,
    fetchData(){
        axios.get('https://rickandmortyapi.com/api/character').then(resp => {
            store.charactersList = resp.data.results;
            store.fetchError = false;
        }).catch(error => {
            store.fetchError = true;
        });
    },
});