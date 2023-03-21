const URL = "https://hp-api.onrender.com/api/characters";

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.getElementById("api-response").textContent = data.house;
    } catch (error) {
        console.log(error)
    }
    
}
getData(URL);

export {URL};