<script setup>
import { store } from "../composables/store.js";
import { yearsList } from "../data/years.js";
import Chart from "chart.js/auto";
import { onMounted } from "vue";

// Function to create a chart with Chart.js.
function createMonthsChart() {
    const monthlyTempsChart = document.getElementById("monthly-temps-chart");

    new Chart(monthlyTempsChart, {
        type: "line",
        data: {
            labels: yearsList,
            datasets: [
                {
                    label: "Jan",
                    data: store.jans,
                    backgroundColor: "#8c510a",
                    borderColor: "#8c510a",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Feb",
                    data: store.febs,
                    backgroundColor: "#d8b365",
                    borderColor: "#d8b365",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Mar",
                    data: store.mars,
                    backgroundColor: "#5ab4ac",
                    borderColor: "#5ab4ac",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Apr",
                    data: store.aprs,
                    backgroundColor: "#01665e",
                    borderColor: "#01665e",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false

                },
                {
                    label: "May",
                    data: store.mays,
                    backgroundColor: "#c51b7d",
                    borderColor: "#c51b7d",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jun",
                    data: store.juns,
                    backgroundColor: "#e9a3c9",
                    borderColor: "#e9a3c9",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jul",
                    data: store.juls,
                    backgroundColor: "#a1d76a",
                    borderColor: "#a1d76a",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Aug",
                    data: store.augs,
                    backgroundColor: "#4d9221",
                    borderColor: "#4d9221",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Sep",
                    data: store.seps,
                    backgroundColor: "#b35806",
                    borderColor: "#b35806",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Oct",
                    data: store.octs,
                    backgroundColor: "#f1a340",
                    borderColor: "#f1a340",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Nov",
                    data: store.novs,
                    backgroundColor: "#998ec3",
                    borderColor: "#998ec3",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Dec",
                    data: store.decs,
                    backgroundColor: "#542788",
                    borderColor: "#542788",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                }
            ]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || "";

                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + "\u00B0 F";
                            }
                            return label;
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 5
                }
            }
        }
    });
}

onMounted(()=> {
    store.getMonthly();
    createMonthsChart();
});
</script>

<template>
    <div class="chart-table chart-view">
        <div class="chart-table-title">
            <h2 class="bevan-regular">Monthly temperatures</h2>
            <p class="roboto-serif four">Average monthly temperatures for each month, 2005 - 2023</p>
        </div>
        <canvas id="monthly-temps-chart"></canvas>
        <div class="chart-table-caption roboto-serif four">Data from the Mt. Washington Observatory, a weather station located on the mountain's summit. The Observatory monitors weather year round.</div>
    </div>
</template>

<style scoped>
</style>