function resetNav() {
    "use strict";

    // Get buttons. Convert to "real" array.
    const buttons = document.querySelectorAll("button");
    const buttonsArray = Array.from(buttons);

    // Reset button color to default.
    buttonsArray.forEach(function (btn) {
        if (btn.classList.contains("selected")) {
            btn.classList.remove("selected");
        }
    });
}

function monitorNav() {
    "use strict";

    // Get nav.
    const nav = document.querySelector("nav");

    // Monitor it for clicks.
    nav.addEventListener("click", function (event) {

        // Get sections. Convert to "real" array.
        const sects = document.querySelectorAll("section");
        const sectsArray = Array.from(sects);

        // Hide all sections.
        sectsArray.forEach(function (sect) {
            sect.style.display = "none";
        });

        // Get the clicked button's textContent. Make lower case.
        const button = event.target;
        const buttonText = button.textContent.toLowerCase();

        // Invoke above function, resets button background color.
        resetNav();

        event.target.classList.add("selected");

        // Display the matching section.
        const sect = document.getElementById(`${buttonText}`);
        sect.style.display = "flex";
    });
}

export {monitorNav};
