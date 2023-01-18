const URL = "https://bobsburgers-api.herokuapp.com/characters/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into JSON object that we can use
    console.log(data[0]);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
