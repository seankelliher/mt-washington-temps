// After DOMContentLoaded, invoke functions in elements.js.

import {
    resultsAnnuals,
    resultsWinters,
    resultsSprings,
    resultsSummers,
    resultsFalls,
} from "./app/elements.js";
import {monitorNav} from "./app/nav.js";

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    resultsAnnuals();
    resultsWinters();
    resultsSprings();
    resultsSummers();
    resultsFalls();
    monitorNav();

    // Get first button ("annual"). Simulate click.
    const first = document.querySelector("button");
    first.click();
});