const DOMSelectors = {
  grid: document.querySelector(".comic-grid"),
  search: document.querySelector(".search"),
  submit: document.querySelector(".submit"),
  dropDown: document.querySelector(".drop-down"),
};
const key = `bf4202f8db0e27501960cf60881777d4`;

const dropdown = async function() {
  try {
    const character = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${key}`;
    const response = await fetch(character);
    const data = await response.json();

    data.results.array.forEach((character) => {
      DOMSelectors.dropDown.insertAdjacentElement(
        "beforeend",
        `<a href=#${character.name}>${character.name}</a>`
      )
    });
  }catch (error) {
    console.log(error);
  }
};

// const init = async function () {
//   try {
//     const character = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${key}`;
//     const response = await fetch(character);
//     const data = await response.json();
//     const query = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${key}`;
//     data.results.forEach((comic) => {
//       DOMSelectors.grid.insertAdjacentHTML(
//         "beforeend",
//         `<div class="movie-card">
//       <div class="movie-card-front">
//         <img
//           src="https://image.tmdb.org/t/p/w300/${comic.character}"
//           alt=""
//           class="poster"
//         />
//       </div>
//       <div class="movie-card-back">
//         <h3 class="movie-card-header">${movie.original_title}</h3>
//         <div class="score-box">
//           <p class="user-score">Community Score</p>
//           <p class="user-score">${movie.vote_average}</p>
//         </div>

//         <div class="release-box">
//           <p class="release-date">Released</p>
//           <p class="release-date">${movie.release_date}</p>
//         </div>

//         <div class="movie-genres">
//           <div>${genreArr}</div>
//         </div>
//       </div>
//     </div>`
//       );
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
dropdown();
