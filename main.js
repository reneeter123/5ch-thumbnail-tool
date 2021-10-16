"use strict";

const convertServer = document.getElementById("convertServer");
const convertText = document.getElementById("convertText");
const convertButton = document.getElementById("convertButton");
const resultText = document.getElementById("resultText");

convertButton.onclick = () => {
    const convertServerValue = convertServer.value
    const convertTextValue = convertText.value

    if (convertServerValue && convertTextValue) {
        resultText.value = "https://thumb1.5ch.net/thumbnails/" + convertServerValue + "/" + btoa(convertTextValue) + ".png";
    } else {
        new bootstrap.Modal(document.getElementById("errorModal"), { backdrop: "static" }).show();
    }
};