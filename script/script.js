"use strict"

function updateClock() {
    const hoursEl = document.querySelector("#hours");
    const minutesEl = document.querySelector("#minutes");
    const secondsEl = document.querySelector("#seconds");


const date = new Date();
hoursEl.textContent = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
minutesEl.textContent = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
secondsEl.textContent = date.getSeconds() < 10 ? "0" + date.getSeconds(): date.getSeconds();

    setTimeout(updateClock, 1000);
}

updateClock();



