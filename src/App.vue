<script setup>
import PanoImage from "./components/PanoImage.vue";
import PanoCaption from "./components/PanoCaption.vue";
import CallOuts from "./components/CallOuts.vue";
import TempsChart from "./components/TempsChart.vue";
import TempsTable from "./components/TempsTable.vue";
</script>

<template>
    <div id="container">
        <PanoImage />
        <PanoCaption />
        <CallOuts />
        <TempsChart />
        <TempsTable />
    </div>
</template>

<style scoped>
</style>