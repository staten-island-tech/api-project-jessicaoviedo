import '../styles/style.css'
import { DOM } from './dom'
import { URL } from './url'


document.querySelector('#app').innerHTML = `
  <div>
    <h1>harry potter characters!</h1>
  </div>
`

/* URL.forEach((character) => {
  DOM.display.insertAdjacentHTML(
    "beforeend",
    `
    <div class="character-card">
    <h2 class="character-name">${character.name}</h2>
    <div class= "img-container">
    <div class= "img-overlay">
    </div>
    <img src="${character.img}"
    alt="character" class= "character-img">
    </div>
    <h3 class= "character-house">house: ${character.house}</h3>
    </div>
    `
  )
})
 */

const gryffindor = document.getElementById("gryffindor-btn");
gryffindor.addEventListener("click", function () {
  display.innerHTML = "";
  const houseFilter = URL.filter(
    (character) => character.house === "Gryffindor",
  );
  houseFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="character-card">
      <h2 class="character-name">${element.name}</h2>
      <div class="img-container">
      <div class="img-overlay">
      </div>
      <img src="${element.img}"
      alt="character in gryffindor house" class="character.img">
      </div>
      <h3 class="character-house">${element.house}</h3>
      </div>
      `
    )
  })
  }
)

const slytherin = document.getElementById("slytherin-btn");
slytherin.addEventListener("click", function () {
  display.innerHTML = "";
  const houseFilter = URL.filter(
    (character) => character.house === "Slytherin",
  );
  houseFilter.forEach((element) => {
    display.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="character-card">
      <h2 class="character-name">${element.name}</h2>
      <div class="img-container">
      <div class="img-overlay">
      </div>
      <img src="${element.img}"
      alt="character in gryffindor house" class="character.img">
      </div>
      <h3 class="character-house">${element.house}</h3>
      </div>
      `
    )
  })
  }
)


