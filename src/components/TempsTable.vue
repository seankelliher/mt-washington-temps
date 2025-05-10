<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <div class="chart-table table-view">
        <div class="chart-table-title">
            <h2 class="bevan-regular">Monthly temperatures</h2>
            <p class="roboto-serif four">Average monthly temperatures for each month, 2005 - 2023</p>
        </div>

        <table>
            <thead>
                <tr>
                    <th class="roboto-serif six">Year</th>
                    <th class="roboto-serif six">Jan</th>
                    <th class="roboto-serif six">Feb</th>
                    <th class="roboto-serif six">Mar</th>
                    <th class="roboto-serif six">Apr</th>
                    <th class="roboto-serif six">May</th>
                    <th class="roboto-serif six">Jun</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(year, index) in store.years" :key="year">
                    <td class="roboto-serif four">{{ year.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ store.jans[index] }}</td>
                    <td class="roboto-serif four">{{ store.febs[index] }}</td>
                    <td class="roboto-serif four">{{ store.mars[index] }}</td>
                    <td class="roboto-serif four">{{ store.aprs[index] }}</td>
                    <td class="roboto-serif four">{{ store.mays[index] }}</td>
                    <td class="roboto-serif four">{{ store.juns[index] }}</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th class="roboto-serif six">Year</th>
                    <th class="roboto-serif six">Jul</th>
                    <th class="roboto-serif six">Aug</th>
                    <th class="roboto-serif six">Sep</th>
                    <th class="roboto-serif six">Oct</th>
                    <th class="roboto-serif six">Nov</th>
                    <th class="roboto-serif six">Dec</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(year, index) in store.years" :key="year">
                    <td class="roboto-serif four">{{ year.substring(1,5) }}</td>
                    <td class="roboto-serif four">{{ store.juls[index] }}</td>
                    <td class="roboto-serif four">{{ store.augs[index] }}</td>
                    <td class="roboto-serif four">{{ store.seps[index] }}</td>
                    <td class="roboto-serif four">{{ store.octs[index] }}</td>
                    <td class="roboto-serif four">{{ store.novs[index] }}</td>
                    <td class="roboto-serif four">{{ store.decs[index] }}</td>
                </tr>
            </tbody>
        </table>
        <div class="chart-table-caption roboto-serif four">Data from the Mt. Washington Observatory, a weather station located on the mountain's summit. The Observatory monitors weather year round.</div>
    </div>
</template>

<style scoped>
</style>