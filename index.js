//After DOMContentLoaded, invoke functions in elements.js.

import {
    resultsYears,
    resultsWinters,
    resultsSprings,
    resultsSummers,
    resultsFalls
} from "./app/elements.js";

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    resultsYears();
    resultsWinters();
    resultsSprings();
    resultsSummers();
    resultsFalls();
});