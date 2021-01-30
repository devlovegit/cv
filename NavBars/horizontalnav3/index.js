// const navBarLinks = document.querySelector('.nav-bar__links');
const navBtn = document.querySelector('.nav-bar__btn');
const navBarLinks = document.querySelector('.nav-bar__links');
const main = document.querySelector('.main');
let menuOpen = false;

navBtn.addEventListener('click', () => {
    if (!menuOpen) {
        navBtn.classList.add('--open');
        navBarLinks.classList.remove('--hidden');
        main.classList.add('--sepia');
        menuOpen = true;


    } else {
        navBtn.classList.remove('--open');
        navBarLinks.classList.add('--hidden');
        main.classList.remove('--sepia');
        menuOpen = false;
    }
});


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// tl.to(".nav-bar__links", { y: "100%", duration: 1.5, delay: 0.5 });

tl.to(".ptext", { y: "30%", duration: 1, stagger: 0.55 });

// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
