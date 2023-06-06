import View from "./view.js";

class detailView extends View {
  parentElement = document.querySelector(".results");
  _data;
  render(data) {
    this._data = data;
    const markup = this.prevMarkup();

    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup(data1) {
    return `<div class="detail-view">
    <div class="country-detail">
      <img class="country-img" src=${data1.countryflag} />
      <div class="country-info">
        <div class="info-head">${data1.name}</div>
        <div class="info-detail">
          <div class="cont-native">
            Native Name:&nbsp<span class="cont-native cti-value"
              >${
                data1.nativeName[Object.keys(data1.nativeName)[0]].common
              }</span
            >
          </div>
          <div class="cont-population">
            Population:&nbsp<span class="cont-pop cti-value"
              >${data1.population}</span
            >
          </div>
          <div class="cont-region">
            Region:&nbsp<span class="cont-region cti-value">${
              data1.region
            }</span>
          </div>
          <div class="cont-subregion">
            Sub Region:&nbsp<span class="cont-subregion cti-value"
              >${data1.subregion}</span
            >
          </div>
          <div class="cont-capital">
            Capital:&nbsp<span class="cont-capital cti-value">${
              data1.capital
            }</span>
          </div>
          <div class="cont-toplevel">
            Top Level Domain:&nbsp<span class="cont-toplevel cti-value"
              >${data1.tld}</span
            >
          </div>
          <div class="cont-currency">
            Currencies:&nbsp<span class="cont-currency cti-value"
              >${data1.currencies[Object.keys(data1.currencies)[0]].name}</span
            >
          </div>
          <div class="cont-languages">
            Languages:&nbsp<span class="cont-domain cti-value">${
              data1.languages[Object.keys(data1.nativeName)[0]]
            }</span>
          </div>
         
          </div>
        </div>
      </div>
    </div>`;
  }

  // clear() {
  //   this.parentElement.innerHTML = "";
  // }
  detailHandler(handler) {
    this.parentElement.addEventListener("click", function (e) {
      e.preventDefault();

      if (!e.target && !e.target.closest(".country")) return;

      const name = e.target
        .closest(".country")
        .querySelector(".cont-name").innerHTML;
      document.querySelector(".nav-title").innerHTML =
        "<-- Go back to Main Page";
      document.querySelector(".main-display").style.display = "none";
      console.log(name);
      handler(name);
    });
  }
}

export default new detailView();

// document.querySelector(".search-content").style.display = "block";
