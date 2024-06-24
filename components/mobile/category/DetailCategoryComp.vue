<template>
    <div>
        <div class="relative overflow-hidden rounded-lg m-3" v-if="category != null">
            <img class="w-full" :src="backendStorageHosts.bookManagement.categories + category.image" alt="">
            <!-- Overlay Categori Name -->
            <div class="absolute top-0 left-0" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
 rgba(67, 67, 67, 0.5) 56.27%, rgba(0, 0, 0, 0.52) 76.51%,
 rgba(0, 0, 0, 0.67) 100%); height: 100%; width: 100%">
                <div class="absolute bottom-0 left-0 whitespace-normal text-white pl-3 pb-2 font-semibold">
                    {{ toTitleCase(category.name) }}
                </div>
            </div>
        </div>
        <div class="pt-1">
            <div class="font-bold mx-3" style="font-size: 14px">All Books</div>
            <div class="grid grid-cols-2 px-3 pt-2">
                <div v-for="(book, index) in books" :key="index" class="relative overflow-hidden rounded-lg">
                    <book-card-helper :book="book" :index="index" />
                </div>
            </div>
            <infinite-loading @distance="1" @infinite="getCategoryDetail">
                <div spinner="waveDots">
                </div>
            </infinite-loading>
        </div>
    </div>
</template>
<script>
import {
    backendStorageHosts,
} from '../../../app.config'
import InfiniteLoading from 'vue-infinite-loading'
import BookCardHelper from '../helper/BookCardHelper.vue'
export default {
    components: {
        InfiniteLoading,
        BookCardHelper
    },
    data() {
        return {
            slug: this.$route.params.slug,
            page: 1,
            category: null,
            books: [],
            backendStorageHosts: backendStorageHosts,
        }
    },
    methods: {
        getCategoryDetail($state) {
            this.$bookManagementApi.get('v1/categories/slug/' + this.slug, {
                params: {
                    page: this.page
                }
            })
                .then(resp => {
                    if (resp.data.data.books.data.length > 0) {
                        this.category = resp.data.data
                        this.books.push(...this.category.books.data)
                        this.page += 1;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                })
        },
        toTitleCase(str) {
            if (str != null) {
                return str.replace(
                    /\w\S*/g,
                    function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );
            }
        },
    }
}
</script>