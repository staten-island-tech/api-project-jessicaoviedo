import "./style.css";
import "./index.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>api project so far</h1>
  </div>
`;

const URL = "https://dog.ceo/api/breeds/image/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object that we can use
    document.getElementById("api-response").innerHTML = data.hound;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
