console.log("Let's get this party started!");
const apiKey = "qqYI01dHSVwItchM7kIyUh8TURAkct7o";

async function getData(gifSearched) {
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifSearched}&limit=1`
  );
  arrItems = response.data.data;
  for (let items of arrItems) {
    appendGif(items.images.downsized_large.url);
  }
}

function getUserInput() {
  let form = document.querySelector("#form");
  form.addEventListener("submit", function (e) {
    let userInput = document.querySelector("#gifSearched");
    e.preventDefault();
    getData(userInput.value);
  });
}

function appendGif(gifURL) {
  let container = document.getElementById("gifContainer");
  let gifImage = document.createElement("img");
  gifImage.classList.add("GIFS");
  gifImage.src = gifURL;
  gifImage.alt = "GIF";
  container.append(gifImage);
}

function removeGifs() {
  let button = document.querySelector("#destroyGifs");
  button.addEventListener("click", function () {
    let gifs = document.querySelectorAll("img");
    for (let gif of gifs) {
      gif.remove();
    }
  });
}

getUserInput();
removeGifs();
