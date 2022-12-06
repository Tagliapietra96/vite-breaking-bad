<template>
  <div class="bg-primary vh-100">
    <TheHeader/>
    <TheMain/>
  </div>
</template>



<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import {store} from './stores/store';
export default {
  components: {TheHeader, TheMain},
  data(){
    return{
      store,
    }
  },
  mounted(){
    this.store.fetchData();
    
  }
}
</script>



<style lang="scss">
  @use './styles/general.scss' as *;
</style>