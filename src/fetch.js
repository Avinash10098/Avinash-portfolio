const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response) {
            const data = await response.json();
            // console.log(data.data[0]);
            return data.data;
        }
    } catch (err) {
        console.log(err);
    }
}

export default fetchData;
