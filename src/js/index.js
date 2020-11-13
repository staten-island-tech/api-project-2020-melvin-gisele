const DOMSelectors = {
  grid: document.querySelector(".comic-grid"),
};
const publickey = `bf4202f8db0e27501960cf60881777d4`;
const hash = `59273d4a371e6ef2bd7d6a729260d486`;
const character = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publickey}&hash=${hash}&nameStartsWith=a`;

const defaultPage = async function() {
  try {
    const response = await fetch(character);
    const data = await response.json();
    const char = data.data.results;
    console.log(char);
    char.forEach((comic) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-card">
       <div class="comic-front">
         <img
           src="${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}"
           alt=""
           class="poster"
         />
       </div>
       <div class="comic-back">
         <h3 class="comic-header">${comic.name}</h3>
         <div class="pages">
           <p class="comic-count">Number of Comics:${comic.comics.available}</p>
         </div>

         <div class="date">
           <p class="modified">Modified:</p>
           <p class="modified">${comic.modified}</p>
         </div>

         <div class="comic-description">
           <div>${comic.description}</div>
         </div>
       </div>
     </div>`
      );
    });
  }catch (error) {
    console.log(error);
  }
};

defaultPage();
