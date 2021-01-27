const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        console.log(nav)
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .8}s`
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

// document.querySelector(".nav-page").onclick = function () {
//         location.href = "NavBars/horizontalnav/index.html";
//     };



navSlide();




// const app = () => {
//     navSlide();
//     navSlide();
//     navSlide();
//     navSlide();
// }
