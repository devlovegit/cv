

function pushAboutToMain() {
    const about = document.getElementById('about');
    const aboutText = document.querySelector('.about-text');
    const main = document.querySelector('.main');


    about.addEventListener("click", () => {
        aboutText.classList.toggle("active");
        main.classList.toggle("hidden");
    })


}

pushAboutToMain()
