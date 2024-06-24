<template>
    <div>
        <div class="grid grid-cols-2 px-3 pt-3">
            <div v-for="(book, index) in books" :key="index" class="relative overflow-hidden rounded-lg">
                <book-card-helper :book="book" :index="index" />
            </div>
        </div>
        <infinite-loading @distance="1" @infinite="getCategories">
            <div spinner="waveDots">
            </div>
        </infinite-loading>
    </div>
</template>

<script>
 import {
 backendStorageHosts,
 } from '../../app.config'
 import InfiniteLoading from 'vue-infinite-loading'
 import BookCardHelper from './helper/BookCardHelper.vue'
 export default {
 components: {
 InfiniteLoading,
 BookCardHelper
 },
 data() {
 return {
 books: [],
            backendStorageHosts: backendStorageHosts,
            page: 1
        }
    },
    methods: {
        getCategories($state) {
            this.$bookManagementApi.get('v1/books', {
                params: {
                    page: this.page
                }
            })
                .then(resp => {
                    if (resp.data.data.length > 0) {
                        this.books.push(...resp.data.data)
                        this.page += 1;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                })
        },
    }
}
</script>