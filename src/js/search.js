

const DOMSelectors = {
  grid: document.querySelector(".movie-grid"),
  searchForm: document.getElementById("search-form"),
  searchArea: document.getElementById("search-area"),
};

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    //search values
    //async function
  });
};
listen();
