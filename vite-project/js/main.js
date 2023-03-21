import '../styles/style.css'
let input = document.querySelector(".query")
let form = document.querySelector(".search")
let p = document.querySelector(".display")

form.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  display(inputVal)
});

async function callAPI(value0) {
  let data = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${value0}`);
  let returned = await data.json();
  return returned;
};


async function display(value) {
  let data = await callAPI(value);
  console.log(data)
  data.data.forEach(element => {
    p.insertAdjacentHTML(
      "afterend",
      `<div class="art-card">
      <h2 class="art-title">${element.title}</h2>
      </div>
    
      `
    )
  });
}









