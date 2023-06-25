import View from "./view.js";

class homeView extends View {
  parentElement = document.querySelector(".results");
  returnHandler(handler) {
    document
      .querySelector(".nav-title")
      .addEventListener("click", function (e) {
        e.preventDefault();
        handler();

        document.querySelector(".nav-title").innerHTML = "Where in the world?";
        document.querySelector(".filt-head").innerHTML = "Filter by region";
        document.querySelector(".main-display").style.display = "block";
      });
  }
  darkmodeHandler() {
    document.querySelector("body").addEventListener("click", function (e) {
      // e.preventDefault();
      if (!e.target.closest(".nav-mode-switch")) return;

      document.querySelector("body").classList.toggle("night");
      document.querySelector(".lnr-moon").classList.toggle("rotate-full");

      document.querySelector(".theme-toggler").innerHTML == "Light mode"
        ? (document.querySelector(".theme-toggler").innerHTML = "Dark mode")
        : (document.querySelector(".theme-toggler").innerHTML = "Light mode");
    });
  }
}

export default new homeView();
