<script setup>
import { store } from "../composables/store.js";
import { onMounted } from "vue";

onMounted(() => {
    // Fades in callouts when user scrolls them into view.
    const callouts = document.querySelectorAll(".callout");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const contains = entry.target.classList.contains("fade-in");
                if (!contains) {
                    entry.target.classList.add("fade-in");
                }
            }
        });
    }, { threshold: 0.75 });

    callouts.forEach(callout => observer.observe(callout));
});
</script>

<template>
    <section>
        <hgroup class="heading">
            <h2 class="bevan-regular">Seasonal temperatures</h2>
            <p class="roboto-serif four">Average temperatures, based on the years 2005 - 2023</p>
        </hgroup>
        <hgroup class="callout">
            <h3 class="roboto-serif six">Spring</h3>
            <p class="roboto-serif four callout-text">{{ store.springAvg }}&deg; F</p>
        </hgroup>
        <hgroup class="callout">
            <h3 class="roboto-serif six">Summer</h3>
            <p class="roboto-serif four callout-text">{{ store.summerAvg }}&deg; F</p>
        </hgroup>
        <hgroup class="callout">
            <h3 class="roboto-serif six">Autumn</h3>
            <p class="roboto-serif four callout-text">{{ store.fallAvg }}&deg; F</p>
        </hgroup>
        <hgroup class="callout">
            <h3 class="roboto-serif six">Winter</h3>
            <p class="roboto-serif four callout-text">{{ store.winterAvg }}&deg; F</p>
        </hgroup>
    </section>
</template>

<style scoped>
</style>