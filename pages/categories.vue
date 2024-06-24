<template>
    <div>
        <client-only>
            <div style="background: #F6F6F6">
                <div v-if="$device.isMobileOrTablet" style="padding-top: 55px">
                    <!-- Navigation Bar -->
                    <div class="bg-white fixed top-0 left-0 w-full flex items-center py-3 px-3" style="z-index: 1000">
                        <div class="flex items-center font-bold" @click="$router.go(-1)">
                            <SolidChevronLeftIcon class="w-8 mr-1.5 text-blue-lochmara" /> All Categories
                        </div>
                    </div>
                    <!-- Content -->
                    <MobileCategoriesComp />
                </div>
            </div>
        </client-only>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>