<script setup>
import { monthlyTemps } from "../data/temps.js";
import { yearsList } from "../composables/store.js";
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";

const years = [
    "y2005",
    "y2006",
    "y2007",
    "y2008",
    "y2009",
    "y2010",
    "y2011",
    "y2012",
    "y2013",
    "y2014",
    "y2015",
    "y2016",
    "y2017",
    "y2018",
    "y2019",
    "y2020",
    "y2021",
    "y2022",
    "y2023"
];

const jans = ref([]);
const febs = ref([]);
const mars = ref([]);
const aprs = ref([]);
const mays = ref([]);
const juns = ref([]);
const juls = ref([]);
const augs = ref([]);
const seps = ref([]);
const octs = ref([]);
const novs = ref([]);
const decs = ref([]);

function getMonthly() {
    years.forEach((year) => {
        jans.value.push(monthlyTemps[year].jan.avgMonthly);
        febs.value.push(monthlyTemps[year].feb.avgMonthly);
        mars.value.push(monthlyTemps[year].mar.avgMonthly);
        aprs.value.push(monthlyTemps[year].apr.avgMonthly);
        mays.value.push(monthlyTemps[year].may.avgMonthly);
        juns.value.push(monthlyTemps[year].jun.avgMonthly);
        juls.value.push(monthlyTemps[year].jul.avgMonthly);
        augs.value.push(monthlyTemps[year].aug.avgMonthly);
        seps.value.push(monthlyTemps[year].sep.avgMonthly);
        octs.value.push(monthlyTemps[year].oct.avgMonthly);
        novs.value.push(monthlyTemps[year].nov.avgMonthly);
        decs.value.push(monthlyTemps[year].dec.avgMonthly);
    });
}

getMonthly();

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
                    data: jans.value,
                    backgroundColor: "#1e88e5", // blue 600.
                    borderColor: "#1e88e5",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Feb",
                    data: febs.value,
                    backgroundColor: "#0d47a1", // blue 900.
                    borderColor: "#0d47a1",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Mar",
                    data: mars.value,
                    backgroundColor: "#81c784", // green 300.
                    borderColor: "#81c784",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Apr",
                    data: aprs.value,
                    backgroundColor: "#43a047", // green 600.
                    borderColor: "#43a047",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false

                },
                {
                    label: "May",
                    data: mays.value,
                    backgroundColor: "#1b5e20", // green 900.
                    borderColor: "#1b5e20",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jun",
                    data: juns.value,
                    backgroundColor: "#ff8a65", // deep orange 300.
                    borderColor: "#ff8a65",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: false
                },
                {
                    label: "Jul",
                    data: juls.value,
                    backgroundColor: "#f4511e", // deep orange 600.
                    borderColor: "#f4511e",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                },
                {
                    label: "Aug",
                    data: augs.value,
                    backgroundColor: "#bf360c", // deep orange 900.
                    borderColor: "#bf360c",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                },
                {
                    label: "Sep",
                    data: seps.value,
                    backgroundColor: "#a1887f", // brown 300.
                    borderColor: "#a1887f",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                },
                {
                    label: "Oct",
                    data: octs.value,
                    backgroundColor: "#6d4c41", // brown 600.
                    borderColor: "#6d4c41",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                },
                {
                    label: "Nov",
                    data: novs.value,
                    backgroundColor: "#3e2723", // brown 900.
                    borderColor: "#3e2723",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                },
                {
                    label: "Dec",
                    data: decs.value,
                    backgroundColor: "#64b5f6", // blue 300.
                    borderColor: "#64b5f6",
                    borderWidth: 1,
                    tension: 0.3,
                    hidden: true
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

onMounted(()=> {
    createMonthsChart();
});


</script>

<template>
    <div class="chart">
        <canvas id="monthly-temps-chart"></canvas>
        <div class="chart-caption">Average monthly temperatures (&deg;F).</div>
    </div>
</template>

<style scoped>
</style>