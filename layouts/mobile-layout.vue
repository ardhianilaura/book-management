<template>
    <div class="font-poppins">
        <!-- Navigation Bar -->
        <navbar-mobile id="navbar-mobile" />
        <div id="body-apps" style="padding-top: 55px">
            <nuxt keep-alive />
        </div>
    </div>
</template>
<script>
import NavbarMobile from './navbar/navbar-mobile.vue'
export default {
    components: {
        NavbarMobile
    },
    mounted() { },
    methods: {}
}
</script>