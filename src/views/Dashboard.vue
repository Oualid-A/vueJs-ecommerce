<template>
    <div class="grid grid-cols-3 grid-rows-3 gap-3 w-full p-3 ">
        <div
            class="col-start-1 col-end-3 row-start-1 row-end-2  text-black shadow-lg  bg-gradient-to-br from-[#f7f4f2] via-[#f7f4f2] to-[#cfcac6] rounded-lg">
            <TimeCard />
        </div>
        <div class="col-start-1 col-end-3 row-start-2 row-end-3 bg-white p-3 rounded-xl shadow-lg">
            <BarChart />
        </div>
        <div class="col-start-1 col-end-2 row-start-3 row-end-4 bg-white p-3 rounded-xl shadow-lg">
            <h1 class="text-black text-xl font-semibold">Wind Speed for Adelaide</h1>
            <PieChart />
        </div>
        <div class="col-start-2 col-end-3 row-start-3 row-end-4 bg-white p-3 rounded-xl shadow-lg">
            <h1 class="text-black text-xl font-semibold">Geo chart</h1>
            <GeoChart />
        </div>
        <div class="col-start-3 col-end-4 row-start-1 row-end-4 bg-white  rounded-xl shadow-lg">
            <DetailsCard />
        </div>
    </div>
</template>
<script setup>
import GeoChart from "@/components/GeoChart.vue"
import TimeCard from "@/components/TimeCard.vue";
import DetailsCard from "@/components/DetailsCard.vue";
import BarChart from "./BarChart.vue";
import PieChart from "./PieChart.vue";
</script>