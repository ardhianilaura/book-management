<template>
    <div @click="goDetailBook(book.slug)" class="bg-white rounded-lg overflow-hidden mb-3" :class="index % 2 == 0 ? 'mr-1.5' : 'ml-1.5'">
        <div class="bg-dark">
            <div style="position: relative; width: 100%; padding-top: 100%;">
                <div class="flex justify-center items-center"
                    style="position: absolute; top: 0; left: 0; bottom: 0; right: 0">
                    <img :src="backendStorageHosts.bookManagement.books + book.cover"
                        style="max-height: 100%; max-width: 100%">
                </div>
            </div>
        </div>
        <div class="px-3.5 py-2">
            <p class="mb-2 text-multiline-ellipsis" style="font-size: 13px; line-height: 1.4; height: 38px">
                {{book.title}}
            </p>
            <div class="font-bold" style="font-size: 15px">
                <span style="font-size: 13px">IDR</span> {{setRupiah(book.price).replace('..00', '')}}
            </div>
        </div>
    </div>
</template>
<script>
import {
    backendStorageHosts,
} from '../../../app.config'
export default {
    props: {
        book: Object,
        index: Number
    },
    data() {
        return {
            backendStorageHosts: backendStorageHosts
        }
    },
    methods: {
        goDetailBook(bookSlug) {
            this.$router.push({
                name: 'book-slug',
                params: {
                    slug: bookSlug
                }
            })
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
<style scoped>
.text-multiline-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}
</style>