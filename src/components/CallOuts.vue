<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <section>
        <div class="heading">
            <h2 class="bevan-regular">Seasonal temperatures</h2>
        </div>
        <div class="heading">
            <p class="roboto-serif four">Average temperatures, based on the years 2005 - 2023</p>
        </div>
        <div class="callout">
            <h3 class="roboto-serif six">Spring</h3>
            <h4 class="roboto-serif four">{{ store.springAvg }}&deg; F</h4>
        </div>
        <div class="callout">
            <h3 class="roboto-serif six">Summer</h3>
            <h4 class="roboto-serif four">{{ store.summerAvg }}&deg; F</h4>
        </div>
        <div class="callout">
            <h3 class="roboto-serif six">Autumn</h3>
            <h4 class="roboto-serif four">{{ store.fallAvg }}&deg; F</h4>
        </div>
        <div class="callout">
            <h3 class="roboto-serif six">Winter</h3>
            <h4 class="roboto-serif four">{{ store.winterAvg }}&deg; F</h4>
        </div>
    </section>
</template>

<style scoped>
</style>