// Sélection du menu et du toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

// Au clic sur le burger, on ajoute/enlève la classe "active"
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
