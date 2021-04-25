function monitorNav() {
    "use strict";

    //Get nav.
    const nav = document.querySelector("nav");

    //Monitor it for clicks.
    nav.addEventListener("click", function(event) {

        //Get sections. Convert to "real" array.
        const sects = document.querySelectorAll("section");
        const sectsArray = Array.from(sects);

        //Hide all sections.
        sectsArray.forEach(function (sect) {
            sect.style.display = "none";
        });

        //Get the clicked button's textContent. Make lower case.
        const button = event.target;
        const buttonText = button.textContent.toLowerCase();

        //Modify the button's background color.
        if (buttonText === "annual") {
            button.style.background = "#659DBF"; //medium blue.
        }
        if (buttonText === "winter") {
            button.style.background = "#B8CAD9"; //grey.
        }
        if (buttonText === "spring") {
            button.style.background = "#9CA64E"; //medium green.
        }
        if (buttonText === "summer") {
            button.style.background = "#F2E18D"; //amber.
        }
        if (buttonText === "fall") {
            button.style.background = "#A4A69C"; //brownish grey.
        }

        //Display the matching section.
        const sect = document.getElementById(`${buttonText}`);
        sect.style.display = "flex";
    });
}

export {monitorNav};