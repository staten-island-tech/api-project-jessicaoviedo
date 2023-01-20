import "./style.css";
import "./index.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>api project so far</h1>
  </div>
`;

const URL = "https://api.disneyapi.dev/characters/309";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object that we can use
    document.getElementById("api-response").innerHTML = `
    <div class="info-card">
    <h2 class="disney-character">${data.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    
    <img src="${data.imageUrl}"
    alt="characters" class= "character-img">
    </div>
    <h3 class= "character-films">films: ${data.films}</h3>
    </div>`;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
