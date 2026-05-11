const apiKey = VjxnLzi4JDl2AGOMBGBrFoVMbkss0Lfe;

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

fetchBtn.addEventListener("click", async () => {

  const searchTerm = searchInput.value;

  gifContainer.innerHTML = "";

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12&rating=g`;

  try {

    
    const response = await fetch(endpoint);

    const data = await response.json();

    const images = data.data.map((gif) => {
      return gif.images.original.url;
    });

    console.log(images);

    images.forEach((imageUrl) => {
      gifContainer.innerHTML += `
        <div class="col-3 mb-3">
          <img src="${imageUrl}" class="img-fluid">
        </div>
      `;
    });

  } catch (error) {
    console.log("Error fetching gifs:", error);
  }

});
