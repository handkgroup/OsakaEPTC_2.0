"use strict";

const closeButton = document.querySelector(".close-btn");
const adSide = document.querySelector(".banner-wrapper-right")


function closeBanner() {
    adSide.style.display = "none";
}


closeButton.addEventListener("click", closeBanner);


function showBanner() {
    adSide.style.display = "block";
}


setInterval(() => {
    if (adSide.style.display === "none") {
        showBanner();
    }
}, 10000);