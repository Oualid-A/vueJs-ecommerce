<template>
    <div
        :class="`flex w-64 h-screen border bg-white border-r-1 px-10 py-10 flex-col relative sidebar-transition ${collapsed ? 'w-[66px] px-4 py-4' : 'w-64'}`">
        <div
            class="w-5 h-5 bg-[#9c7437d1] rounded-full absolute p-3 -right-[10.2px] top-10 flex items-center justify-center text-white"
            @click="toggleCollapsed">
            <component :is="collapsed ? 'MenuOutlined' : 'CloseOutlined'" />
        </div>
        <div class="flex items-center justify-center">
            <img :src="collapsed ? 'src/assets/logo.jpg' : 'src/assets/logo-afrika.png'" alt="logo" />
        </div>
        <div class="mt-10 flex flex-col space-y-8">
            <router-link v-for="(item, index) in navLinks" :key="index" :to="item.path"
                class="flex flex-row items-center space-x-3 font-normal p-2 cursor-pointer text-xl"
                :class="{ 'bg-[#e7e7e7] text-black border-l-4 border-[#cebcad] font-semibold': isActive(index) }"
                @click.native="setActiveLink(index)">
                <component :is="item.icon" />
                <span v-if="!collapsed">{{ item.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
    HomeOutlined,
    TeamOutlined,
    ShopOutlined,
    AppstoreOutlined,
    ShoppingOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons-vue';

const collapsed = ref(false);
const route = useRoute();

const navLinks = ref([
    {
        name: 'Dashboard',
        icon: HomeOutlined,
        path: '/',
    },
    {
        name: 'Pie Chart',
        icon: AppstoreOutlined,
        path: '/pie-chart',
    },
    {
        name: 'Bar chart',
        icon: TeamOutlined,
        path: '/bar-chart',
    },
]);

const activeLink = ref(navLinks.value.findIndex(item => item.path === route.path));

const toggleCollapsed = () => {
    collapsed.value = !collapsed.value;
};

const setActiveLink = (index) => {
    activeLink.value = index;
};

const isActive = (index) => {
    return route.path === navLinks.value[index].path;
};

onMounted(() => {
    const handleResize = () => {
        collapsed.value = window.innerWidth < 1400;
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
});
</script>
