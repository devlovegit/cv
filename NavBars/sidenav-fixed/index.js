function pushToMain() {
    const about = document.getElementById('about');
    const more = document.getElementById('more');

    const aboutText = document.querySelector('.about-text');
    const moreText = document.querySelector('.more-text');

    const placehold = document.querySelector('.placehold');

    const navArr = [about, more];
    const textArr = [aboutText, moreText];


    for (let i = 0; i < navArr.length; i++) {
        navArr[i].addEventListener("click", () => {
            let currMenuItem = navArr[i];
            console.log(currMenuItem);
                for (let j = 0; j < textArr.length; j++) {
                    let content = textArr[j];
                    let hiddenToggle = content.classList.toggle("hidden");
                    if (currMenuItem == about) {
                        textArr[0].classList.toggle("hidden");
                    } else if (currMenuItem == more) {
                        textArr[1].classList.toggle("hidden");
                    }
                }
        });
    }
}

pushToMain()
