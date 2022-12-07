import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    count: null,
    page: 1,
    filter: '',
    charactersList: [],
    fetchError: true,
    fetchData(){
        axios.get('https://swapi.dev/api/people/', {
            params:{
                page: store.page,
                search: store.filter
            }
        }).then(resp => {
            store.charactersList = resp.data.results;
            store.count = resp.data.count;
            setTimeout(() => {
                store.fetchError = false;
            }, 3000);

        }).catch(error => {
            store.fetchError = true;
        });
    },
});