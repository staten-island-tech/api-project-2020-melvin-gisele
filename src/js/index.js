
const DOMSelectors = {
  grid: document.querySelector(".comic-grid"),
  nextButton: document.querySelector(".next"),
  previousButton: document.querySelector(".previous"),
  nextButtonB: document.querySelector(".next-bottom"),
  previousButtonB: document.querySelector(".previous-bottom"),
  grid: document.querySelector(".comic-grid"),
  searchArea: document.getElementById("search-area"),
}
const publickey = `bf4202f8db0e27501960cf60881777d4`;
const hash = `59273d4a371e6ef2bd7d6a729260d486`;
let offset = 0;

const listen = function () {
  DOMSelectors.searchArea.addEventListener("keyup", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    let total = 100;
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {  
        const publickey = `bf4202f8db0e27501960cf60881777d4`;
        const hash = `59273d4a371e6ef2bd7d6a729260d486`;
        const character = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publickey}&hash=${hash}&limit=30&nameStartsWith=${searchParams}&offset=${offset}`
        console.log(character)
        offset = 0;
      try{
        const response = await fetch(character);
        const data = await response.json();
        const char = data.data.results;
        total = data.data.total;
        console.log(char);
        if (total > 0) {
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
      } else {
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `
         <div class="comic">
           <h3 class="not-found">No Character Found. Check your spelling and Try again!</h3>
         </div>`
        );
      }
      } catch (error) {
        console.log(error);
      }
    }
    if (searchParams == "") {
      defaultPage();
    } else {
    searchQuery();
    DOMSelectors.nextButton.addEventListener("click", function (e) {
      if(offset+30 > total) {

      } else {
      DOMSelectors.grid.innerHTML = "";
      offset += 30;
      searchQuery();
      }
    });
    DOMSelectors.previousButton.addEventListener("click", function (e) {
      if (offset == 0) {
        offset = 0;
      } else {
        DOMSelectors.grid.innerHTML = "";
        offset -= 30;
        searchQuery();
      }
    });
    DOMSelectors.nextButtonB.addEventListener("click", function (e) {
      if(offset+30 > total) {

      } else {
      DOMSelectors.grid.innerHTML = "";
      offset += 30;
      searchQuery();
      }
    });
    DOMSelectors.previousButtonB.addEventListener("click", function (e) {
      if (offset == 0) {
        offset = 0;
      } else {
        DOMSelectors.grid.innerHTML = "";
        offset -= 30;
        searchQuery();
      }
    });
    }
  });
};

const defaultPage = async function() {
  //NextPage();
  try {
    const character = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publickey}&hash=${hash}&limit=30&offset=${offset}`;
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
  }catch (error) {
    console.log(error);
  }
};

defaultPage();
listen();
//NextPage();

