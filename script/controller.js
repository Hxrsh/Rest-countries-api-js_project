"use strict";
import * as model from "./model.js";
import CountryView from "./countryView.js";
import SearchView from "./searchView.js";
import searchView from "./searchView.js";
import homeView from "./homeView.js";
import emptyView from "./emptyView.js";
import filterRegion from "./filterView.js";
import detailView from "./detailView.js";

const controlSearch = function () {
  const query = document.querySelector(".searchbar").value;
  if (!query) return;

  document.querySelector(".searchbar").value = "";
  model.searchCountry(query);
  searchView.clear();
  searchView.render(model.state.country);

  if (model.state.country == "") {
    emptyView.render();
  }
};

const controlReturnHome = function () {
  CountryView.render(model.state.searchResults);
};

const controlRegion = function (data) {
  model.searchRegion(data);
  filterRegion.clear();
  filterRegion.render(model.state.regionResults);
};

const controlDetail = function (country) {
  model.detailCont(country);
  detailView.clear();
  detailView.render(model.state.country);

  console.log(model.state.country);
};
// CALLS./...////////

const init = async function () {
  await model.loadPageResults();
  CountryView.render(model.state.searchResults);
  SearchView.searchHandler(controlSearch);
  homeView.returnHandler(controlReturnHome);
  homeView.darkmodeHandler();
  filterRegion.filterHandler(controlRegion);
  detailView.detailHandler(controlDetail);
};
init();
