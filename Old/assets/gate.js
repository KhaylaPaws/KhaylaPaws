document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector("dialog");
    const wrapper = document.getElementById("wrapper");

    const gateDone = sessionStorage.getItem("gateCompleted");

    if (!gateDone) {
        // First time this session → show dialog + gates
        document.querySelectorAll(".gate").forEach(el => {
            el.hidden = false;
            el.required = true;
        });

        dialog.addEventListener("close", () => {
            wrapper.style.display = "flex";
            sessionStorage.setItem("gateCompleted", "true");
        });

    } else {
        // Gate already completed → hide dialog entirely
        dialog.style.display = "none";   // removes it visually
        dialog.setAttribute("hidden", ""); // ensures CSS-level hiding

        wrapper.style.display = "flex";
    }
});
