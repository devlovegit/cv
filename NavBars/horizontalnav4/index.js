const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

let menuOpen = false;
function openMenu() {
    if (menuOpen) {
        navLinks.classList.toggle('--open');
        menuOpen = true;
    } else {
        navLinks.classList.toggle('--open');
        menuOpen = false;
    }
}
burger.addEventListener("click", openMenu);
