const get = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        return element
    } else {
        throw Error(`Plz chaek ${element}`);
    }
}

export default get;