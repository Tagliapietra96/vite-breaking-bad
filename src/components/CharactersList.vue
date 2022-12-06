<template >
    <div class="p-3">
        <div class="row row-cols-5 g-3">
            <div v-for="(element, i) in store.charactersList" :key="i" class="col">
                <SingleCharacter :character="element"/>
            </div>
        </div>
    </div>
</template>



<script>
import { store } from '../stores/store';
import SingleCharacter from './SingleCharacter.vue';
export default {
    components: { SingleCharacter },
    data() {
        return {
            store
        }
    }
}
</script>




<style lang="scss">

</style>