<template>
    <div>
        <!-- Navigation Bar -->
        <div class="fixed top-0 left-0 w-full flex items-center py-3 px-3"
            style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);">
            <!-- Buttom show menu -->
            <div class="px-1 mr-2" @click="showMenu()">
                <solid-menu-icon class="w-5 text-gray" />
            </div>
            <!-- Logo -->
            <img class="w-10" src="/logo.png" />
            <div class="ml-2 font-semibold" style="font-size: 14px">Book Management</div>

            <!-- User -->
            <div class="ml-auto pr-1">
                <img class="w-7" src="/icon.jpg" />
            </div>
        </div>
        <!-- Pop Up Menu -->
        <div class="fixed top-0 left-0 w-full bg-white" style="min-height: 100vh" v-if="isShowMenu == true">
            <!-- Judul -->
            <div class="flex items-center w-full py-3 pl-4 pr-2">
                <div class="font-bold" style="font-size: 16px; letter-spacing: 0.5px">Menu</div>
                <!-- Button Close Menu -->
                <div class="ml-auto" @click="showMenu()">

                    <OutlineXIcon class="w-7" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowMenu: false
        }
    },
    methods: {
        showMenu() {
            if (this.isShowMenu) {
                this.isShowMenu = false
            } else {
                this.isShowMenu = true
            }
        }
    }
}

</script>