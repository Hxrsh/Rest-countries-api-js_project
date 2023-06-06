export default class View {
  parentElement;
  _data;
  render(data) {
    this._data = data;
    const markup = this.prevMarkup();

    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  prevMarkup() {
    return this._data.map(this.generateMarkup).join("");
  }
  generateMarkup(data1) {
    return `<div class="country">
      <img class="cont-img" src=${data1.countryflag} />
      <div class="cont-name">${data1.name}</div>
      <div class="cont-info">
        <div class="cont-population">
          Population:&nbsp<span class="cont-pop ct-value">${data1.population}</span>
        </div>
        <div class="cont-region">
          Region:&nbsp<span class="cont-region ct-value">${data1.region}</span>
        </div>
        <div class="cont-capital">
          Capital:&nbsp<span class="cont-capital ct-value">${data1.capital}</span>
        </div>
      </div>
     </div>`;
  }

  clear() {
    this.parentElement.innerHTML = "";
  }
}

// export const generateMarkup = function (data) {
//   document.querySelector(".results").insertAdjacentHTML("afterbegin", html);
// };
