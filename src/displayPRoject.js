import get from "./get.js";
// import { hideLoading } from "./togalLoading.js";
const Acontainer = get('.project-under');

const displayProject = (data) => {
    console.log(data);
    // hideLoading();
    Acontainer.innerHTML = data.map((red) => {
        const { name, img, link } = red;
        return ` <div class="project-number-container">
                    <a href="${link}" class="project-under-container">
                        <div class="under-image">
                            <img src="${img}" alt="">
                        </div>
                        <p class="name">${name}</p>
                    </a>
                </div>`
    }).join(' ');

}
export default displayProject;