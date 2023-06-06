import View from "./view.js";
class emptyView extends View {
  parentElement = document.querySelector(".results");
  render() {
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkup() {
    return `<div class="emptyError">
      <p>Please search again!</p>
     </div>`;
  }
}
export default new emptyView();
