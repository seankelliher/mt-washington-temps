function resetNav() {
    "use strict";

    //Get buttons. Convert to "real" array.
    const buttons = document.querySelectorAll("button");
    const buttonsArray = Array.from(buttons);

    //Reset button color to default.
    buttonsArray.forEach(function (btn) {
        btn.style.background = "#F5F5F5"; //grey 100.
    });
}

function monitorNav() {
    "use strict";

    //Get nav.
    const nav = document.querySelector("nav");

    //Monitor it for clicks.
    nav.addEventListener("click", function (event) {

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

        //Invoke above function, resets button background color.
        resetNav();

        //Modify the button's background color.
        if (buttonText === "annual") {
            button.style.background = "#29b6F6"; //light blue 400.
        }
        if (buttonText === "winter") {
            button.style.background = "#CFD8DC"; //blue grey 100.
        }
        if (buttonText === "spring") {
            button.style.background = "#9CCC65"; //light green 400.
        }
        if (buttonText === "summer") {
            button.style.background = "#FFE082"; //amber 200.
        }
        if (buttonText === "fall") {
            button.style.background = "#D7CCC8"; //brown 100.
        }

        //Display the matching section.
        const sect = document.getElementById(`${buttonText}`);
        sect.style.display = "flex";
    });
}

export {monitorNav};