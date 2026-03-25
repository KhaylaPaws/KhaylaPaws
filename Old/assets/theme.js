document.addEventListener("DOMContentLoaded", () => {
    const themes = document.getElementById("themes");

    // reveal the theme selector
    themes.hidden = false;
    themes.style.display = "flex";

    // handle .current class toggling + session storage
    document.querySelectorAll('#themes input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => {

            // remove .current from all labels
            document.querySelectorAll('#themes label').forEach(label => {
                label.classList.remove('current');
            });

            // add .current to the selected one
            input.parentElement.classList.add('current');

            // sessionStorage logic
            if (input.id === "auto") {
                sessionStorage.removeItem("theme");
            } else if (input.id === "light") {
                sessionStorage.setItem("theme", "light");
            } else if (input.id === "dark") {
                sessionStorage.setItem("theme", "dark");
            }
        });
    });
});
