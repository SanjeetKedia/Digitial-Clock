"use strict";

const labelClock = document.querySelector(".clock");
setInterval(() => {
  const now = new Date();
  labelClock.textContent = new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format();
}, 1000);
