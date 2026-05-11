const apiKey = "VjxnLzi4JDl2AGOMBGBrFoVMbkss0Lfe";

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

fetchBtn.addEventListener("click", async () => {

  const searchTerm = searchInput.value;

  if (!searchTerm) {
    alert("Type something to search!");
    return;
  }

  gifContainer.innerHTML = "";

  const endpoint =
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12&rating=g`;

  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);

  data.data.forEach(gif => {
    gifContainer.innerHTML += `
      <div class="col-3 mb-3">
        <img src="${gif.images.original.url}" class="img-fluid">
      </div>
    `;
  });

});
