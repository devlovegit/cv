const navSlide = () => {
    const nav = document.getElementById("mySideNav");
    const burger = document.getElementById("burger");
    const main = document.getElementById("main");
    const body = document.getElementById("myBody");

    burger.addEventListener('click', () =>{

        main.classList.toggle("active");
        nav.classList.toggle("active-sideNav");
        burger.classList.toggle("burger-active");
    });


}

navSlide();
