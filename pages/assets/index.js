const accessState = localStorage.getItem("access");
const isIndex = location.pathname.endsWith("index.html") || location.pathname === "/";

// DOM references
const noAccessScreen = document.getElementById("no-access-screen");
const ageGate = document.getElementById("age-gate");
const fallbackToggle = document.getElementById("fallback-toggle");
const hardBlock = document.getElementById("hard-block");

// Hide fallback toggle immediately if JS is running
fallbackToggle.style.display = "none";

// Access granted
if (accessState === "true") {
    noAccessScreen.style.display = "none";
    hardBlock.style.display = "none";
}

// Access not granted
else {
    if (!isIndex) {
        location.href = "index.html";
    }

    noAccessScreen.style.display = "block";
    ageGate.style.display = "block";
    hardBlock.style.display = "block";

    const allowNSFW = document.getElementById("allow-nsfw");
    if (allowNSFW) {
        allowNSFW.addEventListener("click", () => {
            localStorage.setItem("access", "true");
            location.reload();
        });
    }
}
