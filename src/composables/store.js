import { reactive } from "vue";
import { monthlyTemps } from "../data/temps.js";

export const store = reactive({
    jans: [],
    febs: [],
    mars: [],
    aprs: [],
    mays: [],
    juns: [],
    juls: [],
    augs: [],
    seps: [],
    octs: [],
    novs: [],
    decs: [],
    winter: [],
    spring: [],
    summer: [],
    fall: [],
    winterAvg: 0,
    springAvg: 0,
    summerAvg: 0,
    fallAvg: 0,
    getSeasonal: function() {
        store.winter = [...store.decs, ...store.jans, ...store.febs];
        store.spring = [...store.mars, ...store.aprs, ...store.mays];
        store.summer = [...store.juns, ...store.juls, ...store.augs];
        store.fall = [...store.seps, ...store.octs, ...store.novs];

        // 19 years * 3 months each season = 57
        store.winterAvg = (store.winter.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / 57).toFixed(1);

        store.springAvg = (store.spring.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / 57).toFixed(1);

        store.summerAvg = (store.summer.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / 57).toFixed(1);

        store.fallAvg = (store.fall.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        ) / 57).toFixed(1);
    },
    years: [
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
    ],
    getMonthly: function() {
        store.years.forEach((year) => {
            store.jans.push(monthlyTemps[year].jan.avgMonthly);
            store.febs.push(monthlyTemps[year].feb.avgMonthly);
            store.mars.push(monthlyTemps[year].mar.avgMonthly);
            store.aprs.push(monthlyTemps[year].apr.avgMonthly);
            store.mays.push(monthlyTemps[year].may.avgMonthly);
            store.juns.push(monthlyTemps[year].jun.avgMonthly);
            store.juls.push(monthlyTemps[year].jul.avgMonthly);
            store.augs.push(monthlyTemps[year].aug.avgMonthly);
            store.seps.push(monthlyTemps[year].sep.avgMonthly);
            store.octs.push(monthlyTemps[year].oct.avgMonthly);
            store.novs.push(monthlyTemps[year].nov.avgMonthly);
            store.decs.push(monthlyTemps[year].dec.avgMonthly);
        });
        store.getSeasonal();
    }
});