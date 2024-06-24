<template>
  
</template>

<script>
import {
    frontendHost,
    backendStorageHosts
} from '../../app.config'

export default {
    data() {
        return {
            seo: {
                name: 'Book Management',
                description: '',
                image: '',
                url: 'http://50.50.50.207:3000/favicon.ico'
            },
            hostname: frontendHost,
            backendStorageHosts: backendStorageHosts,
            bookSlug: this.$route.params.slug
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
            }, {
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

<style>

</style>