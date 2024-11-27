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
                    backgroundColor: "#1e88e5", // blue 600.
                    borderColor: "#1e88e5",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Feb",
                    data: store.febs,
                    backgroundColor: "#0d47a1", // blue 900.
                    borderColor: "#0d47a1",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Mar",
                    data: store.mars,
                    backgroundColor: "#81c784", // green 300.
                    borderColor: "#81c784",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Apr",
                    data: store.aprs,
                    backgroundColor: "#43a047", // green 600.
                    borderColor: "#43a047",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false

                },
                {
                    label: "May",
                    data: store.mays,
                    backgroundColor: "#1b5e20", // green 900.
                    borderColor: "#1b5e20",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jun",
                    data: store.juns,
                    backgroundColor: "#ff8a65", // deep orange 300.
                    borderColor: "#ff8a65",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jul",
                    data: store.juls,
                    backgroundColor: "#f4511e", // deep orange 600.
                    borderColor: "#f4511e",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Aug",
                    data: store.augs,
                    backgroundColor: "#bf360c", // deep orange 900.
                    borderColor: "#bf360c",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Sep",
                    data: store.seps,
                    backgroundColor: "#a1887f", // brown 300.
                    borderColor: "#a1887f",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Oct",
                    data: store.octs,
                    backgroundColor: "#6d4c41", // brown 600.
                    borderColor: "#6d4c41",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Nov",
                    data: store.novs,
                    backgroundColor: "#3e2723", // brown 900.
                    borderColor: "#3e2723",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Dec",
                    data: store.decs,
                    backgroundColor: "#64b5f6", // blue 300.
                    borderColor: "#64b5f6",
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
    <div class="chart">
        <div class="chart-title">
            <h2 class="bevan-regular">Monthly temperatures</h2>
            <p class="roboto-serif four">Average monthly temperatures for each month, 2005 - 2023</p>
        </div>
        <canvas id="monthly-temps-chart"></canvas>
        <div class="chart-caption roboto-serif four">Data from the Mt. Washington Observatory, a weather station located on the mountain's summit. The Observatory monitors weather year round.</div>
    </div>
</template>

<style scoped>
</style>