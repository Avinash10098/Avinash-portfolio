import fetchData from "./fetch.js";
import get from "./get.js";
import displayProject from "./displayPRoject.js";
const url = "https://api-rxb0.onrender.com/api/get";
// fetchData(url);
const getdata = async (url) => {
    const data = await fetchData(url);
    displayProject(data);
}
getdata(url);
