import View from "./view.js";

class filterRegion extends View {
  parentElement = document.querySelector(".results");

  filterHandler(handler) {
    document
      .querySelector(".search-filter")
      .addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".filter-dropdown").classList.toggle("drop");
        document.querySelector(".lnr-chevron-down").classList.toggle("rotate");
        if (!e.target.classList.contains("reg")) return;

        handler(e.target.innerHTML);
        document.querySelector(".nav-title").innerHTML =
          "<-- Go back to Main Page";
        document.querySelector(".filt-head").innerHTML = e.target.innerHTML;
      });
  }
}

export default new filterRegion();
