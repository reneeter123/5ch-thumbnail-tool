"use strict";

const convertBoard = document.getElementById("convertBoard");
const convertText = document.getElementById("convertText");
const convertButton = document.getElementById("convertButton");
const resultText = document.getElementById("resultText");

convertButton.onclick = () => {
    const convertBoardValue = convertBoard.value
    const convertTextValue = convertText.value

    if (convertBoardValue && convertTextValue) {
        resultText.value = "https://thumb1.5ch.net/thumbnails/" + convertBoardValue + "/" + btoa(convertTextValue) + ".png";
    } else {
        new bootstrap.Modal(document.getElementById("errorModal"), { backdrop: "static" }).show();
    }
};