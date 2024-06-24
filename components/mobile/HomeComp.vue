<template>
    <div>
        <!-- Kategori -->
        <div class="pt-3 mb-4">
            <!-- Title -->
            <div class="flex mb-1">
                <div class="font-semibold pl-4" style="font-size: 16px">
                    Categories
                </div>
                <div class="ml-auto mt-auto" style="font-size: 14px">
                    <nuxt-link to="/categories">
                        <div class="flex items-center font-semibold text-blue-lochmara">
                            See all
                            <SolidChevronRightIcon class="w-6 ml-0.5" />
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <!-- Data Categories -->
            <div class="flex overflow-x-auto">
                <div v-for="(categori, index) in categories" :key="index" @click="goCategoriesDetail(categori.slug)"
                    class="ml-3 basis-1/2 relative overflow-hidden rounded-lg" style="min-width: 50%"
                    :class="index == categories.length - 1 ? 'mr-3' : ''">
                    <img class="w-full" :src="backendStorageHosts.bookManagement.categories + categori.image">
                    <!-- Overlay Categori Name -->
                    <div class="absolute top-0 left-0" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(67, 67, 67,
0.5) 56.27%, rgba(0, 0, 0, 0.52) 76.51%, rgba(0, 0, 0, 0.67) 100%); height: 100%; width: 100%">
                        <div class="absolute bottom-0 left-0 whitespace-normal text-white pl-3 pb-2 fontsemibold">
                            {{toTitleCase(categori.name)}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Books -->
        <div class="">
            <div class="flex mb-1">
                <div class="font-semibold pl-4" style="font-size: 16px">
                    Top 4
                </div>
                <div class="ml-auto mt-auto" style="font-size: 14px">
                    <nuxt-link to="/books">
                        <div class="flex items-center font-semibold text-blue-lochmara">
                            See all books
                            <SolidChevronRightIcon class="w-6 ml-0.5" />
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="grid grid-cols-2 px-3">
                <div v-for="(top4, index) in top4s" :key="index">
                    <!-- Book Card -->
                    <book-card-helper :book="top4" :index="index" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {
        backendStorageHosts,
} from '../../app.config'
import BookCardHelper from './helper/BookCardHelper.vue'
    
export default {
    components: {
        BookCardHelper
    },
    data() {
        return {
            categories: [],
            backendStorageHosts: backendStorageHosts,
            top4s: [],
        }
    },
    methods: {
        getCategories() {
            this.$bookManagemenApi.get('v1/categories/random/2').then(resp => {
                this.categories = resp.data.data
                console.log(this.categories)
            })
        },

        getTop4() {
            this.$bookManagementApo.get('v1/books/top/4').then(resp => {
                this.top4s = resp.data.data
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

        goCategoriesDetail(categori_slug) {
            this.$router.push({
                name: 'category-slug',
                params: {
                    slug: category_slug
                }
            })
        }
    },

    created() {
        this.getCategories()
        this.getTop4()
    }
}
</script>

<style>

</style>