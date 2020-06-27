import {years, winters, springs, summers, falls} from "./groups.js";

function buildSection(yearOrSeason, key, sectionId) {
    const section = document.getElementById(sectionId);

    const year = document.createElement("div");
    year.className = "year";

    const yearName = document.createElement("div");
    yearName.className = "year-name";

    const time = document.createElement("time");
    time.textContent = key.substring(1, 5);

    yearName.appendChild(time);
    year.appendChild(yearName);

    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const degree = String.fromCharCode(176);
    figcaption.textContent = `${yearOrSeason[key]}` + degree + `F`;

    const test = Number(`${yearOrSeason[key]}`);

    //85% space available.
    //18% minimum needed for XX.X deg F characters. 2% padding right.
    //65% available space for graph / 51.4 highest avg temp.
    //Each degree gets 1.26% of space.
    figure.style.width = (test * 1.26) + 18 + `%`;

    figure.appendChild(figcaption);
    year.appendChild(figure);
    section.appendChild(year);
    return;
}

function resultsYears() {
    Object.keys(years).forEach(function (key) {
        buildSection(years, key, "annual");
    });
}

function resultsWinters() {
    Object.keys(winters).forEach(function (key) {
        buildSection(winters, key, "winter");
    });
}

function resultsSprings() {
    Object.keys(springs).forEach(function (key) {
        buildSection(springs, key, "spring");
    });
}

function resultsSummers() {
    Object.keys(summers).forEach(function (key) {
        buildSection(summers, key, "summer");
    });
}

function resultsFalls() {
    Object.keys(falls).forEach(function (key) {
        buildSection(falls, key, "fall");
    });
}

export {
    resultsYears,
    resultsWinters,
    resultsSprings,
    resultsSummers,
    resultsFalls
};