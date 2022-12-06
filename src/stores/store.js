import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    charactersList: [],
    fetchError: false,
    fetchData(){
        axios.get('https://swapi.dev/api/people/').then(resp => {
            store.charactersList = resp.data.results;
            store.fetchError = false;
        }).catch(error => {
            store.fetchError = true;
        });
    },
});