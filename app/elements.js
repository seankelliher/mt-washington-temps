//Import the "group" objects from groups.js.
//Loop through them to create elements on page.

import {years, winters, springs, summers, falls} from "./groups.js";

function buildSection(yearOrSeason, key, sectionId) {

    //Retrieve the correct section.
    const section = document.getElementById(sectionId);

    //Create elements needed.
    const figure = document.createElement("figure");
    const year = document.createElement("span");
    const bar = document.createElement("span");
    const temp = document.createElement("span");

    //Assign class names.
    year.className = "year";
    bar.className = "bar";
    temp.className = "temp";

    //Degree symbol (needed below).
    const degree = String.fromCharCode(176);

    //Assign text.
    year.textContent = key.substring(1, 5);
    temp.textContent = `${yearOrSeason[key]}` + degree + `F`;

    //Set the bar width.
    //70% space available.
    //70 / 51.4 highest avg temp.
    //Each degree gets 1.36% of space.
    const barWidth = Number(`${yearOrSeason[key]}`);
    bar.style.width = (barWidth * 1.36) + `%`;

    //Append elements.
    figure.appendChild(year);
    figure.appendChild(bar);
    figure.appendChild(temp);
    section.appendChild(figure);
}

function resultsAnnuals() {
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
    resultsAnnuals,
    resultsWinters,
    resultsSprings,
    resultsSummers,
    resultsFalls,
};