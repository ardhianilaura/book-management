<template>
    <div style="padding-top: 55px">
        <!-- Navigation Bar -->
        <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="z-index:
1000">
            <div class="flex items-center font-bold" @click="$router.go(-1)">
                <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Book Detail
            </div>
        </div>
        <!-- Content -->
        <div v-if="book != null" style="padding-bottom: 77px">
            <!-- Cover Book -->
            <div class="bg-dark">
                <div style="position: relative; width: 100%; padding-top: 100%;">
                    <div class="flex justify-center items-center"
                        style="position: absolute; top: 0; left: 0; bottom: 0; right: 0">
                        <img :src="backendStorageHosts.bookManagement.books + book.cover" style="max-height:
100%; max-width: 100%">
                    </div>
                </div>
            </div>
            <!-- Title, Author, and Price -->
            <div class="bg-white py-3 px-3.5">
                <div class="font-bold" style="font-size: 17px">{{ toTitleCase(book.title) }}</div>
                <div class="text-grey-600 mb-4" style="font-size: 15px">by {{ book.author }}</div>
                <div class="font-bold" style="font-size: 20px">Rp. {{ setRupiah(book.price).replace('..00',
                        '')
                }}</div>
            </div>
            <!-- Product Detail -->
            <div class="mt-3 bg-white py-3 px-3.5">
                <div class="mb-3 font-bold">Product Detail</div>
                <!-- Publisher, Stock, Weight -->
                <div class="mb-3" style="font-size: 14px">
                    <div class="flex mb-1">
                        <div class="text-grey-600 w-1/5">Publisher</div>
                        <div class="w-4/5 pl-4">{{ book.publisher }}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="text-grey-600 w-1/5">Stock</div>
                        <div class="w-4/5 pl-4">{{ book.stock }}</div>
                    </div>
                    <div class="flex mb-1" style="font-size: 14px">
                        <div class="text-grey-600 w-1/5">Weight</div>
                        <div class="w-4/5 pl-4">{{ book.weight }} kg</div>
                    </div>
                </div>
                <!-- Description -->
                <div class="text-justify" style="font-size: 14px">
                    {{ book.description }}
                </div>
            </div>
            <!-- Button to Cart -->
            <div class="bg-white w-full p-3 fixed bottom-0 left-0">
                <div class="bg-blue-lochmara flex items-center justify-center py-2 pr-7 text-white fontbold rounded-lg">
                    <SolidShoppingCartIcon class="w-6 mr-3" /> Cart
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    backendStorageHosts,
} from '../../../app.config'
import InfiniteLoading from 'vue-infinite-loading'
export default {
    components: {
        InfiniteLoading,
    },
    data() {
        return {
            bookSlug: this.$route.params.slug,
            backendStorageHosts: backendStorageHosts,
            book: null,
        }
    },
    created() {
        this.getBookDetail()
    },
    methods: {
        getBookDetail() {
            this.$bookManagementApi.get('v1/books/slug/' + this.bookSlug)
                .then(resp => {
                    this.book = resp.data.data
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
        setRupiah(angka) {
            if (angka != undefined) {
                var rupiah = '';
                var angkarev = angka.toString().split('').reverse().join('');
                for (var i = 0; i < angkarev.length; i++)
                    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
                return rupiah.split('', rupiah.length - 1).reverse().join('');
            }
        },
    }
}
</script>