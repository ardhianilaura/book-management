<template>
    <div>
        <client-only>
            <div style="background: #F6F6F6">
                <div v-if="$device.isMobileOrTablet" style="padding-top: 55px">
                    <!-- Navigation Bar -->
                    <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="zindex: 1000">
                        <div class="flex items-center font-bold" @click="$router.go(-1)">
                            <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> Category Detail
                        </div>
                    </div>
                    <!-- Content -->
                    <MobileCategoryDetailCategoryComp />
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seo: {
                name: 'Book Management',
                description: '',
                image: '',
                url: 'http://50.50.50.207:3000/favicon.ico'
            },
            slug: this.$route.params.slug,
            hostname: frontendHost,
        }
    },

    head() {
        return {
            title: this.seo.name,
            meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: this.seo.name
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: this.seo.description
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content: this.seo.image
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: this.seo.url,
            },
            ],
        }
    },
}
</script>