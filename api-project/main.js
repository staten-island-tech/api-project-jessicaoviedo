import "./style.css";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
  </div>
`;

const URL = "https://hp-api.onrender.com/api/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object that we can use
    console.log(data.character);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
