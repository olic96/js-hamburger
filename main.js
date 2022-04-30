// 1. Metto l'id hamburger_menu in una variabile
const hamburgerMenu = document.getElementById("hamburger_menu");

// 2. Metto l'id open-menu in una variabile e creo un evento click che renda tale classe visibile
const openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", function() {
    hamburgerMenu.style = "display: block";
});

// 3. Metto l'id close-menu in una variabile e creo un evento click che renda tale classe non visibile
const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", function() {
    hamburgerMenu.style = "display: none";
});
      