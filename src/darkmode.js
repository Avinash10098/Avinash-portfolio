import get from "./get.js";
const main = get('main');
const darkMode = get('.dark-mode');
const sectionProject = get('.section-project');
const darkModeFunction = () => {
    darkMode.addEventListener('click', () => {
        main.classList.toggle('black');
        sectionProject.classList.toggle('addBlack');
    })
}

export default darkModeFunction;
