const URL =
  "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object that we can use
    document.getElementById("api-response").textContent = data;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
