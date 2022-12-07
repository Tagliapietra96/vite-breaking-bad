<template >
    <header class="p-5 mb-4">
        <h1 class="text-white">STAR WARS API</h1>
        <div class="container pt-4">
            <label class="text-white">Insert a name</label>
            <input name="type" class="form-control form-control-sm w-25 " v-model="search" @keyup.enter="onChange"/>
            <div class="text-center">
                <button class="btn btn-light" @click="onPrevPage">Prev Page</button>
                <span class="random-space mx-3 "></span>
                <button class="btn btn-light" @click="onNextPage">Next Page</button>
            </div>
        </div>
    </header>
</template>



<script>
export default {
    emits: ['filter', 'pageChange'],
    props:{
        elementCounter: Number,
    },
    data() {
        return {
            search: '',
            newPage: 1,
        }
    },
    methods: {
        onChange() {
            this.newPage = 1,
            this.$emit('pageChange', this.newPage);
            this.$emit('filter', this.search);
        },
        onPrevPage() {
            if (this.newPage === 1) {
                this.newPage = Math.ceil(this.elementCounter / 10);
            } else {
                this.newPage--
               
            }

            this.$emit('pageChange', this.newPage);
        },
        onNextPage() {
            if (this.newPage === Math.ceil(this.elementCounter / 10)) {
                this.newPage = 1;
            } else {
                this.newPage++;
            }

            this.$emit('pageChange', this.newPage);
        }
    }
}
</script>



<style >

</style>