import get from "./get.js";
const Acontainer = get('.a-container');
const displayProject = (data) => {
    console.log(data);
    Acontainer.innerHTML = data.map((red) => {
        const { name, img, link } = red;
        return `<a href="${link}"
                        class="single-project">
                        <img class="single-project-img" src="${img}" alt="">
                        <h4 class="single-project-name">${name}</h4>
                    </a>`
    }).join(' ');

}
export default displayProject;