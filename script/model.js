export const state = {
  country: [],
  searchResults: [],
  regionResults: [],
};

export const loadPageResults = async function () {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    if (!data) return;
    state.searchResults = data.map((element) => {
      return {
        countryflag: element?.flags?.svg,
        name: element?.name?.common,
        region: element?.region,
        capital: element?.capital,
        population: element?.population.toLocaleString("en-GB"),
        nativeName: element?.name?.nativeName,
        subregion: element?.subregion,
        tld: element?.tld,
        currencies: element?.currencies,
        languages: element?.languages,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCountry = function (query) {
  state.country = state.searchResults.filter((el) => {
    // if (el.name.toLowerCase() == query.toLowerCase()) {
    //   return el;
    // }
    if (el.name.toLowerCase().includes(query.toLowerCase())) {
      return el;
    }
    for (let [key, value] of Object.entries(state.country)) {
      console.log(key, value);
    }
  });
};

export const searchRegion = function (region) {
  state.regionResults = state.searchResults.filter((el) => {
    if (el.region.toLowerCase() == region.toLowerCase()) {
      return el;
    }
  });
};

export const detailCont = function (country) {
  state.country = state.searchResults.filter((el) => {
    if (el.name.toLowerCase() == country.toLowerCase()) {
      return el;
    }
  });
};

// export const fetchData = async function (country) {
//   try {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${country}`
//     );
//     const data = await response.json();

//     const [countryData] = data;
//     console.log("backend", countryData);
//     state.country = {
//       countryflag: countryData.flags.svg,
//       name: countryData.name.common,
//       region: countryData.region,
//       capital: countryData.capital,
//       population: countryData.population,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
