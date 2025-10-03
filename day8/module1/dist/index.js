"use strict";
var display = document.getElementById("display-area");
var button = document.querySelectorAll("button");
var input = "";
button.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.textContent;
        if (value === "c") {
            input = "";
            display.value = "";
        }
        else if (value === "=") {
            try {
                input = eval(input).toString();
                display.value = input;
            }
            catch (_a) {
                display.value = "Error";
                input = "";
            }
        }
        else {
            input += value;
            display.value = input;
        }
    });
});
