
// const DOMSelectors = {
//   grid: document.querySelector(".comic-grid"),
//   searchForm: document.getElementById("search-form"),
//   searchArea: document.getElementById("search-area"),
// };

// const listen = function () {
//   DOMSelectors.searchForm.addEventListener("keydown", function (e) {
//     e.preventDefault();
//     DOMSelectors.grid.innerHTML = "";
//     const searchParams = DOMSelectors.searchArea.value;
//     const searchQuery = async function () {
//       const publickey = `bf4202f8db0e27501960cf60881777d4`;
//       const hash = `59273d4a371e6ef2bd7d6a729260d486`;
//       const character = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publickey}&hash=${hash}&limit=30&nameStartsWith=${searchParams};`
//       try{
//         const response = await fetch(character);
//         const data = await response.json();
//         const char = data.data.results;
//         console.log(char);
//       } catch (error) {
//         console.log(err)
//       }
//     }
//     //search values
//     //async function
//   });
// };
// listen();

// //export { listen };