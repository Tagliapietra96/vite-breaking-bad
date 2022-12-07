<template>
<transition name="fade">
  <LoadingBlock v-if="store.fetchError"/>
</transition>

  <div v-if="!store.fetchError" class="bg-primary pb-5">
    <TheHeader @filter="onSelectChange" @page-change="onPageChange" :element-counter="parseInt(store.count)"/>
    <TheMain/>
  </div>
</template>



<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import LoadingBlock from './components/LoadingBlock.vue';
import {store} from './stores/store';
export default {
  components: {TheHeader, TheMain, LoadingBlock},
  data(){
    return{
      store,
    }
  },
  methods:{
    onSelectChange(filter){
      this.store.filter = filter;
      this.store.fetchData();
    
    },
    onPageChange(page){
      this.store.page = page;
      this.store.fetchData();
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