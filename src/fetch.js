const url = "https://api-rxb0.onrender.com/api/get";

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response) {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}

export default fetchData;
