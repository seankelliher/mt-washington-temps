//After DOMContentLoaded, invoke functions in elements.js.

import {
    resultsAnnuals,
    resultsWinters,
    resultsSprings,
    resultsSummers,
    resultsFalls
} from "./app/elements.js";

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    resultsAnnuals();
    resultsWinters();
    resultsSprings();
    resultsSummers();
    resultsFalls();
});