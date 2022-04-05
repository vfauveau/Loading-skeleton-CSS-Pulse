const pulse = document.querySelector(".pulse-button");

pulse.addEventListener("click", (z) => {
    if (pulse.classList.contains("pulse-active")) {
        pulse.classList.remove("pulse-active");
    } else {
        pulse.classList.add("pulse-active");
    }
});

