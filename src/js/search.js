
const DOMSelectors = {
  grid: document.querySelector(".comic-grid"),
  searchArea: document.getElementById("search-area"),
};

const listen = function () {
  DOMSelectors.searchArea.addEventListener("keyup", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    console.log(searchParams)
    const searchQuery = async function () { 
      try{
        const publickey = `bf4202f8db0e27501960cf60881777d4`;
        const hash = `59273d4a371e6ef2bd7d6a729260d486`;
        const character = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publickey}&hash=${hash}&limit=30&nameStartsWith=${searchParams};`
        const response = await fetch(character);
        const data = await response.json();
        const char = data.data.results;
        console.log(char);
        char.forEach((comic) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="movie-card">
           <div class="comic-front">
           </div>
           <div class="comic">
             <h3 class="comic-header">${comic.name}</h3>
             <img
             src="${comic.thumbnail.path}/portrait_large.${comic.thumbnail.extension}"
             alt=""
             class="poster"
              />
             <div class="pages">
               <p class="comic-count">Number of Comics:${comic.comics.available}</p>
             </div>
    
             <div class="date">
               <p class="modified">Modified:${comic.modified}</p>
             </div>
    
             <div class="comic-description">
               <div>${comic.description}</div>
             </div>
           </div>
         </div>`
          );
        });
      } catch (error) {
        console.log(err)
      }
    }
    searchQuery();
  });
  
};
listen();

export { listen };