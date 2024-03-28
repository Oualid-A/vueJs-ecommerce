<script setup>

import SideBar from '@/components/SideBar.vue'

</script>

<template>
    <div className="flex justify-start w-full h-screen">
        <SideBar />
        <div className="flex-grow overflow-auto">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped></style>