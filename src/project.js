import fetchData from "./fetch.js";
import get from "./get.js";
import displayProject from "./displayPRoject.js";
import darkModeFunction from "./darkmode.js";
// const url = "https://api-rxb0.onrender.com/api/get";
const url = "https://www.maratho.me/api/get";
// fetchData(url);
// const pageLoading = get('.page-loading');
const getdata = async (url) => {
    // pageLoading.style.display = "none";
    const data = await fetchData(url);
    displayProject(data);
}
getdata(url);
darkModeFunction();
const navbarBtn = get('#open-navbar');
const closeNavbar = get('#close-navbar');
function navbarAnimation() {
    gsap.to('.project-navbar ul li', {
        delay: 1,
        duration: 1,
        x: 0,
        stagger: 0.08,
        onComplete: function () {
            navbarBtn.style.display = "none";
            closeNavbar.style.display = "block";
        }
    })
}
const bar = get('.bar');
navbarBtn.addEventListener('click', () => {
    navbarAnimation();
})
closeNavbar.addEventListener('click', () => {
    gsap.to('.project-navbar ul li', {
        delay: 1,
        duration: 1,
        x: 300,
        stagger: 0.2,
        onComplete: function () {
            navbarBtn.style.display = "block";
            closeNavbar.style.display = "none";
        }
    })
})

