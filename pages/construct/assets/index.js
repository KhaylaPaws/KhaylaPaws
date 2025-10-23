document.querySelectorAll(".noscript").forEach(el => el.style.display = "none");
document.querySelectorAll(".onscript").forEach(el => el.style.display = "block");

if (window.location.hash !== '#show-nsfw') {
    window.location.href = 'index.html';
}
