import View from "./view.js";

class SearchView extends View {
  parentElement = document.querySelector(".results");

  searchHandler(handler) {
    document
      .querySelector(".searchbox")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        handler();
        document.querySelector(".nav-title").innerHTML =
          "<-- Go back to Main Page";
      });
  }
}
export default new SearchView();
