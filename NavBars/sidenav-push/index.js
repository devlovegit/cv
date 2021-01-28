// /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
//   document.getElementById("mySideNav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
//   document.body.style.backgroundColor = "white";
// }

const navSlide = () => {
    const nav = document.getElementById("mySideNav");
    const openButton = document.getElementById("openButton");
    const main = document.getElementById("main");

    openButton.addEventListener('click', () =>{

        nav.classList.toggle("sideNav");
        main.style.marginLeft = "250px";
        document.body.style.background = "rgba(0,0,0,0.4)";
    })


}

navSlide();
