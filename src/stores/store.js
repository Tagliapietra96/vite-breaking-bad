import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    charactersList: [],
    fetchError: true,
    fetchData(){
        axios.get('https://swapi.dev/api/people/').then(resp => {
            store.charactersList = resp.data.results;
            setTimeout(() => {
                store.fetchError = false;
            }, 3000);
        }).catch(error => {
            store.fetchError = true;
        });
    },
});